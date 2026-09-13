import type {
  NodeType,
  SecurityMapEdge,
  SecurityMapGraph,
  SecurityMapNode,
} from "./types";


export interface GraphIndex {
  graph: SecurityMapGraph;
  nodesById: Record<string, SecurityMapNode>;
  outgoing: Record<string, SecurityMapEdge[]>;
  incoming: Record<string, SecurityMapEdge[]>;
  domainIds: string[];
  domainTitle: Record<string, string>;
  typeTitle: Record<string, string>;
  edgeTitle: Record<string, string>;
  eligibleControlIds: Record<string, true>;
}

export interface SearchHit {
  node: SecurityMapNode;
  rank: number;
  via: "title-exact" | "title-prefix" | "alias" | "tag" | "summary";
}

export interface FilterState {
  types: NodeType[];
  domains: string[];
  roles: string[];
  lifecycle: string[];
  severities: string[];
  controlClasses: string[];
}

export function buildIndex(graph: SecurityMapGraph): GraphIndex {
  const nodesById: Record<string, SecurityMapNode> = Object.create(null);
  const outgoing: Record<string, SecurityMapEdge[]> = Object.create(null);
  const incoming: Record<string, SecurityMapEdge[]> = Object.create(null);
  const eligibleControlIds: Record<string, true> = Object.create(null);

  for (const node of graph.nodes) {
    nodesById[node.id] = node;
    outgoing[node.id] = [];
    incoming[node.id] = [];
    if (node.type === "control" && node.assessmentEligible) eligibleControlIds[node.id] = true;
  }
  for (const edge of graph.edges) {
    if (outgoing[edge.source]) outgoing[edge.source].push(edge);
    if (incoming[edge.target]) incoming[edge.target].push(edge);
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

export function expandVisible(index: GraphIndex, seed: string[], hops: number): Record<string, true> {
  const visible: Record<string, true> = Object.create(null);
  let frontier = seed.slice();
  for (const id of frontier) visible[id] = true;
  for (let hop = 0; hop < hops; hop += 1) {
    const next: string[] = [];
    for (const id of frontier) {
      for (const nid of neighbors(index, id)) {
        if (visible[nid]) continue;
        visible[nid] = true;
        next.push(nid);
      }
    }
    frontier = next;
  }
  return visible;
}

export function domainCount(index: GraphIndex, domain: string): number {
  let count = 0;
  for (const node of index.graph.nodes) {
    if (node.domains.includes(domain)) count += 1;
  }
  return count;
}

export function matchesFilters(node: SecurityMapNode, filters: FilterState): boolean {
  if (filters.types.length && !filters.types.includes(node.type)) return false;
  if (filters.domains.length && !node.domains.some((d) => filters.domains.includes(d))) return false;
  if (filters.roles.length && !(node.roles || []).some((r) => filters.roles.includes(r))) return false;
  if (filters.lifecycle.length && !(node.lifecycle || []).some((l) => filters.lifecycle.includes(l))) {
    return false;
  }
  if (filters.severities.length) {
    if (node.type !== "threat" || !node.severity || !filters.severities.includes(node.severity)) {
      return false;
    }
  }
  if (filters.controlClasses.length) {
    if (node.type !== "control" || !node.controlClass || !filters.controlClasses.includes(node.controlClass)) {
      return false;
    }
  }
  return true;
}

export function searchNodes(index: GraphIndex, query: string, filters: FilterState): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: SearchHit[] = [];
  for (const node of index.graph.nodes) {
    if (!matchesFilters(node, filters)) continue;
    const title = node.title.toLowerCase();
    if (title === q) {
      hits.push({ node, rank: 0, via: "title-exact" });
      continue;
    }
    if (title.startsWith(q)) {
      hits.push({ node, rank: 1, via: "title-prefix" });
      continue;
    }
    const aliases = (node.aliases || []).map((a) => a.toLowerCase());
    if (aliases.some((a) => a === q || a.startsWith(q))) {
      hits.push({ node, rank: 2, via: "alias" });
      continue;
    }
    if (node.tags.some((t) => t.toLowerCase().includes(q))) {
      hits.push({ node, rank: 3, via: "tag" });
      continue;
    }
    if (node.summary.toLowerCase().includes(q) || title.includes(q)) {
      hits.push({ node, rank: 4, via: "summary" });
    }
  }
  hits.sort((a, b) => a.rank - b.rank || a.node.title.localeCompare(b.node.title));
  return hits.slice(0, 40);
}

export function connectedEdges(index: GraphIndex, id: string): SecurityMapEdge[] {
  return [...(index.outgoing[id] || []), ...(index.incoming[id] || [])];
}

export const PRINCIPAL_TYPES: NodeType[] = ["asset", "component", "attack-surface"];

export function domainVisibleIds(index: GraphIndex, domain: string, filters: FilterState): string[] {
  const principal: string[] = [];
  for (const node of index.graph.nodes) {
    if (!node.domains.includes(domain)) continue;
    if (!PRINCIPAL_TYPES.includes(node.type)) continue;
    if (!matchesFilters(node, filters)) continue;
    principal.push(node.id);
  }
  const visible = expandVisible(index, principal, 1);
  const ids: string[] = [];
  for (const id of Object.keys(visible)) {
    const node = index.nodesById[id];
    if (!node) continue;
    if (!matchesFilters(node, filters)) continue;
    ids.push(id);
  }
  return ids;
}

