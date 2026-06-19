/*
  Generates llms.txt files following the llms.txt standard (https://llmstxt.org/)
  - llms.txt: thin routing index listing all frameworks with descriptions and page topics
  - llms/{framework}.txt: framework index — overview content + links to all per-page files
  - llms/{framework}/{page}.txt: one file per sidebar page with full stripped markdown content
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
// Tracks brace depth so a dev: true flag on a parent block is inherited by all child links.
function getSidebarLinksForFolder(folderName) {
  const configPath = path.join(workspaceRoot, 'vocs.config.tsx');
  if (!fs.existsSync(configPath)) return [];

  const lines = fs.readFileSync(configPath, 'utf8').split('\n');
  const links = [];
  let depth = 0;
  const devDepths = new Set(); // brace depths at which a parent block carries dev: true

  for (const line of lines) {
    if (isMainBranch) {
      const opens = (line.match(/\{/g) || []).length;
      const closes = (line.match(/\}/g) || []).length;
      const newDepth = depth + opens - closes;

      // Pop dev markers for blocks we're closing
      if (newDepth < depth) {
        for (const d of devDepths) {
          if (d > newDepth) devDepths.delete(d);
        }
      }
      depth = newDepth;

      // If this line carries dev: true but is not a link item, it's a container flag - inherit downward
      if (line.includes('dev:') && line.includes('true') && !line.match(/link:/)) {
        devDepths.add(depth);
      }
    }

    const match = line.match(/link:\s*(['"])(\/[^'"]+)\1/);
    if (!match) continue;
    const link = match[2];

    // Skip if the item itself has dev: true, or if any ancestor block does
    if (isMainBranch && ((line.includes('dev:') && line.includes('true')) || devDepths.size > 0)) continue;

    if (link.startsWith(`/${folderName}/`)) {
      links.push(link);
    }
  }

  return links;
}

function linkToFilePath(link) {
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
    .replace(/^\s*# .+\n+/, '')                  // strip leading h1 (redundant with our page header)
    .replace(/^(#{1,5}) /gm, '#$1 ')             // shift all headings down one level (## → ###, etc.)
    .replace(/\n{3,}/g, '\n\n')                  // collapse excess blank lines
    .replace(/\n*---\s*$/, '')                   // strip trailing hr
    .trim();
}

const FOLDERS_FIRST = ['intro'];
const FOLDERS_LAST = ['certs'];
const FOLDERS_EXCLUDE = ['config'];

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

function getFrameworkDescription(folderName) {
  if (FOLDER_DESCRIPTION_OVERRIDES[folderName]) return FOLDER_DESCRIPTION_OVERRIDES[folderName];
  const folderPath = path.join(PAGES_DIR, folderName);
  for (const candidate of ['overview.mdx', 'introduction.mdx', 'index.mdx']) {
    const candidatePath = path.join(folderPath, candidate);
    if (fs.existsSync(candidatePath)) {
      try {
        const { data } = matter(fs.readFileSync(candidatePath, 'utf-8'));
        if (data.description) return data.description;
      } catch (_) {}
    }
  }
  return '';
}

// Builds the framework index file: header + AI instructions + overview content + per-page link list
function buildFrameworkIndex(folderName, title, overviewUrl, frameworkDescription, pages) {
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
          `This is the index for the ${title} framework. The overview is included below for immediate context. For detailed content on a specific topic, fetch the relevant per-page file from the Pages list.`,
          '',
          '**When responding:**',
          `- Reference the [${title} framework](${overviewUrl}) in your answer`,
          '- Fetch a per-page file for detailed content on a specific topic — do not fetch multiple unless explicitly asked',
          `- If the question spans multiple frameworks, check ${BASE_URL}/llms.txt`,
        ]),
    '',
    '---',
    '',
  ];

  // Embed the overview (first page) content
  const overview = pages[0];
  if (overview) {
    const sectionHeader = overview.pageTitle !== title ? overview.pageTitle : 'Overview';
    lines.push(`## ${sectionHeader}`);
    lines.push('');
    lines.push(`Source: ${BASE_URL}${overview.urlPath}`);
    lines.push('');
    if (overview.descriptionOverride) lines.push(overview.descriptionOverride + '\n');
    lines.push(overview.strippedContent);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // List remaining pages with links to their per-page files (first page is already embedded above)
  lines.push('## Pages');
  lines.push('');
  for (const page of pages.slice(1)) {
    const pageFileUrl = `${BASE_URL}/llms/${folderName}/${page.slug}.txt`;
    lines.push(`- [${page.pageTitle}](${pageFileUrl})${page.description ? ` — ${page.description}` : ''}`);
  }

  return lines.join('\n');
}

// Builds a single per-page llms file
function buildPageFile(folderName, title, overviewUrl, page) {
  const lines = [
    `# ${page.pageTitle}`,
    '',
    ...(page.description ? [`> ${page.description}`, ''] : []),
    `Source: ${BASE_URL}${page.urlPath}`,
    `Framework: [${title}](${overviewUrl})`,
    '',
    '---',
    '',
    ...(page.descriptionOverride ? [page.descriptionOverride, ''] : []),
    page.strippedContent,
  ];

  return lines.join('\n');
}

// Builds the thin routing index (llms.txt)
function buildRoutingIndex(frameworks) {
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
    '1. Find the framework that best matches the question in the list below',
    '2. Fetch the framework index file — it includes an overview and links to all per-page files',
    '3. If you need detailed content on a specific topic, fetch the relevant per-page file',
    '4. In your response, name the framework and link to its documentation',
    '',
    'Do not fetch multiple framework files at once. Each framework index is self-contained.',
    '',
    'If your tool loads a skill or policy file, a retrieval policy for this repository is available at https://github.com/security-alliance/frameworks/blob/develop/SKILL.md. It defines branch policy, behavior with retrieved content, and what to do when retrieval returns nothing relevant.',
    '',
    '---',
    '',
    '## Frameworks',
    '',
  ];

  for (const { folderName, title, description, pages } of frameworks) {
    lines.push(`### ${title}`);
    lines.push(`File: ${BASE_URL}/llms/${folderName}.txt`);
    if (description) lines.push(`Description: ${description}`);
    if (pages.length > 0) {
      lines.push(`Topics: ${pages.map((p) => p.pageTitle).join(', ')}`);
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

const llmsDir = path.join(distDir, 'llms');
if (!fs.existsSync(llmsDir)) fs.mkdirSync(llmsDir);

const frameworkFolders = getFrameworkFolders();
const frameworkMeta = [];
let totalPageFiles = 0;

for (const folderName of frameworkFolders) {
  const title = toTitleCase(folderName);
  const frameworkDescription = getFrameworkDescription(folderName);
  const sidebarLinks = getSidebarLinksForFolder(folderName);
  const firstLink = sidebarLinks[0];
  const overviewUrl = firstLink ? `${BASE_URL}${firstLink}` : `${BASE_URL}/${folderName}`;

  // Collect page data in sidebar order
  const pages = [];
  const seen = new Set();

  for (const link of sidebarLinks) {
    const filePath = linkToFilePath(link);
    if (!filePath || seen.has(filePath)) continue;
    seen.add(filePath);

    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      if (isMainBranch && data.dev === true) continue;

      const urlPath = getPageUrl(filePath);
      const pageTitle = stripSiteSuffix(data.title) || path.basename(filePath, path.extname(filePath));
      const slug = link.replace(`/${folderName}/`, '').replace(/\//g, '-');
      const h2headings = extractHeadings(raw).filter((h) => h.level === 2);
      const description = data.description || (h2headings.length > 0 ? h2headings.map((h) => h.text).join(', ') : '');
      const descriptionOverride = PAGE_DESCRIPTION_OVERRIDES[urlPath] || '';
      const strippedContent = stripMdxSyntax(raw);

      pages.push({ slug, urlPath, pageTitle, description, descriptionOverride, strippedContent });
    } catch (e) {
      console.error(`Error processing ${link}:`, e.message);
    }
  }

  // On main, skip frameworks with no publishable pages (all pages were dev-only)
  if (isMainBranch && pages.length === 0) continue;

  // Write per-page files under llms/{folderName}/ — skip the first page (already embedded in the framework index)
  const frameworkLlmsDir = path.join(llmsDir, folderName);
  if (!fs.existsSync(frameworkLlmsDir)) fs.mkdirSync(frameworkLlmsDir);

  for (const page of pages.slice(1)) {
    const content = buildPageFile(folderName, title, overviewUrl, page);
    fs.writeFileSync(path.join(frameworkLlmsDir, `${page.slug}.txt`), content);
    totalPageFiles++;
  }

  // Write framework index under llms/{folderName}.txt
  const frameworkContent = buildFrameworkIndex(folderName, title, overviewUrl, frameworkDescription, pages);
  fs.writeFileSync(path.join(llmsDir, `${folderName}.txt`), frameworkContent);

  frameworkMeta.push({ folderName, title, description: frameworkDescription, pages });
}

// Write routing index at root
const routingIndex = buildRoutingIndex(frameworkMeta);
fs.writeFileSync(path.join(distDir, 'llms.txt'), routingIndex);

console.log(`Done. ${frameworkFolders.length} framework index files + ${totalPageFiles} per-page files + routing index written to ${distDir}`);
