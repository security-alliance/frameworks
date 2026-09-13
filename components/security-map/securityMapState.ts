import { useCallback, useEffect, useMemo, useState } from "react";
import type { AssessmentState, NodeType, SecurityMapGraph, SecurityMapView } from "./types";
import {
  dismissLegacyNotice,
  hasLegacyPosture,
  isLegacyDismissed,
  loadAssessment,
  saveAssessment,
  setControlState,
  type AssessmentDocument,
} from "./assessment";
import {
  buildIndex,
  domainVisibleIds,
  expandVisible,
  matchesFilters,
  searchNodes,
  type FilterState,
  type GraphIndex,
} from "./graphIndex";

export type MapMode = "overview" | "domain" | "focused";

const EMPTY_FILTERS: FilterState = {
  types: [],
  domains: [],
  roles: [],
  lifecycle: [],
  severities: [],
  controlClasses: [],
};

const NODE_TYPES: NodeType[] = [
  "asset",
  "component",
  "attack-surface",
  "threat",
  "control",
  "response",
  "guidance",
  "incident",
];

function readUrl(): { domain: string | null; focus: string | null; view: string | null } {
  if (typeof window === "undefined") return { domain: null, focus: null, view: null };
  const params = new URLSearchParams(window.location.search);
  const domain = params.get("domain");
  const focus = params.get("focus");
  const view = params.get("view");
  return {
    domain: domain && domain.trim() ? domain.trim() : null,
    focus: focus && focus.trim() ? focus.trim() : null,
    view: view && view.trim() ? view.trim() : null,
  };
}

function writeUrl(next: { domain: string | null; focus: string | null; view: string | null }) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const params = url.searchParams;
  if (next.domain) params.set("domain", next.domain);
  else params.delete("domain");
  if (next.focus) params.set("focus", next.focus);
  else params.delete("focus");
  if (next.view) params.set("view", next.view);
  else params.delete("view");
  const qs = params.toString();
  const href = `${url.pathname}${qs ? `?${qs}` : ""}${url.hash}`;
  window.history.replaceState(null, "", href);
}

