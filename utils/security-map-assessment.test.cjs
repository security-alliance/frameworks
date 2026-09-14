const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const {
  ASSESSMENT_SCHEMA_VERSION,
  MAX_IMPORT_BYTES,
  parseAssessmentJson,
  exportAssessment,
} = require('./security-map-assessment.cjs')

const graph = {
  schemaVersion: '1.0.0',
  nodes: [
    {
      id: 'control-signer-isolation',
      type: 'control',
      assessmentEligible: true,
    },
    {
      id: 'control-branch-protection',
      type: 'control',
      assessmentEligible: true,
    },
    { id: 'threat-key-theft', type: 'threat' },
  ],
}

function doc(controls) {
  return JSON.stringify({
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    graphSchemaVersion: '1.0.0',
    updatedAt: '2026-01-01T00:00:00.000Z',
    controls,
  })
}

describe('assessment parse', () => {
  it('empty object is invalid without required fields', () => {
    const result = parseAssessmentJson('{}', graph)
    assert.equal(result.ok, false)
  })

  it('accepts a valid current schema', () => {
    const result = parseAssessmentJson(
      doc({
        'control-signer-isolation': {
          state: 'implemented',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
      }),
      graph,
    )
    assert.equal(result.ok, true)
    assert.deepEqual(result.recognized, ['control-signer-isolation'])
    assert.equal(result.document.controls['control-signer-isolation'].state, 'implemented')
  })

  it('rejects unsupported schema', () => {
    const result = parseAssessmentJson(
      JSON.stringify({
        schemaVersion: '9.0.0',
        graphSchemaVersion: '1.0.0',
        updatedAt: '2026-01-01T00:00:00.000Z',
        controls: {},
      }),
      graph,
    )
    assert.equal(result.ok, false)
    assert.match(result.errors.join(' '), /unsupported schemaVersion/)
  })

  it('reports unknown control IDs without applying them', () => {
    const result = parseAssessmentJson(
      doc({
        'control-not-in-graph': {
          state: 'implemented',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
        'control-signer-isolation': {
          state: 'verified',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
      }),
      graph,
    )
    assert.equal(result.ok, true)
    assert.deepEqual(result.unknown, ['control-not-in-graph'])
    assert.equal(result.document.controls['control-not-in-graph'], undefined)
    assert.equal(result.document.controls['control-signer-isolation'].state, 'verified')
  })

  it('rejects invalid enum', () => {
    const result = parseAssessmentJson(
      doc({
        'control-signer-isolation': {
          state: 'secured',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
      }),
      graph,
    )
    assert.equal(result.ok, false)
    assert.deepEqual(result.invalid, ['control-signer-isolation'])
  })

  it('rejects oversized files', () => {
    const result = parseAssessmentJson('x'.repeat(MAX_IMPORT_BYTES + 1), graph)
    assert.equal(result.ok, false)
    assert.match(result.errors.join(' '), /exceeds/)
  })

  it('ignores prototype-pollution keys', () => {
    const raw = `{
      "schemaVersion": "1.0.0",
      "graphSchemaVersion": "1.0.0",
      "updatedAt": "2026-01-01T00:00:00.000Z",
      "controls": {
        "__proto__": { "state": "implemented", "updatedAt": "2026-01-01T00:00:00.000Z" },
        "control-signer-isolation": { "state": "planned", "updatedAt": "2026-01-01T00:00:00.000Z" }
      }
    }`
    const result = parseAssessmentJson(raw, graph)
    assert.equal(result.ok, false)
    assert.ok(result.invalid.includes('__proto__'))
  })

  it('rejects malformed JSON entirely', () => {
    const result = parseAssessmentJson('{not json', graph)
    assert.equal(result.ok, false)
    assert.match(result.errors.join(' '), /malformed JSON/)
  })

  it('export contains only expected fields', () => {
    const parsed = parseAssessmentJson(
      doc({
        'control-signer-isolation': {
          state: 'partially-implemented',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
      }),
      graph,
    )
    assert.ok(parsed.document)
    const exported = JSON.parse(exportAssessment(parsed.document))
    assert.deepEqual(Object.keys(exported).sort(), [
      'controls',
      'graphSchemaVersion',
      'schemaVersion',
      'updatedAt',
    ])
    assert.deepEqual(Object.keys(exported.controls['control-signer-isolation']).sort(), [
      'state',
      'updatedAt',
    ])
  })
})
