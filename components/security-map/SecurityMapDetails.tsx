import { useEffect, useRef } from "react";
import { Link } from "vocs";
import {
  ASSESSMENT_STATE_LABELS,
  NODE_TYPE_LABELS,
  type AssessmentState,
  type SecurityMapNode,
} from "./types";
import { connectedEdges, type GraphIndex } from "./graphIndex";
import { SecurityMapAssessment } from "./SecurityMapAssessment";
import type { AssessmentDocument } from "./assessment";

export function SecurityMapDetails({
  index,
  node,
  onSelect,
  onClose,
  assessment,
  onAssess,
  asDrawer,
}: {
  index: GraphIndex;
  node: SecurityMapNode | null;
  onSelect: (id: string) => void;
  onClose: () => void;
  assessment: AssessmentDocument;
  onAssess: (id: string, state: AssessmentState) => void;
  asDrawer: boolean;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (asDrawer && node) closeRef.current?.focus();
  }, [asDrawer, node]);

  if (!node) {
    return (
      <aside className="sm-details">
        <h2>Details</h2>
        <p className="sm-empty">Select a node to read relationships and guidance.</p>
      </aside>
    );
  }

  const edges = connectedEdges(index, node.id);
  const assessed = assessment.controls[node.id];
  const coverageGap = node.type === "control" && !edges.some((e) => e.type === "documented-by" && e.source === node.id);

  return (
    <aside className={`sm-details${asDrawer ? " sm-drawer" : ""}`} aria-labelledby="sm-detail-title">
      <div className="sm-kv">
        <span className="sm-badge">{NODE_TYPE_LABELS[node.type]}</span>
        <span className="sm-badge">{node.status}</span>
        {node.controlClass ? <span className="sm-badge">{node.controlClass}</span> : null}
        {node.severity ? (
          <span className={`sm-badge sev-${node.severity}`}>triage {node.severity}</span>
        ) : null}
        {node.assessmentEligible ? (
          <span className="sm-badge">
            {assessed ? ASSESSMENT_STATE_LABELS[assessed.state] : "Not assessed"}
          </span>
        ) : null}
      </div>
      <h2 id="sm-detail-title">{node.title}</h2>
      <p>{node.summary}</p>
      {node.severityBasis ? <p>{node.severityBasis}</p> : null}
      <p className="sm-help">
        Domains: {node.domains.map((d) => index.domainTitle[d] || d).join(", ")}
        {node.roles?.length ? ` · Roles: ${node.roles.join(", ")}` : ""}
        {node.lifecycle?.length ? ` · Lifecycle: ${node.lifecycle.join(", ")}` : ""}
      </p>
      {node.status === "proposed" ? (
        <p className="sm-help">
          This record is proposed. Relationships are curated and may change after steward review.
        </p>
      ) : null}
      {coverageGap ? (
        <p className="sm-help">
          Coverage gap: this control is not yet linked to a framework page.
        </p>
      ) : null}
      <h3>Relationships</h3>
      {edges.length ? (
        <ul className="sm-rel">
          {edges.map((edge) => {
            const otherId = edge.source === node.id ? edge.target : edge.source;
            const other = index.nodesById[otherId];
            return (
              <li key={edge.id}>
                <span className="sm-badge">{index.edgeTitle[edge.type] || edge.type}</span>{" "}
                <button type="button" onClick={() => onSelect(otherId)}>
                  {other ? other.title : otherId}
                </button>
                {edge.rationale ? <div className="sm-help">{edge.rationale}</div> : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="sm-empty">No relationships recorded yet.</p>
      )}
      {node.type === "guidance" && node.href ? (
        <p>
          <Link href={node.href}>Open framework page</Link>
        </p>
      ) : null}
      {node.sources?.length ? (
        <div>
          <h3>Evidence</h3>
          <ul>
            {node.sources.map((src) => (
              <li key={src.url}>
                <a href={src.url} target="_blank" rel="noopener noreferrer">
                  {src.title} ({src.publisher})
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {node.type === "control" && node.assessmentEligible ? (
        <SecurityMapAssessment
          controlId={node.id}
          state={assessed?.state || "not-assessed"}
          onAssess={onAssess}
        />
      ) : null}
      <button ref={closeRef} type="button" className="sm-btn" onClick={onClose} aria-label="Close details">
        Close details
      </button>
    </aside>
  );
}
