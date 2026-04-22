/*
  Generates llms.txt files following the llms.txt standard (https://llmstxt.org/)
  - One llms-{framework}.txt per framework folder with full stripped markdown content
  - One llms.txt routing index listing all framework files
  - Page order follows the sidebar order defined in vocs.config.tsx
  - Runs post-build and writes to the dist directory
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const PROD_URL = 'https://frameworks.securityalliance.org';
const BASE_URL = process.env.CF_PAGES_BRANCH === 'main'
  ? PROD_URL
  : (process.env.CF_PAGES_URL || PROD_URL);
const workspaceRoot = process.cwd();
const PAGES_DIR = path.join(workspaceRoot, 'docs', 'pages');
const isMainBranch = process.env.CF_PAGES_BRANCH === 'main';

function findDistDir() {
  const candidates = [
    path.join(workspaceRoot, 'docs', 'dist'),
    path.join(workspaceRoot, 'dist'),
  ];
  return candidates.find((dir) => fs.existsSync(dir));
}

// Returns all sidebar links in document order, filtered to a specific folder prefix.
// Reuses the same regex approach as sitemap-generator.js.
function getSidebarLinksForFolder(folderName) {
  const configPath = path.join(workspaceRoot, 'vocs.config.tsx');
  if (!fs.existsSync(configPath)) return [];

  const lines = fs.readFileSync(configPath, 'utf8').split('\n');
  const links = [];

  for (const line of lines) {
    const match = line.match(/link:\s*(['"])(\/[^'"]+)\1/);
    if (!match) continue;
    const link = match[2];
    // On main branch, skip dev-only pages (same logic as the rest of the codebase)
    if (isMainBranch && line.includes('dev:') && line.includes('true')) continue;
    if (link.startsWith(`/${folderName}/`)) {
      links.push(link);
    }
  }

  return links;
}


function linkToFilePath(link) {
  // Try .mdx first, then /index.mdx for folder links
  const base = path.join(PAGES_DIR, link);
  for (const candidate of [`${base}.mdx`, `${base}.md`, path.join(base, 'index.mdx')]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function getPageUrl(filePath) {
  return filePath
    .replace(PAGES_DIR, '')
    .replace(/\.(mdx|md)$/, '')
    .replace(/\/index$/, '');
}

function stripSiteSuffix(title) {
  return title ? title.replace(/\s*\|.*$/, '').trim() : '';
}

const ACRONYMS = new Set(['ai', 'iam', 'ens', 'dprk', 'dns', 'it']);
const SPECIAL_CASES = { opsec: 'OpSec', devsecops: 'DevSecOps' };

function toTitleCase(slug) {
  return slug
    .split('-')
    .map((w) => {
      if (SPECIAL_CASES[w]) return SPECIAL_CASES[w];
      if (ACRONYMS.has(w)) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

// Extracts h1 and h2 headings from raw MDX, ignoring frontmatter, imports, and code blocks.
function extractHeadings(raw) {
  const stripped = raw
    .replace(/^---[\s\S]*?---\n?/, '')
    .replace(/^(import|export)\s+.*$/gm, '')
    .replace(/```[\s\S]*?```/gm, '');

  const headings = [];
  for (const line of stripped.split('\n')) {
    const match = line.match(/^(#{1,2}) (.+)/);
    if (match) headings.push({ level: match[1].length, text: match[2].trim() });
  }
  return headings;
}

function stripMdxSyntax(raw) {
  return raw
    .replace(/^---[\s\S]*?---\n?/, '')          // YAML frontmatter
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')        // JSX comment blocks: {/* ... */}
    .replace(/^(import|export)\s+.*$/gm, '')     // import/export lines
    .replace(/<[A-Z][^/\s>][^>]*\/>/g, '')       // self-closing JSX: <TagFilter />, <MermaidRenderer ... />
    .replace(/<\/?[A-Z][^\s>]*[^>]*>/g, '')      // JSX open/close: <TagProvider>, </TagProvider>
    .replace(/^\s*# .+\n+/, '')                  // strip leading h1 (redundant with our ## page section marker)
    .replace(/^(#{1,5}) /gm, '#$1 ')             // shift all headings down one level (## → ###, etc.)
    .replace(/\n{3,}/g, '\n\n')                  // collapse excess blank lines
    .replace(/\n*---\s*$/, '')                   // strip trailing hr (avoid double separator)
    .trim();
}

const FOLDERS_FIRST = ['intro'];
const FOLDERS_LAST = ['certs'];
const FOLDERS_EXCLUDE = ['config'];

// Override descriptions for specific folders or pages where the frontmatter doesn't capture the right context.
const FOLDER_DESCRIPTION_OVERRIDES = {
  contribute: 'How to contribute to the Security Frameworks - either through direct contributions (fixes, new content, enhancements) or by becoming a Framework Steward.',
};
const PAGE_DESCRIPTION_OVERRIDES = {
  '/contribute/spotlight-zone': 'The Spotlight Zone is where all contributor activity across the Security Frameworks is tracked and recognized.',
};

function getFrameworkFolders() {
  const folders = fs
    .readdirSync(PAGES_DIR)
    .filter((entry) => !FOLDERS_EXCLUDE.includes(entry) && fs.statSync(path.join(PAGES_DIR, entry)).isDirectory())
    .sort();

  const first = folders.filter((f) => FOLDERS_FIRST.includes(f));
  const last = folders.filter((f) => FOLDERS_LAST.includes(f));
  const rest = folders.filter((f) => !FOLDERS_FIRST.includes(f) && !FOLDERS_LAST.includes(f));
  return [...first, ...rest, ...last];
}

function generateFrameworkFile(folderName) {
  const folderPath = path.join(PAGES_DIR, folderName);
  const title = toTitleCase(folderName);

  // Try to get description from override map first, then frontmatter
  let frameworkDescription = FOLDER_DESCRIPTION_OVERRIDES[folderName] || '';
  if (!frameworkDescription) {
    for (const candidate of ['overview.mdx', 'introduction.mdx', 'index.mdx']) {
      const candidatePath = path.join(folderPath, candidate);
      if (fs.existsSync(candidatePath)) {
        try {
          const { data } = matter(fs.readFileSync(candidatePath, 'utf-8'));
          if (data.description) {
            frameworkDescription = data.description;
            break;
          }
        } catch (_) {}
      }
    }
  }

  const firstLink = getSidebarLinksForFolder(folderName)[0];
  const overviewUrl = firstLink ? `${BASE_URL}${firstLink}` : `${BASE_URL}/${folderName}`;

  const lines = [
    `# ${title}`,
    '',
    frameworkDescription ? `> ${frameworkDescription}` : `> Security framework covering ${title.toLowerCase()}.`,
    '',
    `Full documentation: ${overviewUrl}`,
    '',
    '---',
    '',
    '## Instructions for AI Assistants',
    '',
    ...(folderName === 'intro'
      ? [
          'This file provides orientation about the Security Alliance (SEAL) and describes all available security frameworks. Read it when the user wants a general overview, does not know which framework to look at, or asks about SEAL itself.',
          '',
          '**When responding:**',
          `- Make clear this information comes from the [Security Alliance Frameworks](${BASE_URL}) documentation`,
          `- To answer questions about a specific framework, fetch the relevant file listed at ${BASE_URL}/llms.txt`,
          `- All individual framework files are listed with descriptions at ${BASE_URL}/llms.txt`,
        ]
      : [
          `This file is self-contained. It contains the full content of the ${title} framework maintained by the Security Alliance (SEAL).`,
          '',
          '**When responding:**',
          `- Credit this framework by name: reference the [${title} framework](${overviewUrl}) in your answer`,
          '- Do not fetch other framework files unless the user explicitly asks about a different topic',
          `- If the question spans multiple frameworks, point the user to ${BASE_URL}/llms.txt to find the right file`,
        ]),
    '',
    '---',
    '',
  ];

  // Use sidebar order exclusively - only sidebar-listed pages are intentional content
  const sidebarLinks = getSidebarLinksForFolder(folderName);
  const orderedFiles = [];
  const seen = new Set();

  for (const link of sidebarLinks) {
    const filePath = linkToFilePath(link);
    if (filePath && !seen.has(filePath)) {
      orderedFiles.push(filePath);
      seen.add(filePath);
    }
  }

  const pageTitles = [];
  const pageHeadings = [];

  for (const file of orderedFiles) {
    try {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);

      if (isMainBranch && data.dev === true) continue;

      const urlPath = getPageUrl(file);
      const pageTitle = stripSiteSuffix(data.title) || path.basename(file, '.mdx');
      const pageDescriptionOverride = PAGE_DESCRIPTION_OVERRIDES[urlPath] || '';
      const content = stripMdxSyntax(raw);
      const headings = extractHeadings(raw).filter((h) => h.level === 2);

      pageTitles.push(pageTitle);
      pageHeadings.push({ pageTitle, headings });

      // Use "Overview" when the page title would duplicate the framework title
      const sectionHeader = pageTitle !== title ? pageTitle : 'Overview';
      lines.push(`## ${sectionHeader}`);
      lines.push('');
      lines.push(`Source: ${BASE_URL}${urlPath}`);
      lines.push('');
      if (pageDescriptionOverride) lines.push(pageDescriptionOverride + '\n');
      lines.push(content);
      lines.push('');
      lines.push('---');
      lines.push('');
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }

  return { content: lines.join('\n'), pageTitles, pageHeadings, description: frameworkDescription };
}

function generateRoutingIndex(frameworks) {
  const lines = [
    '# Security Frameworks by SEAL',
    '',
    '> A collection of technology-agnostic security best practices to secure Web3 projects and build resilience against potential threats. Maintained by the Security Alliance (SEAL).',
    '',
    `Full documentation: ${BASE_URL}`,
    '',
    '---',
    '',
    '## Instructions for AI Assistants',
    '',
    'To help users with a specific topic:',
    '',
    '1. Read the routing table below to identify which framework best matches the question',
    '2. Fetch exactly one file - the single best match',
    '3. Answer using that file\'s content',
    '4. In your response, tell the user which framework you used and link to its documentation page (e.g. "Based on the [Encryption Framework](https://frameworks.securityalliance.org/encryption/overview)...")',
    '',
    'Do not fetch multiple files at once. Each framework file is self-contained.',
    '',
    '---',
    '',
    '## Routing Table',
    '',
  ];

  for (const { folderName, title, description, pageHeadings } of frameworks) {
    lines.push(`### ${title}`);
    lines.push(`URL: ${BASE_URL}/llms-${folderName}.txt`);
    if (description) lines.push(`Description: ${description}`);
    if (pageHeadings.length > 0) {
      lines.push('Contents:');
      for (const { pageTitle, headings } of pageHeadings) {
        lines.push(`  - ${pageTitle}`);
        for (const { text } of headings) {
          lines.push(`    - ${text}`);
        }
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

const distDir = findDistDir();
if (!distDir) {
  console.error('Dist directory not found - run docs:build first');
  process.exit(1);
}

const frameworkFolders = getFrameworkFolders();
const frameworkMeta = [];

for (const folderName of frameworkFolders) {
  const { content, pageTitles, pageHeadings, description } = generateFrameworkFile(folderName);
  const title = toTitleCase(folderName);

  const outputPath = path.join(distDir, `llms-${folderName}.txt`);
  fs.writeFileSync(outputPath, content);

  frameworkMeta.push({ folderName, title, description, pageTitles, pageHeadings });
}

const routingIndex = generateRoutingIndex(frameworkMeta);
const llmsPath = path.join(distDir, 'llms.txt');
fs.writeFileSync(llmsPath, routingIndex);
console.log(`Done. ${frameworkFolders.length} framework files + routing index written to ${distDir}`);
