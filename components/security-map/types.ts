export const SECURITY_MAP_SCHEMA_VERSION = "1.0.0";

export type NodeType =
  | "asset"
  | "component"
  | "attack-surface"
  | "threat"
  | "control"
  | "response"
  | "guidance"
  | "incident";

export type EdgeType =
  | "contains"
  | "depends-on"
  | "exposes"
  | "targets"
  | "mitigates"
  | "protects"
  | "detects"
  | "responds-to"
  | "documented-by"
  | "demonstrated-by"
  | "related-to";

export type MapStatus = "proposed" | "reviewed" | "deprecated";

export type ControlClass =
  | "preventive"
  | "detective"
  | "corrective"
  | "recovery"
  | "governance";

export type Severity = "contextual" | "low" | "medium" | "high" | "critical";

export type AssessmentState =
  | "not-assessed"
  | "not-applicable"
  | "missing"
  | "planned"
  | "partially-implemented"
  | "implemented"
  | "verified";

export interface EvidenceSource {
  url: string;
  title: string;
  publisher: string;
}

export interface LossRecord {
  currency: string;
  amount?: number;
  amountMin?: number;
  amountMax?: number;
  asOf: string;
  uncertainty: string;
  source: string;
}

export interface SecurityMapNode {
  id: string;
  type: NodeType;
  title: string;
  summary: string;
  domains: string[];
  status: MapStatus;
  tags: string[];
  roles?: string[];
  lifecycle?: string[];
  controlClass?: ControlClass;
  assessmentEligible?: boolean;
  severity?: Severity;
  severityBasis?: string;
  href?: string;
  aliases?: string[];
  framework?: string;
  sources?: EvidenceSource[];
  deprecatedBy?: string;
  date?: string;
  datePrecision?: "day" | "month" | "year" | "range";
  dateEnd?: string;
  loss?: LossRecord;
}

export interface SecurityMapEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  rationale?: string;
  status: MapStatus;
  sources?: EvidenceSource[];
}

export interface TaxonomyTerm {
  id: string;
  title: string;
  summary?: string;
  prefix?: string;
  direction?: string;
}

export interface SecurityMapView {
  id: string;
  title: string;
  summary: string;
  kind?: "overview" | "entry";
  focusNodeId?: string;
  domain?: string;
  visibleTypes?: NodeType[];
  entryNodeIds?: string[];
}

export interface SecurityMapGraph {
  schemaVersion: string;
  title: string;
  license: string;
  sourceRepository: string;
  nodes: SecurityMapNode[];
  edges: SecurityMapEdge[];
  taxonomies: {
    domains: TaxonomyTerm[];
    roles: TaxonomyTerm[];
    lifecycle: TaxonomyTerm[];
    nodeTypes: TaxonomyTerm[];
    edgeTypes: TaxonomyTerm[];
    controlClasses: TaxonomyTerm[];
    severities: TaxonomyTerm[];
    statuses: TaxonomyTerm[];
  };
  views: SecurityMapView[];
}

export const ASSESSMENT_STATES: AssessmentState[] = [
  "not-assessed",
  "not-applicable",
  "missing",
  "planned",
  "partially-implemented",
  "implemented",
  "verified",
];

export const ASSESSMENT_STATE_LABELS: Record<AssessmentState, string> = {
  "not-assessed": "Not assessed",
  "not-applicable": "Not applicable",
  missing: "Missing",
  planned: "Planned",
  "partially-implemented": "Partially implemented",
  implemented: "Implemented",
  verified: "Verified",
};

export const NODE_TYPE_LABELS: Record<NodeType, string> = {
  asset: "Asset",
  component: "Component",
  "attack-surface": "Attack surface",
  threat: "Threat",
  control: "Control",
  response: "Response",
  guidance: "Guidance",
  incident: "Incident",
};

export const EDGE_TYPE_LABELS: Record<EdgeType, string> = {
  contains: "contains",
  "depends-on": "depends on",
  exposes: "exposes",
  targets: "targets",
  mitigates: "mitigates",
  protects: "protects",
  detects: "detects",
  "responds-to": "responds to",
  "documented-by": "documented by",
  "demonstrated-by": "demonstrated by",
  "related-to": "related to",
};
