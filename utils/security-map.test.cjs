const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('fs')
const os = require('os')
const path = require('path')

const {
  loadAndValidate,
  generate,
  serializeGraph,
  coverageReport,
  formatCoverage,
} = require('./security-map-lib.cjs')


const ROOT = path.join(__dirname, '..')

function tmpDir(name) {
  return fs.mkdtempSync(path.join(os.tmpdir(), `seal-sm-${name}-`))
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`)
}

function copyProductionTaxonomy(dest) {
  const src = path.join(ROOT, 'docs', 'data', 'security-map')
  fs.mkdirSync(path.join(dest, 'nodes'), { recursive: true })
  fs.mkdirSync(path.join(dest, 'edges'), { recursive: true })
  fs.copyFileSync(path.join(src, 'taxonomy.json'), path.join(dest, 'taxonomy.json'))
  writeJson(path.join(dest, 'views.json'), {
    schemaVersion: '1.0.0',
    views: [
      {
        id: 'view-overview',
        title: 'Overview',
        summary: 'Start here.',
        kind: 'overview',
      },
    ],
  })
}

function minimalNodes() {
  return [
    {
      id: 'asset-funds',
      type: 'asset',
      title: 'Funds',
      summary: 'Value at risk.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['funds'],
    },
    {
      id: 'component-wallet',
      type: 'component',
      title: 'Wallet',
      summary: 'Holds funds.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['wallet'],
    },
    {
      id: 'surface-signing',
      type: 'attack-surface',
      title: 'Signing',
      summary: 'How transactions are signed.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['signing'],
    },
    {
      id: 'threat-key-theft',
      type: 'threat',
      title: 'Key theft',
      summary: 'An attacker steals a signing key.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['keys'],
      severity: 'high',
      severityBasis: 'Contextual default because a stolen key is authorized theft.',
    },
    {
      id: 'control-hardware-wallet',
      type: 'control',
      title: 'Hardware wallet',
      summary: 'Keys stay on dedicated hardware.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['hardware'],
      controlClass: 'preventive',
      assessmentEligible: true,
    },
    {
      id: 'guidance-wallet',
      type: 'guidance',
      title: 'Wallet page',
      summary: 'Docs for the wallet control.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['docs'],
      href: '/intro/attack-surface',
    },
  ]
}

function minimalEdges() {
  return [
    { source: 'component-wallet', target: 'surface-signing', type: 'exposes' },
    { source: 'threat-key-theft', target: 'surface-signing', type: 'targets' },
    { source: 'control-hardware-wallet', target: 'threat-key-theft', type: 'mitigates' },
    { source: 'control-hardware-wallet', target: 'guidance-wallet', type: 'documented-by' },
  ]
}

function seedMinimal(dir) {
  copyProductionTaxonomy(dir)
  writeJson(path.join(dir, 'nodes', 'core.json'), { nodes: minimalNodes() })
  writeJson(path.join(dir, 'edges', 'core.json'), { edges: minimalEdges() })
}

function pagesDir() {
  return path.join(ROOT, 'docs', 'pages')
}

function expectFail(fn, pattern) {
  assert.throws(fn, (err) => {
    assert.equal(err.code, 'SECURITY_MAP_VALIDATION')
    assert.match(err.message, pattern)
    return true
  })
}

describe('production catalogue', () => {
  it('validates and is deterministic', () => {
    const first = loadAndValidate({ root: ROOT })
    const second = loadAndValidate({ root: ROOT })
    assert.equal(serializeGraph(first.graph), serializeGraph(second.graph))
    assert.ok(first.graph.nodes.length >= 60)
    assert.ok(first.graph.edges.length >= 60)
    assert.equal(first.graph.schemaVersion, '1.0.0')
    assert.equal(first.graph.license, 'CC-BY-SA-4.0')
    assert.doesNotMatch(serializeGraph(first.graph), /\/home\/|generatedAt|C:\\/)
    const threats = first.graph.nodes.filter((n) => n.type === 'threat')
    assert.equal(threats.length, 15)
    for (const threat of threats) {
      assert.equal(threat.assessmentEligible, undefined)
      const hasTarget = first.graph.edges.some((e) => e.type === 'targets' && e.source === threat.id)
      const hasPath = first.graph.edges.some(
        (e) =>
          (e.type === 'mitigates' && e.target === threat.id) ||
          (e.type === 'documented-by' && e.source === threat.id),
      )
      assert.ok(hasTarget, `${threat.id} missing targets`)
      assert.ok(hasPath, `${threat.id} missing mitigation/guidance`)
    }
    assert.equal(first.graph.nodes.filter((n) => n.type === 'incident').length, 0)
    assert.ok(first.graph.nodes.some((n) => n.id === 'component-hardware-wallet'))
    assert.ok(
      first.graph.edges.some(
        (e) =>
          e.source === 'control-signer-isolation' &&
          e.target === 'guidance-cold-vs-hot' &&
          e.type === 'documented-by',
      ),
    )
  })
})


describe('minimal graph', () => {
  it('accepts a valid graph', () => {
    const dir = tmpDir('ok')
    seedMinimal(dir)
    const { graph } = loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true })
    assert.equal(graph.nodes.length, 6)
    const ids = graph.nodes.map((n) => n.id)
    assert.deepEqual(ids, [...ids].sort())
  })
})

describe('validation failures', () => {
  it('rejects duplicate node IDs', () => {
    const dir = tmpDir('dup')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes.push({ ...nodes[0], title: 'Copy' })
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /duplicate/,
    )
  })

  it('rejects missing edge endpoint', () => {
    const dir = tmpDir('missing')
    seedMinimal(dir)
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [...minimalEdges(), { source: 'threat-key-theft', target: 'asset-nope', type: 'targets' }],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /missing target/,
    )
  })

  it('rejects invalid edge type', () => {
    const dir = tmpDir('edgetype')
    seedMinimal(dir)
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [...minimalEdges(), { source: 'threat-key-theft', target: 'asset-funds', type: 'owns' }],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /unknown edge type/,
    )
  })

  it('rejects invalid type-to-type relationship', () => {
    const dir = tmpDir('compat')
    seedMinimal(dir)
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [
        ...minimalEdges(),
        { source: 'guidance-wallet', target: 'asset-funds', type: 'targets' },
      ],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /invalid source type/,
    )
  })

  it('rejects unknown taxonomy value', () => {
    const dir = tmpDir('tax')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes[0].domains = ['not-a-domain']
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /unknown domain/,
    )
  })

  it('rejects invalid guidance route', () => {
    const dir = tmpDir('href')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes.find((n) => n.id === 'guidance-wallet').href = '/does-not-exist/page'
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /does not resolve/,
    )
  })

  it('rejects incident without a source', () => {
    const dir = tmpDir('incident')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes.push({
      id: 'incident-example-2020',
      type: 'incident',
      title: 'Example',
      summary: 'Something happened.',
      domains: ['governance-treasury'],
      status: 'proposed',
      tags: ['incident'],
      date: '2020-01-01',
      datePrecision: 'day',
    })
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [
        ...minimalEdges(),
        { source: 'threat-key-theft', target: 'incident-example-2020', type: 'demonstrated-by' },
      ],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /requires at least one source/,
    )
  })

  it('rejects duplicate semantic edges', () => {
    const dir = tmpDir('dupedge')
    seedMinimal(dir)
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [...minimalEdges(), ...minimalEdges().slice(0, 1)],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /duplicate semantic edge/,
    )
  })

  it('rejects saved view referencing a missing node', () => {
    const dir = tmpDir('view')
    seedMinimal(dir)
    writeJson(path.join(dir, 'views.json'), {
      schemaVersion: '1.0.0',
      views: [
        {
          id: 'view-missing',
          title: 'Missing',
          summary: 'Points at nothing.',
          kind: 'entry',
          focusNodeId: 'control-does-not-exist',
        },
      ],
    })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /focusNodeId/,
    )
  })

  it('rejects assessmentEligible on a non-control', () => {
    const dir = tmpDir('assess')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes.find((n) => n.id === 'threat-key-theft').assessmentEligible = true
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /assessmentEligible is only valid on control/,
    )
  })

  it('rejects deprecatedBy pointing at a missing node', () => {
    const dir = tmpDir('dep')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes[0].status = 'deprecated'
    nodes[0].deprecatedBy = 'asset-gone'
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true }),
      /deprecatedBy/,
    )
  })

  it('rejects MDX frontmatter conflict', () => {
    const dir = tmpDir('mdx')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes.find((n) => n.id === 'guidance-wallet').href = '/demo'
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    const pages = tmpDir('pages')
    const file = path.join(pages, 'demo.mdx')
    fs.writeFileSync(
      file,
      `---
title: "Other Title | SEAL"
description: "Docs for the wallet control."
securityMap:
  id: guidance-wallet
  type: guidance
  domains:
    - governance-treasury
---
# Other Title
`,
    )
    expectFail(
      () => loadAndValidate({ dataDir: dir, pagesDir: pages, skipMdx: false }),
      /conflicts with catalogue field "title"/,
    )
  })
})

describe('generate', () => {
  it('writes only after success and is deterministic', () => {
    const dir = tmpDir('gen')
    seedMinimal(dir)
    const out = tmpDir('out')
    const jsonOut = path.join(out, 'security-map.json')
    const tsOut = path.join(out, 'securityMap.generated.ts')
    const a = generate({
      dataDir: dir,
      pagesDir: pagesDir(),
      skipMdx: true,
      jsonOut,
      tsOut,
    })
    const firstJson = fs.readFileSync(jsonOut, 'utf8')
    const firstTs = fs.readFileSync(tsOut, 'utf8')
    generate({
      dataDir: dir,
      pagesDir: pagesDir(),
      skipMdx: true,
      jsonOut,
      tsOut,
    })
    assert.equal(fs.readFileSync(jsonOut, 'utf8'), firstJson)
    assert.equal(fs.readFileSync(tsOut, 'utf8'), firstTs)
    assert.match(firstTs, /AUTO-GENERATED/)
    assert.equal(a.nodes, 6)
  })

  it('does not write on validation failure', () => {
    const dir = tmpDir('nowrite')
    seedMinimal(dir)
    const nodes = minimalNodes()
    nodes[0].id = 'not-prefixed'
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    const out = tmpDir('out-fail')
    const jsonOut = path.join(out, 'security-map.json')
    assert.throws(() =>
      generate({
        dataDir: dir,
        pagesDir: pagesDir(),
        skipMdx: true,
        jsonOut,
        tsOut: path.join(out, 'x.ts'),
      }),
    )
    assert.equal(fs.existsSync(jsonOut), false)
  })
})

describe('synthetic larger fixture', () => {
  it('validates hundreds of nodes', () => {
    const dir = tmpDir('large')
    copyProductionTaxonomy(dir)
    const nodes = []
    const edges = []
    for (let i = 0; i < 80; i += 1) {
      const n = String(i).padStart(3, '0')
      nodes.push({
        id: `asset-item-${n}`,
        type: 'asset',
        title: `Asset ${n}`,
        summary: `Synthetic asset ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
      })
      nodes.push({
        id: `component-item-${n}`,
        type: 'component',
        title: `Component ${n}`,
        summary: `Synthetic component ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
      })
      nodes.push({
        id: `surface-item-${n}`,
        type: 'attack-surface',
        title: `Surface ${n}`,
        summary: `Synthetic surface ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
      })
      nodes.push({
        id: `threat-item-${n}`,
        type: 'threat',
        title: `Threat ${n}`,
        summary: `Synthetic threat ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
        severity: 'contextual',
        severityBasis: 'Synthetic fixture.',
      })
      nodes.push({
        id: `control-item-${n}`,
        type: 'control',
        title: `Control ${n}`,
        summary: `Synthetic control ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
        controlClass: 'preventive',
        assessmentEligible: true,
      })
      nodes.push({
        id: `guidance-item-${n}`,
        type: 'guidance',
        title: `Guidance ${n}`,
        summary: `Synthetic guidance ${n} for generator scale.`,
        domains: ['infrastructure'],
        status: 'proposed',
        tags: ['synthetic'],
        href: '/intro/attack-surface',
      })
      edges.push({ source: `component-item-${n}`, target: `surface-item-${n}`, type: 'exposes' })
      edges.push({ source: `threat-item-${n}`, target: `surface-item-${n}`, type: 'targets' })
      edges.push({ source: `control-item-${n}`, target: `threat-item-${n}`, type: 'mitigates' })
      edges.push({ source: `control-item-${n}`, target: `guidance-item-${n}`, type: 'documented-by' })
    }
    writeJson(path.join(dir, 'nodes', 'core.json'), { nodes })
    writeJson(path.join(dir, 'edges', 'core.json'), { edges })
    const { graph } = loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true })
    assert.equal(graph.nodes.length, 480)
    assert.equal(graph.edges.length, 320)
  })
})

