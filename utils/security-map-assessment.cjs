const ASSESSMENT_SCHEMA_VERSION = '1.0.0'
const MAX_IMPORT_BYTES = 1024 * 1024
const ASSESSMENT_STATES = [
  'not-assessed',
  'not-applicable',
  'missing',
  'planned',
  'partially-implemented',
  'implemented',
  'verified',
]
const STATE_SET = new Set(ASSESSMENT_STATES)

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function eligibleControlIds(graph) {
  const ids = new Set()
  for (const node of graph.nodes || []) {
    if (node.type === 'control' && node.assessmentEligible) ids.add(node.id)
  }
  return ids
}

function parseAssessmentJson(raw, graph, options = {}) {
  const maxBytes = options.maxBytes ?? MAX_IMPORT_BYTES
  const errors = []
  if (raw.length > maxBytes) {
    return {
      ok: false,
      document: null,
      errors: [`file exceeds ${maxBytes} bytes`],
      recognized: [],
      unknown: [],
      invalid: [],
    }
  }

  let parsed
  try {
    parsed = JSON.parse(raw)
  } catch {
    return {
      ok: false,
      document: null,
      errors: ['malformed JSON'],
      recognized: [],
      unknown: [],
      invalid: [],
    }
  }

  if (!isPlainObject(parsed)) {
    return {
      ok: false,
      document: null,
      errors: ['root must be an object'],
      recognized: [],
      unknown: [],
      invalid: [],
    }
  }

  if (Object.getPrototypeOf(parsed) !== Object.prototype && Object.getPrototypeOf(parsed) !== null) {
    errors.push('unexpected object prototype')
  }

  const allowed = new Set(['schemaVersion', 'graphSchemaVersion', 'updatedAt', 'controls'])
  for (const key of Object.keys(parsed)) {
    if (!allowed.has(key)) errors.push(`unknown top-level key "${key}"`)
  }

  if (parsed.schemaVersion !== ASSESSMENT_SCHEMA_VERSION) {
    errors.push(`unsupported schemaVersion "${String(parsed.schemaVersion)}"`)
  }
  if (typeof parsed.graphSchemaVersion !== 'string' || !parsed.graphSchemaVersion) {
    errors.push('graphSchemaVersion must be a string')
  }
  if (typeof parsed.updatedAt !== 'string' || !parsed.updatedAt) {
    errors.push('updatedAt must be a string')
  }
  if (!isPlainObject(parsed.controls)) {
    errors.push('controls must be an object')
    return { ok: false, document: null, errors, recognized: [], unknown: [], invalid: [] }
  }

  const eligible = eligibleControlIds(graph)
  const recognized = []
  const unknown = []
  const invalid = []
  const controls = Object.create(null)

  for (const id of Object.keys(parsed.controls)) {
    if (id === '__proto__' || id === 'constructor' || id === 'prototype') {
      invalid.push(id)
      continue
    }
    const entry = parsed.controls[id]
    if (!isPlainObject(entry)) {
      invalid.push(id)
      continue
    }
    const state = entry.state
    const updatedAt = entry.updatedAt
    if (typeof state !== 'string' || !STATE_SET.has(state) || state === 'not-assessed') {
      invalid.push(id)
      continue
    }
    if (typeof updatedAt !== 'string' || !updatedAt) {
      invalid.push(id)
      continue
    }
    if (!eligible.has(id)) {
      unknown.push(id)
      continue
    }
    recognized.push(id)
    controls[id] = { state, updatedAt }
  }

  if (errors.length || invalid.length) {
    return { ok: false, document: null, errors, recognized, unknown, invalid }
  }

  return {
    ok: true,
    document: {
      schemaVersion: ASSESSMENT_SCHEMA_VERSION,
      graphSchemaVersion:
        typeof parsed.graphSchemaVersion === 'string' ? parsed.graphSchemaVersion : graph.schemaVersion,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
      controls,
    },
    errors: [],
    recognized,
    unknown,
    invalid,
  }
}

function exportAssessment(doc) {
  const payload = {
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    graphSchemaVersion: doc.graphSchemaVersion,
    updatedAt: doc.updatedAt,
    controls: {},
  }
  for (const [id, entry] of Object.entries(doc.controls)) {
    if (id === '__proto__') continue
    payload.controls[id] = { state: entry.state, updatedAt: entry.updatedAt }
  }
  return `${JSON.stringify(payload, null, 2)}\n`
}

module.exports = {
  ASSESSMENT_SCHEMA_VERSION,
  MAX_IMPORT_BYTES,
  parseAssessmentJson,
  exportAssessment,
}
