#!/usr/bin/env node

/**
 * Build script to fetch tags from MDX frontmatter
 * Only extracts tags from files that are in the sidebar (respecting branch-based filtering)
 */

const fs = require('fs');
const path = require('path');

const workspaceRoot = process.cwd();
const pagesDir = path.join(workspaceRoot, 'docs', 'pages');
const vocsConfigPath = path.join(workspaceRoot, 'vocs.config.ts');

// Simple frontmatter parser
function parseFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      return {};
    }
    
    const frontmatterText = frontmatterMatch[1];
    const data = {};
    
    const lines = frontmatterText.split('\n');
    let currentKey = '';
    let isInArray = false;
    let currentArray = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') continue;
      
      // Handle array items
      if (trimmedLine.startsWith('- ')) {
        if (isInArray) {
          currentArray.push(trimmedLine.substring(2).trim());
        }
        continue;
      }
      
      // Handle key: value pairs
      if (trimmedLine.includes(':')) {
        // If we were building an array, save it
        if (isInArray && currentKey) {
          data[currentKey] = currentArray;
          currentArray = [];
          isInArray = false;
        }
        
        const [key, ...valueParts] = trimmedLine.split(':');
        const value = valueParts.join(':').trim();
        currentKey = key.trim();
        
        if (value === '') {
          // This might be the start of an array
          isInArray = true;
          currentArray = [];
        } else {
          // Single value (remove quotes if present)
          data[currentKey] = value.replace(/^["']|["']$/g, '');
          isInArray = false;
        }
      }
    }
    
    // Save any remaining array
    if (isInArray && currentKey) {
      data[currentKey] = currentArray;
    }
    
    return data;
  } catch (error) {
    console.warn(`Failed to parse frontmatter from ${filePath}:`, error);
    return {};
  }
}

function normalizeSlashes(p) {
  return p.split(path.sep).join('/');
}

function computeHref(filePath) {
  // Map docs/pages/<path>.mdx to /<path> (index.mdx collapses to directory route)
  const relFromPages = normalizeSlashes(path.relative(pagesDir, filePath));
  const withoutExt = relFromPages.replace(/\.mdx$/i, '');
  const noIndex = withoutExt.replace(/\/index$/i, '');
  return `/${noIndex}`;
}

// Extract URL segment from a link (e.g., '/community-management/overview' -> 'community-management')
function extractUrlSegment(link) {
  const parts = link.split('/').filter(Boolean);
  return parts[0] || '';
}

// Extract allowed routes from sidebar config
function getAllowedRoutes() {
  // Check if we're on main branch
  const isMainBranch = process.env.VERCEL_GIT_COMMIT_REF === 'main';
  console.log(`Branch check: ${isMainBranch ? 'main (filtering dev: true pages)' : 'develop (including all pages)'}`);

  let allowedRoutes = undefined;
  if (fs.existsSync(vocsConfigPath)) {
    try {
      const cfg = fs.readFileSync(vocsConfigPath, 'utf8');
      
      // Extract all link and dev pairs by scanning line-by-line
      // This approach handles nested objects better than complex regex
      const lines = cfg.split('\n');
      const routes = new Set();
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const linkMatch = line.match(/link:\s*(['"])(.*?)\1/);
        
        if (linkMatch) {
          const link = linkMatch[2];
          
          // Check for dev: true on the same line or nearby lines (within 3 lines before)
          let hasDev = false;
          for (let j = Math.max(0, i - 3); j <= i; j++) {
            if (lines[j].includes('dev:') && lines[j].includes('true')) {
              hasDev = true;
              break;
            }
          }
          
          // On main branch: skip pages with dev: true
          // On other branches: include all pages
          if (isMainBranch && hasDev) {
            continue;
          }
          
          routes.add(link);
        }
      }
      
      if (routes.size > 0) allowedRoutes = routes;
    } catch (e) {
      console.warn('Failed to parse vocs.config.ts:', e.message);
    }
  }

  return allowedRoutes;
}

// Scan directory for MDX files and extract tags (only from sidebar files)
function getAllTagsFromMDX(docsDir) {
  const tags = new Set();
  const pageTagsMap = {};
  
  // Get allowed routes from sidebar configuration
  const allowedRoutes = getAllowedRoutes();
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.mdx')) {
          // Use computeHref for consistent path generation
          const urlPath = computeHref(fullPath);
          
          // Only process files that are in the sidebar (if we have allowed routes)
          if (allowedRoutes && allowedRoutes.size > 0) {
            if (!allowedRoutes.has(urlPath)) {
              continue;
            }
          }
          
          const frontmatter = parseFrontmatter(fullPath);
          if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
            // Deduplicate tags for this page
            const uniqueTags = [...new Set(frontmatter.tags)];
            
            // Add to global tags set
            uniqueTags.forEach(tag => tags.add(tag));
            
            pageTagsMap[urlPath] = uniqueTags;
          }
        }
      }
    } catch (error) {
      console.warn(`Failed to scan directory ${dir}:`, error);
    }
  }
  
  scanDirectory(docsDir);
  
  console.log(`Total tags found: ${tags.size}`);
  
  return { allTags: Array.from(tags).sort(), pageTagsMap };
}

