import { Link } from "vocs";
import {
  NODE_TYPE_LABELS,
  type AssessmentState,
  type NodeType,
  type SecurityMapNode,
} from "./types";
import { gapReasons, relatedByType, type GraphIndex } from "./graphIndex";
import { SecurityMapAssessment } from "./SecurityMapAssessment";
import type { AssessmentDocument } from "./assessment";


const MAP_REL_TYPES: NodeType[] = ["attack-surface", "threat", "control"];

const COUNT_TYPES: NodeType[] = [
  "attack-surface",
  "threat",
  "control",
  "incident",
  "guidance",
  "response",
];

function pageLinks(index: GraphIndex, id: string): SecurityMapNode[] {
  const seen: Record<string, true> = Object.create(null);
  const pages: SecurityMapNode[] = [];
  const add = (node: SecurityMapNode | undefined) => {
    if (!node?.href || seen[node.id]) return;
    seen[node.id] = true;
    pages.push(node);
  };
  add(index.nodesById[id]);
  for (const edge of index.outgoing[id] || []) {
    if (edge.type === "documented-by" || edge.type === "evaluated-by") add(index.nodesById[edge.target]);
  }

  return pages;
}


export function SecurityMapDetails({
  index,
  node,
  onSelect,
  onClose,
  assessment,
  onAssess,
}: {
  index: GraphIndex;
  node: SecurityMapNode | null;
  onSelect: (id: string) => void;
  onClose: () => void;
  assessment: AssessmentDocument;
  onAssess: (id: string, state: AssessmentState) => void;
}) {
  if (!node) {
    return (
      <aside className="sm-details">
        <h2>Selection</h2>
        <p className="sm-empty">Click a field. Related fields in the other columns light up.</p>
      </aside>
    );
  }

  const related = relatedByType(index, node.id, 2);
  const assessed = assessment.controls[node.id];
  const reasons = gapReasons(index, node.id);
  const pages = pageLinks(index, node.id);

  return (
    <aside className="sm-details" aria-labelledby="sm-detail-title">
      <div className="sm-details-head">
        <p className="sm-kicker">{NODE_TYPE_LABELS[node.type]}</p>
        <button type="button" className="sm-btn" onClick={onClose}>
          Clear
        </button>
      </div>
      <h2 id="sm-detail-title">{node.title}</h2>
      <p>{node.summary}</p>
      {pages.length ? (
        <ul className="sm-rel">
          {pages.map((page) => (
            <li key={page.id}>
              <Link className="sm-page-link" to={page.href as string}>
                {page.id === node.id ? "Open framework page" : page.title}
              </Link>

            </li>
          ))}
        </ul>
      ) : null}

      <ul className="sm-stats">
        {COUNT_TYPES.map((type) => (
          <li key={type}>
            <strong>{related[type].length}</strong>
            <span>{NODE_TYPE_LABELS[type]}</span>
          </li>
        ))}
      </ul>
      {reasons.length ? (
        <ul className="sm-gaps">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      ) : null}
      {MAP_REL_TYPES.map((type) =>
        related[type].length ? (
          <div key={type}>
            <h3>{NODE_TYPE_LABELS[type]}</h3>
            <ul className="sm-rel">
              {related[type].map((other) => (
                <li key={other.id}>
                  <button type="button" onClick={() => onSelect(other.id)}>
                    {other.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null,
      )}

      {node.type === "control" && node.assessmentEligible !== false ? (
        <SecurityMapAssessment
          controlId={node.id}
          state={assessed?.state || "not-assessed"}
          onAssess={onAssess}
        />
      ) : null}
    </aside>
  );
}
