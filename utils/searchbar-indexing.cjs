/*
  Post-processes Vocs v2's search index to match the curated nav and the develop/production split.
  Vocs v2 indexes every built route (including off-sidebar/stale pages, folder-index duplicates, and
  `dev: true` pages), so we load its index and discard the sections that should not be searchable:
    - Allowlist to sidebar routes (vocs.config.ts). On main, also drop `dev: true` routes.
    - On main, drop sections whose heading is wrapped in <DevOnly> (components/dev-only/DevOnly.tsx
      renders null on main, but Vocs still indexes the raw MDX text).
  The filtered index is written back to the SAME dist/public/assets/search-index-<hash>.json (its
  hashed name is baked into the built client). We post-process rather than re-index because the
  Vocs v1 indexer skipped MDX with imports/components; v2 indexes correctly.
*/

const fs = require('fs');
const path = require('path');
const MiniSearch = require('minisearch');

const workspaceRoot = process.cwd();
const assetsDir = path.join(workspaceRoot, 'dist', 'public', 'assets');
const vocsConfigPath = path.join(workspaceRoot, 'vocs.config.ts');
const pagesDir = path.join(workspaceRoot, 'docs', 'pages');

// Must match Vocs' own index options (node_modules/vocs/dist/internal/search.client.js)
// so MiniSearch.loadJSON can rehydrate the index Vocs serialized.
const searchFields = ['category', 'subtitle', 'text', 'title', 'titles'];
const storeFields = ['category', 'href', 'searchPriority', 'subtitle', 'text', 'title', 'titles', 'type'];

// Walk the sidebar, collecting every link. `dev: true` is inherited from ancestor groups,
// mirroring collectDevLinks()/filterDevItems() in vocs.config.ts so the two stay in sync.
function collectLinks(items, parentIsDev, all, dev) {
  for (const item of items) {
    const isDev = Boolean(item.dev) || parentIsDev;
    if (item.link) {
      all.add(item.link);
      if (isDev) dev.add(item.link);
    }
    if (Array.isArray(item.items)) collectLinks(item.items, isDev, all, dev);
  }
}

// Extract the `sidebar: [ ... ]` array literal from vocs.config.ts and evaluate it.
// The sidebar is pure data (text/link/dev/collapsed/items), so it evaluates as plain JS.
// Bracket-matching (rather than line-by-line regex) preserves nesting, which is what lets us
// inherit `dev: true` from a parent group down to its children.
function readSidebarLinks() {
  const source = fs.readFileSync(vocsConfigPath, 'utf8');

  const keyIdx = source.indexOf('sidebar:');
  if (keyIdx === -1) throw new Error('Could not find `sidebar:` in vocs.config.ts');
  const startIdx = source.indexOf('[', keyIdx);
  if (startIdx === -1) throw new Error('Could not find start of sidebar array in vocs.config.ts');

  let depth = 0;
  let quote = null;
  let endIdx = -1;
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i];
    const prev = source[i - 1];
    if (quote) {
      if (ch === quote && prev !== '\\') quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
    } else if (ch === '[') {
      depth++;
    } else if (ch === ']') {
      depth--;
      if (depth === 0) {
        endIdx = i;
        break;
      }
    }
  }
  if (endIdx === -1) throw new Error('Could not find end of sidebar array in vocs.config.ts');

  // eslint-disable-next-line no-new-func -- evaluating our own config's data-only sidebar
  const sidebar = new Function(`return (${source.slice(startIdx, endIdx + 1)});`)();
  const all = new Set();
  const dev = new Set();
  collectLinks(sidebar, false, all, dev);
  return { all, dev };
}

function findIndexFile() {
  if (!fs.existsSync(assetsDir)) return undefined;
  const match = fs
    .readdirSync(assetsDir)
    .filter((f) => /^search-index-.*\.json$/i.test(f))
    .sort()[0];
  return match ? path.join(assetsDir, match) : undefined;
}

function walkMdx(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMdx(p, out);
    else if (/\.mdx$/i.test(entry.name)) out.push(p);
  }
  return out;
}

