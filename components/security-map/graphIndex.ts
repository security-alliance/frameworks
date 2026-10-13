import type {
  EdgeType,
  NodeType,
  SecurityMapEdge,
  SecurityMapGraph,
  SecurityMapNode,
  SecurityMapView,
} from "./types";


export interface GraphIndex {
  graph: SecurityMapGraph;
  nodesById: Record<string, SecurityMapNode>;
  nodesByType: Record<NodeType, SecurityMapNode[]>;
  outgoing: Record<string, SecurityMapEdge[]>;
  incoming: Record<string, SecurityMapEdge[]>;
  domainIds: string[];
  domainTitle: Record<string, string>;
  typeTitle: Record<string, string>;
  edgeTitle: Record<string, string>;
  eligibleControlIds: Record<string, true>;
}

export const MAP_COLUMNS: Array<{
  id: string;
  title: string;
  blurb: string;
  types: NodeType[];
}> = [
  { id: "asset", title: "Assets", blurb: "What can be lost", types: ["asset"] },
  { id: "component", title: "Components", blurb: "People, systems, accounts", types: ["component"] },
  {
    id: "attack-surface",
    title: "Attack surfaces",
    blurb: "How it is reached",
    types: ["attack-surface"],
  },
  { id: "threat", title: "Threats", blurb: "How it fails", types: ["threat"] },
  { id: "control", title: "Controls", blurb: "What reduces it", types: ["control"] },
  {
    id: "guidance",
    title: "Guidance",
    blurb: "Where to implement",
    types: ["guidance", "response"],
  },
];

const COLUMN_TYPE: Partial<Record<NodeType, string>> = {};
for (const col of MAP_COLUMNS) {
  for (const type of col.types) COLUMN_TYPE[type] = col.id;
}

export function columnIdForType(type: NodeType): string | null {
  return COLUMN_TYPE[type] || null;
}

export function buildIndex(graph: SecurityMapGraph): GraphIndex {
  const nodesById: Record<string, SecurityMapNode> = Object.create(null);
  const nodesByType = {
    asset: [],
    component: [],
    "attack-surface": [],
    threat: [],
    control: [],
    response: [],
    guidance: [],
    incident: [],
  } as Record<NodeType, SecurityMapNode[]>;
  const outgoing: Record<string, SecurityMapEdge[]> = Object.create(null);
  const incoming: Record<string, SecurityMapEdge[]> = Object.create(null);
  const eligibleControlIds: Record<string, true> = Object.create(null);

  for (const node of graph.nodes) {
    nodesById[node.id] = node;
    nodesByType[node.type].push(node);
    outgoing[node.id] = [];
    incoming[node.id] = [];
    if (node.type === "control" && node.assessmentEligible !== false) {
      eligibleControlIds[node.id] = true;
    }
  }
  for (const edge of graph.edges) {
    (outgoing[edge.source] || (outgoing[edge.source] = [])).push(edge);
    (incoming[edge.target] || (incoming[edge.target] = [])).push(edge);
  }

  const domainTitle: Record<string, string> = Object.create(null);
  for (const term of graph.taxonomies.domains) domainTitle[term.id] = term.title;
  const typeTitle: Record<string, string> = Object.create(null);
  for (const term of graph.taxonomies.nodeTypes) typeTitle[term.id] = term.title;
  const edgeTitle: Record<string, string> = Object.create(null);
  for (const term of graph.taxonomies.edgeTypes) edgeTitle[term.id] = term.title;

  return {
    graph,
    nodesById,
    nodesByType,
    outgoing,
    incoming,
    domainIds: graph.taxonomies.domains.map((d) => d.id),
    domainTitle,
    typeTitle,
    edgeTitle,
    eligibleControlIds,
  };
}

export function neighbors(index: GraphIndex, id: string): string[] {
  const ids: Record<string, true> = Object.create(null);
  for (const edge of index.outgoing[id] || []) ids[edge.target] = true;
  for (const edge of index.incoming[id] || []) ids[edge.source] = true;
  return Object.keys(ids);
}

export function hopsFrom(index: GraphIndex, id: string, hops: number): Record<string, number> {
  const dist: Record<string, number> = Object.create(null);
  dist[id] = 0;
  let frontier = [id];
  for (let hop = 1; hop <= hops; hop += 1) {
    const next: string[] = [];
    for (const cur of frontier) {
      for (const nid of neighbors(index, cur)) {
        if (dist[nid] !== undefined) continue;
        dist[nid] = hop;
        next.push(nid);
      }
    }
    frontier = next;
  }
  return dist;
}

export function connectedEdges(index: GraphIndex, id: string): SecurityMapEdge[] {
  return [...(index.outgoing[id] || []), ...(index.incoming[id] || [])];
}

