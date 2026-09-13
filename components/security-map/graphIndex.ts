import type {
  NodeType,
  SecurityMapEdge,
  SecurityMapGraph,
  SecurityMapNode,
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
