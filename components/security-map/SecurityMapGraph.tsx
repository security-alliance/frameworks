"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { SecurityMapNode } from "./types";
import {
  MAP_COLUMNS,
  columnIdForType,
  countRelated,
  mapEdges,
  type GraphIndex,
} from "./graphIndex";

type Point = { x: number; y: number };

function fieldClass(node: SecurityMapNode, focusId: string | null, dist: Record<string, number>): string {
  const bits = ["sm-field", `sm-field-${node.type}`];
  if (!focusId) return bits.join(" ");
  if (node.id === focusId) bits.push("is-focus");
  else if (dist[node.id] === 1) bits.push("is-near");
  else if (dist[node.id] === 2) bits.push("is-far");
  else bits.push("is-dim");
  return bits.join(" ");
}

function bezier(a: Point, b: Point): string {
  const dx = Math.max(40, Math.abs(b.x - a.x) * 0.45);
  const c1x = a.x + (b.x >= a.x ? dx : -dx);
  const c2x = b.x + (b.x >= a.x ? -dx : dx);
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

export function SecurityMapGraph({
  index,
  focusId,
  dist,
  onSelect,
}: {
  index: GraphIndex;
  focusId: string | null;
  dist: Record<string, number>;
  onSelect: (id: string) => void;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [centers, setCenters] = useState<Record<string, Point>>({});

  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const measure = () => {
      const rect = board.getBoundingClientRect();
      const next: Record<string, Point> = {};
      for (const el of board.querySelectorAll<HTMLElement>("[data-node-id]")) {
        const id = el.dataset.nodeId;
        if (!id) continue;
        const r = el.getBoundingClientRect();
        next[id] = {
          x: r.left - rect.left + board.scrollLeft + r.width / 2,
          y: r.top - rect.top + board.scrollTop + r.height / 2,
        };
      }
      setCenters(next);
      setSize({ w: Math.max(board.scrollWidth, 1), h: Math.max(board.scrollHeight, 1) });
    };

    measure();
    const frame = window.requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(board);
    board.addEventListener("scroll", measure);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      board.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [index, focusId]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const t = window.setTimeout(() => {
      const rect = board.getBoundingClientRect();
      const next: Record<string, Point> = {};
      for (const el of board.querySelectorAll<HTMLElement>("[data-node-id]")) {
        const id = el.dataset.nodeId;
        if (!id) continue;
        const r = el.getBoundingClientRect();
        next[id] = {
          x: r.left - rect.left + board.scrollLeft + r.width / 2,
          y: r.top - rect.top + board.scrollTop + r.height / 2,
        };
      }
      setCenters(next);
      setSize({ w: Math.max(board.scrollWidth, 1), h: Math.max(board.scrollHeight, 1) });
    }, 50);
    return () => window.clearTimeout(t);
  }, [index, focusId]);


  const edges = useMemo(() => mapEdges(index), [index]);

  return (
    <div className="sm-board" ref={boardRef}>
      <svg
        className="sm-wires"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${Math.max(size.w, 1)} ${Math.max(size.h, 1)}`}
        aria-hidden="true"
      >
        {edges.map((edge) => {
          const a = centers[edge.source];
          const b = centers[edge.target];
          if (!a || !b) return null;
          const srcCol = columnIdForType(index.nodesById[edge.source]?.type);
          const tgtCol = columnIdForType(index.nodesById[edge.target]?.type);
          if (!srcCol || !tgtCol || srcCol === tgtCol) return null;
          let cls = "sm-wire";
          if (focusId) {
            const hit = edge.source === focusId || edge.target === focusId;
            const near =
              (dist[edge.source] !== undefined && dist[edge.target] !== undefined);
            if (hit) cls += " is-hit";
            else if (near) cls += " is-near";
            else cls += " is-dim";
          }
          return <path key={edge.id} className={cls} d={bezier(a, b)} fill="none" />;
        })}
      </svg>
      <div className="sm-columns">
        {MAP_COLUMNS.map((col) => {
          const nodes = col.types.flatMap((type) => index.nodesByType[type] || []);
          return (
            <section key={col.id} className={`sm-col sm-col-${col.id}`}>
              <header className="sm-col-head">
                <h2>{col.title}</h2>
                <p>{col.blurb}</p>
              </header>
              <ul className="sm-col-list">
                {nodes.map((node) => {
                  const threats = countRelated(index, node.id, "threat");
                  const incidents = countRelated(index, node.id, "incident");
                  const badge = incidents || threats;
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        className={fieldClass(node, focusId, dist)}
                        data-node-id={node.id}
                        aria-pressed={focusId === node.id}
                        onClick={() => onSelect(node.id)}
                      >
                        <span className="sm-field-title">{node.title}</span>
                        {node.type !== "threat" && badge ? (
                          <span className="sm-field-count" title={`${threats} related threats`}>
                            {badge}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export type { NodeType };
