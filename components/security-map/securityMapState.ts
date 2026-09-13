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
import { buildIndex, hopsFrom, type GraphIndex } from "./graphIndex";

function readFocus(): string | null {
  if (typeof window === "undefined") return null;
  const focus = new URLSearchParams(window.location.search).get("focus");
  return focus && focus.trim() ? focus.trim() : null;
}

function writeFocus(focus: string | null) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (focus) url.searchParams.set("focus", focus);
  else url.searchParams.delete("focus");
  const qs = url.searchParams.toString();
  window.history.replaceState(null, "", `${url.pathname}${qs ? `?${qs}` : ""}${url.hash}`);
}

export function useSecurityMapState(graph: SecurityMapGraph) {
  const index = useMemo(() => buildIndex(graph), [graph]);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [assessment, setAssessment] = useState<AssessmentDocument>(() => ({
    schemaVersion: "1.0.0",
    graphSchemaVersion: graph.schemaVersion,
    updatedAt: "1970-01-01T00:00:00.000Z",
    controls: {},
  }));
  const [legacyVisible, setLegacyVisible] = useState(false);

  useEffect(() => {
    const initial = readFocus();
    setFocusId(initial && index.nodesById[initial] ? initial : null);
    setAssessment(loadAssessment(graph));
    setLegacyVisible(hasLegacyPosture() && !isLegacyDismissed());
  }, [graph, index]);

  useEffect(() => {
    writeFocus(focusId);
  }, [focusId]);

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
    focusId,
    dist,
    assessment,
    legacyVisible,
    selectNode,
    clearFocus,
    assess,
    replaceAssessment,
    dismissLegacy,
  };
}

export type { GraphIndex };