// Extract section mappings from vocs.config.ts
function extractSectionMappings() {
  try {
    const vocsConfigContent = fs.readFileSync(vocsConfigPath, 'utf-8');
    
    const sectionMappings = {};
    
    // Extract all sections with their text and items
    // Pattern: text: 'SectionName', ... items: [ ... { link: '/url/path' } ... ]
    // We need to find sections and extract the URL segment from their first link
    
    // Strategy: Find all text properties followed by items array
    // Then find the first link in those items to determine the URL segment
    const lines = vocsConfigContent.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for section definitions with text and items
      const textMatch = line.match(/text:\s*['"`]([^'"`]+)['"`]/);
      if (!textMatch) continue;
      
      const sectionTitle = textMatch[1];
      
      // Skip top-level container sections that don't map to actual URLs
      if (['Introduction', 'Frameworks', 'About this'].includes(sectionTitle)) {
        continue;
      }
      
      // Look ahead to see if this has an items array
      let hasItems = false;
      let firstLink = null;
      
      // Search the next 20 lines for items array and first link
      for (let j = i; j < Math.min(i + 20, lines.length); j++) {
        if (lines[j].includes('items:')) {
          hasItems = true;
        }
        
        // Find first link after items declaration
        if (hasItems && !firstLink) {
          const linkMatch = lines[j].match(/link:\s*['"`](\/[^'"`]+)['"`]/);
          if (linkMatch) {
            firstLink = linkMatch[1];
            break;
          }
        }
        
        // Stop if we hit another text property (new section)
        if (j > i && lines[j].match(/^\s*text:\s*['"`]/)) {
          break;
        }
      }
      
      // If we found items and a link, extract the URL segment
      if (hasItems && firstLink) {
        const urlSegment = extractUrlSegment(firstLink);
        if (urlSegment) {
          sectionMappings[sectionTitle] = urlSegment;
        }
      }
    }
    return sectionMappings;
    
  } catch (error) {
    console.warn('Failed to extract section mappings from vocs.config.ts:', error);
    return {};
  }
}

// Generate the tags
function fetchTags() {
  
  const { allTags, pageTagsMap } = getAllTagsFromMDX('./docs/pages');
  const sectionMappings = extractSectionMappings();
  
  const tagsFetched = {
    allTags,
    pageTagsMap,
    sectionMappings,
  };
  
  // Write to a JSON file that can be imported by components
  const outputPath = './utils/fetched-tags.json';
  fs.writeFileSync(outputPath, JSON.stringify(tagsFetched, null, 2));
  
  console.log(`- Output written to: ${outputPath}`);
  
  return tagsFetched;
}

function generateColor(tag) {
  const crypto = require("crypto");
  const hex = crypto.createHash("sha1").update(tag).digest("hex").slice(0, 6);
  return `#${hex}`;
}

function updateConstantsWithMissingTags(allTags) {
  const constantsPath = path.join(workspaceRoot, 'components', 'shared', 'tagColors.ts');
  
  if (!fs.existsSync(constantsPath)) return;
  
  const content = fs.readFileSync(constantsPath, 'utf-8');
  
  // Extract existing tags
  const existingTags = new Set();
  const matches = content.matchAll(/['"]([^'"]+)['"]\s*:\s*['"]#[0-9a-fA-F]{6}['"]/g);
  for (const match of matches) {
    existingTags.add(match[1]);
  }
  
  // Find missing tags
  const missingTags = allTags.filter(tag => !existingTags.has(tag));
  
  if (missingTags.length === 0) {
    console.log('✓ All tags have colors');
    return;
  }
  
  console.log(`Adding colors for ${missingTags.length} new tags...`);
  
  // Generate new entries
  const newEntries = missingTags.map(tag => `  '${tag}': '${generateColor(tag)}',`).join('\n');
  
  // Insert before closing brace of TAG_COLORS
  const updated = content.replace(
    /(export const TAG_COLORS: Record<string, string> = \{[\s\S]*?)(\n\})/,
    `$1\n${newEntries}$2`
  );
  
  fs.writeFileSync(constantsPath, updated, 'utf-8');
  console.log(`✓ Added: ${missingTags.join(', ')}`);
}

// Run if called directly
if (require.main === module) {
  const result = fetchTags();
  updateConstantsWithMissingTags(result.allTags);
}

module.exports = { fetchTags, getAllTagsFromMDX, parseFrontmatter };