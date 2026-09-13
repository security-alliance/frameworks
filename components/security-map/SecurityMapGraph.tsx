import { useMemo, useState } from "react";
import type { NodeType, SecurityMapNode } from "./types";
import type { GraphIndex } from "./graphIndex";

const WIDTH = 720;
const HEIGHT = 480;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;

function shapeFor(type: NodeType, x: number, y: number, selected: boolean) {
  const cls = `sm-shape-${type} sm-hit`;
  const r = selected ? 16 : 13;
  if (type === "control" || type === "threat") {
    return <circle className={cls} cx={x} cy={y} r={r} />;
  }
  if (type === "attack-surface") {
    const s = r + 2;
    return (
      <polygon
        className={cls}
        points={`${x},${y - s} ${x + s},${y} ${x},${y + s} ${x - s},${y}`}
      />
    );
  }
  if (type === "asset") {
    return <rect className={cls} x={x - r - 2} y={y - r} width={(r + 2) * 2} height={r * 2} rx={6} />;
  }
  if (type === "guidance") {
    return <rect className={cls} x={x - r} y={y - r - 2} width={r * 2} height={r * 2 + 4} rx={2} />;
  }
  return <rect className={cls} x={x - r} y={y - r} width={r * 2} height={r * 2} />;
}

function layout(nodes: SecurityMapNode[], focusId: string | null) {
  const positions: Record<string, { x: number; y: number }> = Object.create(null);
  if (!nodes.length) return positions;
  if (focusId && nodes.some((n) => n.id === focusId)) {
    positions[focusId] = { x: CX, y: CY };
    const others = nodes.filter((n) => n.id !== focusId);
    const radius = Math.min(190, 70 + others.length * 8);
    others.forEach((node, i) => {
      const angle = ((2 * Math.PI) / Math.max(others.length, 1)) * i - Math.PI / 2;
      positions[node.id] = {
        x: CX + radius * Math.cos(angle),
        y: CY + radius * Math.sin(angle),
      };
    });
    return positions;
  }
  const byType: Record<string, SecurityMapNode[]> = Object.create(null);
  for (const node of nodes) {
    if (!byType[node.type]) byType[node.type] = [];
    byType[node.type].push(node);
  }
  const types = Object.keys(byType);
  types.forEach((type, ti) => {
    const group = byType[type];
    const radius = 60 + ti * 55;
    group.forEach((node, i) => {
      const angle = ((2 * Math.PI) / Math.max(group.length, 1)) * i + ti * 0.2;
      positions[node.id] = {
        x: CX + radius * Math.cos(angle),
        y: CY + radius * Math.sin(angle),
      };
    });
  });
  return positions;
}

export function SecurityMapGraph({
  index,
  visibleIds,
  focusId,
  onSelect,
  onExpand,
  onReset,
}: {
  index: GraphIndex;
  visibleIds: string[];
  focusId: string | null;
  onSelect: (id: string) => void;
  onExpand: () => void;
  onReset: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const nodes = useMemo(
    () => visibleIds.map((id) => index.nodesById[id]).filter(Boolean),
    [visibleIds, index],
  );
  const positions = useMemo(() => layout(nodes, focusId), [nodes, focusId]);
  const visible: Record<string, true> = Object.create(null);
  for (const id of visibleIds) visible[id] = true;
  const edges = index.graph.edges.filter((e) => visible[e.source] && visible[e.target]);
  const vbW = WIDTH / zoom;
  const vbH = HEIGHT / zoom;
  const vbX = (WIDTH - vbW) / 2;
  const vbY = (HEIGHT - vbH) / 2;

  if (!nodes.length) {
    return (
      <div className="sm-visual">
        <p className="sm-empty">Choose a domain or entry point to draw a neighborhood.</p>
      </div>
    );
  }

  return (
    <div className="sm-visual">
      <div className="sm-graph-toolbar">
        <button type="button" className="sm-btn" onClick={() => setZoom((z) => Math.min(z + 0.2, 2.4))} aria-label="Zoom in">
          Zoom in
        </button>
        <button type="button" className="sm-btn" onClick={() => setZoom((z) => Math.max(z - 0.2, 0.7))} aria-label="Zoom out">
          Zoom out
        </button>
        <button type="button" className="sm-btn" onClick={() => setZoom(1)} aria-label="Fit graph">
          Fit
        </button>
        <button type="button" className="sm-btn" onClick={onReset}>
          Back to overview
        </button>
        <button type="button" className="sm-btn" onClick={onExpand}>
          Expand one hop
        </button>
      </div>
      <svg
        className="sm-graph"
        viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        {edges.map((edge) => {
          const a = positions[edge.source];
          const b = positions[edge.target];
          if (!a || !b) return null;
          const related = !focusId || edge.source === focusId || edge.target === focusId;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          return (
            <g key={edge.id}>
              <line
                className={`sm-edge${related ? "" : " dim"}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
              />
              {focusId && related ? (
                <text className="sm-edge-label" x={mx} y={my - 4} textAnchor="middle">
                  {index.edgeTitle[edge.type] || edge.type}
                </text>
              ) : null}
            </g>
          );
        })}
        {nodes.map((node) => {
          const pos = positions[node.id];
          if (!pos) return null;
          const selected = node.id === focusId;
          const dim = Boolean(focusId) && !selected && !visibleNeighbor(index, focusId, node.id);
          return (
            <g
              key={node.id}
              className={`sm-node${selected ? " selected" : ""}${dim ? " dim" : ""}`}
              onClick={() => onSelect(node.id)}
            >
              {shapeFor(node.type, pos.x, pos.y, selected)}
              <text x={pos.x} y={pos.y + 28} textAnchor="middle">
                {node.title.length > 22 ? `${node.title.slice(0, 20)}…` : node.title}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="sm-legend">
        {index.graph.taxonomies.nodeTypes.map((t) => (
          <span key={t.id} className={`lg-${t.id}`}>
            {t.title}
          </span>
        ))}
        <span>Severity is a badge in details, not the node fill.</span>
        <span>Shapes encode type; color is a secondary cue.</span>
      </div>
    </div>
  );
}

function visibleNeighbor(index: GraphIndex, focusId: string | null, id: string) {
  if (!focusId) return true;
  for (const edge of index.outgoing[focusId] || []) if (edge.target === id) return true;
  for (const edge of index.incoming[focusId] || []) if (edge.source === id) return true;
  return false;
}
