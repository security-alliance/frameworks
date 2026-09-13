"use client";

import { useCallback, useRef, useState } from "react";
import { securityMapGraph } from "./securityMap.generated";
import { useSecurityMapState } from "./securityMapState";
import { SecurityMapGraph } from "./SecurityMapGraph";
import { SecurityMapDetails } from "./SecurityMapDetails";
import {
  exportAssessment,
  exportFilename,
  parseAssessmentJson,
  readLegacyPosture,
  type AssessmentParseResult,
} from "./assessment";
import "./SecurityMap.css";

export function SecurityMap() {
  const graph = securityMapGraph;
  const state = useSecurityMapState(graph);
  const [importPreview, setImportPreview] = useState<AssessmentParseResult | null>(null);
  const [importRaw, setImportRaw] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const focused = state.focusId ? state.index.nodesById[state.focusId] : null;

  const onExport = useCallback(() => {
    const blob = new Blob([exportAssessment(state.assessment)], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = exportFilename();
    a.click();
    URL.revokeObjectURL(href);
  }, [state.assessment]);

  const onPickImport = useCallback(
    async (file: File | null) => {
      if (!file) return;
      const raw = await file.text();
      setImportRaw(raw);
      setImportPreview(parseAssessmentJson(raw, graph));
    },
    [graph],
  );

  const confirmImport = useCallback(() => {
    if (!importPreview?.ok || !importRaw) return;
    const parsed = parseAssessmentJson(importRaw, graph);
    if (!parsed.ok || !parsed.document) return;
    state.replaceAssessment(parsed.document);
    setImportPreview(null);
    setImportRaw(null);
  }, [graph, importPreview, importRaw, state]);

  const exportLegacy = useCallback(() => {
    const legacy = readLegacyPosture();
    const blob = new Blob([JSON.stringify(legacy, null, 2)], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = "attackSurface-posture.json";
    a.click();
    URL.revokeObjectURL(href);
  }, []);

  return (
    <div className="sm-wrap">
      <p className="sm-disclaimer">
        Incomplete map. Click a field to see what it holds, how it is reached, how it fails, and
        which controls apply. Local ratings never leave this browser.
      </p>
      {state.legacyVisible ? (
        <div className="sm-legacy">
          This browser still has old Attack Surface Overview ratings in{" "}
          <code>attackSurface-posture</code>. Those threat-level marks are not control evidence.
          <div className="sm-legacy-actions">
            <button type="button" className="sm-btn" onClick={exportLegacy}>
              Export legacy ratings
            </button>
            <button type="button" className="sm-btn" onClick={state.dismissLegacy}>
              Dismiss
            </button>
          </div>
        </div>
      ) : null}
      <div className={`sm-stage${focused ? " has-focus" : ""}`}>
        <SecurityMapGraph
          index={state.index}
          focusId={state.focusId}
          dist={state.dist}
          onSelect={state.selectNode}
        />
        {focused ? (
          <SecurityMapDetails
            index={state.index}
            node={focused}
            onSelect={state.selectNode}
            onClose={state.clearFocus}
            assessment={state.assessment}
            onAssess={state.assess}
          />
        ) : null}
      </div>

      <div className="sm-foot">
        <p className="sm-privacy">
          Assessments stay in this browser. Share URLs may include <code>focus</code>. They never
          include assessment state.
        </p>
        <button type="button" className="sm-btn" onClick={onExport}>
          Export assessment
        </button>{" "}
        <button type="button" className="sm-btn" onClick={() => fileRef.current?.click()}>
          Import assessment
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            void onPickImport(file);
            e.target.value = "";
          }}
        />
        {importPreview ? (
          <div className="sm-legacy">
            <p>
              Preview: {importPreview.recognized.length} recognized, {importPreview.unknown.length}{" "}
              unknown, {importPreview.invalid.length} invalid.
              {importPreview.errors.length ? ` Errors: ${importPreview.errors.join("; ")}` : ""}
            </p>
            {importPreview.ok && importRaw ? (
              <button type="button" className="sm-btn" onClick={confirmImport}>
                Replace current assessment
              </button>
            ) : (
              <p className="sm-empty">Import not applied.</p>
            )}
            <button type="button" className="sm-btn" onClick={() => setImportPreview(null)}>
              Cancel
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
