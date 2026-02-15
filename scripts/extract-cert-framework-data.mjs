#!/usr/bin/env node
/**
 * Extract structured data from cert MDX files and framework pages.
 * Outputs two JSON files:
 *   - cert-controls.json: all controls with baselines from 6 cert files
 *   - framework-pages.json: all framework pages with titles and headers
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, basename } from 'path';
import { load } from 'js-yaml';

const REPO_ROOT = join(import.meta.dirname, '..');
const CERTS_DIR = join(REPO_ROOT, 'docs', 'pages', 'certs');
const PAGES_DIR = join(REPO_ROOT, 'docs', 'pages');
const OUT_DIR = join(REPO_ROOT, 'scripts', 'data');

// ── Extract cert controls ──────────────────────────────────────────
function extractCertControls() {
  const certFiles = readdirSync(CERTS_DIR)
    .filter(f => f.startsWith('sfc-') && f.endsWith('.mdx'))
    .sort();

  const certs = [];

  for (const file of certFiles) {
    const content = readFileSync(join(CERTS_DIR, file), 'utf-8');
    const certName = basename(file, '.mdx');

    // Extract YAML frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) {
      console.warn(`No frontmatter in ${file}`);
      continue;
    }

    const fm = load(fmMatch[1]);
    if (!fm.cert) {
      console.warn(`No cert data in ${file}`);
      continue;
    }

    const sections = fm.cert.map(section => ({
      id: section.id,
      title: section.title,
      controls: section.controls.map(ctrl => ({
        id: ctrl.id,
        title: ctrl.title,
        description: ctrl.description,
        baselines: ctrl.baselines || [],
      })),
    }));

    const totalControls = sections.reduce((sum, s) => sum + s.controls.length, 0);

    certs.push({
      name: certName,
      title: fm.title,
      sections,
      totalControls,
    });

    console.log(`  ${certName}: ${sections.length} sections, ${totalControls} controls`);
  }

  return certs;
}

// ── Extract framework pages ────────────────────────────────────────
function extractFrameworkPages() {
  const pages = [];

  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip certs and config dirs
        const rel = relative(PAGES_DIR, fullPath);
        if (rel.startsWith('certs') || rel.startsWith('config')) continue;
        walk(fullPath);
      } else if (entry.endsWith('.mdx') && entry !== 'index.mdx') {
        const content = readFileSync(fullPath, 'utf-8');
        const relPath = '/' + relative(PAGES_DIR, fullPath).replace(/\.mdx$/, '');

        // Extract title from frontmatter
        let title = '';
        const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (fmMatch) {
          try {
            const fm = load(fmMatch[1]);
            title = fm.title || '';
          } catch {
            // Some MDX has JSX in frontmatter
          }
        }

        // Extract ## headers (h2 and h3)
        const headers = [];
        const headerRegex = /^(#{2,3})\s+(.+)$/gm;
        let match;
        while ((match = headerRegex.exec(content)) !== null) {
          const text = match[2].trim();
          // Skip JSX/component headers
          if (text.startsWith('<') || text.startsWith('{')) continue;
          headers.push({
            level: match[1].length,
            text,
            anchor: text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
          });
        }

        // Get the domain (first directory)
        const domain = relPath.split('/')[1] || '';

        pages.push({
          path: relPath,
          title: title.replace(/\s*\|\s*Security Alliance$/i, '').trim(),
          domain,
          headers,
          lineCount: content.split('\n').length,
        });
      }
    }
  }

  walk(PAGES_DIR);
  pages.sort((a, b) => a.path.localeCompare(b.path));
  return pages;
}

// ── Main ───────────────────────────────────────────────────────────
import { mkdirSync } from 'fs';
mkdirSync(OUT_DIR, { recursive: true });

console.log('Extracting cert controls...');
const certs = extractCertControls();
writeFileSync(join(OUT_DIR, 'cert-controls.json'), JSON.stringify(certs, null, 2));
console.log(`\nTotal: ${certs.reduce((s, c) => s + c.totalControls, 0)} controls across ${certs.length} certs\n`);

console.log('Extracting framework pages...');
const pages = extractFrameworkPages();
writeFileSync(join(OUT_DIR, 'framework-pages.json'), JSON.stringify(pages, null, 2));

// Group by domain for quick reference
const domains = {};
for (const p of pages) {
  if (!domains[p.domain]) domains[p.domain] = [];
  domains[p.domain].push(p.path);
}
console.log(`\nTotal: ${pages.length} pages across ${Object.keys(domains).length} domains\n`);
for (const [domain, paths] of Object.entries(domains).sort()) {
  console.log(`  ${domain}: ${paths.length} pages`);
}
