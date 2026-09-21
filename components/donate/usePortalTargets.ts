"use client";

import { useEffect, useState } from 'react'

/**
 * Tracks every element matching `selector`, so content can be portalled into
 * parts of the Vocs chrome that expose no slot of their own.
 *
 * Targets are re-read on DOM mutations, which is what makes this work for
 * regions that mount on demand, such as the mobile nav drawer.
 */
export function usePortalTargets(selector: string): Element[] {
  const [targets, setTargets] = useState<Element[]>([])

  useEffect(() => {
    const sync = () => {
      const found = Array.from(document.querySelectorAll(selector))
      // Only commit a new array when the matched set actually changed, so the
      // observer does not loop on the nodes the caller itself portals in.
      setTargets(prev =>
        prev.length === found.length && prev.every((el, i) => el === found[i]) ? prev : found,
      )
    }

    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [selector])

  return targets
}
