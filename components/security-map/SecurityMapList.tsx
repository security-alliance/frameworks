import { ASSESSMENT_STATE_LABELS, NODE_TYPE_LABELS, type NodeType } from "./types";
import type { GraphIndex } from "./graphIndex";
import type { AssessmentDocument } from "./assessment";

export function SecurityMapList({
  index,
  visibleIds,
  focusId,
  onSelect,
  assessment,
}: {
  index: GraphIndex;
  visibleIds: string[];
  focusId: string | null;
  onSelect: (id: string) => void;
  assessment: AssessmentDocument;
}) {
  const groups: Record<string, typeof index.graph.nodes> = Object.create(null);
  const order: NodeType[] = [
    "asset",
    "component",
    "attack-surface",
    "threat",
    "control",
    "response",
    "guidance",
    "incident",
  ];
  for (const type of order) groups[type] = [];
  const ids = visibleIds.length ? visibleIds : [];
  for (const id of ids) {
    const node = index.nodesById[id];
    if (!node) continue;
    if (!groups[node.type]) groups[node.type] = [];
    groups[node.type].push(node);
  }

  if (!ids.length) {
    return (
      <div className="sm-list">
        <h2>Browse</h2>
        <p className="sm-empty">
          Overview is open. Pick a domain, an entry point, or a search result. The list below
          stays in sync with the graph.
        </p>
      </div>
    );
  }

  return (
    <div className="sm-list">
      <h2>Visible nodes</h2>
      {order.map((type) => {
        const nodes = groups[type];
        if (!nodes.length) return null;
        return (
          <section key={type}>
            <h3>{NODE_TYPE_LABELS[type]}</h3>
            {nodes.map((node) => {
              const assessed = assessment.controls[node.id];
              return (
                <button
                  key={node.id}
                  type="button"
                  className="sm-list-item"
                  aria-current={node.id === focusId ? "true" : undefined}
                  onClick={() => onSelect(node.id)}
                >
                  <span className="sm-list-title">{node.title}</span>
                  <span className="sm-list-meta">
                    {node.domains.map((d) => index.domainTitle[d] || d).join(", ")}
                    {node.severity ? ` · triage ${node.severity}` : ""}
                    {assessed
                      ? ` · ${ASSESSMENT_STATE_LABELS[assessed.state]}`
                      : node.assessmentEligible
                        ? " · not assessed"
                        : ""}
                  </span>
                </button>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
