/*
  Purpose
  - Temporary patch for a known Vocs issue where their search indexer skips MDX files
    containing ESM imports or React components. This is a known open issue on Vocs’ GitHub.
  - Until Vocs releases an official fix, this script ensures those pages are properly indexed.

  What it does
  - Builds a MiniSearch index **only** from the files listed in the sidebar (i.e., the ones
    we explicitly want indexed).
  - Respects branch-based filtering: on main branch, excludes pages marked with dev: true
    (matching the sidebar filtering logic in vocs.config.ts).
  - Parses MDX files as plain text, extracting headings and content.
  - Generates a clean search index that includes all pages — even those with imports.
  - After the build, it overwrites Vocs' generated `search-index-<hash>.json`
    with our patched version in the appropriate Cloudflare Pages output directory.

  High-level flow
  1) Check branch via CF_PAGES_BRANCH or VERCEL_GIT_COMMIT_REF (main vs develop/other).
  2) Locate the generated search index file by scanning common output paths:
     - dist/.vocs                             (Cloudflare Pages build output)
     - .vercel/output/static/.vocs            (Vercel build output)
     - /vercel/path0/docs/dist/.vocs          (Vercel build environment path)
     - docs/dist/.vocs                        (local build output)
  3) Parse vocs.config.ts sidebar to collect allowed routes (excluding dev: true on main).
  4) Walk docs/pages and extract sections using markdown headings (#, ##, etc.).
  5) Filter to only allowed routes and build a MiniSearch index (code tags stripped).
  6) Overwrite the found `search-index-<hash>.json` and mirror it across other .vocs dirs.
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const MiniSearch = require('minisearch');

const workspaceRoot = process.cwd();
const pagesDir = path.join(workspaceRoot, 'docs', 'pages');
const distVocsDir = path.join(workspaceRoot, 'docs', 'dist', '.vocs');
const cfPagesDistVocsDir = path.join(workspaceRoot, 'dist', '.vocs');
const cfPagesStaticDir = path.join(workspaceRoot, 'dist');
const vercelVocsDir = path.join(workspaceRoot, '.vercel', 'output', 'static', '.vocs');
const vercelPath0DistVocsDir = '/vercel/path0/docs/dist/.vocs';
const vercelStaticDir = path.join(workspaceRoot, '.vercel', 'output', 'static');
const vocsConfigPath = path.join(workspaceRoot, 'vocs.config.ts');

function walkFiles(dir, out = []) {
  // Recursively collect .mdx files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(p, out);
    else if (/\.mdx$/i.test(entry.name)) out.push(p);
  }
  return out;
}

function slugify(input) {
  // Minimal slug generator for anchor fragments derived from headings
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s\-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/^\-|\-$/g, '');
}

function removeFences(str) {
  // Remove fenced code blocks’ opening lines to avoid dense token noise
  return str.replace(/^```.*$/gm, '').replace(/^~~~.*$/gm, '');
}

function normalizeSlashes(p) {
  return p.split(path.sep).join('/');
}

function computeHref(filePath) {
  // Map docs/pages/<path>.mdx to /<path> (index.md[x] collapses to directory route)
  const relFromPages = normalizeSlashes(path.relative(pagesDir, filePath));
  const withoutExt = relFromPages.replace(/\.mdx$/i, '');
  const noIndex = withoutExt.replace(/\/index$/i, '');
  return `/${noIndex}`;
}

function extractSectionsFromMdx(raw) {
  // Parse frontmatter, then split content into sections by ATX headings
  const { content } = matter(raw);
  const lines = content.split(/\r?\n/);

  const sections = [];
  let current = null;
  let parentTitles = [];

  for (const line of lines) {
    const m = /^(#{1,6})\s+(.*)$/.exec(line);
    if (m) {
      // Emit previously collected section before starting a new heading
      if (current) sections.push(current);

      const level = m[1].length;
      const title = m[2].trim();
      const anchor = slugify(title);

      const titles = parentTitles.slice(0, level - 1);
      titles[level - 1] = title;
      parentTitles = titles.slice();

      current = {
        level,
        title,
        anchor,
        titles: titles.slice(0, -1),
        chunks: [],
      };
    } else {
      if (!current) continue; // ignore text until first heading
      current.chunks.push(line);
    }
  }

  if (current) sections.push(current);

  return sections.map((s, idx) => {
    const text = removeFences(s.chunks.join('\n'))
      .replace(/<[^>]*>/g, '')
      .trim();
    return {
      anchor: s.anchor,
      title: s.title,
      titles: s.titles,
      isPage: idx === 0,
      text,
    };
  });
}

async function main() {
  // Only run this script in CI/deployment environments (Vercel or Cloudflare Pages)
  // Skip during local builds
  const isVercel = !!process.env.VERCEL;
  const isCloudflarePages = !!process.env.CF_PAGES;

  if (!isVercel && !isCloudflarePages) {
    console.log('Skipping search index generation: not running in a deployment environment (Vercel or Cloudflare Pages)');
    return;
  }

  // Determine where the built search index exists (try Cloudflare Pages dist, Vercel output, docs/dist)
  // Try these directories in order; pick the first that contains the index
  const candidateDirs = [cfPagesDistVocsDir, vercelVocsDir, vercelPath0DistVocsDir, distVocsDir];

  let baseDirForIndex = undefined;
  let fileName = undefined;

  for (const dir of candidateDirs) {
    try {
      if (!fs.existsSync(dir)) {
        console.log(`Listing skipped (not found): ${dir}`);
        continue;
      }
      const items = fs.readdirSync(dir);
      console.log(`Listing ${dir}:`, items);
      const candidates = items.filter((f) => /^search-index-.*\.json$/i.test(f)).sort();
      if (candidates.length > 0) {
        baseDirForIndex = dir;
        fileName = candidates[0];
        break;
      }
    } catch (e) {
      console.log(`Listing failed for ${dir}: ${e.message}`);
    }
  }

  if (!baseDirForIndex || !fileName) {
    console.error(`No existing Vocs search index file found in any candidate directory: ${candidateDirs.join(', ')}`);
    process.exit(1);
  }

  const payloadTargets = [];
  // Always write back to the discovered base dir first
  payloadTargets.push(path.join(baseDirForIndex, fileName));
  // And mirror to common output locations if they exist or can be created
  if (baseDirForIndex !== distVocsDir) payloadTargets.push(path.join(distVocsDir, fileName));
  if (baseDirForIndex !== cfPagesDistVocsDir) payloadTargets.push(path.join(cfPagesDistVocsDir, fileName));
  if (baseDirForIndex !== vercelVocsDir) payloadTargets.push(path.join(vercelVocsDir, fileName));
  if (baseDirForIndex !== vercelPath0DistVocsDir) payloadTargets.push(path.join(vercelPath0DistVocsDir, fileName));

  const files = walkFiles(pagesDir);
  const documents = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const sections = extractSectionsFromMdx(raw);
    if (sections.length === 0) continue;

    const hrefBase = computeHref(file);
    sections.forEach((section, i) => {
      const href = `${hrefBase}#${section.anchor}`;
      const id = `${href}::${i}`; // ensure unique ID even if anchors repeat
      documents.push({
        href,
        html: '',
        id,
        isPage: section.isPage,
        text: section.text,
        title: section.title,
        titles: section.titles,
      });
    });
  }

  // Check if we're on main branch (same logic as vocs.config.ts filterDevItems)
  // Support both Cloudflare Pages and Vercel environment variables
  const isMainBranch = process.env.CF_PAGES_BRANCH === 'main' || process.env.VERCEL_GIT_COMMIT_REF === 'main';
  console.log(`Branch check: ${isMainBranch ? 'main (filtering dev: true pages)' : 'develop (including all pages)'}`);

  // Derive allowed routes from sidebar config (preferred) or fallback to Cloudflare Pages static output
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
            console.log(`  Skipping dev page: ${link}`);
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
  if (!allowedRoutes) {
    // Fallback: walk dist/static directory and collect all directories that contain index.html
    // (This happens when vocs.config.ts parsing fails or yields no routes)
    // Try Vercel static dir first, then Cloudflare Pages
    const staticDir = fs.existsSync(vercelStaticDir) ? vercelStaticDir : 
                      fs.existsSync(cfPagesStaticDir) ? cfPagesStaticDir : null;
    
    if (staticDir) {
      const stack = [staticDir];
      const routes = new Set();
      while (stack.length) {
        const dir = stack.pop();
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        let hasIndex = false;
        for (const e of entries) {
          if (e.isFile() && e.name === 'index.html') hasIndex = true;
        }
        if (hasIndex) {
          const rel = normalizeSlashes(path.relative(staticDir, dir));
          const route = '/' + rel.replace(/^\/?/, '');
          routes.add(route === '/.' || route === '/' ? '/' : route);
        }
        for (const e of entries) {
          if (e.isDirectory()) stack.push(path.join(dir, e.name));
        }
      }
      // Remove non-doc routes
      routes.delete('/');
      routes.delete('/404');
      allowedRoutes = routes;
    }
  }

  // Filter documents to only include routes present in the sidebar
  let filteredDocuments = documents;
  if (allowedRoutes && allowedRoutes.size > 0) {
    // Keep only sections whose base href (without #anchor) is in the allowed set
    filteredDocuments = documents.filter((d) => allowedRoutes.has(d.href.split('#')[0]));
    console.log(`Filtering to sidebar/static routes: ${filteredDocuments.length} of ${documents.length} sections`);
  } else {
    console.log(`No sidebar filtering applied; indexing all ${documents.length} sections`);
  }

  // Build the MiniSearch index with the same structure Vocs expects
  const mini = new MiniSearch({
    fields: ['title', 'titles', 'text'], // Fields to index for search
    storeFields: ['href', 'html', 'isPage', 'text', 'title', 'titles'], // Fields to store in results
  });

  await mini.addAllAsync(filteredDocuments);
  const json = mini.toJSON();

  // Write the regenerated index to all discovered .vocs directories
  const payload = JSON.stringify(json);
  for (const target of payloadTargets) {
    try {
      fs.mkdirSync(path.dirname(target), { recursive: true });  // Ensure directory exists
      fs.writeFileSync(target, payload);
      console.log(`Search index written (${filteredDocuments.length} sections): ${target}`);
    } catch (err) {
      // Skip targets that aren't writable (e.g., Vercel paths on CF Pages or vice versa)
      console.log(`Skipping ${target}: ${err.code === 'EACCES' ? 'permission denied' : err.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
