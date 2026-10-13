#!/usr/bin/env node
const { loadAndValidate, ValidationError } = require('./security-map-lib.cjs')

function main() {
  try {
    const { graph } = loadAndValidate({ root: process.cwd() })
    console.log(
      `Security map OK (${graph.nodes.length} nodes, ${graph.edges.length} edges, ${graph.views.length} views)`,
    )
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
