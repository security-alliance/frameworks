const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const axios = require('axios');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_WIDTH = 4096;
const MAX_HEIGHT = 4096;
const MAX_PIXELS = 16777216;
const MAX_COMPRESSION_RATIO = 50;

// Allowed image formats
const ALLOWED_FORMATS = ['jpeg', 'jpg', 'png'];

// Request timeout in milliseconds (30 seconds)
const REQUEST_TIMEOUT = 30000;

// Maximum images per request (rate limiting)
const MAX_IMAGES_PER_REQUEST = 10;

// Allowed Content-Type prefixes for image responses
const ALLOWED_CONTENT_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

// Only allowed hostname for GitHub PR comment images
const ALLOWED_HOSTNAME = 'private-user-images.githubusercontent.com';

// ============================================================================
// AWS S3 CLIENT INITIALIZATION
// ============================================================================
const s3Client = new S3Client({
  region: process.env.AWS_REGION
});

// ============================================================================
// URL SANITIZATION HELPER
// ============================================================================
// Redacts sensitive information from URLs for logging
function sanitizeUrlForLogging(url) {
  try {
    const urlObj = new URL(url);
    const sensitiveParams = ['jwt', 'token', 'key', 'secret', 'auth', 'signature', 'sig'];

    for (const param of sensitiveParams) {
      if (urlObj.searchParams.has(param)) {
        urlObj.searchParams.set(param, '[REDACTED]');
      }
    }

    // Also check for JWT-like patterns in any parameter
    for (const [key, value] of urlObj.searchParams.entries()) {
      if (value && value.length > 50 && /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(value)) {
        urlObj.searchParams.set(key, '[REDACTED_JWT]');
      }
    }

    return urlObj.toString();
  } catch {
    // If URL parsing fails, do basic redaction
    return url.replace(/([?&](jwt|token|key|secret|auth|signature|sig)=)[^&]+/gi, '$1[REDACTED]');
  }
}

// ============================================================================
// IMAGE DOWNLOAD FUNCTION
// ============================================================================
// Downloads the image from the URL
async function downloadImage(url) {
  const safeLogUrl = sanitizeUrlForLogging(url);
  console.log(`Downloading: ${safeLogUrl.substring(0, 100)}...`);

  // Validate URL hostname before making request
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.toLowerCase() !== ALLOWED_HOSTNAME) {
      throw new Error(`Invalid hostname. Only ${ALLOWED_HOSTNAME} URLs are accepted.`);
    }
    if (urlObj.protocol !== 'https:') {
      throw new Error('Only HTTPS URLs are allowed.');
    }
    if (!urlObj.searchParams.has('jwt')) {
      throw new Error('URL missing required JWT token. Please copy the full image URL from GitHub.');
    }
  } catch (error) {
    if (error.message.includes('Invalid hostname') ||
      error.message.includes('Only HTTPS') ||
      error.message.includes('JWT token')) {
      throw error;
    }
    throw new Error(`Invalid URL format: ${error.message}`);
  }

  try {
    const headers = {
      'User-Agent': 'GitHub-Image-Upload-Bot/1.0',
      'Accept': 'image/*'
    };

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
      maxContentLength: MAX_FILE_SIZE,
      maxBodyLength: MAX_FILE_SIZE,
      timeout: REQUEST_TIMEOUT,
      maxRedirects: 0,
      headers,
      validateStatus: (status) => status >= 200 && status < 300,
      beforeRedirect: (options, { headers: responseHeaders }) => {
        throw new Error('Redirects are not allowed for security reasons');
      }
    });

    // Validate Content-Type header to ensure we're receiving an image
    const contentType = response.headers['content-type'];
    if (contentType) {
      const normalizedContentType = contentType.toLowerCase().split(';')[0].trim();
      const isValidImageType = ALLOWED_CONTENT_TYPES.some(
        allowed => normalizedContentType === allowed
      );

      if (!isValidImageType) {
        throw new Error(`Invalid Content-Type: ${normalizedContentType}. Expected: ${ALLOWED_CONTENT_TYPES.join(', ')}`);
      }
      console.log(`Content-Type: ${normalizedContentType}`);
    } else {
      throw new Error('Missing Content-Type header in response');
    }

    const buffer = Buffer.from(response.data);

    if (buffer.length > MAX_FILE_SIZE) {
      throw new Error(`Image size (${(buffer.length / 1024 / 1024).toFixed(2)}MB) exceeds maximum allowed size (${MAX_FILE_SIZE / 1024 / 1024}MB)`);
    }

    if (buffer.length === 0) {
      throw new Error('Downloaded image is empty');
    }

    console.log(`✓ Downloaded ${(buffer.length / 1024).toFixed(2)}KB`);
    return buffer;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;

      if (status === 400 || status === 404) {
        throw new Error(
          'Image URL expired or invalid (HTTP ' + status + '). ' +
          'GitHub image URLs expire in ~5 minutes. ' +
          'Please: 1) Refresh the PR page, 2) Copy a fresh image URL, 3) Run /img-bot again immediately.'
        );
      }
      throw new Error(`HTTP ${status}: ${error.response.statusText || 'Request failed'}`);
    }

    if (error.code === 'ECONNABORTED') {
      throw new Error('Download timed out. Please try again.');
    }

    throw new Error(`Download failed: ${error.message}`);
  }
}

