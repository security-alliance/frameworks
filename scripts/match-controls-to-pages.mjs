#!/usr/bin/env node
/**
 * Match cert controls to framework pages using keyword extraction + TF-IDF-like scoring.
 * 
 * For each control baseline, extracts key terms and scores framework pages by relevance.
 * Outputs candidate mappings for human review.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const REPO_ROOT = join(import.meta.dirname, '..');
const DATA_DIR = join(REPO_ROOT, 'scripts', 'data');
const OUT_DIR = join(DATA_DIR, 'mappings');
mkdirSync(OUT_DIR, { recursive: true });

const certs = JSON.parse(readFileSync(join(DATA_DIR, 'cert-controls.json'), 'utf-8'));
const pages = JSON.parse(readFileSync(join(DATA_DIR, 'framework-pages.json'), 'utf-8'))
  .filter(p => !p.path.includes('/old/') && !p.path.includes('/intro/') && !p.path.includes('/contribute/'));

// Domain mapping — which framework domains are candidates for each cert
const domainMap = {
  'sfc-workspace-security': ['opsec', 'encryption', 'privacy', 'user-team-security', 'guides', 'iam', 'awareness', 'dprk-it-workers', 'community-management'],
  'sfc-dns-registrar': ['opsec', 'infrastructure', 'community-management', 'front-end-web-app', 'monitoring', 'devsecops'],
  'sfc-devops-infrastructure': ['devsecops', 'supply-chain', 'security-automation', 'secure-software-development', 'infrastructure', 'security-testing', 'monitoring'],
  'sfc-incident-response': ['incident-management', 'governance', 'monitoring', 'security-automation', 'multisig-for-protocols', 'wallet-security', 'infrastructure'],
  'sfc-multisig-ops': ['multisig-for-protocols', 'wallet-security', 'opsec', 'governance', 'incident-management'],
  'sfc-treasury-ops': ['treasury-operations', 'wallet-security', 'governance', 'multisig-for-protocols', 'monitoring', 'incident-management', 'devsecops'],
};

// ── Build page content index ───────────────────────────────────────
const PAGES_DIR = join(REPO_ROOT, 'docs', 'pages');
const pageIndex = new Map();

for (const page of pages) {
  const filePath = join(PAGES_DIR, page.path.slice(1) + '.mdx');
  try {
    let content = readFileSync(filePath, 'utf-8').toLowerCase();
    // Strip frontmatter and imports
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    content = content.replace(/^import\s+.*$/gm, '');
    content = content.replace(/<[^>]+>/g, ' ');
    content = content.replace(/```[\s\S]*?```/g, ' ');
    
    // Extract sections by header
    const sections = [];
    const headerRegex = /^(#{2,3})\s+(.+)$/gm;
    let lastIdx = 0;
    let lastHeader = null;
    let match;
    
    while ((match = headerRegex.exec(content)) !== null) {
      if (lastHeader !== null) {
        sections.push({
          header: lastHeader,
          text: content.slice(lastIdx, match.index),
        });
      }
      lastHeader = match[2].trim();
      lastIdx = match.index;
    }
    if (lastHeader !== null) {
      sections.push({ header: lastHeader, text: content.slice(lastIdx) });
    }
    
    pageIndex.set(page.path, {
      fullText: content,
      sections,
      title: page.title,
      headers: page.headers,
      domain: page.domain,
    });
  } catch {
    // skip unreadable
  }
}

// ── Keyword extraction from baselines ──────────────────────────────
// Stop words to ignore
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'need', 'must', 'ought',
  'and', 'or', 'but', 'nor', 'not', 'so', 'yet', 'both', 'either',
  'neither', 'each', 'every', 'all', 'any', 'few', 'more', 'most',
  'other', 'some', 'such', 'no', 'only', 'own', 'same', 'than',
  'too', 'very', 'just', 'because', 'as', 'until', 'while',
  'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
  'through', 'during', 'before', 'after', 'above', 'below', 'to',
  'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
  'again', 'further', 'then', 'once', 'here', 'there', 'when',
  'where', 'why', 'how', 'what', 'which', 'who', 'whom', 'this',
  'that', 'these', 'those', 'i', 'me', 'my', 'we', 'our', 'you',
  'your', 'he', 'his', 'she', 'her', 'it', 'its', 'they', 'their',
  'if', 'whether', 'also', 'e.g.', 'e.g', 'eg', 'etc', 'ie', 'i.e.',
  'including', 'defined', 'documented', 'procedures', 'requirements',
  'ensure', 'maintained', 'reviewed', 'established', 'least', 'based',
]);

function extractKeyTerms(text) {
  // Extract multi-word phrases first (2-3 word combos)
  const phrases = [];
  const phrasePatterns = [
    /multi-?factor\s+auth\w*/gi,
    /access\s+control\w*/gi,
    /incident\s+respon\w*/gi,
    /key\s+manage\w*/gi,
    /key\s+rotat\w*/gi,
    /hardware\s+wallet\w*/gi,
    /cold\s+storage/gi,
    /hot\s+wallet\w*/gi,
    /smart\s+contract\w*/gi,
    /social\s+engineer\w*/gi,
    /supply\s+chain/gi,
    /full\s+disk\s+encrypt\w*/gi,
    /on-?call/gi,
    /role-?based/gi,
    /zero[\s-]?trust/gi,
    /break[\s-]?glass/gi,
    /dns[\s-]?sec/gi,
    /ci[\s/]?cd/gi,
    /two[\s-]?factor/gi,
    /phishing/gi,
    /playbook\w*/gi,
    /escalat\w*/gi,
    /multisig/gi,
    /multi-?sig/gi,
    /threshold/gi,
    /signer\w*/gi,
    /treasury/gi,
    /custod\w*/gi,
    /defi/gi,
    /staking/gi,
    /governance/gi,
    /credential\w*/gi,
    /password\w*/gi,
    /encrypt\w*/gi,
    /decrypt\w*/gi,
    /backup\w*/gi,
    /disaster\s+recovery/gi,
    /business\s+continuity/gi,
    /penetration\s+test\w*/gi,
    /vulnerability\s+scan\w*/gi,
    /code\s+review\w*/gi,
    /branch\s+protect\w*/gi,
    /secret\s+manage\w*/gi,
    /log\s+retention/gi,
    /tamper[\s-]?eviden\w*/gi,
    /alert\w*/gi,
    /monitor\w*/gi,
    /paging/gi,
    /on-?chain/gi,
    /off-?chain/gi,
    /time[\s-]?lock\w*/gi,
    /registrar/gi,
    /domain\s+lock\w*/gi,
    /dnssec/gi,
    /spf/gi,
    /dkim/gi,
    /dmarc/gi,
    /certificate\s+transparency/gi,
    /endpoint\s+protect\w*/gi,
    /mdm/gi,
    /edr/gi,
    /device\s+manage\w*/gi,
    /remote\s+wipe/gi,
    /insider\s+threat/gi,
    /security\s+train\w*/gi,
    /war\s+room/gi,
    /post[\s-]?mortem/gi,
    /drill\w*/gi,
    /tabletop/gi,
    /simulation/gi,
    /containment/gi,
    /forensic\w*/gi,
    /triage/gi,
  ];
  
  for (const pat of phrasePatterns) {
    let m;
    while ((m = pat.exec(text)) !== null) {
      phrases.push(m[0].toLowerCase().trim());
    }
  }
  
  // Also extract single significant words
  const words = text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w));
  
  return { phrases, words };
}

