"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import "./GovernanceChecklistItem.css";

const STORAGE_PREFIX = "governance-sdlc-checklist:";

interface GovernanceChecklistItemProps {
  title: string;
  id?: string;
  children: ReactNode;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function GovernanceChecklistItem({ title, id, children }: GovernanceChecklistItemProps) {
  const slug = useMemo(() => id ?? slugify(title), [id, title]);
  const storageKey = `${STORAGE_PREFIX}${slug}`;
  const descId = `${slug}-desc`;

  const [checked, setChecked] = useState<boolean>(false);

  // Hydrate from localStorage on mount (client-side only).
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "true") setChecked(true);
    } catch {
      // Ignore — localStorage may be unavailable (privacy mode, SSR, etc.).
    }
  }, [storageKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    setChecked(next);
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKey, next ? "true" : "false");
    } catch {
      // Ignore storage failures; UI state still updates for this session.
    }
  };

  return (
    <div className={`gov-checklist-item ${checked ? "is-checked" : ""}`}>
      <label className="gov-checklist-row">
        <input
          type="checkbox"
          className="gov-checklist-checkbox"
          checked={checked}
          onChange={handleChange}
          aria-describedby={descId}
        />
        <span className="gov-checklist-title">{title}</span>
      </label>
      <div id={descId} className="gov-checklist-desc">
        {children}
      </div>
    </div>
  );
}
