"use client";

import { createPortal } from 'react-dom'
import { DONATE_URL } from '../shared/donate'
import { usePortalTargets } from './usePortalTargets'
import './DonateSidebarLink.css'

const LABEL = 'Help sustain the Frameworks'

function DonateAnchor() {
  return (
    <>
      <div className="donate-sidebar-divider" />
      <a
        aria-label={LABEL}
        className="donate-sidebar-link"
        href={DONATE_URL}
        rel="noopener noreferrer"
        target="_blank"
        title={LABEL}
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          focusable="false"
          height="18"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </a>
    </>
  )
}

/**
 * Renders a donation link alongside the social icons.
 *
 * Vocs only accepts a fixed set of `socials` icons, so the link is portalled
 * into every `[data-v-socials]` row instead. That covers both the desktop
 * sidebar footer and the mobile nav drawer, which mounts on demand.
 */
export function DonateSidebarLink() {
  const targets = usePortalTargets('[data-v-socials]')

  return targets.map(target => createPortal(<DonateAnchor />, target, 'donate-sidebar-link'))
}
