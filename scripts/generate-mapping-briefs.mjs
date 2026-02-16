#!/usr/bin/env node
/**
 * Generate mapping briefs for each cert.
 * Each brief contains: cert controls + full text of candidate framework pages.
 * Output: scripts/data/briefs/<cert-name>.md
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const REPO_ROOT = join(import.meta.dirname, '..');
const DATA_DIR = join(REPO_ROOT, 'scripts', 'data');
const BRIEFS_DIR = join(DATA_DIR, 'briefs');
const PAGES_DIR = join(REPO_ROOT, 'docs', 'pages');

mkdirSync(BRIEFS_DIR, { recursive: true });

const certs = JSON.parse(readFileSync(join(DATA_DIR, 'cert-controls.json'), 'utf-8'));
const pages = JSON.parse(readFileSync(join(DATA_DIR, 'framework-pages.json'), 'utf-8'))
  .filter(p => !p.path.includes('/old/'));

// Domain mapping
const domainMap = {
  'sfc-workspace-security': ['opsec', 'encryption', 'privacy', 'user-team-security', 'guides', 'iam', 'awareness', 'dprk-it-workers'],
  'sfc-dns-registrar': ['opsec', 'infrastructure', 'community-management', 'front-end-web-app', 'monitoring', 'devsecops'],
  'sfc-devops-infrastructure': ['devsecops', 'supply-chain', 'security-automation', 'secure-software-development', 'infrastructure', 'security-testing', 'monitoring'],
  'sfc-incident-response': ['incident-management', 'governance', 'monitoring', 'security-automation', 'multisig-for-protocols', 'wallet-security', 'infrastructure'],
  'sfc-multisig-ops': ['multisig-for-protocols', 'wallet-security', 'opsec', 'governance', 'incident-management'],
  'sfc-treasury-ops': ['treasury-operations', 'wallet-security', 'governance', 'multisig-for-protocols', 'monitoring', 'incident-management', 'devsecops'],
};

for (const cert of certs) {
  const domains = domainMap[cert.name];
  if (!domains) { console.warn(`No domain map for ${cert.name}`); continue; }

  const candidatePages = pages.filter(p => domains.includes(p.domain));

  let brief = `# Mapping Brief: ${cert.name}\n\n`;
  brief += `## CERT CONTROLS (${cert.totalControls} controls)\n\n`;

  for (const section of cert.sections) {
    brief += `### Section: ${section.id} — ${section.title}\n\n`;
    for (const ctrl of section.controls) {
      brief += `#### ${ctrl.id}: ${ctrl.title}\n`;
      brief += `**Question:** ${ctrl.description}\n`;
      if (ctrl.baselines.length > 0) {
        brief += `**Baselines:**\n`;
        for (const b of ctrl.baselines) {
          brief += `- ${b}\n`;
        }
      }
      brief += '\n';
    }
  }

  brief += `---\n\n## CANDIDATE FRAMEWORK PAGES (${candidatePages.length} pages)\n\n`;

  let totalChars = 0;
  for (const page of candidatePages) {
    const filePath = join(PAGES_DIR, page.path.slice(1) + '.mdx');
    let content;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch {
      console.warn(`  Could not read ${filePath}`);
      continue;
    }

    // Strip frontmatter and imports for cleaner reading
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    content = content.replace(/^import\s+.*$/gm, '');
    content = content.replace(/^<TagProvider>.*$/gm, '');
    content = content.replace(/^<TagFilter\s*\/>.*$/gm, '');
    content = content.replace(/^<TagList\s+.*$/gm, '');
    content = content.replace(/^<AttributionList\s+.*$/gm, '');
    content = content.replace(/^<\/TagProvider>.*$/gm, '');
    content = content.replace(/^<ContributeFooter\s*\/>.*$/gm, '');
    content = content.trim();

    // Truncate very long pages to ~300 lines (keep structure, cut detail)
    const lines = content.split('\n');
    if (lines.length > 300) {
      content = lines.slice(0, 300).join('\n') + '\n\n[... truncated, ' + (lines.length - 300) + ' more lines ...]';
    }

    brief += `### PAGE: ${page.path}\n`;
    brief += `**Title:** ${page.title}\n`;
    brief += `**Headers:** ${page.headers.map(h => h.text).join(' | ')}\n\n`;
    brief += content + '\n\n---\n\n';
    totalChars += content.length;
  }

  writeFileSync(join(BRIEFS_DIR, `${cert.name}.md`), brief);
  const sizeKB = Math.round(brief.length / 1024);
  const estTokens = Math.round(brief.length / 4);
  console.log(`${cert.name}: ${candidatePages.length} pages, ${sizeKB}KB, ~${estTokens} tokens`);
}
