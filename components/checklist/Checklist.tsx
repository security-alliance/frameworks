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

      let labelText = "";
      li.childNodes.forEach((node) => {
        if (node === checkbox) return;
        if (node instanceof HTMLUListElement || node instanceof HTMLOListElement) return;
        labelText += node.textContent ?? "";
      });

      const key = `checklist:${id}:${slugify(labelText)}`;

      checkbox.disabled = false;

      try {
        if (localStorage.getItem(key) === "true") {
          checkbox.checked = true;
          li.classList.add("is-checked");
        }
      } catch {}

      const handler = () => {
        const checked = checkbox.checked;
        try {
          localStorage.setItem(key, checked ? "true" : "false");
        } catch {}
        li.classList.toggle("is-checked", checked);
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
