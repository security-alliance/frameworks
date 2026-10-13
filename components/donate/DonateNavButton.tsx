"use client";

import { createPortal } from 'react-dom'
import { DONATE_URL } from '../shared/donate'
import { usePortalTargets } from './usePortalTargets'
import './DonateNavButton.css'

const LABEL = 'Support us'
const TITLE = 'Help sustain the Frameworks'

function DonateButton() {
  return (
    <a
      className="donate-nav-button"
      href={DONATE_URL}
      rel="noopener noreferrer"
      target="_blank"
      title={TITLE}
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        height="16"
        viewBox="0 0 24 24"
        width="16"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {LABEL}
    </a>
  )
}

/**
 * Renders a donation button beside the top nav search box.
 *
 * Vocs exposes no slot in the top nav, so the button is portalled into
 * `[data-v-gutter-top-left]`, the flex row that holds the logo and search.
 * It is hidden on small screens along with the search input itself, where the
 * mobile nav drawer carries the donation link instead.
 */
export function DonateNavButton() {
  const targets = usePortalTargets('[data-v-gutter-top-left]')

  return targets.map(target => createPortal(<DonateButton />, target, 'donate-nav-button'))
}