// ============================================================================
// IMAGE VALIDATION FUNCTION
// ============================================================================
// Validates that the downloaded buffer is a valid image
async function validateImage(buffer) {
  console.log('Validating image...');

  try {
    const sharpInstance = sharp(buffer, {
      limitInputPixels: MAX_PIXELS,
      sequentialRead: true,
      failOn: 'error'
    });

    const metadata = await sharpInstance.metadata();

    console.log('Image metadata:', {
      format: metadata.format,
      width: metadata.width,
      height: metadata.height,
      size: `${(buffer.length / 1024).toFixed(2)}KB`
    });

    // Validate format
    if (!ALLOWED_FORMATS.includes(metadata.format)) {
      throw new Error(`Invalid format: ${metadata.format}. Allowed: ${ALLOWED_FORMATS.join(', ')}`);
    }

    // Validate dimensions (prevents overly large images)
    if (!metadata.width || !metadata.height) {
      throw new Error('Unable to determine image dimensions');
    }

    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      throw new Error(`Image dimensions ${metadata.width}x${metadata.height} exceed maximum ${MAX_WIDTH}x${MAX_HEIGHT}`);
    }

    if (metadata.width < 1 || metadata.height < 1) {
      throw new Error('Invalid image dimensions');
    }

    // Check total pixel count
    const totalPixels = metadata.width * metadata.height;
    if (totalPixels > MAX_PIXELS) {
      throw new Error(`Image pixel count ${totalPixels.toLocaleString()} exceeds maximum ${MAX_PIXELS.toLocaleString()}`);
    }

    const channels = metadata.channels || 4;
    const bitsPerChannel = metadata.depth === 'uchar' ? 8 : (metadata.depth === 'ushort' ? 16 : 8);
    const bytesPerPixel = channels * (bitsPerChannel / 8);
    const estimatedUncompressedSize = metadata.width * metadata.height * bytesPerPixel;
    const compressionRatio = estimatedUncompressedSize / buffer.length;

    console.log(`Compression ratio: ${compressionRatio.toFixed(1)}:1`);

    if (compressionRatio > MAX_COMPRESSION_RATIO) {
      throw new Error(
        `Suspicious compression ratio (${compressionRatio.toFixed(1)}:1) exceeds maximum allowed (${MAX_COMPRESSION_RATIO}:1). ` +
        `This may indicate a decompression bomb.`
      );
    }

    console.log('✓ Image validation passed');
    return metadata;
  } catch (error) {
    const safeMessage = error.message
      .replace(/\/[^\s]+/g, '[PATH]')
      .substring(0, 200);
    throw new Error(`Image validation failed: ${safeMessage}`);
  }
}

// ============================================================================
// EXIF STRIPPING FUNCTION
// ============================================================================
// Strips EXIF metadata from images
async function stripExifMetadata(buffer, format) {
  console.log('Stripping EXIF metadata...');

  try {
    const sharpInstance = sharp(buffer, {
      limitInputPixels: MAX_PIXELS,
      sequentialRead: true
    });

    let processed = sharpInstance.rotate();

    if (format === 'png') {
      processed = processed.png({
        compressionLevel: 9,
        effort: 10
      });
    } else {
      processed = processed.jpeg({
        quality: 95,
        mozjpeg: true
      });
    }

    const strippedBuffer = await processed.toBuffer();

    console.log(`✓ EXIF stripped. Original: ${(buffer.length / 1024).toFixed(2)}KB, New: ${(strippedBuffer.length / 1024).toFixed(2)}KB`);
    return strippedBuffer;
  } catch (error) {
    console.warn(`Warning: Could not strip EXIF metadata: ${error.message}`);
    return buffer;
  }
}

// ============================================================================
// FILENAME GENERATION FUNCTION
// ============================================================================
// Generates a unique filename for the uploaded image
function generateUniqueFilename(originalUrl, format) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  // Use full UUID for better collision resistance
  const uniqueId = uuidv4();
  const randomBytes = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('sha256')
    .update(originalUrl)
    .update(randomBytes)
    .update(Date.now().toString())
    .digest('hex')
    .substring(0, 12);

  const sanitizedFormat = format.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const safeFormats = ['jpeg', 'jpg', 'png'];
  if (!safeFormats.includes(sanitizedFormat)) {
    throw new Error(`Invalid format for filename: ${format}`);
  }

  return `${timestamp}_${uniqueId}_${hash}.${sanitizedFormat}`;
}

