#!/usr/bin/env node
const { coverageReport, formatCoverage, loadAndValidate, ValidationError } = require('./security-map-lib.cjs')
const path = require('path')

function main() {
  const root = process.cwd()
  const json = process.argv.includes('--json')
  try {
    const { graph } = loadAndValidate({ root })
    const pagesDir = path.join(root, 'docs', 'pages')
    const report = coverageReport({
      nodes: graph.nodes,
      edges: graph.edges,
      pagesDir,
    })
    if (json) {
      console.log(JSON.stringify(report, null, 2))
    } else {
      console.log(formatCoverage(report).trimEnd())
    }
  } catch (err) {
    if (err instanceof ValidationError || err.code === 'SECURITY_MAP_VALIDATION') {
      console.error(err.message)
      process.exit(1)
    }
    console.error(err)
    process.exit(1)
  }
}

main()
