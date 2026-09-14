import { useCallback, useEffect, useMemo, useState } from "react";
import type { AssessmentState, SecurityMapGraph } from "./types";
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
  ALL_VIEW_ID,
  buildIndex,
  hopsFrom,
  listMapViews,
  viewNodeIds,
  type GraphIndex,
} from "./graphIndex";

function readQuery(): { focus: string | null; view: string } {
  if (typeof window === "undefined") return { focus: null, view: ALL_VIEW_ID };
  const params = new URLSearchParams(window.location.search);
  const focus = params.get("focus");
  const view = params.get("view");
  return {
    focus: focus && focus.trim() ? focus.trim() : null,
    view: view && view.trim() ? view.trim() : ALL_VIEW_ID,
  };
}

function writeQuery(focus: string | null, view: string) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (focus) url.searchParams.set("focus", focus);
  else url.searchParams.delete("focus");
  if (view && view !== ALL_VIEW_ID) url.searchParams.set("view", view);
  else url.searchParams.delete("view");
  const qs = url.searchParams.toString();
  window.history.replaceState(null, "", `${url.pathname}${qs ? `?${qs}` : ""}${url.hash}`);
}

export function useSecurityMapState(graph: SecurityMapGraph) {
  const index = useMemo(() => buildIndex(graph), [graph]);
  const views = useMemo(() => listMapViews(graph), [graph]);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [viewId, setViewId] = useState(ALL_VIEW_ID);
  const [hydrated, setHydrated] = useState(false);
  const [assessment, setAssessment] = useState<AssessmentDocument>(() => ({
    schemaVersion: "1.0.0",
    graphSchemaVersion: graph.schemaVersion,
    updatedAt: "1970-01-01T00:00:00.000Z",
    controls: {},
  }));
  const [legacyVisible, setLegacyVisible] = useState(false);

  useEffect(() => {
    const initial = readQuery();
    const knownView = views.some((view) => view.id === initial.view) ? initial.view : ALL_VIEW_ID;
    const visible = viewNodeIds(index, knownView);
    const focus =
      initial.focus && index.nodesById[initial.focus] && (!visible || visible.has(initial.focus))
        ? initial.focus
        : null;
    setViewId(knownView);
    setFocusId(focus);
    setAssessment(loadAssessment(graph));
    setLegacyVisible(hasLegacyPosture() && !isLegacyDismissed());
    setHydrated(true);
  }, [graph, index, views]);

  useEffect(() => {
    if (!hydrated) return;
    writeQuery(focusId, viewId);
  }, [hydrated, focusId, viewId]);

  const visibleIds = useMemo(() => viewNodeIds(index, viewId), [index, viewId]);

  const dist = useMemo(
    () => (focusId ? hopsFrom(index, focusId, 2) : (Object.create(null) as Record<string, number>)),
    [index, focusId],
  );

  const selectNode = useCallback((id: string) => {
    setFocusId((cur) => (cur === id ? null : id));
  }, []);

  const clearFocus = useCallback(() => {
    setFocusId(null);
  }, []);

  const selectView = useCallback(
    (id: string) => {
      const next = views.some((view) => view.id === id) ? id : ALL_VIEW_ID;
      const visible = viewNodeIds(index, next);
      const option = views.find((view) => view.id === next);
      setViewId(next);
      setFocusId((cur) => {
        if (cur && index.nodesById[cur] && (!visible || visible.has(cur))) return cur;
        if (option?.focusNodeId && index.nodesById[option.focusNodeId]) return option.focusNodeId;
        return null;
      });
    },
    [index, views],
  );


  const assess = useCallback(
    (controlId: string, nextState: AssessmentState) => {
      setAssessment((cur) => {
        const next = setControlState(cur, controlId, nextState, graph);
        saveAssessment(next);
        return next;
      });
    },
    [graph],
  );


  const replaceAssessment = useCallback((next: AssessmentDocument) => {
    saveAssessment(next);
    setAssessment(next);
  }, []);

  const dismissLegacy = useCallback(() => {
    dismissLegacyNotice();
    setLegacyVisible(false);
  }, []);

  return {
    index,
    views,
    viewId,
    visibleIds,
    focusId,
    dist,
    assessment,
    legacyVisible,
    selectNode,
    selectView,
    clearFocus,
    assess,
    replaceAssessment,
    dismissLegacy,
  };
}

export type { GraphIndex };