// ============================================================================
// S3 UPLOAD FUNCTION
// ============================================================================
// Uploads the image buffer to AWS S3
async function uploadToS3(buffer, filename, contentType) {
  console.log(`Uploading to S3: ${filename}`);

  try {
    const bucket = process.env.AWS_S3_BUCKET;
    const region = process.env.AWS_REGION;

    if (!bucket || !region) {
      throw new Error('AWS_S3_BUCKET and AWS_REGION environment variables are required');
    }

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: bucket,
        Key: `images/${filename}`,
        Body: buffer,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000, immutable',
        ContentDisposition: `inline; filename="${filename}"`,
        Metadata: {
          'uploaded-by': 'img-bot',
          'upload-timestamp': new Date().toISOString()
        }
      }
    });

    await upload.done();

    const publicUrl = `https://${bucket}.s3.${region}.amazonaws.com/images/${filename}`;

    console.log(`✓ Uploaded to S3: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    const safeMessage = error.message
      .replace(/arn:[^\s]+/gi, '[ARN]')
      .replace(/[a-z0-9-]+\.s3\.[a-z0-9-]+\.amazonaws\.com/gi, '[S3_ENDPOINT]')
      .replace(/s3:\/\/[^\s]+/gi, '[S3_PATH]')
      .substring(0, 200);

    throw new Error(`S3 upload failed: ${safeMessage}`);
  }
}

// ============================================================================
// MAIN IMAGE PROCESSING FUNCTION
// ============================================================================
// Processes a single image: download, validate, strip EXIF, upload
async function processImage(url, index) {
  const safeLogUrl = sanitizeUrlForLogging(url).substring(0, 80) + '...';

  try {
    const buffer = await downloadImage(url);

    const metadata = await validateImage(buffer);

    const strippedBuffer = await stripExifMetadata(buffer, metadata.format);

    const filename = generateUniqueFilename(url, metadata.format);

    const s3Url = await uploadToS3(
      strippedBuffer,
      filename,
      `image/${metadata.format}`
    );

    return {
      success: true,
      originalUrl: safeLogUrl,
      s3Url: s3Url,
      filename: filename,
      metadata: {
        format: metadata.format,
        width: metadata.width,
        height: metadata.height,
        size: `${(strippedBuffer.length / 1024).toFixed(2)}KB`
      }
    };
  } catch (error) {
    // We don't throw the error here so other images can still be processed
    return {
      success: false,
      originalUrl: safeLogUrl,
      error: error.message.substring(0, 300)
    };
  }
}

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================
// Reads URLs from file and processes them sequentially
async function main() {
  let urls;

  try {
    const urlsPath = process.env.URLS_FILE_PATH || 'urls.json';

    if (!fs.existsSync(urlsPath)) {
      throw new Error(`URLs file not found: ${urlsPath}`);
    }

    const rawData = fs.readFileSync(urlsPath, 'utf8');
    urls = JSON.parse(rawData);

    if (!Array.isArray(urls)) {
      throw new Error('URLs file does not contain an array');
    }

    if (urls.length === 0) {
      throw new Error('URLs array is empty');
    }

    if (urls.length > MAX_IMAGES_PER_REQUEST) {
      throw new Error(
        `Too many images (${urls.length}). Maximum allowed per request: ${MAX_IMAGES_PER_REQUEST}`
      );
    }

    for (const url of urls) {
      if (typeof url !== 'string' || !url.startsWith('https://')) {
        throw new Error('Invalid URL format in input array');
      }
    }

    console.log(`Processing ${urls.length} image(s)...`);
  } catch (error) {
    console.error('Failed to read/parse URLs file:', error.message);
    // Output error result so workflow can parse and report it
    console.log('\nRESULTS:', JSON.stringify([{
      success: false,
      originalUrl: 'unknown',
      error: `Failed to read/parse URLs: ${error.message.substring(0, 200)}`
    }], null, 2));
    process.exit(1);
  }

  // Process each URL sequentially
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const safeLogUrl = sanitizeUrlForLogging(url).substring(0, 60);
    console.log(`\n[${i + 1}/${urls.length}] Processing: ${safeLogUrl}...`);

    const result = await processImage(url, i);
    results.push(result);

    if (result.success) {
      console.log(`✓ Success: ${result.filename}`);
    } else {
      console.error(`✗ Failed: ${result.error}`);
    }
  }

  // Summary
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  console.log(`\n========================================`);
  console.log(`Summary: ${successCount} succeeded, ${failCount} failed`);
  console.log(`========================================`);

  // Always output RESULTS, even if empty (for workflow parsing)
  console.log('\nRESULTS:', JSON.stringify(results, null, 2));

  // Exit with code 1 only if all images failed
  const allFailed = results.length > 0 && results.every(r => !r.success);
  if (allFailed) {
    console.error('\n✗ All images failed to process');
    process.exit(1);
  }
}

// Run main function and handle any unhandled errors
main().catch(error => {
  console.error('Fatal error:', error.message);
  // Output empty results so workflow can still parse and report the error
  console.log('\nRESULTS:', JSON.stringify([{
    success: false,
    originalUrl: 'unknown',
    error: `Fatal error: ${error.message.substring(0, 200)}`
  }], null, 2));
  process.exit(1);
});
