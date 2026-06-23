"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./Checklist.css";

interface ChecklistProps {
  /** Namespace for localStorage keys — must be unique per checklist section on the page. */
  id: string;
  children: ReactNode;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function Checklist({ id, children }: ChecklistProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || typeof window === "undefined") return;

    const items = container.querySelectorAll<HTMLLIElement>("li");
    const cleanups: (() => void)[] = [];

    items.forEach((li) => {
      // Only pair with a checkbox that is a direct child — prevents parent
      // navigation items (e.g. "Account >") from sharing a descendant's checkbox.
      const checkbox = Array.from(li.children).find(
        (child): child is HTMLInputElement =>
          child instanceof HTMLInputElement && child.type === "checkbox"
      );
      if (!checkbox) return;

      // Wrap the label text (everything except the checkbox and nested lists)
      // in a span so strikethrough only paints over the label, not nested items.
      let labelSpan = li.querySelector<HTMLSpanElement>(":scope > .checklist-label");
      if (!labelSpan) {
        labelSpan = document.createElement("span");
        labelSpan.className = "checklist-label";
        const toMove: Node[] = [];
        li.childNodes.forEach((node) => {
          if (node !== checkbox && !(node instanceof HTMLUListElement)) {
            toMove.push(node);
          }
        });
        toMove.forEach((node) => labelSpan!.appendChild(node));
        checkbox.insertAdjacentElement("afterend", labelSpan);
      }

      const key = `checklist:${id}:${slugify(labelSpan.textContent ?? "")}`;

      checkbox.disabled = false;

      try {
        if (localStorage.getItem(key) === "true") {
          checkbox.checked = true;
          labelSpan.classList.add("is-checked");
        }
      } catch {}

      const handler = () => {
        const checked = checkbox.checked;
        try {
          localStorage.setItem(key, checked ? "true" : "false");
        } catch {}
        labelSpan!.classList.toggle("is-checked", checked);
      };

      checkbox.addEventListener("change", handler);
      cleanups.push(() => checkbox.removeEventListener("change", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, [id]);

  return (
    <div ref={ref} className="checklist">
      {children}
    </div>
  );
}
