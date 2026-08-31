#!/usr/bin/env node
/**
 * Objective content-structure checks for SEAL Security Frameworks MDX pages.
 * Structural rules: docs/pages/contribute/content-model.mdx
 * Editorial rules (including heading sentence case): style-and-terminology.mdx
 * Editorial judgment remains human-reviewed.
 *
 * Catalog H2 names below are matched case-insensitively so unmigrated Title Case
 * still validates; preferred spelling is sentence case (e.g. "Further reading",
 * "What this framework covers"). Strict Title-Case lint for freeform headings is
 * intentionally not automated yet.
 *
 * Usage:
 *   node utils/validate-content.cjs
 *   node utils/validate-content.cjs --path docs/pages/supply-chain
 *   node utils/validate-content.cjs --json
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const ROOT = process.cwd()
const PAGES = path.join(ROOT, 'docs', 'pages')

const args = process.argv.slice(2)
const jsonOut = args.includes('--json')
const pathIdx = args.indexOf('--path')
const onlyPath = pathIdx >= 0 ? args[pathIdx + 1] : null

const SKIP_DIR_NAMES = new Set(['config'])
const GENERATED_BASENAMES = new Set(['index.mdx'])

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name.startsWith('.') || SKIP_DIR_NAMES.has(ent.name)) continue
      // opsec/old is legacy archive material; still validate unless skipped later
      walk(p, out)
    } else if (ent.name.endsWith('.mdx')) {
      out.push(p)
    }
  }
  return out
}

function readException(body) {
  const m = body.match(/content-model-exception:([\s\S]*?)\*\//)
  if (!m) return null
  const block = m[1]
  const type = (block.match(/type:\s*(\S+)/) || [])[1] || 'unspecified'
  const reason = (block.match(/reason:\s*(.+)/) || [])[1] || ''
  return { type, reason: reason.trim() }
}

function stripCode(body) {
  const lines = body.split('\n')
  let fence = null
  return lines
    .map((line) => {
      const m = line.match(/^\s*(`{3,}|~{3,})/)
      if (m) {
        if (fence === null) {
          fence = m[1][0]
          return ''
        }
        if (m[1][0] === fence) {
          fence = null
          return ''
        }
      }
      return fence === null ? line : ''
    })
    .join('\n')
}

function headings(body) {
  const hs = []
  const lines = stripCode(body).split('\n')
  lines.forEach((line, i) => {
    const m = line.match(/^(#{1,6})\s+(.+)/)
    if (m) hs.push({ level: m[1].length, text: m[2].trim(), line: i + 1 })
  })
  return hs
}

function hasHeadingSkip(hs) {
  let prev = 0
  for (const h of hs) {
    if (prev && h.level > prev + 1) return true
    prev = h.level
  }
  return false
}

function staticChecklistCount(body) {
  const sans = stripCode(body).replace(/<Checklist[\s\S]*?<\/Checklist>/gi, '')
  return (sans.match(/^- \[[ xX]\] /gm) || []).length
}

function hasCanonicalTakeaway(body) {
  return />\s*🔑\s*\*\*Key Takeaway\*\*\s*:/u.test(body)
}

function hasAnyTakeaway(body) {
  return /Key Takeaway/i.test(body) || /🔑/.test(body)
}

function hasPageMap(hs) {
  // Preferred labels (sentence case): What this framework covers, Framework structure,
  // Contents, Table of contents. "Pages" remains accepted for legacy maps.
  return hs.some(
    (h) =>
      h.level === 2 &&
      /^(pages|what this framework covers|framework structure|contents|table of contents)$/i.test(
        h.text.replace(/[?:].*$/, '').trim(),
      ),
  )
}

function hasFurther(hs) {
  // Preferred label (sentence case): Further reading. Also: Resources, References,
  // Related frameworks, Tools. Do not use "Further Reading & Tools".
  return hs.some(
    (h) =>
      h.level === 2 &&
      /^(further reading|resources|references|related frameworks|tools)$/i.test(
        h.text.replace(/[?:].*$/, '').trim(),
      ),
  )
}

function isOverviewFile(filePath) {
  return path.basename(filePath) === 'overview.mdx'
}

function classifyLoose(filePath, body, exception) {
  if (exception?.type) return exception.type
  const rel = path.relative(PAGES, filePath).replace(/\\/g, '/')
  if (rel.startsWith('certs/')) return 'certification'
  if (rel.startsWith('contribute/') || rel.startsWith('intro/')) return 'project-doc'
  if (/\/templates\//.test(rel) || /template\.mdx$/.test(rel)) return 'template'
  if (/runbook/i.test(rel) || /playbook/i.test(rel)) return 'runbook-or-playbook'
  if (isOverviewFile(filePath)) return 'framework-overview'
  if (/<Checklist\b/.test(body) && body.length < 4000) return 'checklist-heavy'
  return 'standard'
}

function requiresTakeaway(kind) {
  return !['certification', 'template', 'project-doc'].includes(kind)
}

function requiresFurther(kind) {
  return ['framework-overview', 'standard', 'runbook-or-playbook', 'checklist-heavy'].includes(kind)
}

function requiresComponents(kind) {
  return kind !== 'certification'
}

function analyze(filePath) {
  const rel = path.relative(ROOT, filePath)
  const raw = fs.readFileSync(filePath, 'utf8')
  const issues = []

  if (GENERATED_BASENAMES.has(path.basename(filePath))) {
    return { path: rel, generated: true, issues: [] }
  }

  let fm = {}
  let body = raw
  try {
    const parsed = matter(raw)
    fm = parsed.data || {}
    body = parsed.content || ''
  } catch (e) {
    return { path: rel, issues: [`frontmatter_parse_error:${e.message}`] }
  }

  const exception = readException(body)
  const kind = classifyLoose(filePath, body, exception)
  const hs = headings(body)

  if (!fm.title) issues.push('missing_title')
  else if (!String(fm.title).includes('|')) issues.push('title_missing_suffix')

  if (!fm.description) issues.push('missing_description')
  else {
    const n = String(fm.description).length
    if (n < 120) issues.push(`description_short:${n}`)
    if (n > 170) issues.push(`description_long:${n}`)
  }

  if (!exception || exception.type !== 'certification') {
    if (!fm.tags || !Array.isArray(fm.tags) || fm.tags.length === 0) {
      // certs often empty — still flag for standard pages
      if (requiresComponents(kind)) issues.push('missing_tags')
    }
    if (!fm.contributors) {
      if (requiresComponents(kind)) issues.push('missing_contributors')
    }
  }

  if (requiresComponents(kind) && !exception?.type?.includes('no-chrome')) {
    if (!/<TagList\b/.test(body)) issues.push('missing_TagList')
    if (!/<AttributionList\b/.test(body)) issues.push('missing_AttributionList')
    if (!/<ContributeFooter\s*\/>/.test(body)) issues.push('missing_ContributeFooter')
  }

  if (requiresTakeaway(kind)) {
    if (!hasAnyTakeaway(body)) issues.push('missing_key_takeaway')
    else if (!hasCanonicalTakeaway(body)) issues.push('key_takeaway_noncanonical')
  }

  if (hasHeadingSkip(hs)) issues.push('heading_level_skip')

  const staticCl = staticChecklistCount(body)
  if (staticCl > 0) issues.push(`static_checklist_items:${staticCl}`)

  if (isOverviewFile(filePath) && kind === 'framework-overview') {
    if (!hasPageMap(hs)) issues.push('overview_missing_page_map')
  }

  if (requiresFurther(kind) && !hasFurther(hs)) {
    // overviews may use Related frameworks as equivalent — hasFurther covers it
    issues.push('missing_further_or_related')
  }

  const h2 = hs.filter((h) => h.level === 2).length
  if (h2 > 8 && kind !== 'project-doc') issues.push(`too_many_h2:${h2}`)

  return {
    path: rel,
    kind,
    exception,
    issues,
    generated: false,
  }
}

function main() {
  const start = onlyPath
    ? path.isAbsolute(onlyPath)
      ? onlyPath
      : path.join(ROOT, onlyPath)
    : PAGES

  const files = walk(start)
  const results = files.map(analyze).filter((r) => !r.generated)
  const failed = results.filter((r) => r.issues.length > 0)

  const summary = {
    checked: results.length,
    failed: failed.length,
    passed: results.length - failed.length,
  }

  if (jsonOut) {
    console.log(JSON.stringify({ summary, results: failed }, null, 2))
  } else {
    console.log(`validate-content: checked ${summary.checked} pages`)
    console.log(`  passed: ${summary.passed}`)
    console.log(`  failed: ${summary.failed}`)
    if (failed.length) {
      console.log('')
      // group by first issue
      for (const r of failed.slice(0, 200)) {
        console.log(`${r.path}`)
        for (const i of r.issues) console.log(`  - ${i}`)
      }
      if (failed.length > 200) {
        console.log(`... and ${failed.length - 200} more pages with issues`)
      }
      console.log('')
      console.log(
        'Note: baseline content debt is expected until frameworks are normalized.',
      )
      console.log(
        'Filter with --path docs/pages/<framework> while migrating a family.',
      )
    }
  }

  // Exit 0 by default so CI is not hard-broken until migration completes.
  // Pass --strict to fail on any issue.
  if (args.includes('--strict') && failed.length) process.exit(1)
}

main()
