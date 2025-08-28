#!/usr/bin/env node

/**
 * Build script to fetch tags from MDX frontmatter
 * Run this during build to create a complete tag list for the filter
 */

const fs = require('fs');
const path = require('path');

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

// Scan directory for MDX files and extract tags
function getAllTagsFromMDX(docsDir) {
  const tags = new Set();
  const pageTagsMap = {};
  
  function scanDirectory(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          scanDirectory(fullPath, newBasePath);
        } else if (item.endsWith('.mdx')) {
          const frontmatter = parseFrontmatter(fullPath);
          if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
            // Add to global tags set
            frontmatter.tags.forEach(tag => tags.add(tag));
            
            // Create URL path
            let urlPath = basePath ? `/${basePath}/${item}` : `/${item}`;
            urlPath = urlPath.replace('.mdx', '').replace('/README', '');
            
            pageTagsMap[urlPath] = frontmatter.tags;
          }
        }
      }
    } catch (error) {
      console.warn(`Failed to scan directory ${dir}:`, error);
    }
  }
  
  scanDirectory(docsDir);
  return { allTags: Array.from(tags).sort(), pageTagsMap };
}

// Generate the tags
function fetchTags() {
  const { allTags, pageTagsMap } = getAllTagsFromMDX('./docs/pages');
  
  const tagsFetched = {
    allTags,
    pageTagsMap,
  };
  
  // Write to a JSON file that can be imported by components
  const outputPath = './utils/fetched-tags.json';
  fs.writeFileSync(outputPath, JSON.stringify(tagsFetched, null, 2));
  
  console.log(`✅ Generated tags with ${allTags.length} tags`);
  
  return tagsFetched;
}

// Run if called directly
if (require.main === module) {
  fetchTags();
}

module.exports = { fetchTags, getAllTagsFromMDX, parseFrontmatter };