function scorePageForControl(pageData, controlTerms) {
  const { fullText, sections } = pageData;
  let score = 0;
  const matchedSections = new Set();
  
  // Score phrase matches (high value)
  for (const phrase of controlTerms.phrases) {
    const regex = new RegExp(phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    const matches = (fullText.match(regex) || []).length;
    if (matches > 0) {
      score += matches * 3;
      // Find which section contains this
      for (const sec of sections) {
        if (sec.text.match(regex)) {
          matchedSections.add(sec.header);
        }
      }
    }
  }
  
  // Score word matches (lower value)
  for (const word of controlTerms.words) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = (fullText.match(regex) || []).length;
    if (matches > 0) {
      score += Math.min(matches, 5); // cap per-word contribution
    }
  }
  
  return { score, matchedSections: [...matchedSections] };
}

// ── Process each cert ──────────────────────────────────────────────
for (const cert of certs) {
  const domains = domainMap[cert.name];
  if (!domains) continue;
  
  const candidatePages = [...pageIndex.entries()]
    .filter(([path]) => {
      const domain = path.split('/')[1];
      return domains.includes(domain);
    });
  
  const mapping = [];
  
  for (const section of cert.sections) {
    for (const ctrl of section.controls) {
      // Combine description + baselines for keyword extraction
      const allText = [ctrl.description, ...ctrl.baselines].join(' ');
      const terms = extractKeyTerms(allText);
      
      // Score each candidate page
      const scored = candidatePages.map(([path, data]) => {
        const { score, matchedSections } = scorePageForControl(data, terms);
        return { path, score, matchedSections, title: data.title };
      })
      .filter(s => s.score > 5) // minimum threshold
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // top 8 candidates
      
      mapping.push({
        controlId: ctrl.id,
        controlTitle: ctrl.title,
        description: ctrl.description,
        baselineCount: ctrl.baselines.length,
        baselines: ctrl.baselines,
        candidates: scored.map(s => ({
          page: s.path,
          title: s.title,
          score: s.score,
          matchedSections: s.matchedSections,
        })),
      });
    }
  }
  
  writeFileSync(join(OUT_DIR, `${cert.name}.json`), JSON.stringify(mapping, null, 2));
  
  // Summary
  const withMatches = mapping.filter(m => m.candidates.length > 0).length;
  const noMatches = mapping.filter(m => m.candidates.length === 0).length;
  console.log(`\n${cert.name}: ${mapping.length} controls`);
  console.log(`  ${withMatches} with candidates, ${noMatches} without`);
  
  // Show top match per control
  for (const m of mapping) {
    const top = m.candidates[0];
    if (top) {
      console.log(`  ${m.controlId} → ${top.page} (score: ${top.score}, sections: ${top.matchedSections.slice(0,2).join(', ') || 'general'})`);
    } else {
      console.log(`  ${m.controlId} → NO MATCH`);
    }
  }
}
