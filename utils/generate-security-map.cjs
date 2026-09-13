#!/usr/bin/env node
const { generate, ValidationError } = require('./security-map-lib.cjs')

function main() {
  try {
    const result = generate({ root: process.cwd() })
    console.log(
      `Generated security map (${result.nodes} nodes, ${result.edges} edges, ${result.views} views)`,
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
