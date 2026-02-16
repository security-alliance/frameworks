#!/usr/bin/env node
/**
 * Generate QA briefs. For each cert, include:
 * - The eval results (claims to verify)
 * - The actual page content for every referenced page
 * - The control baselines
 * QA agent checks: are the coverage claims accurate?
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const REPO_ROOT = join(import.meta.dirname, '..');
const EVAL_DIR = join(REPO_ROOT, 'scripts', 'data', 'eval-results');
const QA_DIR = join(REPO_ROOT, 'scripts', 'data', 'qa-briefs');
const PAGES_DIR = join(REPO_ROOT, 'docs', 'pages');
const CERTS_DIR = join(REPO_ROOT, 'docs', 'pages', 'certs');

import { load } from 'js-yaml';

mkdirSync(QA_DIR, { recursive: true });

const evalFiles = readdirSync(EVAL_DIR).filter(f => f.endsWith('.json')).sort();

for (const file of evalFiles) {
  const certName = file.replace('.json', '');
  const evals = JSON.parse(readFileSync(join(EVAL_DIR, file), 'utf-8'));
  
  // Load original cert controls for full baselines
  const certFile = join(CERTS_DIR, `${certName}.mdx`);
  const certContent = readFileSync(certFile, 'utf-8');
  const fmMatch = certContent.match(/^---\n([\s\S]*?)\n---/);
  const fm = load(fmMatch[1]);
  
  const baselineMap = {};
  for (const section of fm.cert) {
    for (const ctrl of section.controls) {
      baselineMap[ctrl.id] = {
        title: ctrl.title,
        description: ctrl.description,
        baselines: ctrl.baselines || [],
      };
    }
  }
  
  // Collect all referenced pages
  const referencedPages = new Set();
  const controlsToQA = [];
  
  for (const ctrl of evals) {
    if (ctrl.refs.length > 0) {
      controlsToQA.push(ctrl);
      for (const ref of ctrl.refs) {
        referencedPages.add(ref.page);
      }
    }
  }
  
  // Also include a sample of "no coverage" controls for false-negative check
  const noCoverage = evals.filter(c => c.refs.length === 0);
  
  let brief = `# QA Brief: ${certName}\n\n`;
  brief += `## YOUR TASK\n\n`;
  brief += `Verify the evaluation claims below. For each control with refs:\n`;
  brief += `1. Read the ACTUAL page content (provided below)\n`;
  brief += `2. Read the control's FULL baselines\n`;
  brief += `3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?\n`;
  brief += `4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?\n`;
  brief += `5. Check: is the coverage rating ("full"/"partial") justified?\n\n`;
  brief += `Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.\n\n`;
  
  brief += `## EVALUATION CLAIMS TO VERIFY (${controlsToQA.length} controls with refs)\n\n`;
  
  for (const ctrl of controlsToQA) {
    const orig = baselineMap[ctrl.controlId];
    brief += `### ${ctrl.controlId}: ${ctrl.controlTitle}\n`;
    brief += `**Full baselines:**\n`;
    orig.baselines.forEach((b, i) => { brief += `  ${i+1}. ${b}\n`; });
    brief += `\n**Evaluator's assessment:**\n`;
    for (const ref of ctrl.refs) {
      brief += `- **${ref.page}** ${ref.header ? `→ ${ref.header}` : ''} — **${ref.coverage}**\n`;
      if (ref.baselinesMet?.length) brief += `  Met: ${ref.baselinesMet.join('; ')}\n`;
      if (ref.baselinesMissed?.length) brief += `  Missed: ${ref.baselinesMissed.join('; ')}\n`;
    }
    if (ctrl.gaps.length) {
      brief += `**Gaps:** ${ctrl.gaps.join('; ')}\n`;
    }
    brief += '\n';
  }
  
  if (noCoverage.length > 0) {
    brief += `## FALSE-NEGATIVE CHECK (${noCoverage.length} controls marked "no coverage")\n\n`;
    brief += `Verify these truly have no relevant framework page. If any page below partially covers them, note it.\n\n`;
    for (const ctrl of noCoverage) {
      const orig = baselineMap[ctrl.controlId];
      brief += `### ${ctrl.controlId}: ${ctrl.controlTitle}\n`;
      brief += `**Baselines:** ${orig.baselines.slice(0, 3).join('; ')}${orig.baselines.length > 3 ? ` (+${orig.baselines.length - 3} more)` : ''}\n\n`;
    }
  }
  
  brief += `---\n\n## FRAMEWORK PAGES (${referencedPages.size} pages)\n\n`;
  
  for (const pagePath of [...referencedPages].sort()) {
    const filePath = join(PAGES_DIR, pagePath.slice(1) + '.mdx');
    let content;
    try { content = readFileSync(filePath, 'utf-8'); } catch { continue; }
    
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    content = content.replace(/^import\s+.*$/gm, '');
    content = content.replace(/^<(TagProvider|TagFilter|TagList|AttributionList|ContributeFooter|\/TagProvider)[^>]*>.*$/gm, '');
    content = content.trim();
    
    const lines = content.split('\n');
    if (lines.length > 400) {
      content = lines.slice(0, 400).join('\n') + '\n\n[... truncated ...]';
    }
    
    brief += `### PAGE: ${pagePath}\n\n${content}\n\n---\n\n`;
  }
  
  writeFileSync(join(QA_DIR, `${certName}.md`), brief);
  const sizeKB = Math.round(brief.length / 1024);
  console.log(`${certName}: ${controlsToQA.length} to verify, ${referencedPages.size} pages, ${sizeKB}KB`);
}
