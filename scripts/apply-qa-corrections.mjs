#!/usr/bin/env node
/**
 * Apply QA corrections to eval results.
 * For downgraded controls: change coverage from "full" to "partial" or remove refs.
 * For upgraded controls: change coverage from "partial" to "full".
 * For false-negatives: add the missing ref.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const REPO_ROOT = join(import.meta.dirname, '..');
const EVAL_DIR = join(REPO_ROOT, 'scripts', 'data', 'eval-results');
const QA_DIR = join(REPO_ROOT, 'scripts', 'data', 'qa-results');

const qaFiles = readdirSync(QA_DIR).filter(f => f.endsWith('.json')).sort();

let totalCorrections = 0;

for (const file of qaFiles) {
  const certName = file.replace('.json', '');
  const evalPath = join(EVAL_DIR, file);
  const evals = JSON.parse(readFileSync(evalPath, 'utf-8'));
  const qaResults = JSON.parse(readFileSync(join(QA_DIR, file), 'utf-8'));
  
  let corrections = 0;
  
  for (const qa of qaResults) {
    if (qa.verdict === 'confirmed') continue;
    
    const ctrl = evals.find(c => c.controlId === qa.controlId);
    if (!ctrl) continue;
    
    if (qa.verdict === 'downgraded') {
      // Downgrade: full→partial, or partial→remove, or remove refs entirely
      if (qa.qaCoverage === 'none' || qa.qaCoverage === 'no-coverage') {
        ctrl.refs = [];
        // Move any baselinesMet to gaps
        for (const ref of ctrl.refs) {
          if (ref.baselinesMet) {
            ctrl.gaps.push(...ref.baselinesMet);
          }
        }
      } else {
        for (const ref of ctrl.refs) {
          if (ref.coverage === 'full') {
            ref.coverage = 'partial';
          }
        }
      }
      corrections++;
    } else if (qa.verdict === 'upgraded') {
      for (const ref of ctrl.refs) {
        if (ref.coverage === 'partial') {
          ref.coverage = 'full';
        }
      }
      corrections++;
    } else if (qa.verdict === 'false-negative') {
      // QA found coverage that evaluator missed
      // Add a note but we can't add specific refs without the page details
      // Mark in gaps that coverage exists
      if (ctrl.refs.length === 0 && qa.qaCoverage && qa.qaCoverage !== 'none') {
        // The QA agent identified partial coverage exists
        // We'll add a placeholder ref based on the QA notes
        ctrl.refs.push({
          page: qa.notes.match(/IDE page|CI\/CD page/) ? '/devsecops/integrated-development-environments' : '',
          header: null,
          coverage: 'partial',
          baselinesMet: ['See QA notes: ' + qa.notes.substring(0, 200)],
          baselinesMissed: [],
        });
        // Filter out empty page refs
        ctrl.refs = ctrl.refs.filter(r => r.page);
      }
      corrections++;
    }
  }
  
  writeFileSync(evalPath, JSON.stringify(evals, null, 2));
  console.log(`${certName}: ${corrections} corrections applied`);
  totalCorrections += corrections;
}

console.log(`\nTotal: ${totalCorrections} corrections applied across all certs`);
