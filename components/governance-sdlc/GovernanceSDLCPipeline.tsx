import { forwardRef, useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  sdlcStages,
  categoryMeta,
  type SDLCStage,
  type StageThreat,
  type Category,
} from "./sdlcData";
import "./GovernanceSDLC.css";

/**
 * Vertical 4-stage SDLC pipeline for governance proposal security.
 *
 * Layout: four full-width stage cards stacked top-to-bottom, connected by
 * small down arrows. A dotted loop-back arrow runs along the left gutter
 * from stage 4 back up to stage 1, labelled "feeds next cycle". To the
 * right of each card, a small constellation column shows one coloured dot
 * per threat at that stage.
 *
 * Interaction: click a card -> detail panel below; click a dot -> same
 * panel with the matched threat highlighted. No persisted state.
 */

interface Selection {
  stageId: string;
  threatId?: string;
}

function categoryColor(c: Category): string {
  return categoryMeta[c].color;
}

export function GovernanceSDLCPipeline() {
  const [selection, setSelection] = useState<Selection | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selection || !detailRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    detailRef.current.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [selection]);

  const handleStageClick = useCallback((stageId: string) => {
    setSelection((prev) => (prev && prev.stageId === stageId && !prev.threatId ? null : { stageId }));
  }, []);

  const handleThreatClick = useCallback((stageId: string, threatId: string) => {
    setSelection((prev) =>
      prev && prev.stageId === stageId && prev.threatId === threatId ? null : { stageId, threatId },
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, onActivate: () => void) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onActivate();
      }
    },
    [],
  );

  const selectedStage = useMemo(
    () => (selection ? sdlcStages.find((s) => s.id === selection.stageId) || null : null),
    [selection],
  );

  const legendCategories: Category[] = useMemo(
    () => ["smart-contract", "operational", "human", "infrastructure", "supply-chain", "governance"],
    [],
  );

  return (
    <div className="sdlc-wrap">
      <div className="sdlc-caption">
        <span>Click any stage or threat dot. Each dot is one threat, coloured by category.</span>
        <span className="sdlc-caption-legend">
          {legendCategories.map((c) => (
            <span key={c} className="sdlc-caption-item">
              <span className="sdlc-caption-dot" style={{ background: categoryColor(c) }} />
              {categoryMeta[c].label}
            </span>
          ))}
        </span>
      </div>

      <div className="sdlc-pipeline-vertical">
        {/* Dotted loop-back arrow along the left gutter (stage 1 -> stage 4, pointing down) */}
        <div className="sdlc-loop" aria-hidden="true">
          <span className="sdlc-loop-line" />
          <svg
            className="sdlc-loop-arrow-bottom"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 1 1 L 7 9 L 13 1"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
          </svg>
          <span className="sdlc-loop-label">feeds next cycle</span>
        </div>

        <ol className="sdlc-stage-list">
          {sdlcStages.map((stage, i) => {
            const isSelected = selection?.stageId === stage.id && !selection.threatId;
            const isLast = i === sdlcStages.length - 1;
            return (
              <li key={stage.id} className="sdlc-stage-row">
                <div className="sdlc-stage-card-wrap">
                  <div
                    className={`sdlc-stage-card ${isSelected ? "selected" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Stage ${stage.index}: ${stage.title}. ${stage.subtitle}.`}
                    onClick={() => handleStageClick(stage.id)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleStageClick(stage.id))}
                  >
                    <div className="sdlc-stage-main">
                      <div className="sdlc-stage-index">STAGE {stage.index}</div>
                      <div className="sdlc-stage-title">{stage.title}</div>
                      <div className="sdlc-stage-subtitle">{stage.subtitle}</div>
                    </div>
                    <div
                      className="sdlc-stage-constellation"
                      role="group"
                      aria-label={`Threats at stage ${stage.index}`}
                    >
                      {stage.threats.map((threat) => {
                        const isThreatSelected =
                          selection?.stageId === stage.id && selection?.threatId === threat.id;
                        return (
                          <button
                            key={threat.id}
                            type="button"
                            className={`sdlc-dot ${isThreatSelected ? "selected" : ""}`}
                            style={{ background: categoryColor(threat.category) }}
                            aria-label={`Threat: ${threat.label} (${categoryMeta[threat.category].label})`}
                            title={threat.label}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleThreatClick(stage.id, threat.id);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                e.stopPropagation();
                                handleThreatClick(stage.id, threat.id);
                              }
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <div className="sdlc-stage-connector" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sdlc-stage-arrow"
                    >
                      <path
                        d="M 12 2 L 12 24"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        opacity="0.7"
                      />
                      <path
                        d="M 6 22 L 12 30 L 18 22"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail panel */}
      {selectedStage && (
        <DetailPanel
          ref={detailRef}
          stage={selectedStage}
          activeThreatId={selection?.threatId}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}

interface DetailPanelProps {
  stage: SDLCStage;
  activeThreatId?: string;
  onClose: () => void;
}

const DetailPanel = forwardRef<HTMLDivElement, DetailPanelProps>(function DetailPanel(
  { stage, activeThreatId, onClose },
  ref,
) {
  const threatItemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    if (!activeThreatId) return;
    const el = threatItemRefs.current[activeThreatId];
    if (el) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }, [activeThreatId]);

  const activeThreat: StageThreat | undefined = activeThreatId
    ? stage.threats.find((t) => t.id === activeThreatId)
    : undefined;
  const highlightedDefenseId = activeThreat?.defenseRef;

  return (
    <div className="sdlc-detail" ref={ref} aria-live="polite">
      <div className="sdlc-detail-head">
        <div>
          <p className="sdlc-detail-eyebrow">Stage {stage.index}</p>
          <h3 className="sdlc-detail-title">{stage.title}</h3>
          <p className="sdlc-detail-subtitle">{stage.subtitle}</p>
        </div>
        <button
          type="button"
          className="sdlc-detail-close"
          onClick={onClose}
          aria-label="Close stage detail"
        >
          &times;
        </button>
      </div>

      <p className="sdlc-detail-purpose">{stage.purpose}</p>

      <div className="sdlc-detail-columns">
        <div className="sdlc-detail-col">
          <h4>Threats at this stage</h4>
          <ul className="sdlc-threat-list">
            {stage.threats.map((threat) => (
              <li
                key={threat.id}
                ref={(el) => {
                  threatItemRefs.current[threat.id] = el;
                }}
                className={`sdlc-threat-item ${
                  activeThreatId === threat.id ? "highlighted" : ""
                }`}
              >
                <span
                  className="sdlc-threat-dot"
                  style={{ background: categoryColor(threat.category) }}
                  aria-hidden="true"
                />
                <div className="sdlc-threat-body">
                  <p className="sdlc-threat-label">{threat.label}</p>
                  <p className="sdlc-threat-desc">{threat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="sdlc-detail-col">
          <h4>Defenses</h4>
          <ul className="sdlc-defense-list">
            {stage.defenses.map((defense) => (
              <li
                key={defense.id}
                className={`sdlc-defense-item ${
                  highlightedDefenseId === defense.id ? "highlighted" : ""
                }`}
              >
                <span className="sdlc-defense-bullet" aria-hidden="true">
                  &rsaquo;
                </span>
                <span>{defense.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sdlc-detail-foot">
        <div className="sdlc-detail-links">
          {stage.frameworkLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link to={`#${stage.anchor}`} className="sdlc-detail-cta">
          Jump to section &rarr;
        </Link>
      </div>
    </div>
  );
});