describe('coverage report', () => {
  it('lists missing controls, guidance, empty frameworks, and unshared related pages', () => {
    const dir = tmpDir('cov')
    copyProductionTaxonomy(dir)
    writeJson(path.join(dir, 'nodes', 'core.json'), {
      nodes: [
        {
          id: 'asset-funds',
          type: 'asset',
          title: 'Funds',
          summary: 'Value at risk.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['funds'],
          framework: 'alpha',
        },
        {
          id: 'component-wallet',
          type: 'component',
          title: 'Wallet',
          summary: 'Holds funds.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['wallet'],
          framework: 'alpha',
        },
        {
          id: 'surface-signing',
          type: 'attack-surface',
          title: 'Signing',
          summary: 'How transactions are signed.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['signing'],
          framework: 'alpha',
        },
        {
          id: 'threat-key-theft',
          type: 'threat',
          title: 'Key theft',
          summary: 'An attacker steals a signing key.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['keys'],
          severity: 'high',
          severityBasis: 'Stolen key is authorized theft.',
          framework: 'alpha',
        },
        {
          id: 'control-hardware-wallet',
          type: 'control',
          title: 'Hardware wallet',
          summary: 'Keys stay on dedicated hardware.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['hardware'],
          controlClass: 'preventive',
          assessmentEligible: true,
          framework: 'alpha',
        },
        {
          id: 'guidance-wallet',
          type: 'guidance',
          title: 'Wallet page',
          summary: 'Docs for the wallet control.',
          domains: ['governance-treasury'],
          status: 'proposed',
          tags: ['docs'],
          href: '/intro/attack-surface',
          framework: 'alpha',
        },
      ],
    })
    writeJson(path.join(dir, 'edges', 'core.json'), {
      edges: [
        { source: 'component-wallet', target: 'surface-signing', type: 'exposes' },
        { source: 'threat-key-theft', target: 'surface-signing', type: 'targets' },
        { source: 'control-hardware-wallet', target: 'threat-key-theft', type: 'mitigates' },
      ],
    })
    const pages = tmpDir('cov-pages')
    fs.mkdirSync(path.join(pages, 'alpha'), { recursive: true })
    fs.mkdirSync(path.join(pages, 'beta'), { recursive: true })
    fs.writeFileSync(
      path.join(pages, 'alpha', 'overview.mdx'),
      `---\ntitle: Alpha\n---\n\n# Alpha\n\n## Related frameworks\n\n- [Beta](/beta/overview): neighbor with no shared node\n`,
    )
    fs.writeFileSync(path.join(pages, 'beta', 'overview.mdx'), `---\ntitle: Beta\n---\n\n# Beta\n`)
    const { graph } = loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true })

    const report = coverageReport({ nodes: graph.nodes, edges: graph.edges, pagesDir: pages })
    assert.deepEqual(report.threatsWithoutControl, [])
    assert.deepEqual(report.controlsWithoutGuidance, ['control-hardware-wallet'])
    assert.deepEqual(report.frameworksWithZeroNodes, ['beta'])
    assert.equal(report.relatedUnshared.length, 1)
    assert.equal(report.relatedUnshared[0].page, '/alpha/overview')
    assert.equal(report.relatedUnshared[0].neighbor, '/beta/overview')
    const text = formatCoverage(report)
    assert.match(text, /control-hardware-wallet/)
    assert.match(text, /\/alpha\/overview -> \/beta\/overview/)
  })

  it('drops related-framework candidates once a typed edge joins the slices', () => {
    const dir = tmpDir('cov-shared')
    copyProductionTaxonomy(dir)
    writeJson(path.join(dir, 'nodes', 'core.json'), {
      nodes: [
        ...minimalNodes().map((node) => ({
          ...node,
          framework: node.id.startsWith('guidance') ? 'beta' : 'alpha',
        })),
      ],
    })
    writeJson(path.join(dir, 'edges', 'core.json'), { edges: minimalEdges() })
    const pages = tmpDir('cov-shared-pages')
    fs.mkdirSync(path.join(pages, 'alpha'), { recursive: true })
    fs.mkdirSync(path.join(pages, 'beta'), { recursive: true })
    fs.writeFileSync(
      path.join(pages, 'alpha', 'overview.mdx'),
      `---\ntitle: Alpha\n---\n\n# Alpha\n\n## Related frameworks\n\n- [Beta](/beta/overview): now shares documented-by\n`,
    )
    fs.writeFileSync(path.join(pages, 'beta', 'overview.mdx'), `---\ntitle: Beta\n---\n\n# Beta\n`)
    const { graph } = loadAndValidate({ dataDir: dir, pagesDir: pagesDir(), skipMdx: true })

    const report = coverageReport({ nodes: graph.nodes, edges: graph.edges, pagesDir: pages })
    assert.deepEqual(report.relatedUnshared, [])
    assert.deepEqual(report.frameworksWithZeroNodes, [])
    assert.deepEqual(report.controlsWithoutGuidance, [])
  })
})

