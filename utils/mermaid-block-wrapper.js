#!/usr/bin/env node

/**
 * This script scans all MDX files under "docs/pages" for Mermaid code blocks
 * and wraps them in a <MermaidRenderer /> React component.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve('docs/pages');
const COMPONENT_IMPORT = 'MermaidRenderer';
const COMPONENT_FOLDER = 'components';

const updatedFiles = []; // <-- track updated files

function getImportPath(filePath) {
    // Get relative path from project root
    const relativePath = path.relative(path.dirname(filePath), path.resolve('components'));
    return `'${relativePath.replace(/\\/g, '/')}'`; // normalize Windows paths
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let updated = false;

    // 1. Find mermaid code blocks
    const mermaidRegex = /```mermaid([\s\S]*?)```/g;
    if (!mermaidRegex.test(content)) return; // skip files without mermaid

    // 2. Replace mermaid code blocks
    content = content.replace(mermaidRegex, (match, code) => {
        updated = true;
        const trimmedCode = code.trim();
        return `\n<MermaidRenderer id="mermaid-diagram" code={\`\n${trimmedCode}\n\`} />\n`;
    });

    // 3. Handle import insertion
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/;
    const importMatch = content.match(importRegex);

    if (importMatch && importMatch[2].includes(COMPONENT_FOLDER)) {
        // Add MermaidRenderer if not already present
        const imports = importMatch[1].split(',').map(s => s.trim());
        if (!imports.includes(COMPONENT_IMPORT)) {
            imports.push(COMPONENT_IMPORT);
            content = content.replace(
                importRegex,
                `import { ${imports.join(', ')} } from '${importMatch[2]}'`
            );
            updated = true;
        }
    } else {
        // Insert import after frontmatter
        const importPath = getImportPath(filePath);
        const frontmatterRegex = /^---[\s\S]*?---\s*/;
        const frontmatterMatch = content.match(frontmatterRegex);
        if (frontmatterMatch) {
            const insertPos = frontmatterMatch[0].length;
            content =
                content.slice(0, insertPos) +
                `import { ${COMPONENT_IMPORT} } from ${importPath}\n\n` +
                content.slice(insertPos);
        } else {
            // If no frontmatter, insert at top
            content = `import { ${COMPONENT_IMPORT} } from ${importPath}\n\n${content}`;
        }
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf-8');
        updatedFiles.push(filePath); // <-- add to updated files
        console.log(`Updated: ${filePath}`);
    }
}

// --- Recursively walk the docs/pages directory ---
function walkDir(dir, ext, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath, ext, fileList);
        } else if (filePath.endsWith(ext)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

// 4. Process all MDX files
const files = walkDir(ROOT_DIR, '.mdx');
files.forEach(processFile);

console.log(`\nTotal mermaid wrapper added: ${updatedFiles.length}`);
updatedFiles.forEach(f => console.log(` - ${f}`));
