import type { AssessmentState, SecurityMapGraph } from "./types";

import {
  parseAssessmentJson as parseAssessmentJsonCjs,
  exportAssessment as exportAssessmentCjs,
} from "../../utils/security-map-assessment.cjs";

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
  return parseAssessmentJsonCjs(raw, graph, options) as AssessmentParseResult;
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
  return exportAssessmentCjs(doc);
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