export function relatedByType(
  index: GraphIndex,
  id: string,
  hops = 2,
): Record<NodeType, SecurityMapNode[]> {
  const dist = hopsFrom(index, id, hops);
  const grouped = {
    asset: [],
    component: [],
    "attack-surface": [],
    threat: [],
    control: [],
    response: [],
    guidance: [],
    incident: [],
  } as Record<NodeType, SecurityMapNode[]>;
  for (const [nid, d] of Object.entries(dist)) {
    if (d === 0) continue;
    const node = index.nodesById[nid];
    if (node) grouped[node.type].push(node);
  }
  return grouped;
}

export function countRelated(index: GraphIndex, id: string, type: NodeType, hops = 2): number {
  const dist = hopsFrom(index, id, hops);
  let n = 0;
  for (const [nid, d] of Object.entries(dist)) {
    if (d === 0) continue;
    if (index.nodesById[nid]?.type === type) n += 1;
  }
  return n;
}

export function mapEdges(index: GraphIndex): SecurityMapEdge[] {
  return index.graph.edges.filter(
    (edge) => columnIdForType(index.nodesById[edge.source]?.type) && columnIdForType(index.nodesById[edge.target]?.type),
  );
}

export const ALL_VIEW_ID = "view-all";
export const GAPS_VIEW_ID = "view-gaps";
export const DEFAULT_VIEW_ID = "view-secure-multisig";

const VIEW_SHORT_TITLE: Record<string, string> = {
  [ALL_VIEW_ID]: "All",
  "view-overview": "All",
  "view-secure-multisig": "Multisig",
  "view-protect-deployment": "Deployment",
  "view-protect-domains-frontends": "Domains",
  "view-reduce-signer-compromise": "Signers",
  "view-harden-supply-chain": "Supply chain",
  "view-prepare-incident-response": "Response",
  "view-constrain-ai-agents": "AI agents",
  "view-resolve-ens-names": "ENS",
  "view-receive-vuln-reports": "Disclosure",
  "view-keep-threat-model-current": "Threat model",
  [GAPS_VIEW_ID]: "Gaps",
};

export interface MapViewOption {
  id: string;
  title: string;
  summary: string;
  focusNodeId?: string;
}

export function listMapViews(graph: SecurityMapGraph): MapViewOption[] {
  const entries = graph.views.filter((view) => view.kind === "entry");
  return [
    ...entries.map((view) => ({
      id: view.id,
      title: VIEW_SHORT_TITLE[view.id] || view.title,
      summary: view.summary,
      focusNodeId: view.focusNodeId,
    })),
    {
      id: GAPS_VIEW_ID,
      title: "Gaps",
      summary: "Threats with no response, assets with no protecting control, and what they touch.",
    },
    { id: ALL_VIEW_ID, title: "All", summary: "Every seeded node." },
  ];
}


function hasTypedEdge(index: GraphIndex, id: string, dir: "in" | "out", type: EdgeType): boolean {
  const list = dir === "in" ? index.incoming[id] : index.outgoing[id];
  return (list || []).some((edge) => edge.type === type);
}

export function gapReasons(index: GraphIndex, id: string): string[] {
  const node = index.nodesById[id];
  if (!node) return [];
  const reasons: string[] = [];
  if (node.type === "threat" && !hasTypedEdge(index, id, "in", "mitigates")) {
    reasons.push("No mitigating control");
  }
  if (node.type === "threat" && !hasTypedEdge(index, id, "in", "responds-to")) {
    reasons.push("No response procedure");
  }
  if (node.type === "control" && !hasTypedEdge(index, id, "out", "documented-by")) {
    reasons.push("No guidance page");
  }
  if (node.type === "asset" && !hasTypedEdge(index, id, "in", "protects")) {
    reasons.push("No protecting control");
  }
  return reasons;
}

export function viewNodeIds(index: GraphIndex, viewId: string): Set<string> | null {
  if (!viewId || viewId === ALL_VIEW_ID || viewId === "view-overview") return null;
  if (viewId === GAPS_VIEW_ID) {
    const ids = new Set<string>();
    for (const node of index.graph.nodes) {
      if (!gapReasons(index, node.id).length) continue;
      ids.add(node.id);
      for (const nid of neighbors(index, node.id)) ids.add(nid);
    }
    return ids;
  }
  const view = index.graph.views.find((item) => item.id === viewId);
  if (!view) return null;
  return entryViewNodeIds(index, view);
}

function entryViewNodeIds(index: GraphIndex, view: SecurityMapView): Set<string> | null {
  const seeds = [view.focusNodeId, ...(view.entryNodeIds || [])].filter(
    (id): id is string => Boolean(id && index.nodesById[id]),
  );
  if (!seeds.length) return null;
  const types = view.visibleTypes?.length ? new Set(view.visibleTypes) : null;
  const ids = new Set<string>();
  for (const seed of seeds) {
    for (const id of Object.keys(hopsFrom(index, seed, 2))) {
      const node = index.nodesById[id];
      if (!node) continue;
      if (types && !types.has(node.type)) continue;
      ids.add(id);
    }
  }
  return ids;
}

