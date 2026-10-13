import { ASSESSMENT_STATES, type AssessmentState, type SecurityMapGraph } from "./types";

const STATE_SET = new Set<string>(ASSESSMENT_STATES);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export const ASSESSMENT_STORAGE_KEY = "seal-security-map-assessment:v1";
export const LEGACY_STORAGE_KEY = "attackSurface-posture";
export const ASSESSMENT_SCHEMA_VERSION = "1.0.0";
export const MAX_IMPORT_BYTES = 1024 * 1024;

export interface ControlAssessment {
  state: AssessmentState;
  updatedAt: string;
}

export interface AssessmentDocument {
  schemaVersion: string;
  graphSchemaVersion: string;
  updatedAt: string;
  controls: Record<string, ControlAssessment>;
}

export interface AssessmentParseResult {
  ok: boolean;
  document: AssessmentDocument | null;
  errors: string[];
  recognized: string[];
  unknown: string[];
  invalid: string[];
}

function emptyDocument(graphSchemaVersion: string): AssessmentDocument {
  return {
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    graphSchemaVersion,
    updatedAt: new Date().toISOString(),
    controls: {},
  };
}


function eligibleControlIds(graph: SecurityMapGraph): Set<string> {
  return new Set(
    graph.nodes.filter((n) => n.type === "control" && n.assessmentEligible).map((n) => n.id),
  );
}

export function parseAssessmentJson(
  raw: string,
  graph: SecurityMapGraph,
  options: { maxBytes?: number } = {},
): AssessmentParseResult {
  const maxBytes = options.maxBytes ?? MAX_IMPORT_BYTES;
  const errors: string[] = [];
  if (raw.length > maxBytes) {
    return {
      ok: false,
      document: null,
      errors: [`file exceeds ${maxBytes} bytes`],
      recognized: [],
      unknown: [],
      invalid: [],
    };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {
      ok: false,
      document: null,
      errors: ["malformed JSON"],
      recognized: [],
      unknown: [],
      invalid: [],
    };
  }
  if (!isPlainObject(parsed)) {
    return {
      ok: false,
      document: null,
      errors: ["root must be an object"],
      recognized: [],
      unknown: [],
      invalid: [],
    };
  }
  const proto = Object.getPrototypeOf(parsed);
  if (proto !== Object.prototype && proto !== null) {
    errors.push("unexpected object prototype");
  }
  const allowed = new Set(["schemaVersion", "graphSchemaVersion", "updatedAt", "controls"]);
  for (const key of Object.keys(parsed)) {
    if (!allowed.has(key)) errors.push(`unknown top-level key "${key}"`);
  }
  if (parsed.schemaVersion !== ASSESSMENT_SCHEMA_VERSION) {
    errors.push(`unsupported schemaVersion "${String(parsed.schemaVersion)}"`);
  }
  if (typeof parsed.graphSchemaVersion !== "string" || !parsed.graphSchemaVersion) {
    errors.push("graphSchemaVersion must be a string");
  }
  if (typeof parsed.updatedAt !== "string" || !parsed.updatedAt) {
    errors.push("updatedAt must be a string");
  }
  if (!isPlainObject(parsed.controls)) {
    errors.push("controls must be an object");
    return { ok: false, document: null, errors, recognized: [], unknown: [], invalid: [] };
  }
  const eligible = eligibleControlIds(graph);
  const recognized: string[] = [];
  const unknown: string[] = [];
  const invalid: string[] = [];
  const controls: AssessmentDocument["controls"] = Object.create(null);
  for (const id of Object.keys(parsed.controls)) {
    if (id === "__proto__" || id === "constructor" || id === "prototype") {
      invalid.push(id);
      continue;
    }
    const entry = parsed.controls[id];
    if (!isPlainObject(entry)) {
      invalid.push(id);
      continue;
    }
    const state = entry.state;
    const updatedAt = entry.updatedAt;
    if (typeof state !== "string" || !STATE_SET.has(state) || state === "not-assessed") {
      invalid.push(id);
      continue;
    }
    if (typeof updatedAt !== "string" || !updatedAt) {
      invalid.push(id);
      continue;
    }
    if (!eligible.has(id)) {
      unknown.push(id);
      continue;
    }
    recognized.push(id);
    controls[id] = { state: state as AssessmentState, updatedAt };
  }
  if (errors.length || invalid.length) {
    return { ok: false, document: null, errors, recognized, unknown, invalid };
  }
  return {
    ok: true,
    document: {
      schemaVersion: ASSESSMENT_SCHEMA_VERSION,
      graphSchemaVersion:
        typeof parsed.graphSchemaVersion === "string" ? parsed.graphSchemaVersion : graph.schemaVersion,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
      controls,
    },
    errors: [],
    recognized,
    unknown,
    invalid,
  };
}


