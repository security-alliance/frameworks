import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { threatVectors, severityMeta, type PostureState, type ThreatVector } from "./threatData";
import "./AttackSurface.css";

const STORAGE_KEY = "attackSurface-posture";
const CX = 420;
const CY = 420;
const RADIUS = 286;
const NODE_R = 39;
const HUB_R = 39;

type PostureMap = Record<string, PostureState>;

const nextState: Record<PostureState, PostureState> = {
  no: "yes",
  yes: "partial",
  partial: "no",
};

const stateColors: Record<PostureState, string> = {
  no: "#ef4444",
  yes: "#10b981",
  partial: "#f59e0b",
};

const spokeColors: Record<PostureState, string> = {
  no: "rgba(239, 68, 68, 0.25)",
  yes: "rgba(16, 185, 129, 0.25)",
  partial: "rgba(245, 158, 11, 0.25)",
};

const checkMarks: Record<PostureState, string> = {
  no: "",
  yes: "\u2713",
  partial: "",
};

const postureLabels: Record<PostureState, string> = {
  no: "Gap",
  yes: "Secured",
  partial: "In Progress",
};

function loadPosture(): PostureMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function savePosture(posture: PostureMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posture));
  } catch {}
}

function wrapLabel(title: string): string[] {
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (current && (current + " " + word).length > 16) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function nodePosition(index: number, total: number) {
  const angle = ((2 * Math.PI) / total) * index - Math.PI / 2;
  return {
    x: CX + RADIUS * Math.cos(angle),
    y: CY + RADIUS * Math.sin(angle),
  };
}

export function AttackSurfaceDashboard() {
  const [posture, setPosture] = useState<PostureMap>({});
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setPosture(loadPosture());
  }, []);

  const handleToggle = useCallback((id: string) => {
    setPosture((prev) => {
      const current = prev[id] || "no";
      const next = { ...prev, [id]: nextState[current] };
      if (nextState[current] === "no") delete next[id];
      savePosture(next);
      return next;
    });
  }, []);

  const handleSetPosture = useCallback((id: string, state: PostureState) => {
    setPosture((prev) => {
      const next = { ...prev, [id]: state };
      if (state === "no") delete next[id];
      savePosture(next);
      return next;
    });
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  const counts = useMemo(() => {
    const values = threatVectors.map((v) => posture[v.id] || "no");
    return {
      yes: values.filter((s) => s === "yes").length,
      partial: values.filter((s) => s === "partial").length,
      no: values.filter((s) => s === "no").length,
    };
  }, [posture]);

  const selectedVector = selected
    ? threatVectors.find((v) => v.id === selected) || null
    : null;

  return (
    <div className="as-wrap">
      {/* Summary */}
      <div className="as-summary-bar">
        <span className="as-summary-count">
          {counts.yes + counts.partial} of {threatVectors.length} vectors covered
        </span>
        <div className="as-summary-legend">
          <span className="as-legend-item">
            <span className="as-legend-dot" style={{ background: "#10b981" }} />
            {counts.yes} secured
          </span>
          <span className="as-legend-item">
            <span className="as-legend-dot" style={{ background: "#f59e0b" }} />
            {counts.partial} in progress
          </span>
          <span className="as-legend-item">
            <span className="as-legend-dot" style={{ background: "#ef4444" }} />
            {counts.no} gaps
          </span>
        </div>
      </div>

      {/* SVG Radial Map */}
      <div className="as-map">
        <svg viewBox="0 0 840 840" xmlns="http://www.w3.org/2000/svg">
          {/* Spokes */}
          {threatVectors.map((v, i) => {
            const pos = nodePosition(i, threatVectors.length);
            const state = posture[v.id] || "no";
            return (
              <line
                key={`spoke-${v.id}`}
                x1={CX}
                y1={CY}
                x2={pos.x}
                y2={pos.y}
                className={`as-spoke state-${state}`}
                stroke={spokeColors[state]}
              />
            );
          })}

          {/* Hub */}
          <circle cx={CX} cy={CY} r={HUB_R} className="as-hub" />
          <text x={CX} y={CY - 6} className="as-hub-label" textAnchor="middle">
            Your
          </text>
          <text x={CX} y={CY + 10} className="as-hub-label" textAnchor="middle">
            Protocol
          </text>

          {/* Nodes */}
          {threatVectors.map((v, i) => {
            const pos = nodePosition(i, threatVectors.length);
            const state = posture[v.id] || "no";
            const isCritical = v.severity === "critical";
            const isSelected = selected === v.id;
            const lines = wrapLabel(v.title);

            return (
              <g
                key={v.id}
                className={`as-node-group ${isCritical ? "critical" : ""} state-${state} ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(v.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Main node */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={NODE_R}
                  className={`as-node state-${state}`}
                  fill={stateColors[state]}
                />
                {/* Check mark */}
                <text
                  x={pos.x}
                  y={pos.y + 6}
                  className="as-node-check"
                  textAnchor="middle"
                >
                  {checkMarks[state]}
                </text>
                {/* Label */}
                {lines.map((line, li) => (
                  <text
                    key={li}
                    x={pos.x}
                    y={pos.y + NODE_R + 14 + li * 13}
                    className="as-node-label"
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile list fallback */}
      <div className="as-mobile-list">
        {threatVectors.map((v) => {
          const state = posture[v.id] || "no";
          const sev = severityMeta[v.severity];
          return (
            <div
              key={v.id}
              className={`as-mobile-row ${selected === v.id ? "selected" : ""}`}
              onClick={() => handleSelect(v.id)}
            >
              <div
                className={`as-mobile-dot state-${state}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(v.id);
                }}
              >
                {checkMarks[state]}
              </div>
              <span className="as-mobile-name">{v.title}</span>
              <span
                className="as-mobile-sev"
                style={{ color: sev.color, background: sev.bg }}
              >
                {sev.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detail Card */}
      {selectedVector && (
        <DetailCard
          vector={selectedVector}
          state={posture[selectedVector.id] || "no"}
          onSetState={(state) => handleSetPosture(selectedVector.id, state)}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function DetailCard({
  vector,
  state,
  onSetState,
  onClose,
}: {
  vector: ThreatVector;
  state: PostureState;
  onSetState: (state: PostureState) => void;
  onClose: () => void;
}) {
  const sev = severityMeta[vector.severity];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cardRef.current.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [vector.id]);

  return (
    <div className="as-detail" ref={cardRef}>
      <div className="as-detail-top">
        <div className="as-detail-left">
          <h3 className="as-detail-title">{vector.title}</h3>
          <div className="as-detail-sev">
            <span className="as-detail-sev-dot" style={{ background: sev.color }} />
            <span style={{ color: sev.color }}>{sev.label.toUpperCase()} SEVERITY</span>
          </div>
        </div>
        <div className="as-detail-right">
          <div className="as-detail-toggle">
            {(["no", "partial", "yes"] as PostureState[]).map((s) => (
              <button
                key={s}
                type="button"
                className={`as-toggle-btn ${state === s ? `active state-${s}` : ""}`}
                onClick={() => onSetState(s)}
              >
                {postureLabels[s]}
              </button>
            ))}
          </div>
          <button className="as-detail-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
      </div>

      <p className="as-detail-desc">{vector.description}</p>

      <div className="as-detail-bottom">
        <div className="as-detail-tags">
          {vector.attackTags.map((tag) => (
            <span key={tag} className="as-attack-tag">{tag}</span>
          ))}
        </div>
        <Link
          to={vector.primaryLink}
          className="as-detail-cta"
        >
          {vector.primaryLinkLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
