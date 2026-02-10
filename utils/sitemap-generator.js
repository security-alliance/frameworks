/*
  Generates sitemap.xml for the .org site
  - Main branch (.org): full sitemap with all page URLs
  - Dev branch (.dev): empty sitemap (pages shouldn't be indexed)
  - Only runs on Cloudflare Pages
*/

const fs = require('fs');
const path = require('path');

const MAIN_SITE_URL = 'https://frameworks.securityalliance.org';
const workspaceRoot = process.cwd();

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function findDistDir() {
  const candidates = [
    path.join(workspaceRoot, 'docs', 'dist'),
    path.join(workspaceRoot, 'dist'),
  ];
  return candidates.find((dir) => fs.existsSync(dir));
}

function extractSidebarLinks() {
  const configPath = path.join(workspaceRoot, 'vocs.config.ts');
  if (!fs.existsSync(configPath)) return [];

  const lines = fs.readFileSync(configPath, 'utf8').split('\n');
  const links = [];

  for (const line of lines) {
    const match = line.match(/link:\s*(['"])(\/[^'"]+)\1/);
    if (!match) continue;
    if (!line.includes('dev:') || !line.includes('true')) {
      links.push(match[2]);
    }
  }
  return links;
}

function generateSitemap(urls) {
  const entries = urls
    .map((loc) => `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

async function main() {
  if (!process.env.CF_PAGES) {
    console.log('Skipping: not on Cloudflare Pages');
    return;
  }

  const isMain = process.env.CF_PAGES_BRANCH === 'main';
  const distDir = findDistDir();

  if (!distDir) {
    console.error('No dist directory with sitemap.xml found');
    process.exit(1);
  }

  let content;
  if (!isMain) {
    content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>';
    console.log('Generated empty sitemap for dev branch');
  } else {
    const urls = extractSidebarLinks().map((link) => `${MAIN_SITE_URL}${link}`);
    content = generateSitemap(urls);
    console.log(`Generated sitemap: ${urls.length} URLs`);
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), content);
  console.log('Sitemap written to:', path.join(distDir, 'sitemap.xml'));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
