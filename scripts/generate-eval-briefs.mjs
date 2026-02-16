#!/usr/bin/env node
/**
 * Generate focused evaluation briefs per cert.
 * Each brief contains: cert controls + baselines + ONLY the content of their top candidate pages.
 * Much smaller than the domain-wide briefs — typically 30-80KB.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const REPO_ROOT = join(import.meta.dirname, '..');
const DATA_DIR = join(REPO_ROOT, 'scripts', 'data');
const MAPPINGS_DIR = join(DATA_DIR, 'mappings');
const BRIEFS_DIR = join(DATA_DIR, 'eval-briefs');
const PAGES_DIR = join(REPO_ROOT, 'docs', 'pages');

mkdirSync(BRIEFS_DIR, { recursive: true });

const certFiles = ['sfc-devops-infrastructure', 'sfc-dns-registrar', 'sfc-incident-response',
  'sfc-multisig-ops', 'sfc-treasury-ops', 'sfc-workspace-security'];

for (const certName of certFiles) {
  const mapping = JSON.parse(readFileSync(join(MAPPINGS_DIR, `${certName}.json`), 'utf-8'));
  
  // Collect unique candidate pages (top 3 per control)
  const uniquePages = new Map();
  for (const ctrl of mapping) {
    for (const cand of ctrl.candidates.slice(0, 3)) {
      if (!uniquePages.has(cand.page)) {
        uniquePages.set(cand.page, { title: cand.title, controls: [] });
      }
      uniquePages.get(cand.page).controls.push(ctrl.controlId);
    }
  }
  
  // Build brief
  let brief = `# Evaluation Brief: ${certName}\n\n`;
  brief += `## TASK\n\n`;
  brief += `For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.\n`;
  brief += `A page must SUBSTANTIVELY address the baseline — not just mention related keywords.\n`;
  brief += `Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.\n\n`;
  brief += `## CONTROLS (${mapping.length} total)\n\n`;
  
  for (const ctrl of mapping) {
    brief += `### ${ctrl.controlId}: ${ctrl.controlTitle}\n`;
    brief += `**Question:** ${ctrl.description}\n`;
    brief += `**Baselines (${ctrl.baselines.length}):**\n`;
    ctrl.baselines.forEach((b, i) => {
      brief += `  ${i + 1}. ${b}\n`;
    });
    brief += `**Candidate pages:** ${ctrl.candidates.slice(0, 3).map(c => c.page).join(', ')}\n\n`;
  }
  
  brief += `---\n\n## FRAMEWORK PAGES (${uniquePages.size} unique)\n\n`;
  
  for (const [pagePath, info] of uniquePages) {
    const filePath = join(PAGES_DIR, pagePath.slice(1) + '.mdx');
    let content;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch {
      brief += `### PAGE: ${pagePath}\n**Could not read file**\n\n---\n\n`;
      continue;
    }
    
    // Strip frontmatter, imports, JSX tags
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    content = content.replace(/^import\s+.*$/gm, '');
    content = content.replace(/^<(TagProvider|TagFilter|TagList|AttributionList|ContributeFooter|\/TagProvider)[^>]*>.*$/gm, '');
    content = content.trim();
    
    // Truncate very long pages
    const lines = content.split('\n');
    if (lines.length > 400) {
      content = lines.slice(0, 400).join('\n') + '\n\n[... truncated ...]';
    }
    
    brief += `### PAGE: ${pagePath}\n`;
    brief += `**Title:** ${info.title}\n`;
    brief += `**Referenced by controls:** ${info.controls.join(', ')}\n\n`;
    brief += content + '\n\n---\n\n';
  }
  
  writeFileSync(join(BRIEFS_DIR, `${certName}.md`), brief);
  const sizeKB = Math.round(brief.length / 1024);
  console.log(`${certName}: ${mapping.length} controls, ${uniquePages.size} pages, ${sizeKB}KB`);
}
