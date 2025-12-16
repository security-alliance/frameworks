/**
 * Generate Printable Checklists
 *
 * Reads SFC certification MDX files and generates standalone
 * print-optimized HTML checklists for each certification.
 *
 * Usage: node utils/generate-printable-checklists.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CERTS_DIR = path.join(__dirname, '../docs/pages/certs');
const OUTPUT_DIR = path.join(__dirname, '../docs/public/printable');

// Certification metadata for subtitles
const CERT_META = {
  'sfc-treasury-ops': {
    subtitle: 'Governance, access control, transaction verification, DeFi/staking risk, operational security, monitoring, vendor risk, and accounting.'
  },
  'sfc-multisig-ops': {
    subtitle: 'Multisig setup, signer management, transaction verification, key security, and emergency procedures.'
  },
  'sfc-dns-registrar': {
    subtitle: 'Domain registration security, DNS configuration, access control, and monitoring.'
  },
  'sfc-incident-response': {
    subtitle: 'Detection, response procedures, communication, containment, recovery, and post-incident review.'
  },
  'sfc-workspace-security': {
    subtitle: 'Access management, device security, network controls, and data protection.'
  },
  'sfc-devops-infrastructure': {
    subtitle: 'CI/CD security, infrastructure hardening, secrets management, and deployment controls.'
  }
};

/**
 * Generate HTML template for a printable checklist
 */
