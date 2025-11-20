const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const axios = require('axios');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const path = require('path');

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_WIDTH = 4096;
const MAX_HEIGHT = 4096;

// Allowed image formats
const ALLOWED_FORMATS = ['jpeg', 'jpg', 'png'];

// Request timeout in milliseconds (30 seconds)
const REQUEST_TIMEOUT = 30000;

// ============================================================================
// AWS S3 CLIENT INITIALIZATION
// ============================================================================
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});


// ============================================================================
// IMAGE DOWNLOAD FUNCTION
// ============================================================================
// Downloads the image from the URL
async function downloadImage(url) {
  console.log(`Downloading: ${url}`);

  try {
    // All URLs are already validated by the workflow to be GitHub-hosted
    const headers = {
      'User-Agent': 'GitHub-Image-Upload-Bot/1.0'
    };

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
      maxContentLength: MAX_FILE_SIZE,
      maxBodyLength: MAX_FILE_SIZE,
      timeout: REQUEST_TIMEOUT,
      maxRedirects: 2,
      headers,

      validateStatus: (status) => status >= 200 && status < 300
    });

    const buffer = Buffer.from(response.data);

    if (buffer.length > MAX_FILE_SIZE) {
      throw new Error(`Image size (${(buffer.length / 1024 / 1024).toFixed(2)}MB) exceeds maximum allowed size (${MAX_FILE_SIZE / 1024 / 1024}MB)`);
    }

    console.log(`✓ Downloaded ${(buffer.length / 1024).toFixed(2)}KB`);
    return buffer;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;

      if (status === 400 || status === 404) {
        if (url.includes('private-user-images.githubusercontent.com') ||
          url.includes('user-images.githubusercontent.com')) {

          const hasJWT = url.includes('jwt=');
          if (hasJWT) {
            throw new Error('HTTP 400: Image URL expired or invalid. GitHub private image URLs expire within 5-15 minutes. Please copy a fresh URL directly from the PR comment and ensure the workflow runs quickly after posting the /img-bot comment.');
          } else {
            throw new Error('HTTP 400: Bad request. The image URL may be invalid or malformed. Ensure the URL is fresh and copied directly from a PR comment or description.');
          }
        }
        throw new Error(`HTTP ${status}: Bad request - invalid URL or request format`);
      }
    } else {
      throw new Error(`Download failed: ${error.message}`);
    }
  }
}

// ============================================================================
// IMAGE VALIDATION FUNCTION
// ============================================================================
// Validates that the downloaded image is actually a valid image
async function validateImage(buffer) {
  console.log('Validating image...');

  try {
    const metadata = await sharp(buffer).metadata();

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
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      throw new Error(`Image dimensions ${metadata.width}x${metadata.height} exceed maximum ${MAX_WIDTH}x${MAX_HEIGHT}`);
    }

    await sharp(buffer).toBuffer();

    console.log('✓ Image validation passed');
    return metadata;
  } catch (error) {
    throw new Error(`Image validation failed: ${error.message}`);
  }
}

// ============================================================================
// FILENAME GENERATION FUNCTION
// ============================================================================
// Generates a unique filename for the uploaded image
// Format: timestamp_uuid_hash_originalname.ext
function generateUniqueFilename(originalUrl, format) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  const uniqueId = uuidv4().split('-')[0];

  const hash = crypto.createHash('md5').update(originalUrl).digest('hex').substring(0, 8);

  let originalName = 'image';
  try {
    const urlPath = new URL(originalUrl).pathname;
    const basename = path.basename(urlPath, path.extname(urlPath));

    if (basename && basename !== '' && basename.length < 50) {
      originalName = basename.replace(/[^a-zA-Z0-9-_]/g, '-');
    }
  } catch (e) {
  }

  return `${timestamp}_${uniqueId}_${hash}_${originalName}.${format}`;
}

// ============================================================================
// S3 UPLOAD FUNCTION
// ============================================================================
// Uploads the image buffer to AWS S3
async function uploadToS3(buffer, filename, contentType) {
  console.log(`Uploading to S3: ${filename}`);

  try {
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `images/${filename}`,
        Body: buffer,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000'
      }
    });

    await upload.done();

    const region = process.env.AWS_REGION;
    const bucket = process.env.AWS_S3_BUCKET;
    const publicUrl = `https://${bucket}.s3.${region}.amazonaws.com/images/${filename}`;

    console.log(`✓ Uploaded to S3: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    throw new Error(`S3 upload failed: ${error.message}`);
  }
}

// ============================================================================
// MAIN IMAGE PROCESSING FUNCTION
// ============================================================================
// Processes the image from the URL
async function processImage(url) {
  try {
    const buffer = await downloadImage(url);

    const metadata = await validateImage(buffer);

    const filename = generateUniqueFilename(url, metadata.format);

    const s3Url = await uploadToS3(
      buffer,
      filename,
      `image/${metadata.format}`
    );

    return {
      success: true,
      originalUrl: url,
      s3Url: s3Url,
      filename: filename,
      metadata: {
        format: metadata.format,
        width: metadata.width,
        height: metadata.height,
        size: `${(buffer.length / 1024).toFixed(2)}KB`
      }
    };
  } catch (error) {
    // We don't throw the error here so other images can still be processed
    return {
      success: false,
      originalUrl: url,
      error: error.message
    };
  }
}

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================
// Reads URLs from file and processes them sequentially
async function main() {
  const fs = require('fs');
  let urls;

  try {
    const rawData = fs.readFileSync('urls.json', 'utf8');
    urls = JSON.parse(rawData);

    if (!Array.isArray(urls)) {
      throw new Error('urls.json does not contain an array');
    }

    console.log(`Processing ${urls.length} image(s)...`);
  } catch (error) {
    console.error('Failed to read/parse urls.json:', error.message);
    // Output error result so workflow can parse and report it
    console.log('\nRESULTS:', JSON.stringify([{
      success: false,
      originalUrl: 'unknown',
      error: `Failed to read/parse urls.json: ${error.message}`
    }], null, 2));
    process.exit(1);
  }

  // Process each URL sequentially
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] Processing: ${url.substring(0, 60)}...`);

    const result = await processImage(url);
    results.push(result);

    if (result.success) {
      console.log(`✓ Success: ${result.filename}`);
    } else {
      console.error(`✗ Failed: ${result.error}`);
    }
  }

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
  console.error('Fatal error:', error);
  // Output empty results so workflow can still parse and report the error
  console.log('\nRESULTS:', JSON.stringify([{
    success: false,
    originalUrl: 'unknown',
    error: `Fatal error: ${error.message}`
  }], null, 2));
  process.exit(1);
});
