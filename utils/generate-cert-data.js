/**
 * Generate Cert Data JSON
 *
 * Extracts all SFC certification section/control data from MDX frontmatter
 * and writes a JSON file for use by the ExportAllCerts component.
 *
 * Usage: node utils/generate-cert-data.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CERTS_DIR = path.join(__dirname, '../docs/pages/certs');
const OUTPUT_PATH = path.join(__dirname, '../docs/public/cert-data.json');

const CERT_ORDER = [
  { file: 'sfc-devops-infrastructure.mdx', label: 'DevOps & Infrastructure' },
  { file: 'sfc-dns-registrar.mdx', label: 'DNS Registrar' },
  { file: 'sfc-incident-response.mdx', label: 'Incident Response' },
  { file: 'sfc-multisig-ops.mdx', label: 'Multisig Operations' },
  { file: 'sfc-treasury-ops.mdx', label: 'Treasury Operations' },
  { file: 'sfc-workspace-security.mdx', label: 'Workspace Security' },
];

function main() {
  console.log('Generating cert data JSON...\n');

  const certs = [];

  for (const { file, label } of CERT_ORDER) {
    const filePath = path.join(CERTS_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  Skipping ${file} - not found`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    if (!data.cert || !Array.isArray(data.cert)) {
      console.log(`  Skipping ${file} - no cert data`);
      continue;
    }

    const name = file.replace('.mdx', '');
    const controlCount = data.cert.reduce((sum, s) => sum + (s.controls?.length || 0), 0);

    certs.push({
      name,
      label,
      sections: data.cert,
    });

    console.log(`  ✓ ${name} (${data.cert.length} sections, ${controlCount} controls)`);
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(certs, null, 2));

  const totalControls = certs.reduce((sum, c) => 
    sum + c.sections.reduce((s, sec) => s + (sec.controls?.length || 0), 0), 0
  );
  console.log(`\n✅ Generated cert-data.json (${certs.length} certs, ${totalControls} total controls)`);
}

main();