export function loadAssessment(graph: SecurityMapGraph): AssessmentDocument {
  try {
    const raw = window.localStorage.getItem(ASSESSMENT_STORAGE_KEY);
    if (!raw) return emptyDocument(graph.schemaVersion);
    const result = parseAssessmentJson(raw, graph);
    if (!result.ok || !result.document) return emptyDocument(graph.schemaVersion);
    return result.document;
  } catch {
    return emptyDocument(graph.schemaVersion);
  }
}

export function saveAssessment(doc: AssessmentDocument): void {
  try {
    window.localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(doc));
  } catch {
    // quota or private mode; UI state still updates for the session
  }
}

export function setControlState(
  doc: AssessmentDocument,
  controlId: string,
  state: AssessmentState,
  graph: SecurityMapGraph,
): AssessmentDocument {
  const eligible = eligibleControlIds(graph);
  if (!eligible.has(controlId)) return doc;
  const next: AssessmentDocument = {
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    graphSchemaVersion: graph.schemaVersion,
    updatedAt: new Date().toISOString(),
    controls: Object.create(null),
  };
  for (const [id, entry] of Object.entries(doc.controls)) {
    if (id === "__proto__" || !eligible.has(id)) continue;
    next.controls[id] = entry;
  }
  if (state === "not-assessed") {
    delete next.controls[controlId];
  } else {
    next.controls[controlId] = { state, updatedAt: next.updatedAt };
  }
  return next;
}

export function countByState(doc: AssessmentDocument): Record<AssessmentState, number> {
  const counts = {
    "not-assessed": 0,
    "not-applicable": 0,
    missing: 0,
    planned: 0,
    "partially-implemented": 0,
    implemented: 0,
    verified: 0,
  };
  for (const entry of Object.values(doc.controls)) {
    if (entry.state !== "not-assessed") counts[entry.state] += 1;
  }
  return counts;
}

export function exportAssessment(doc: AssessmentDocument): string {
  const payload = {
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    graphSchemaVersion: doc.graphSchemaVersion,
    updatedAt: doc.updatedAt,
    controls: {} as Record<string, ControlAssessment>,
  };
  for (const [id, entry] of Object.entries(doc.controls)) {
    if (id === "__proto__") continue;
    payload.controls[id] = { state: entry.state, updatedAt: entry.updatedAt };
  }
  return `${JSON.stringify(payload, null, 2)}\n`;
}


export function exportFilename(now = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `seal-security-map-assessment-${y}-${m}-${d}.json`;
}

export function hasLegacyPosture(): boolean {
  try {
    const raw = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    return Boolean(raw && raw !== "{}" && raw !== "null");
  } catch {
    return false;
  }
}

export function readLegacyPosture(): string | null {
  try {
    return window.localStorage.getItem(LEGACY_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function dismissLegacyNoticeKey(): string {
  return `${ASSESSMENT_STORAGE_KEY}:legacy-dismissed`;
}

export function isLegacyDismissed(): boolean {
  try {
    return window.localStorage.getItem(dismissLegacyNoticeKey()) === "1";
  } catch {
    return false;
  }
}

export function dismissLegacyNotice(): void {
  try {
    window.localStorage.setItem(dismissLegacyNoticeKey(), "1");
  } catch {
    // ignore
  }
}
