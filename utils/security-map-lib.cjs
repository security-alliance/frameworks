#!/usr/bin/env node
/**
 * SEAL Security Map catalogue loader, validator, and generator.
 *
 * Ordinary authoring errors throw ValidationError (no stack). Unexpected
 * exceptions keep their stack for debugging.
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const SCHEMA_VERSION = '1.0.0'
const GRAPH_TITLE = 'SEAL Security Map'
const LICENSE = 'CC-BY-SA-4.0'
const SOURCE_REPOSITORY = 'https://github.com/security-alliance/frameworks'

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const TYPE_PREFIX = {
  asset: 'asset',
  component: 'component',
  'attack-surface': 'surface',
  threat: 'threat',
  control: 'control',
  response: 'response',
  guidance: 'guidance',
  incident: 'incident',
}

const NODE_REQUIRED = ['id', 'type', 'title', 'summary', 'domains', 'status', 'tags']
const NODE_OPTIONAL = [
  'roles',
  'lifecycle',
  'controlClass',
  'severity',
  'severityBasis',
  'href',
  'sources',
  'aliases',
  'framework',
  'assessmentEligible',
  'deprecatedBy',
  'date',
  'datePrecision',
  'dateEnd',
  'loss',
]
const NODE_KEYS = new Set([...NODE_REQUIRED, ...NODE_OPTIONAL])
const EDGE_KEYS = new Set(['source', 'target', 'type', 'rationale', 'status', 'sources'])
const VIEW_KEYS = new Set([
  'id',
  'title',
  'summary',
  'kind',
  'focusNodeId',
  'domain',
  'visibleTypes',
  'entryNodeIds',
])
const SOURCE_ITEM_KEYS = new Set(['url', 'title', 'publisher'])
const LOSS_KEYS = new Set(['currency', 'amount', 'amountMin', 'amountMax', 'asOf', 'uncertainty', 'source'])
const DATE_PRECISIONS = new Set(['day', 'month', 'year', 'range'])
const MDX_SECURITY_MAP_KEYS = new Set([
  'id',
  'type',
  'title',
  'summary',
  'domains',
  'status',
  'tags',
  'roles',
  'lifecycle',
  'aliases',
  'framework',
  'relations',
])

const TOP_LEVEL_GRAPH_KEYS = [
  'schemaVersion',
  'title',
  'license',
  'sourceRepository',
  'nodes',
  'edges',
  'taxonomies',
  'views',
]

class ValidationError extends Error {
  constructor(diagnostics) {
    const list = Array.isArray(diagnostics) ? diagnostics : [diagnostics]
    const lines = list.map((d) => formatDiagnostic(d))
    const summary = `${list.length} security-map validation error${list.length === 1 ? '' : 's'}`
    super(`${summary}\n${lines.join('\n')}`)
    this.name = 'ValidationError'
    this.code = 'SECURITY_MAP_VALIDATION'
    this.diagnostics = list
  }
}

function formatDiagnostic(d) {
  if (typeof d === 'string') return d
  const loc = d.file ? `${d.file}` : 'security-map'
  const rec = d.record ? `: ${d.record}` : ''
  return `${loc}${rec}: ${d.message}`
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function readJson(filePath) {
  let raw
  try {
    raw = fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    throw new ValidationError({ file: filePath, message: `cannot read file: ${err.message}` })
  }
  try {
    return JSON.parse(raw)
  } catch (err) {
    throw new ValidationError({ file: filePath, message: `invalid JSON: ${err.message}` })
  }
}

function listJsonFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.json'))
    .sort()
    .map((name) => path.join(dir, name))
}

function walkMdx(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'config') continue
      walkMdx(full, out)
    } else if (entry.isFile() && entry.name.endsWith('.mdx') && entry.name !== 'index.mdx') {
      out.push(full)
    }
  }
  return out
}

function fileToHref(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath).split(path.sep).join('/')
  return `/${rel.replace(/\.mdx$/, '')}`
}

function stripTitleSuffix(title) {
  return String(title || '')
    .replace(/\s*\|\s*(Security Alliance|SEAL)\s*$/i, '')
    .trim()
}

function hrefExists(pagesDir, href) {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return false
  if (href.includes('://') || href.includes('?') || href.includes('#')) return false
  const rel = href.replace(/^\//, '')
  const mdx = path.join(pagesDir, `${rel}.mdx`)
  const index = path.join(pagesDir, rel, 'index.mdx')
  return fs.existsSync(mdx) || fs.existsSync(index)
}

function origin(file, record) {
  return { file, record }
}

function push(diagnostics, file, record, message) {
  diagnostics.push({ file, record, message })
}

function expectStringArray(diagnostics, file, record, field, value, { min = 0 } = {}) {
  if (!Array.isArray(value)) {
    push(diagnostics, file, record, `${field} must be an array of strings`)
    return []
  }
  const out = []
  for (const item of value) {
    if (typeof item !== 'string' || !item.trim()) {
      push(diagnostics, file, record, `${field} entries must be non-empty strings`)
    } else {
      out.push(item)
    }
  }
  if (out.length < min) {
    push(diagnostics, file, record, `${field} must have at least ${min} value${min === 1 ? '' : 's'}`)
  }
  return out
}

function checkUnknownKeys(diagnostics, file, record, obj, allowed) {
  for (const key of Object.keys(obj)) {
    if (!allowed.has(key)) {
      push(diagnostics, file, record, `unknown key "${key}"`)
    }
  }
}

function idsFromTaxonomy(list) {
  return list.map((item) => item.id)
}

function loadTaxonomy(dataDir, diagnostics) {
  const file = path.join(dataDir, 'taxonomy.json')
  const raw = readJson(file)
  if (raw.schemaVersion !== SCHEMA_VERSION) {
    push(diagnostics, file, null, `unsupported schemaVersion "${raw.schemaVersion}"`)
  }
  const taxonomy = {
    domains: idsFromTaxonomy(raw.domains || []),
    roles: idsFromTaxonomy(raw.roles || []),
    lifecycle: idsFromTaxonomy(raw.lifecycle || []),
    nodeTypes: idsFromTaxonomy(raw.nodeTypes || []),
    edgeTypes: idsFromTaxonomy(raw.edgeTypes || []),
    controlClasses: idsFromTaxonomy(raw.controlClasses || []),
    severities: idsFromTaxonomy(raw.severities || []),
    statuses: idsFromTaxonomy(raw.statuses || []),
    edgeCompat: {},
    records: raw,
  }
  for (const edge of raw.edgeTypes || []) {
    taxonomy.edgeCompat[edge.id] = {
      sources: new Set(edge.sources || []),
      targets: new Set(edge.targets || []),
    }
  }
  return taxonomy
}

function normalizeNode(raw, file, diagnostics) {
  if (!isPlainObject(raw)) {
    push(diagnostics, file, null, 'node must be an object')
    return null
  }
  const record = raw.id ? `node "${raw.id}"` : 'node'
  checkUnknownKeys(diagnostics, file, record, raw, NODE_KEYS)
  for (const field of NODE_REQUIRED) {
    if (!hasOwn(raw, field)) {
      push(diagnostics, file, record, `missing required field "${field}"`)
    }
  }
  if (typeof raw.id !== 'string' || !ID_PATTERN.test(raw.id)) {
    push(diagnostics, file, record, `id must be lowercase kebab-case, got "${raw.id}"`)
  }
  if (typeof raw.title !== 'string' || !raw.title.trim()) {
    push(diagnostics, file, record, 'title must be a non-empty string')
  }
  if (typeof raw.summary !== 'string' || !raw.summary.trim()) {
    push(diagnostics, file, record, 'summary must be a non-empty string')
  }
  const node = {
    id: raw.id,
    type: raw.type,
    title: typeof raw.title === 'string' ? raw.title.trim() : raw.title,
    summary: typeof raw.summary === 'string' ? raw.summary.trim() : raw.summary,
    domains: Array.isArray(raw.domains) ? raw.domains.slice() : raw.domains,
    status: raw.status,
    tags: Array.isArray(raw.tags) ? raw.tags.slice() : raw.tags,
    _origin: origin(file, record),
  }
  for (const field of NODE_OPTIONAL) {
    if (hasOwn(raw, field)) node[field] = raw[field]
  }
  if (node.assessmentEligible === undefined) node.assessmentEligible = false
  return node
}

function normalizeEdge(raw, file, diagnostics) {
  if (!isPlainObject(raw)) {
    push(diagnostics, file, null, 'edge must be an object')
    return null
  }
  const record = `edge ${raw.type || '?'} ${raw.source || '?'} -> ${raw.target || '?'}`
  checkUnknownKeys(diagnostics, file, record, raw, EDGE_KEYS)
  for (const field of ['source', 'target', 'type']) {
    if (typeof raw[field] !== 'string' || !raw[field]) {
      push(diagnostics, file, record, `missing or invalid "${field}"`)
    }
  }
  const edge = {
    source: raw.source,
    target: raw.target,
    type: raw.type,
    _origin: origin(file, record),
  }
  if (raw.rationale) edge.rationale = raw.rationale
  if (raw.status) edge.status = raw.status
  if (raw.sources) edge.sources = raw.sources
  return edge
}

function loadCatalogueNodesAndEdges(dataDir, diagnostics) {
  const nodes = []
  const edges = []
  for (const file of listJsonFiles(path.join(dataDir, 'nodes'))) {
    const raw = readJson(file)
    const list = Array.isArray(raw) ? raw : raw.nodes
    if (!Array.isArray(list)) {
      push(diagnostics, file, null, 'expected { "nodes": [...] }')
      continue
    }
    for (const item of list) {
      const node = normalizeNode(item, file, diagnostics)
      if (node) nodes.push(node)
    }
  }
  for (const file of listJsonFiles(path.join(dataDir, 'edges'))) {
    const raw = readJson(file)
    const list = Array.isArray(raw) ? raw : raw.edges
    if (!Array.isArray(list)) {
      push(diagnostics, file, null, 'expected { "edges": [...] }')
      continue
    }
    for (const item of list) {
      const edge = normalizeEdge(item, file, diagnostics)
      if (edge) edges.push(edge)
    }
  }
  return { nodes, edges }
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return a === b
  if (a.length !== b.length) return false
  const as = [...a].map(String).sort()
  const bs = [...b].map(String).sort()
  return as.every((v, i) => v === bs[i])
}

function mergeField(diagnostics, file, record, existing, incoming, field) {
  if (!hasOwn(incoming, field) || incoming[field] === undefined) return
  if (!hasOwn(existing, field) || existing[field] === undefined) {
    existing[field] = incoming[field]
    return
  }
  const left = existing[field]
  const right = incoming[field]
  const same = Array.isArray(left) ? arraysEqual(left, right) : left === right
  if (!same) {
    push(
      diagnostics,
      file,
      record,
      `conflicts with catalogue field "${field}"`,
    )
  }
}

function loadMdxGraph(pagesDir, diagnostics) {
  const nodes = []
  const edges = []
  for (const file of walkMdx(pagesDir)) {
    let parsed
    try {
      parsed = matter.read(file)
    } catch (err) {
      push(diagnostics, file, 'frontmatter', `parse failure: ${err.message}`)
      continue
    }
    const sm = parsed.data && parsed.data.securityMap
    if (!sm) continue
    if (!isPlainObject(sm)) {
      push(diagnostics, file, 'securityMap', 'must be an object')
      continue
    }
    checkUnknownKeys(diagnostics, file, 'securityMap', sm, MDX_SECURITY_MAP_KEYS)
    if (typeof sm.id !== 'string' || !sm.id) {
      push(diagnostics, file, 'securityMap', 'missing id')
      continue
    }
    const type = sm.type || 'guidance'
    const href = fileToHref(pagesDir, file)
    const title = sm.title || stripTitleSuffix(parsed.data.title)
    const summary = sm.summary || (parsed.data.description || '').trim()
    const node = normalizeNode(
      {
        id: sm.id,
        type,
        title,
        summary,
        domains: sm.domains || [],
        status: sm.status || 'proposed',
        tags: sm.tags || [],
        roles: sm.roles,
        lifecycle: sm.lifecycle,
        aliases: sm.aliases,
        framework: sm.framework,
        href,
      },
      file,
      diagnostics,
    )
    if (node) {
      node._fromMdx = true
      nodes.push(node)
    }
    const relations = sm.relations
    if (relations !== undefined) {
      if (!Array.isArray(relations)) {
        push(diagnostics, file, 'securityMap.relations', 'must be an array')
      } else {
        relations.forEach((rel, index) => {
          if (!isPlainObject(rel) || typeof rel.type !== 'string') {
            push(diagnostics, file, `securityMap.relations[${index}]`, 'must be an object with type')
            return
          }
          const source = rel.source || sm.id
          const target = rel.target || sm.id
          if (source === target) {
            push(
              diagnostics,
              file,
              `securityMap.relations[${index}]`,
              'relation needs a source or target other than this node',
            )
            return
          }
          const edge = normalizeEdge({ ...rel, source, target }, file, diagnostics)
          if (edge) edges.push(edge)
        })
      }
    }
  }
  return { nodes, edges }
}

function mergeNodes(catalogueNodes, mdxNodes, diagnostics) {
  const byId = new Map()
  for (const node of catalogueNodes) {
    if (!node || !node.id) continue
    if (byId.has(node.id)) {
      const prev = byId.get(node.id)
      push(diagnostics, node._origin.file, `node "${node.id}"`, `duplicate of ${prev._origin.file}`)
      continue
    }
    byId.set(node.id, node)
  }
  for (const node of mdxNodes) {
    if (!node || !node.id) continue
    if (!byId.has(node.id)) {
      byId.set(node.id, node)
      continue
    }
    const existing = byId.get(node.id)
    const record = `node "${node.id}"`
    const file = node._origin.file
    mergeField(diagnostics, file, record, existing, node, 'type')
    mergeField(diagnostics, file, record, existing, node, 'title')
    mergeField(diagnostics, file, record, existing, node, 'summary')
    mergeField(diagnostics, file, record, existing, node, 'status')
    mergeField(diagnostics, file, record, existing, node, 'href')
    mergeField(diagnostics, file, record, existing, node, 'domains')
    mergeField(diagnostics, file, record, existing, node, 'tags')
    mergeField(diagnostics, file, record, existing, node, 'roles')
    mergeField(diagnostics, file, record, existing, node, 'lifecycle')
    if (node.href && !existing.href) existing.href = node.href
    existing._fromMdx = true
  }
  return [...byId.values()]
}

function validateSources(diagnostics, file, record, sources, { required = false } = {}) {
  if (sources === undefined) {
    if (required) push(diagnostics, file, record, 'requires at least one source')
    return
  }
  if (!Array.isArray(sources) || sources.length === 0) {
    push(diagnostics, file, record, 'sources must be a non-empty array')
    return
  }
  sources.forEach((src, i) => {
    if (!isPlainObject(src)) {
      push(diagnostics, file, record, `sources[${i}] must be an object`)
      return
    }
    checkUnknownKeys(diagnostics, file, `${record} sources[${i}]`, src, SOURCE_ITEM_KEYS)
    for (const field of ['url', 'title', 'publisher']) {
      if (typeof src[field] !== 'string' || !src[field].trim()) {
        push(diagnostics, file, record, `sources[${i}].${field} must be a non-empty string`)
      }
    }
    if (typeof src.url === 'string' && !/^https?:\/\//.test(src.url)) {
      push(diagnostics, file, record, `sources[${i}].url must be an http(s) URL`)
    }
  })
}

function validateNode(node, taxonomy, pagesDir, diagnostics) {
  const file = node._origin.file
  const record = `node "${node.id}"`
  const prefix = TYPE_PREFIX[node.type]
  if (!taxonomy.nodeTypes.includes(node.type)) {
    push(diagnostics, file, record, `unknown type "${node.type}"`)
  } else if (prefix && node.id && !node.id.startsWith(`${prefix}-`)) {
    push(diagnostics, file, record, `id must start with "${prefix}-"`)
  }
  if (!taxonomy.statuses.includes(node.status)) {
    push(diagnostics, file, record, `unknown status "${node.status}"`)
  }
  const domains = expectStringArray(diagnostics, file, record, 'domains', node.domains, { min: 1 })
  for (const domain of domains) {
    if (!taxonomy.domains.includes(domain)) {
      push(diagnostics, file, record, `unknown domain "${domain}"`)
    }
  }
  const tags = expectStringArray(diagnostics, file, record, 'tags', node.tags)
  if (new Set(tags).size !== tags.length) {
    push(diagnostics, file, record, 'duplicate tags')
  }
  if (node.roles) {
    for (const role of expectStringArray(diagnostics, file, record, 'roles', node.roles)) {
      if (!taxonomy.roles.includes(role)) push(diagnostics, file, record, `unknown role "${role}"`)
    }
  }
  if (node.lifecycle) {
    for (const life of expectStringArray(diagnostics, file, record, 'lifecycle', node.lifecycle)) {
      if (!taxonomy.lifecycle.includes(life)) {
        push(diagnostics, file, record, `unknown lifecycle "${life}"`)
      }
    }
  }
  if (node.controlClass !== undefined) {
    if (node.type !== 'control') {
      push(diagnostics, file, record, 'controlClass is only valid on control nodes')
    } else if (!taxonomy.controlClasses.includes(node.controlClass)) {
      push(diagnostics, file, record, `unknown controlClass "${node.controlClass}"`)
    }
  }
  if (node.assessmentEligible) {
    if (node.type !== 'control') {
      push(diagnostics, file, record, 'assessmentEligible is only valid on control nodes')
    }
  }
  if (node.severity !== undefined) {
    if (node.type !== 'threat') {
      push(diagnostics, file, record, 'severity is only valid on threat nodes')
    } else if (!taxonomy.severities.includes(node.severity)) {
      push(diagnostics, file, record, `unknown severity "${node.severity}"`)
    } else if (node.severity !== 'contextual' && (!node.severityBasis || !String(node.severityBasis).trim())) {
      push(diagnostics, file, record, 'severity requires severityBasis explaining that the value is contextual')
    }
  }
  if (node.type === 'guidance') {
    if (typeof node.href !== 'string' || !node.href.startsWith('/') || node.href.startsWith('//')) {
      push(diagnostics, file, record, 'guidance requires a valid internal href')
    } else if (!hrefExists(pagesDir, node.href)) {
      push(diagnostics, file, record, `internal href "${node.href}" does not resolve to a documentation page`)
    }
  } else if (node.href) {
    if (typeof node.href !== 'string' || !node.href.startsWith('/') || !hrefExists(pagesDir, node.href)) {
      push(diagnostics, file, record, `href "${node.href}" does not resolve to a documentation page`)
    }
  }
  if (node.aliases) {
    expectStringArray(diagnostics, file, record, 'aliases', node.aliases)
  }
  if (node.deprecatedBy && typeof node.deprecatedBy !== 'string') {
    push(diagnostics, file, record, 'deprecatedBy must be a node id')
  }
  if (node.status === 'deprecated' && !node.deprecatedBy) {
    // allowed: deprecation without replacement, but deprecatedBy if present is checked later
  }
  if (node.type === 'incident') {
    if (!node.date || typeof node.date !== 'string') {
      push(diagnostics, file, record, 'incident requires date')
    }
    if (!node.datePrecision || !DATE_PRECISIONS.has(node.datePrecision)) {
      push(diagnostics, file, record, 'incident requires datePrecision (day|month|year|range)')
    }
    validateSources(diagnostics, file, record, node.sources, { required: true })
    if (node.loss !== undefined) {
      if (!isPlainObject(node.loss)) {
        push(diagnostics, file, record, 'loss must be an object')
      } else {
        checkUnknownKeys(diagnostics, file, `${record} loss`, node.loss, LOSS_KEYS)
        if (!node.loss.currency || !node.loss.asOf || !node.loss.uncertainty || !node.loss.source) {
          push(
            diagnostics,
            file,
            record,
            'loss requires currency, asOf, uncertainty, and source',
          )
        }
      }
    }
  } else if (node.sources) {
    validateSources(diagnostics, file, record, node.sources)
  }
}

function edgeId(type, source, target) {
  return `${type}:${source}:${target}`
}

function validateGraphRecords({ nodes, edges, views, taxonomy, pagesDir }) {
  const diagnostics = []
  const byId = new Map()
  const aliasToId = new Map()

  for (const node of nodes) {
    if (!node || !node.id) continue
    if (byId.has(node.id)) {
      const prev = byId.get(node.id)
      push(diagnostics, node._origin.file, `node "${node.id}"`, `duplicate of ${prev._origin.file}`)
      continue
    }
    byId.set(node.id, node)
    validateNode(node, taxonomy, pagesDir, diagnostics)
    if (Array.isArray(node.aliases)) {
      for (const alias of node.aliases) {
        if (byId.has(alias) && alias !== node.id) {
          push(diagnostics, node._origin.file, `node "${node.id}"`, `alias "${alias}" collides with a node id`)
        }
        if (aliasToId.has(alias) && aliasToId.get(alias) !== node.id) {
          push(
            diagnostics,
            node._origin.file,
            `node "${node.id}"`,
            `alias "${alias}" collides with node "${aliasToId.get(alias)}"`,
          )
        } else {
          aliasToId.set(alias, node.id)
        }
      }
    }
  }

  for (const node of nodes) {
    if (node.deprecatedBy && !byId.has(node.deprecatedBy)) {
      push(
        diagnostics,
        node._origin.file,
        `node "${node.id}"`,
        `deprecatedBy "${node.deprecatedBy}" does not exist`,
      )
    }
  }

  const seenEdges = new Set()
  const relatedSeen = new Set()
  for (const edge of edges) {
    if (!edge) continue
    const file = edge._origin.file
    const record = `edge ${edge.type} ${edge.source} -> ${edge.target}`
    const id = edgeId(edge.type, edge.source, edge.target)
    if (seenEdges.has(id)) {
      push(diagnostics, file, record, 'duplicate semantic edge')
      continue
    }
    seenEdges.add(id)
    if (!byId.has(edge.source)) {
      push(diagnostics, file, record, `missing source "${edge.source}"`)
    }
    if (!byId.has(edge.target)) {
      push(diagnostics, file, record, `missing target "${edge.target}"`)
    }
    const compat = taxonomy.edgeCompat[edge.type]
    if (!compat) {
      push(diagnostics, file, record, `unknown edge type "${edge.type}"`)
    } else {
      const srcNode = byId.get(edge.source)
      const tgtNode = byId.get(edge.target)
      if (srcNode && !compat.sources.has(srcNode.type)) {
        push(
          diagnostics,
          file,
          record,
          `invalid source type "${srcNode.type}" for "${edge.type}"`,
        )
      }
      if (tgtNode && !compat.targets.has(tgtNode.type)) {
        push(
          diagnostics,
          file,
          record,
          `invalid target type "${tgtNode.type}" for "${edge.type}"`,
        )
      }
    }
    if (edge.type === 'related-to') {
      const key = [edge.source, edge.target].sort().join('::')
      if (relatedSeen.has(key)) {
        push(diagnostics, file, record, 'duplicate related-to pair')
      }
      relatedSeen.add(key)
    }
    if (edge.status && !taxonomy.statuses.includes(edge.status)) {
      push(diagnostics, file, record, `unknown status "${edge.status}"`)
    }
    if (edge.rationale !== undefined && (typeof edge.rationale !== 'string' || !edge.rationale.trim())) {
      push(diagnostics, file, record, 'rationale must be a non-empty string when present')
    }
    validateSources(diagnostics, file, record, edge.sources)
    const srcNode = byId.get(edge.source)
    const tgtNode = byId.get(edge.target)
    if (edge.type === 'demonstrated-by' && tgtNode && tgtNode.type === 'incident') {
      if (!tgtNode.sources || tgtNode.sources.length === 0) {
        push(diagnostics, file, record, 'demonstrated-by requires a sourced incident')
      }
    }
    if (
      edge.type === 'demonstrated-by' &&
      srcNode &&
      /root cause|caused by/i.test(edge.rationale || '') &&
      (!edge.sources || edge.sources.length === 0) &&
      (!tgtNode || !tgtNode.sources || tgtNode.sources.length === 0)
    ) {
      push(diagnostics, file, record, 'root-cause claim requires sources')
    }
  }

  const migratedThreats = nodes.filter((n) => n.type === 'threat')
  for (const threat of migratedThreats) {
    const hasTarget = edges.some((e) => e.type === 'targets' && e.source === threat.id)
    const hasMitigation = edges.some(
      (e) =>
        (e.type === 'mitigates' && e.target === threat.id) ||
        (e.type === 'documented-by' && e.source === threat.id),
    )
    if (!hasTarget) {
      push(
        diagnostics,
        threat._origin.file,
        `node "${threat.id}"`,
        'threat has no targets relationship',
      )
    }
    if (!hasMitigation) {
      push(
        diagnostics,
        threat._origin.file,
        `node "${threat.id}"`,
        'threat has neither mitigates nor documented-by path',
      )
    }
  }

  for (const view of views) {
    const file = view._origin ? view._origin.file : 'views.json'
    const record = `view "${view.id}"`
    if (typeof view.id !== 'string' || !ID_PATTERN.test(view.id) || !view.id.startsWith('view-')) {
      push(diagnostics, file, record, 'id must be kebab-case with view- prefix')
    }
    if (!view.title || !view.summary) {
      push(diagnostics, file, record, 'title and summary are required')
    }
    if (view.focusNodeId && !byId.has(view.focusNodeId)) {
      push(diagnostics, file, record, `focusNodeId "${view.focusNodeId}" does not exist`)
    }
    if (view.domain && !taxonomy.domains.includes(view.domain)) {
      push(diagnostics, file, record, `unknown domain "${view.domain}"`)
    }
    if (view.visibleTypes) {
      for (const t of expectStringArray(diagnostics, file, record, 'visibleTypes', view.visibleTypes)) {
        if (!taxonomy.nodeTypes.includes(t)) {
          push(diagnostics, file, record, `unknown visible type "${t}"`)
        }
      }
    }
    if (view.entryNodeIds) {
      for (const id of expectStringArray(diagnostics, file, record, 'entryNodeIds', view.entryNodeIds)) {
        if (!byId.has(id)) push(diagnostics, file, record, `entry node "${id}" does not exist`)
      }
    }
  }

  return diagnostics
}

function loadViews(dataDir, diagnostics) {
  const file = path.join(dataDir, 'views.json')
  const raw = readJson(file)
  if (raw.schemaVersion && raw.schemaVersion !== SCHEMA_VERSION) {
    push(diagnostics, file, null, `unsupported schemaVersion "${raw.schemaVersion}"`)
  }
  const list = Array.isArray(raw.views) ? raw.views : []
  return list.map((view) => {
    if (!isPlainObject(view)) {
      push(diagnostics, file, null, 'view must be an object')
      return view
    }
    checkUnknownKeys(diagnostics, file, `view "${view.id || '?'}"`, view, VIEW_KEYS)
    return { ...view, _origin: origin(file, `view "${view.id}"`) }
  })
}

function stripInternal(obj) {
  const out = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('_')) continue
    out[key] = value
  }
  return out
}

function sortObject(obj, keyOrder) {
  const out = {}
  for (const key of keyOrder) {
    if (obj[key] !== undefined) out[key] = obj[key]
  }
  for (const key of Object.keys(obj).sort()) {
    if (out[key] === undefined && obj[key] !== undefined) out[key] = obj[key]
  }
  return out
}

function publicNode(node) {
  const cleaned = stripInternal(node)
  if (cleaned.assessmentEligible === false && cleaned.type !== 'control') {
    delete cleaned.assessmentEligible
  }
  return sortObject(cleaned, [
    'id',
    'type',
    'title',
    'summary',
    'domains',
    'status',
    'tags',
    'roles',
    'lifecycle',
    'controlClass',
    'assessmentEligible',
    'severity',
    'severityBasis',
    'href',
    'aliases',
    'framework',
    'sources',
    'deprecatedBy',
    'date',
    'datePrecision',
    'dateEnd',
    'loss',
  ])
}

function publicEdge(edge) {
  const cleaned = stripInternal(edge)
  cleaned.id = edgeId(edge.type, edge.source, edge.target)
  if (!cleaned.status) cleaned.status = 'proposed'
  return sortObject(cleaned, ['id', 'source', 'target', 'type', 'rationale', 'status', 'sources'])
}

function publicView(view) {
  return sortObject(stripInternal(view), [
    'id',
    'title',
    'summary',
    'kind',
    'focusNodeId',
    'domain',
    'visibleTypes',
    'entryNodeIds',
  ])
}

function publicTaxonomies(records) {
  const pick = (list) =>
    (list || []).map((item) => sortObject({ id: item.id, title: item.title, summary: item.summary }, ['id', 'title', 'summary']))
  return {
    domains: pick(records.domains),
    roles: pick(records.roles),
    lifecycle: pick(records.lifecycle),
    nodeTypes: (records.nodeTypes || []).map((item) =>
      sortObject({ id: item.id, title: item.title, prefix: item.prefix }, ['id', 'title', 'prefix']),
    ),
    edgeTypes: (records.edgeTypes || []).map((item) =>
      sortObject(
        { id: item.id, title: item.title, direction: item.direction },
        ['id', 'title', 'direction'],
      ),
    ),
    controlClasses: pick(records.controlClasses),
    severities: pick(records.severities),
    statuses: pick(records.statuses),
  }
}

function buildPublicGraph({ nodes, edges, views, taxonomy }) {
  const sortedNodes = [...nodes].sort((a, b) => a.id.localeCompare(b.id)).map(publicNode)
  const sortedEdges = [...edges]
    .sort((a, b) => {
      const t = a.type.localeCompare(b.type)
      if (t) return t
      const s = a.source.localeCompare(b.source)
      if (s) return s
      return a.target.localeCompare(b.target)
    })
    .map(publicEdge)
  const sortedViews = [...views].map(publicView)
  const graph = {}
  for (const key of TOP_LEVEL_GRAPH_KEYS) {
    if (key === 'schemaVersion') graph[key] = SCHEMA_VERSION
    else if (key === 'title') graph[key] = GRAPH_TITLE
    else if (key === 'license') graph[key] = LICENSE
    else if (key === 'sourceRepository') graph[key] = SOURCE_REPOSITORY
    else if (key === 'nodes') graph[key] = sortedNodes
    else if (key === 'edges') graph[key] = sortedEdges
    else if (key === 'taxonomies') graph[key] = publicTaxonomies(taxonomy.records)
    else if (key === 'views') graph[key] = sortedViews
  }
  return graph
}

function serializeGraph(graph) {
  return `${JSON.stringify(graph, null, 2)}\n`
}

function generatedTs(graph) {
  const json = JSON.stringify(graph, null, 2)
  return `/* AUTO-GENERATED by utils/generate-security-map.cjs. Do not edit. */\nimport type { SecurityMapGraph } from './types'\n\nexport const securityMapGraph = ${json} as SecurityMapGraph\n`
}

function loadAndValidate(options = {}) {
  const root = options.root || process.cwd()
  const dataDir = options.dataDir || path.join(root, 'docs', 'data', 'security-map')
  const pagesDir = options.pagesDir || path.join(root, 'docs', 'pages')
  const diagnostics = []

  if (!fs.existsSync(dataDir)) {
    throw new ValidationError({ file: dataDir, message: 'catalogue directory does not exist' })
  }

  const taxonomy = loadTaxonomy(dataDir, diagnostics)
  const catalogue = loadCatalogueNodesAndEdges(dataDir, diagnostics)
  const mdx = options.skipMdx ? { nodes: [], edges: [] } : loadMdxGraph(pagesDir, diagnostics)
  const nodes = mergeNodes(catalogue.nodes, mdx.nodes, diagnostics)
  const edges = [...catalogue.edges, ...mdx.edges]
  const views = loadViews(dataDir, diagnostics)
  diagnostics.push(...validateGraphRecords({ nodes, edges, views, taxonomy, pagesDir }))

  if (diagnostics.length) {
    throw new ValidationError(diagnostics)
  }

  const graph = buildPublicGraph({ nodes, edges, views, taxonomy })
  return { graph, nodes, edges, views, taxonomy }
}

function atomicWrite(filePath, contents) {
  const dir = path.dirname(filePath)
  fs.mkdirSync(dir, { recursive: true })
  const tmp = `${filePath}.${process.pid}.tmp`
  fs.writeFileSync(tmp, contents, 'utf8')
  fs.renameSync(tmp, filePath)
}

function generate(options = {}) {
  const root = options.root || process.cwd()
  const { graph } = loadAndValidate(options)
  const jsonPath = options.jsonOut || path.join(root, 'public', 'security-map.json')
  const tsPath = options.tsOut || path.join(root, 'components', 'security-map', 'securityMap.generated.ts')
  const json = serializeGraph(graph)
  const ts = generatedTs(graph)
  if (!options.dryRun) {
    atomicWrite(jsonPath, json)
    atomicWrite(tsPath, ts)
  }
  return {
    nodes: graph.nodes.length,
    edges: graph.edges.length,
    views: graph.views.length,
    jsonPath,
    tsPath,
    graph,
  }
}

function frameworkFromHref(href) {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return null
  const first = href.replace(/^\//, '').split('/')[0]
  return first || null
}

function listFrameworkIds(pagesDir) {
  if (!pagesDir || !fs.existsSync(pagesDir)) return []
  return fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .filter((entry) => fs.existsSync(path.join(pagesDir, entry.name, 'overview.mdx')))
    .map((entry) => entry.name)
    .sort()
}

function relatedFrameworkSection(body) {
  const lines = String(body || '').split('\n')
  const start = lines.findIndex((line) => line.trim() === '## Related frameworks')
  if (start < 0) return ''
  const out = []
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^## /.test(lines[i])) break
    out.push(lines[i])
  }
  return out.join('\n')
}

function parseRelatedFrameworkHrefs(body) {
  const section = relatedFrameworkSection(body)
  if (!section) return []
  const hrefs = []
  const re = /\[[^\]]*\]\((\/[^)\s#]+)(?:#[^)]*)?\)/g
  let match
  while ((match = re.exec(section))) {
    hrefs.push(match[1])
  }
  return [...new Set(hrefs)]
}

function nodeFrameworks(node) {
  const out = new Set()
  if (node.framework) out.add(node.framework)
  const fromHref = frameworkFromHref(node.href)
  if (fromHref) out.add(fromHref)
  return out
}

function sliceIds(nodes, frameworkId) {
  return new Set(nodes.filter((node) => nodeFrameworks(node).has(frameworkId)).map((node) => node.id))
}

function slicesShare(idsA, idsB, edges) {
  for (const id of idsA) {
    if (idsB.has(id)) return true
  }
  for (const edge of edges) {
    if ((idsA.has(edge.source) && idsB.has(edge.target)) || (idsB.has(edge.source) && idsA.has(edge.target))) {
      return true
    }
  }
  return false
}

function coverageReport({ nodes, edges, pagesDir }) {
  const graphNodes = nodes || []
  const graphEdges = edges || []

  const threatsWithoutControl = graphNodes
    .filter((node) => node.type === 'threat')
    .filter((node) => !graphEdges.some((edge) => edge.type === 'mitigates' && edge.target === node.id))
    .map((node) => node.id)
    .sort()

  const controlsWithoutGuidance = graphNodes
    .filter((node) => node.type === 'control')
    .filter((node) => !graphEdges.some((edge) => edge.type === 'documented-by' && edge.source === node.id))
    .map((node) => node.id)
    .sort()

  const frameworks = listFrameworkIds(pagesDir)
  const usedFrameworks = new Set()
  for (const node of graphNodes) {
    for (const fw of nodeFrameworks(node)) usedFrameworks.add(fw)
  }
  const frameworksWithZeroNodes = frameworks.filter((fw) => !usedFrameworks.has(fw))

  const relatedUnshared = []
  if (pagesDir && fs.existsSync(pagesDir)) {
    for (const file of walkMdx(pagesDir)) {
      const raw = fs.readFileSync(file, 'utf8')
      const parsed = matter(raw)
      const hrefs = parseRelatedFrameworkHrefs(parsed.content)
      if (!hrefs.length) continue
      const pageHref = fileToHref(pagesDir, file)
      const fromFw = frameworkFromHref(pageHref)
      if (!fromFw) continue
      const fromIds = sliceIds(graphNodes, fromFw)
      for (const href of hrefs) {
        const toFw = frameworkFromHref(href)
        if (!toFw || toFw === fromFw) continue
        const toIds = sliceIds(graphNodes, toFw)
        if (slicesShare(fromIds, toIds, graphEdges)) continue
        relatedUnshared.push({
          page: pageHref,
          neighbor: href,
          from: fromFw,
          to: toFw,
        })
      }
    }
  }
  relatedUnshared.sort((a, b) => {
    const left = `${a.page} ${a.neighbor}`
    const right = `${b.page} ${b.neighbor}`
    return left.localeCompare(right)
  })

  return {
    threatsWithoutControl,
    controlsWithoutGuidance,
    frameworksWithZeroNodes,
    relatedUnshared,
    counts: {
      nodes: graphNodes.length,
      edges: graphEdges.length,
      threatsWithoutControl: threatsWithoutControl.length,
      controlsWithoutGuidance: controlsWithoutGuidance.length,
      frameworksWithZeroNodes: frameworksWithZeroNodes.length,
      relatedUnshared: relatedUnshared.length,
    },
  }
}

function formatCoverage(report) {
  const lines = [
    'Security map coverage',
    '',
    `Threats with no control (${report.counts.threatsWithoutControl})`,
    ...(report.threatsWithoutControl.length
      ? report.threatsWithoutControl.map((id) => `- ${id}`)
      : ['- none']),
    '',
    `Controls with no guidance (${report.counts.controlsWithoutGuidance})`,
    ...(report.controlsWithoutGuidance.length
      ? report.controlsWithoutGuidance.map((id) => `- ${id}`)
      : ['- none']),
    '',
    `Frameworks with 0 map nodes (${report.counts.frameworksWithZeroNodes})`,
    ...(report.frameworksWithZeroNodes.length
      ? report.frameworksWithZeroNodes.map((id) => `- ${id}`)
      : ['- none']),
    '',
    `Related frameworks with no shared node (${report.counts.relatedUnshared})`,
    ...(report.relatedUnshared.length
      ? report.relatedUnshared.map((item) => `- ${item.page} -> ${item.neighbor}`)
      : ['- none']),
    '',
  ]
  return lines.join('\n')
}



module.exports = {
  SCHEMA_VERSION,
  ValidationError,
  loadAndValidate,
  generate,
  serializeGraph,
  validateGraphRecords,
  hrefExists,
  edgeId,
  TYPE_PREFIX,
  coverageReport,
  formatCoverage,
}