function generateHTML(title, subtitle, sections, certName) {
  // Sanitize inputs
  title = escapeHtml(title);
  subtitle = escapeHtml(subtitle);
  certName = sanitizeCertName(certName);

  const controlCount = sections.reduce((sum, s) => sum + (s.controls?.length || 0), 0);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} – Printable Checklist (SFC)</title>
  <style>
    /* ---- Page + print ---- */
    @page { size: Letter; margin: 0.35in; }
    @media print {
      .no-print { display: none !important; }
      a { color: inherit; text-decoration: none; }
    }

    /* ---- Typography ---- */
    :root {
      --ink: #111;
      --muted: #555;
      --line: #ddd;
      --chip: #f3f4f6;
      --seal-blue: #0F0A27;
      --seal-accent: #7A78FF;
    }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      color: var(--ink);
      background: #fff;
    }

    /* ---- Layout ---- */
    .page {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.25in 0.35in;
      box-sizing: border-box;
    }

    .header {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: start;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--line);
      margin-bottom: 8px;
    }

    h1 {
      margin: 0;
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    .subtitle {
      margin-top: 5px;
      font-size: 10.6px;
      color: var(--muted);
      line-height: 1.35;
      max-width: 70ch;
    }

    .meta {
      display: grid;
      gap: 6px;
      justify-items: end;
      font-size: 10px;
      color: var(--muted);
    }
    .meta .row {
      display: grid;
      grid-template-columns: auto 110px;
      gap: 8px;
      align-items: center;
    }
    .meta .line {
      border-bottom: 1px solid var(--line);
      height: 12px;
    }

    /* Multi-column layout - flows top-to-bottom, then left-to-right */
    .columns {
      column-count: 3;
      column-gap: 12px;
    }

    .section {
      break-inside: avoid;
      page-break-inside: avoid;
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 8px 8px 6px;
      margin: 0 0 10px;
      box-sizing: border-box;
    }

    .cont {
      font-weight: 400;
      color: var(--muted);
      font-size: 10px;
    }

    .section h2 {
      margin: 0 0 6px;
      font-size: 12px;
      letter-spacing: 0.01em;
    }

    ul.controls {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 5px;
    }

    /* Checkbox row */
    .control {
      display: grid;
      grid-template-columns: 14px 1fr;
      gap: 8px;
      align-items: start;
    }

    .box {
      width: 12px;
      height: 12px;
      border: 1.5px solid #222;
      border-radius: 2px;
      margin-top: 2px;
      box-sizing: border-box;
    }

    .ctitle {
      font-size: 10.2px;
      font-weight: 650;
      line-height: 1.25;
    }

    .cdesc {
      margin-top: 2px;
      font-size: 9.3px;
      line-height: 1.25;
      color: #333;
    }

    .notes {
      margin-top: 5px;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      align-items: end;
      font-size: 9px;
      color: var(--muted);
    }
    .notes .nline {
      border-bottom: 1px solid var(--line);
      height: 10px;
    }

    .footer {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      font-size: 9.5px;
      color: var(--muted);
    }
    .footer a {
      color: var(--seal-accent);
      text-decoration: none;
    }

    /* Print button */
    .toolbar {
      position: fixed;
      top: 12px;
      right: 12px;
      display: flex;
      gap: 8px;
      z-index: 100;
    }
    .toolbar button {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      background: var(--seal-blue);
      color: white;
    }
    .toolbar button:hover {
      background: var(--seal-accent);
    }
  </style>
</head>
<body>
  <div class="toolbar no-print">
    <button onclick="window.print()">Print / Save PDF</button>
  </div>

  <main class="page">
    <header class="header">
      <div>
        <h1>${title} — Security Checklist</h1>
        <div class="subtitle">${subtitle}</div>
      </div>
      <div class="meta">
        <div class="row"><div>Org:</div><div class="line"></div></div>
        <div class="row"><div>Owner:</div><div class="line"></div></div>
        <div class="row"><div>Date:</div><div class="line"></div></div>
      </div>
    </header>

    <section class="columns">
${sections.flatMap((s, i) => {
  const SPLIT_THRESHOLD = 6; // Only split if more than this many controls
  const controls = s.controls || [];

  // Only split into max 2 chunks, and only if over threshold
  let chunks;
  if (controls.length > SPLIT_THRESHOLD) {
    const midpoint = Math.ceil(controls.length / 2);
    chunks = [controls.slice(0, midpoint), controls.slice(midpoint)];
  } else {
    chunks = [controls];
  }

  // Generate bubble for each chunk
  return chunks.map((chunk, chunkIdx) => {
    const isFirst = chunkIdx === 0;
    const title = isFirst
      ? `${i + 1}. ${escapeHtml(s.title)}`
      : `${i + 1}. <span class="cont">(cont.)</span>`;

    return `
      <div class="section">
        <h2>${title}</h2>
        <ul class="controls">
${chunk.filter(c => c && typeof c === 'object').map(c => `
          <li class="control">
            <div class="box"></div>
            <div>
              <div class="ctitle">${escapeHtml(c.title)}</div>
              <div class="cdesc">${escapeHtml(c.description)}</div>
            </div>
          </li>`).join('')}
        </ul>${isFirst ? `
        <div class="notes"><div>Notes:</div><div class="nline"></div></div>` : ''}
      </div>`;
  });
}).join('')}
    </section>

    <footer class="footer">
      <a href="https://frameworks.securityalliance.org/certs/${certName}">frameworks.securityalliance.org</a>
    </footer>
  </main>
</body>
</html>`;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize certName for safe use in URLs and filenames
 * Only allow alphanumeric, hyphens, and underscores
 */
function sanitizeCertName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.replace(/[^a-zA-Z0-9_-]/g, '');
}

/**
 * Main execution
 */
function main() {
  console.log('Generating printable checklists...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find all SFC cert files
  const certFiles = fs.readdirSync(CERTS_DIR)
    .filter(f => f.startsWith('sfc-') && f.endsWith('.mdx'));

  if (certFiles.length === 0) {
    console.log('No SFC certification files found.');
    return;
  }

  let generated = 0;

  certFiles.forEach(file => {
    const filePath = path.join(CERTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    if (!data.cert || !Array.isArray(data.cert)) {
      console.log(`  Skipping ${file} - no cert data found`);
      return;
    }

    const certName = file.replace('.mdx', '');
    const title = data.title || certName;
    const meta = CERT_META[certName] || {};
    const subtitle = meta.subtitle || `SEAL Framework Checklist for ${title}`;

    const html = generateHTML(title, subtitle, data.cert, certName);
    const outputPath = path.join(OUTPUT_DIR, `${certName}.html`);

    fs.writeFileSync(outputPath, html);

    const controlCount = data.cert.reduce((sum, s) => sum + (s.controls?.length || 0), 0);
    console.log(`  ✓ ${certName}.html (${data.cert.length} sections, ${controlCount} controls)`);
    generated++;
  });

  console.log(`\n✅ Generated ${generated} printable checklists in docs/public/printable/`);
}

main();