export function useSecurityMapState(graph: SecurityMapGraph) {
  const index = useMemo(() => buildIndex(graph), [graph]);
  const [hydrated, setHydrated] = useState(false);
  const [mode, setMode] = useState<MapMode>("overview");
  const [domain, setDomain] = useState<string | null>(null);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [viewId, setViewId] = useState<string | null>(null);
  const [hops, setHops] = useState(1);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [assessment, setAssessment] = useState<AssessmentDocument>(() => ({
    schemaVersion: "1.0.0",
    graphSchemaVersion: graph.schemaVersion,
    updatedAt: "1970-01-01T00:00:00.000Z",
    controls: {},
  }));
  const [legacyVisible, setLegacyVisible] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const initial = readUrl();
    const knownDomain = initial.domain && index.domainTitle[initial.domain] ? initial.domain : null;
    const knownFocus = initial.focus && index.nodesById[initial.focus] ? initial.focus : null;
    const knownView = graph.views.find((v) => v.id === initial.view) || null;
    if (knownView && knownView.kind === "entry" && knownView.focusNodeId) {
      setViewId(knownView.id);
      setFocusId(knownView.focusNodeId);
      setMode("focused");
      setHops(1);
      if (knownView.domain) setDomain(knownView.domain);
    } else if (knownFocus) {
      setFocusId(knownFocus);
      setMode("focused");
    } else if (knownDomain) {
      setDomain(knownDomain);
      setMode("domain");
    }
    setAssessment(loadAssessment(graph));
    setLegacyVisible(hasLegacyPosture() && !isLegacyDismissed());
    setHydrated(true);
  }, [graph, index]);

  useEffect(() => {
    if (!hydrated) return;
    writeUrl({ domain, focus: focusId, view: viewId });
  }, [hydrated, domain, focusId, viewId]);

  useEffect(() => {
    if (!hydrated) return;
    const onPop = () => {
      const next = readUrl();
      const knownDomain = next.domain && index.domainTitle[next.domain] ? next.domain : null;
      const knownFocus = next.focus && index.nodesById[next.focus] ? next.focus : null;
      const knownView = graph.views.find((v) => v.id === next.view) || null;
      setViewId(knownView ? knownView.id : null);
      setFocusId(knownFocus);
      setDomain(knownDomain);
      if (knownFocus) setMode("focused");
      else if (knownDomain) setMode("domain");
      else setMode("overview");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [hydrated, graph, index]);

  const announce = useCallback((message: string) => {
    setLiveMessage(message);
  }, []);

  const selectNode = useCallback(
    (id: string) => {
      const node = index.nodesById[id];
      if (!node) return;
      setFocusId(id);
      setMode("focused");
      setHops(1);
      setViewId(null);
      announce(`${node.title}, ${index.typeTitle[node.type] || node.type}`);
    },
    [announce, index],
  );

  const selectDomain = useCallback(
    (id: string) => {
      if (!index.domainTitle[id]) return;
      setDomain(id);
      setFocusId(null);
      setViewId(null);
      setMode("domain");
      setHops(1);
      announce(`${index.domainTitle[id]} domain`);
    },
    [announce, index],
  );

  const selectView = useCallback(
    (view: SecurityMapView) => {
      if (view.kind === "overview" || !view.focusNodeId) {
        setMode("overview");
        setFocusId(null);
        setDomain(null);
        setViewId(view.id);
        setHops(1);
        announce("Overview");
        return;
      }
      setViewId(view.id);
      setFocusId(view.focusNodeId);
      setMode("focused");
      setHops(1);
      if (view.domain) setDomain(view.domain);
      const node = index.nodesById[view.focusNodeId];
      announce(node ? `View: ${view.title}. Focus ${node.title}` : `View: ${view.title}`);
    },
    [announce, index],
  );

  const backToOverview = useCallback(() => {
    setMode("overview");
    setFocusId(null);
    setDomain(null);
    setViewId(null);
    setHops(1);
    announce("Overview");
  }, [announce]);

  const expandHop = useCallback(() => {
    setHops((n) => Math.min(n + 1, 3));
    announce("Expanded one hop");
  }, [announce]);

  const visibleIds = useMemo(() => {
    if (mode === "overview") return [];
    if (mode === "domain" && domain) return domainVisibleIds(index, domain, filters);
    if (mode === "focused" && focusId) {
      const seed = [focusId];
      const visible = expandVisible(index, seed, hops);
      const ids: string[] = [];
      const view = graph.views.find((v) => v.id === viewId);
      const typeAllow = view?.visibleTypes;
      for (const id of Object.keys(visible)) {
        const node = index.nodesById[id];
        if (!node) continue;
        if (typeAllow && typeAllow.length && !typeAllow.includes(node.type)) continue;
        if (!matchesFilters(node, filters)) continue;
        ids.push(id);
      }
      if (!ids.includes(focusId)) ids.push(focusId);
      return ids;
    }
    return [];
  }, [mode, domain, focusId, hops, filters, index, graph.views, viewId]);

  const searchHits = useMemo(() => searchNodes(index, query, filters), [index, query, filters]);

  const setFilterGroup = useCallback((key: keyof FilterState, values: string[]) => {
    setFilters((prev) => ({ ...prev, [key]: values }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(EMPTY_FILTERS);
    setQuery("");
  }, []);

  const assess = useCallback(
    (controlId: string, state: AssessmentState) => {
      setAssessment((prev) => {
        const next = setControlState(prev, controlId, state, graph);
        saveAssessment(next);
        return next;
      });
    },
    [graph],
  );

  const replaceAssessment = useCallback((doc: AssessmentDocument) => {
    saveAssessment(doc);
    setAssessment(doc);
  }, []);

  const dismissLegacy = useCallback(() => {
    dismissLegacyNotice();
    setLegacyVisible(false);
  }, []);

  return {
    index,
    hydrated,
    mode,
    domain,
    focusId,
    viewId,
    hops,
    query,
    setQuery,
    filters,
    setFilterGroup,
    clearFilters,
    assessment,
    assess,
    replaceAssessment,
    legacyVisible,
    dismissLegacy,
    liveMessage,
    announce,
    selectNode,
    selectDomain,
    selectView,
    backToOverview,
    expandHop,
    visibleIds,
    searchHits,
    nodeTypes: NODE_TYPES,
  };
}

export type { GraphIndex, FilterState };