// Map docs/pages/<path>.mdx to its route (/<path>, with index files collapsing to the directory),
// matching the hrefs Vocs stores in the index.
function fileToRoute(file) {
  const rel = path.relative(pagesDir, file).split(path.sep).join('/');
  const noExt = rel.replace(/\.mdx$/i, '');
  const noIndex = noExt.replace(/(^|\/)index$/i, '');
  return `/${noIndex}`;
}

// Collect "<route>\n<heading text>" keys for every ATX heading wrapped in a <DevOnly> block.
// Vocs indexes one section per heading and stores the heading text as `title`, so a section is
// uniquely identified within a page by (route, title). Only whole headings placed inside <DevOnly>
// are handled (the way the component is used); text wrapped under a heading defined outside the
// block stays in that heading's section and is not removed.
function collectDevOnlyHeadingKeys() {
  const keys = new Set();
  for (const file of walkMdx(pagesDir)) {
    const raw = fs.readFileSync(file, 'utf8');
    if (!raw.includes('<DevOnly')) continue;
    const route = fileToRoute(file);
    const blockRe = /<DevOnly\b[^>]*>([\s\S]*?)<\/DevOnly>/g;
    let block;
    while ((block = blockRe.exec(raw))) {
      for (const line of block[1].split(/\r?\n/)) {
        const heading = /^#{1,6}\s+(.*\S)\s*$/.exec(line);
        if (heading) keys.add(`${route}\n${heading[1].trim()}`);
      }
    }
  }
  return keys;
}

function main() {
  const isMainBranch = process.env.CF_PAGES_BRANCH === 'main';

  const indexFile = findIndexFile();
  if (!indexFile) {
    // Do not fail the build: surface it loudly but let the deploy proceed.
    console.error(`Search index: WARNING - no search-index-*.json found in ${assetsDir}; index was NOT filtered.`);
    return;
  }

  const { all, dev } = readSidebarLinks();
  // develop/preview: allow every sidebar link. main: drop dev links from the allowlist.
  const allowed = isMainBranch ? new Set([...all].filter((link) => !dev.has(link))) : all;
  console.log(
    `Search index: ${isMainBranch ? 'main (production)' : 'develop/preview'} branch, ` +
      `${allowed.size} allowed routes (${all.size} sidebar links, ${dev.size} dev).`,
  );

  // On main, also strip individual sections whose heading lives inside a <DevOnly> block.
  const devOnlyHeadings = isMainBranch ? collectDevOnlyHeadingKeys() : new Set();
  if (isMainBranch) console.log(`Search index: ${devOnlyHeadings.size} <DevOnly> headings to strip.`);

  const raw = JSON.parse(fs.readFileSync(indexFile, 'utf8'));

  // Keep only sections whose clean route (storedFields.href without #anchor) is allowed, and
  // (on main) drop sections whose heading was wrapped in <DevOnly>. Discard by the original
  // document id (documentIds[internalId]).
  const idsToDiscard = [];
  for (const internalId of Object.keys(raw.documentIds)) {
    const stored = raw.storedFields[internalId] || {};
    const route = (stored.href || '').split('#')[0];
    const isDevOnlySection = devOnlyHeadings.has(`${route}\n${stored.title}`);
    if (!allowed.has(route) || isDevOnlySection) idsToDiscard.push(raw.documentIds[internalId]);
  }

  const before = Object.keys(raw.documentIds).length;
  if (idsToDiscard.length === 0) {
    console.log(`Search index: all ${before} sections are on the allowlist, nothing to do.`);
    return;
  }

  const index = MiniSearch.loadJSON(JSON.stringify(raw), { fields: searchFields, storeFields });
  index.discardAll(idsToDiscard);
  index.vacuum();

  fs.writeFileSync(indexFile, JSON.stringify(index.toJSON()), 'utf8');
  console.log(
    `Search index: discarded ${idsToDiscard.length} off-allowlist sections, ` +
      `${index.documentCount} of ${before} remain. Wrote ${path.basename(indexFile)}.`,
  );
}

main();
