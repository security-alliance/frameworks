"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { securityMapGraph } from "./securityMap.generated";
import { useSecurityMapState } from "./securityMapState";
import { SecurityMapToolbar } from "./SecurityMapToolbar";
import { SecurityMapGraph } from "./SecurityMapGraph";
import { SecurityMapList } from "./SecurityMapList";
import { SecurityMapDetails } from "./SecurityMapDetails";
import {
  exportAssessment,
  exportFilename,
  parseAssessmentJson,
  readLegacyPosture,
  type AssessmentParseResult,
} from "./assessment";
import { countByState } from "./assessment";
import { domainCount } from "./graphIndex";
import "./SecurityMap.css";

export function SecurityMap() {
  const graph = securityMapGraph;
  const state = useSecurityMapState(graph);
  const [narrow, setNarrow] = useState(false);
  const [importPreview, setImportPreview] = useState<AssessmentParseResult | null>(null);
  const [importRaw, setImportRaw] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const apply = () => setNarrow(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!narrow) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && state.focusId) {
        state.backToOverview();
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [narrow, state.focusId, state.backToOverview]);
  const focused = state.focusId ? state.index.nodesById[state.focusId] : null;
  const counts = useMemo(() => countByState(state.assessment), [state.assessment]);
  const eligibleCount = Object.keys(state.index.eligibleControlIds).length;

  const onExport = useCallback(() => {
    const blob = new Blob([exportAssessment(state.assessment)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportFilename();
    a.click();
    URL.revokeObjectURL(url);
  }, [state.assessment]);

  const onPickImport = useCallback(async (file: File | null) => {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      setImportPreview({
        ok: false,
        document: null,
        errors: ["file exceeds 1048576 bytes"],
        recognized: [],
        unknown: [],
        invalid: [],
      });
      setImportRaw(null);
      return;
    }
    const text = await file.text();
    setImportRaw(text);
    setImportPreview(parseAssessmentJson(text, graph));
  }, [graph]);

  const confirmImport = useCallback(() => {
    if (!importPreview?.ok || !importPreview.document) return;
    state.replaceAssessment(importPreview.document);
    setImportPreview(null);
    setImportRaw(null);
  }, [importPreview, state]);

  const exportLegacy = useCallback(() => {
    const raw = readLegacyPosture();
    if (!raw) return;
    const blob = new Blob([raw], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "attackSurface-posture-legacy.json";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="sm-wrap">
      <p className="sm-disclaimer">
        <strong>Incomplete map.</strong> This is guidance, not a guarantee and not a substitute for
        project-specific threat modeling. Relationships are curated and may be proposed. Severity is
        contextual. Implementing a control is not verifying it. Verified controls reduce risk; they
        do not eliminate threats. Absence from the map does not mean absence of risk.
      </p>
      {state.legacyVisible ? (
        <div className="sm-legacy">
          This browser still has old Attack Surface Overview ratings stored as{" "}
          <code>attackSurface-posture</code>. Those were threat-level yes/partial/no marks and
          cannot be converted into control assessments without inventing evidence. Start a fresh
          control assessment. Optionally export the old values first. Nothing is uploaded.
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
      <p className="sm-help">
        Assessed controls: {eligibleCount} eligible. {counts.implemented} implemented,{" "}
        {counts.verified} verified, {counts["partially-implemented"]} partial, {counts.planned}{" "}
        planned, {counts.missing} missing, {counts["not-applicable"]} not applicable. Unlisted
        controls stay not assessed.
      </p>
      <SecurityMapToolbar
        index={state.index}
        query={state.query}
        setQuery={state.setQuery}
        searchHits={state.searchHits}
        filters={state.filters}
        setFilterGroup={state.setFilterGroup}
        clearFilters={state.clearFilters}
        onSelectNode={state.selectNode}
        views={graph.views}
        onSelectView={state.selectView}
        liveMessage={state.liveMessage}
      />
      {state.mode === "overview" ? (
        <div className="sm-domains">
          {state.index.graph.taxonomies.domains.map((domain) => (
            <button
              key={domain.id}
              type="button"
              className="sm-domain"
              onClick={() => state.selectDomain(domain.id)}
            >
              <h3>{domain.title}</h3>
              <p>{domain.summary}</p>
              <div className="sm-count">{domainCount(state.index, domain.id)} nodes</div>
            </button>
          ))}
        </div>
      ) : null}
      <div className="sm-body">
        <SecurityMapGraph
          index={state.index}
          visibleIds={state.visibleIds}
          focusId={state.focusId}
          onSelect={state.selectNode}
          onExpand={state.expandHop}
          onReset={state.backToOverview}
        />
        <SecurityMapList
          index={state.index}
          visibleIds={
            state.mode === "overview"
              ? graph.nodes.filter((n) => n.type === "asset" || n.type === "component").map((n) => n.id)
              : state.visibleIds
          }
          focusId={state.focusId}
          onSelect={state.selectNode}
          assessment={state.assessment}
        />
        <SecurityMapDetails
          index={state.index}
          node={focused || null}
          onSelect={state.selectNode}
          onClose={state.backToOverview}
          assessment={state.assessment}
          onAssess={state.assess}
          asDrawer={narrow && Boolean(focused)}
        />
      </div>
      <div className="sm-assess">
        <p className="sm-privacy">
          <strong>Assessments stay local.</strong> Share URLs never include assessment state. Import
          replaces the current assessment after preview and confirmation.
        </p>
        <button type="button" className="sm-btn" onClick={onExport}>
          Export assessment
        </button>{" "}
        <button type="button" className="sm-btn" onClick={() => fileRef.current?.click()}>
          Import assessment
        </button>
        <input
          ref={fileRef}
          className="sm-file"
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
            <p className="sm-help">
              Import replaces the current local assessment. Unknown control IDs are reported and
              dropped. Invalid records block the import.
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
