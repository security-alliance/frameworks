/**
 * Badge configuration - colors, categories, labels, descriptions, tiers, and icons
 */

import { JSX } from 'react';

export type BadgeCategory = 'role' | 'milestone' | 'activity';
export type BadgeTier = 'legendary' | 'epic' | 'rare' | 'common';

export interface BadgeConfigItem {
  color: string;
  category: BadgeCategory;
  label: string;
  description: string;
  tier?: BadgeTier;
}

export const BADGE_CONFIG: Record<string, BadgeConfigItem> = {
  'Lead': {
    color: '#ec4899',
    category: 'role',
    label: 'Lead',
    description: 'Initiative lead and project maintainer',
    tier: 'legendary'
  },
  'Framework-Steward': {
    color: '#3b82f6',
    category: 'role',
    label: 'Framework Steward',
    description: 'Official maintainer responsible for framework quality',
    tier: 'legendary'
  },
  'Core-Contributor': {
    color: '#fbbf24',
    category: 'role',
    label: 'Core Team',
    description: 'Elite contributor with governance responsibilities',
    tier: 'legendary'
  },
  'Contributor-25': {
    color: '#f59e0b',
    category: 'milestone',
    label: 'Gold Contributor',
    description: '25+ merged contributions',
    tier: 'epic'
  },
  'Contributor-10': {
    color: '#9ca3af',
    category: 'milestone',
    label: 'Silver Contributor',
    description: '10+ merged contributions',
    tier: 'rare'
  },
  'Contributor-5': {
    color: '#b45309',
    category: 'milestone',
    label: 'Bronze Contributor',
    description: '5+ merged contributions',
    tier: 'common'
  },
  'Reviewer-10': {
    color: '#8b5cf6',
    category: 'milestone',
    label: 'Trusted Reviewer',
    description: '10+ code reviews completed',
    tier: 'rare'
  },
  'Reviewer-25': {
    color: '#a855f7',
    category: 'milestone',
    label: 'Senior Reviewer',
    description: '25+ code reviews completed',
    tier: 'epic'
  },
  // Reporter -> Observer -> Investigator -> Analyst. Each rung is a bare noun;
  // the description under it says which activity it counts.
  'Issue-Opener-5': {
    color: '#06b6d4',
    category: 'milestone',
    label: 'Reporter',
    description: '5+ issues opened',
    tier: 'common'
  },
  'Issue-Opener-10': {
    color: '#0ea5e9',
    category: 'milestone',
    label: 'Observer',
    description: '10+ issues opened',
    tier: 'rare'
  },
  'Issue-Opener-25': {
    color: '#3b82f6',
    category: 'milestone',
    label: 'Investigator',
    description: '25+ issues opened',
    tier: 'epic'
  },
  'Early-Contributor': {
    color: '#f59e0b',
    category: 'milestone',
    label: 'Early Contributor',
    description: 'Among the first contributors to the project',
    tier: 'rare'
  },
  'First-Contribution': {
    color: '#8b5cf6',
    category: 'milestone',
    label: 'First Contribution',
    description: 'Made their first contribution to the project',
    tier: 'common'
  },
  'First-Review': {
    color: '#10b981',
    category: 'milestone',
    label: 'First Review',
    description: 'Completed their first code review',
    tier: 'common'
  },
  'Active-Last-7d': {
    color: '#10b981',
    category: 'activity',
    label: 'Active Contributor',
    description: 'Active in the last 7 days',
    tier: 'common'
  },
  'Active-Last-30d': {
    color: '#14b8a6',
    category: 'activity',
    label: 'Recently Active',
    description: 'Active in the last 30 days',
    tier: 'common'
  },
  'New-Joiner': {
    color: '#fde047',
    category: 'activity',
    label: 'New Joiner',
    description: 'Welcome to the community!',
    tier: 'common'
  },
  'Dormant-90d+': {
    color: '#6b7280',
    category: 'activity',
    label: 'Dormant',
    description: 'Inactive for 90+ days',
    tier: 'common'
  }
};

const DEFAULT_BADGE_CONFIG: BadgeConfigItem = {
  color: '#6366f1',
  category: 'milestone',
  label: '',
  description: 'Community recognition',
  tier: 'common'
};

/**
 * Get the configuration for a specific badge
 * @param badgeName - The badge name
 * @returns The badge configuration, or default config if not found
 */
export function getBadgeConfig(badgeName: string): BadgeConfigItem {
  return BADGE_CONFIG[badgeName] || {
    ...DEFAULT_BADGE_CONFIG,
    label: badgeName
  };
}

/**
 * Badges that are recorded and used, but never drawn on a card. Empty for now;
 * add a badge name here to keep it working in the sort and the data while
 * keeping it off the page.
 */
export const HIDDEN_BADGES = new Set<string>();

export function isDisplayableBadge(badgeName: string | undefined): boolean {
  return !!badgeName && badgeName.trim() !== '' && !HIDDEN_BADGES.has(badgeName);
}

/**
 * What the tooltip prints where the tier goes.
 *
 * Activity badges describe a status rather than an achievement, so giving them
 * a rarity said that being new, or being quiet, was a common drop. They get the
 * word Status instead. Everything else prints its rank as-is.
 */
export function getTierChip(config: BadgeConfigItem): { text: string; className: string } {
  if (config.category === 'activity') {
    return { text: 'Status', className: 'tier-status' };
  }
  const tier = config.tier || 'common';
  return {
    text: `${tier.charAt(0).toUpperCase()}${tier.slice(1)}`,
    className: `tier-${tier}`
  };
}

/* ------------------------------------------------------------------ */
/* Shared geometry and helpers                                          */
/* ------------------------------------------------------------------ */

const SHIELD = 'M32 4L8 14V30C8 44 18 54 32 60C46 54 56 44 56 30V14L32 4Z';
const SHIELD_INNER = 'M32 8L12 16V30C12 42 20 50 32 56C44 50 52 42 52 30V16L32 8Z';
const STAR = 'M32 2L38 22L58 22L42 36L48 56L32 44L16 56L22 36L6 22L26 22L32 2Z';
const HEX = 'M32 3L55.5 16.5V43.5L32 57L8.5 43.5V16.5Z';
const OCTAGON = 'M22 6L42 6L58 22L58 42L42 58L22 58L6 42L6 22Z';

// Numbers on a badge are read at 36px, so they need a UI face rather than the
// document serif Vocs sets on the page.
const NUM_FONT = 'system-ui, -apple-system, Segoe UI, sans-serif';

function Grad({ id, from, to, mid }: { id: string; from: string; to: string; mid?: string }) {
  return (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={from} />
      {mid && <stop offset="50%" stopColor={mid} />}
      <stop offset="100%" stopColor={to} />
    </linearGradient>
  );
}

function Sheen({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="white" stopOpacity="0.5" />
      <stop offset="50%" stopColor="white" stopOpacity="0" />
      <stop offset="100%" stopColor="white" stopOpacity="0.5" />
    </linearGradient>
  );
}

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>
);

const Squircle = ({ id }: { id: string }) => (
  <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#${id})`} className="badge-main" />
);

/* A four-point spark, the "this was the first one" accent. */
const Spark = ({ x, y, r, fill = '#fbbf24', opacity = 1 }: { x: number; y: number; r: number; fill?: string; opacity?: number }) => (
  <path
    d={`M${x} ${y - r}L${x + r * 0.32} ${y - r * 0.32}L${x + r} ${y}L${x + r * 0.32} ${y + r * 0.32}L${x} ${y + r}L${x - r * 0.32} ${y + r * 0.32}L${x - r} ${y}L${x - r * 0.32} ${y - r * 0.32}Z`}
    fill={fill}
    opacity={opacity}
  />
);

/* ------------------------------------------------------------------ */
/* Milestone ladder palettes                                            */
/* ------------------------------------------------------------------ */

type Level = 5 | 10 | 25;

interface Metal { light: string; mid: string; dark: string; ribbon: string; ink: string }

// Bronze at 5, silver at 10, gold at 25, matching the labels in BADGE_CONFIG.
const METALS: Record<Level, Metal> = {
  5: { light: '#f0a75e', mid: '#d9822b', dark: '#96501a', ribbon: '#8a4513', ink: '#ffffff' },
  10: { light: '#f8fafc', mid: '#cbd5e1', dark: '#94a3b8', ribbon: '#64748b', ink: '#334155' },
  25: { light: '#fde68a', mid: '#fbbf24', dark: '#d97706', ribbon: '#b45309', ink: '#7c2d12' }
};

const REVIEW_HUES: Record<number, [string, string, string]> = {
  10: ['#a78bfa', '#6d28d9', '#5b21b6'],
  25: ['#8b5cf6', '#4c1d95', '#3b0764']
};

const ISSUE_HUES: Record<Level, [string, string, string]> = {
  5: ['#22d3ee', '#0891b2', '#0e7490'],
  10: ['#38bdf8', '#0369a1', '#075985'],
  25: ['#60a5fa', '#1d4ed8', '#1e40af']
};

/* ------------------------------------------------------------------ */
/* Icon builders                                                        */
/* ------------------------------------------------------------------ */

/** Contribution medal: ribbon, metal disc, code brackets, the threshold. */
const contributorMedal = (uid: string, level: Level) => {
  const m = METALS[level];
  return (
    <Svg>
      <defs>
        <Grad id={`${uid}-m`} from={m.light} mid={m.mid} to={m.dark} />
        <Sheen id={`${uid}-s`} />
      </defs>
      <path d="M20 2L32 20L44 2L49 2L38 23L32 27L26 23L15 2Z" fill={m.ribbon} />
      <circle cx="32" cy="41" r="21" fill={`url(#${uid}-m)`} className="badge-main" />
      <circle cx="32" cy="41" r="21" fill={`url(#${uid}-s)`} />
      <circle cx="32" cy="41" r="17.5" stroke="white" strokeWidth="1.5" opacity="0.45" />
      <g stroke={m.ink} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M26.5 27.5L23 31L26.5 34.5" />
        <path d="M37.5 27.5L41 31L37.5 34.5" />
      </g>
      <text x="32" y="52.5" fontSize="21" fontWeight="800" fill={m.ink} textAnchor="middle" fontFamily={NUM_FONT}>
        {level}
      </text>
    </Svg>
  );
};

/** Reviewer: an approved changelist, three lines, three checks. */
const reviewerHex = (uid: string, level: 10 | 25) => {
  const [from, to, ink] = REVIEW_HUES[level];
  return (
    <Svg>
      <defs><Grad id={`${uid}-o`} from={from} to={to} /></defs>
      <path d={HEX} fill={`url(#${uid}-o)`} className="badge-main" />
      <path d="M32 8L51 19V41L32 52L13 41V19Z" stroke="white" strokeWidth="1.5" opacity="0.28" />
      {[14, 23.5, 33].map((y, i) => (
        <g key={y}>
          <path
            d={`M15 ${y + 4.5}L18.5 ${y + 8}L25 ${y + 1}`}
            stroke="#34d399"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="29" y={y + 3} width={i === 2 ? 12 : 20} height="3.6" rx="1.8" fill="white" opacity={0.9 - i * 0.16} />
        </g>
      ))}
      <circle cx="32" cy="45" r="11.5" fill="white" />
      <text x="32" y="50.2" fontSize="14.5" fontWeight="800" fill={ink} textAnchor="middle" fontFamily={NUM_FONT}>
        {level}
      </text>
    </Svg>
  );
};

/** Issue ladder: the octagon, the bug, the threshold. */
const issueOctagon = (uid: string, level: Level) => {
  const [from, to, ink] = ISSUE_HUES[level];
  return (
    <Svg>
      <defs><Grad id={`${uid}-o`} from={from} to={to} /></defs>
      <path d={OCTAGON} fill={`url(#${uid}-o)`} className="badge-main" />
      <ellipse cx="32" cy="25" rx="10.5" ry="11.5" fill="white" />
      <g stroke={to} strokeWidth="1.8" opacity="0.55">
        <path d="M22 21H42M22 29H42" />
      </g>
      <circle cx="32" cy="13.5" r="6" fill="white" />
      <circle cx="29.4" cy="12.8" r="1.9" fill={to} />
      <circle cx="34.6" cy="12.8" r="1.9" fill={to} />
      <g stroke="white" strokeWidth="3.2" strokeLinecap="round">
        <path d="M28.2 9.2L25.5 5.5M35.8 9.2L38.5 5.5" />
        <path d="M22 19.5L13.5 15.5M42 19.5L50.5 15.5M22 30.5L13.5 34.5M42 30.5L50.5 34.5" />
      </g>
      <circle cx="32" cy="46.5" r="11.5" fill="white" />
      <text x="32" y="51.7" fontSize="14.5" fontWeight="800" fill={ink} textAnchor="middle" fontFamily={NUM_FONT}>
        {level}
      </text>
    </Svg>
  );
};

export const BADGE_ICONS: Record<string, (uid: string) => JSX.Element> = {
  // LEAD - Compass: leadership is pointing the project somewhere.
  'Lead': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-o`} from="#f472b6" to="#be185d" /></defs>
      <circle cx="32" cy="32" r="28" fill={`url(#${uid}-o)`} className="badge-main" />
      <circle cx="32" cy="32" r="21" fill="white" />
      <circle cx="32" cy="32" r="16.5" stroke="#be185d" strokeWidth="2" opacity="0.22" />
      <path d="M32 13L39.5 32L32 27.5L24.5 32Z" fill="#be185d" />
      <path d="M32 51L24.5 32L32 36.5L39.5 32Z" fill="#f9a8d4" />
      <circle cx="32" cy="32" r="4.8" fill="#be185d" />
      <circle cx="32" cy="32" r="2" fill="white" />
      <path d="M50 9L52.4 14.4L58 15L53.8 18.8L55 24.4L50 21.6L45 24.4L46.2 18.8L42 15L47.6 14.4Z" fill="#fbbf24" />
    </Svg>
  ),

  // FRAMEWORK STEWARD - Shield and gear, with the approval check at the hub.
  'Framework-Steward': (uid: string) => (
    <Svg>
      <defs>
        <Grad id={`${uid}-o`} from="#60a5fa" to="#1d4ed8" />
        <Grad id={`${uid}-i`} from="#93c5fd" to="#3b82f6" />
      </defs>
      <path d={SHIELD} fill={`url(#${uid}-o)`} className="badge-main" />
      <path d={SHIELD_INNER} fill={`url(#${uid}-i)`} opacity="0.3" />
      {[0, 45, 90, 135].map((a) => (
        <rect key={a} x="28.5" y="15" width="7" height="34" rx="3.5" fill="white" transform={`rotate(${a} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="12.5" fill="white" />
      <circle cx="32" cy="32" r="9" fill="#1d4ed8" />
      <path d="M27.6 32.4L30.6 35.4L36.4 28.9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),

  // CORE TEAM - The star, with a concentric core.
  'Core-Contributor': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-o`} from="#fcd34d" to="#d97706" /></defs>
      <path d={STAR} fill={`url(#${uid}-o)`} className="badge-main" />
      <circle cx="32" cy="32" r="13.5" fill="white" />
      <circle cx="32" cy="32" r="9.5" fill="#d97706" />
      <circle cx="32" cy="32" r="4.5" fill="white" />
    </Svg>
  ),

  'Contributor-5': (uid: string) => contributorMedal(uid, 5),
  'Contributor-10': (uid: string) => contributorMedal(uid, 10),
  'Contributor-25': (uid: string) => contributorMedal(uid, 25),

  'Reviewer-10': (uid: string) => reviewerHex(uid, 10),
  'Reviewer-25': (uid: string) => reviewerHex(uid, 25),

  'Issue-Opener-5': (uid: string) => issueOctagon(uid, 5),
  'Issue-Opener-10': (uid: string) => issueOctagon(uid, 10),
  'Issue-Opener-25': (uid: string) => issueOctagon(uid, 25),

  // EARLY CONTRIBUTOR - Here before the project had a shape.
  'Early-Contributor': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-o`} from="#fbbf24" to="#b45309" /></defs>
      <circle cx="32" cy="32" r="28" fill={`url(#${uid}-o)`} className="badge-main" />
      <path d="M32 7C32 7 42 20 42 33C42 41 37.5 47 32 47C26.5 47 22 41 22 33C22 20 32 7 32 7Z" fill="white" />
      <circle cx="32" cy="26" r="5.5" fill="#b45309" />
      <path d="M22 37L13.5 46.5L22 48Z" fill="white" />
      <path d="M42 37L50.5 46.5L42 48Z" fill="white" />
      <path d="M26.5 47.5L32 60L37.5 47.5Z" fill="#ef4444" />
      <path d="M29.3 47.5L32 55.5L34.7 47.5Z" fill="#fde68a" />
    </Svg>
  ),

  // FIRST CONTRIBUTION - One date, one gold star.
  'First-Contribution': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-o`} from="#a78bfa" mid="#7c3aed" to="#5b21b6" /></defs>
      <path d={SHIELD} fill={`url(#${uid}-o)`} className="badge-main" />
      <path d={SHIELD_INNER} fill="white" opacity="0.14" />
      <rect x="15" y="17" width="34" height="32" rx="4.5" fill="white" />
      <path d="M15 21.5A4.5 4.5 0 0 1 19.5 17h25A4.5 4.5 0 0 1 49 21.5V27H15Z" fill="#6d28d9" />
      <rect x="21.5" y="12" width="4.5" height="10" rx="2.25" fill="white" />
      <rect x="38" y="12" width="4.5" height="10" rx="2.25" fill="white" />
      <path
        d="M32 28.5L34.9 35.6L42.5 36.1L36.6 41L38.5 48.4L32 44.2L25.5 48.4L27.4 41L21.5 36.1L29.1 35.6Z"
        fill="#fbbf24"
      />
    </Svg>
  ),

  // FIRST REVIEW - A review comment, not a document, so it cannot be mistaken
  // for the Reviewer hexagon.
  'First-Review': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-o`} from="#34d399" mid="#059669" to="#065f46" /></defs>
      <path d={SHIELD} fill={`url(#${uid}-o)`} className="badge-main" />
      <path d={SHIELD_INNER} fill="white" opacity="0.14" />
      <path d="M18 16h28a4.5 4.5 0 0 1 4.5 4.5v15A4.5 4.5 0 0 1 46 40H34l-7.5 7.5V40H18a4.5 4.5 0 0 1-4.5-4.5v-15A4.5 4.5 0 0 1 18 16Z" fill="white" />
      <path d="M23.5 28.5L28.5 33.5L39.5 22.5" stroke="#047857" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
      <Spark x={45} y={46} r={7.5} />
    </Svg>
  ),

  // ACTIVE-LAST-7D - Rounded square, glyph, duration as large white text.
  'Active-Last-7d': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-active7-grad`} from="#34d399" to="#047857" /></defs>
      <Squircle id={`${uid}-active7-grad`} />
      <path d="M35 8L20.5 31H29L27 44L43.5 22H34.5Z" fill="white" />
      <text x="32" y="56" fontSize="15" fontWeight="800" fill="white" textAnchor="middle" fontFamily={NUM_FONT}>7d</text>
    </Svg>
  ),

  // ACTIVE-LAST-30D - Same frame, activity trace instead of the bolt.
  'Active-Last-30d': (uid: string) => (
    <Svg>
      <defs><Grad id={`${uid}-active30-grad`} from="#2dd4bf" to="#0f766e" /></defs>
      <Squircle id={`${uid}-active30-grad`} />
      <path
        d="M11 30H19L24 18L31 41L37 25L42 33H53"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="32" y="56" fontSize="15" fontWeight="800" fill="white" textAnchor="middle" fontFamily={NUM_FONT}>30d</text>
    </Svg>
  ),

  // NEW JOINER - Welcome with sparkles
  'New-Joiner': (uid: string) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-newbie-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
      {/* Starburst */}
      <path d="M32 0L36 24L60 20L40 32L60 44L36 40L32 64L28 40L4 44L24 32L4 20L28 24L32 0Z"
        fill={`url(#${uid}-newbie-grad)`} className="badge-main" />
      {/* Welcome hand wave */}
      <circle cx="32" cy="32" r="14" fill="white" opacity="0.95" />
      <text x="32" y="38" fontSize="20" textAnchor="middle">👋</text>
      {/* Sparkle effects */}
      <path d="M12 12L14 16L18 14L14 18L16 22L12 18L8 20L12 16L10 12L12 12Z" fill="white" opacity="0.9" />
      <path d="M52 12L54 16L58 14L54 18L56 22L52 18L48 20L52 16L50 12L52 12Z" fill="white" opacity="0.9" />
      <path d="M12 52L14 48L10 50L14 46L12 42L16 46L20 44L16 48L18 52L12 52Z" fill="white" opacity="0.8" />
      <path d="M52 52L54 48L50 50L54 46L52 42L56 46L60 44L56 48L58 52L52 52Z" fill="white" opacity="0.8" />
    </svg>
  ),

  // DORMANT-90D+ - Sleeping moon
  'Dormant-90d+': (uid: string) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-dormant-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        {/* The crescent is cut out of a disc rather than drawn as two arcs. The
            arc form needs a radius of at least half the distance between its
            endpoints; ask for less and SVG silently scales it up, which turns
            the crescent back into the full disc it was cut from. */}
        <mask id={`${uid}-dormant-moon`}>
          <rect width="64" height="64" fill="black" />
          <circle cx="29" cy="34" r="21" fill="white" />
          <circle cx="49" cy="24" r="18" fill="black" />
        </mask>
      </defs>
      {/* Circle */}
      <circle cx="32" cy="32" r="28" fill={`url(#${uid}-dormant-grad)`} className="badge-main" />
      {/* Stars, in the night sky the crescent leaves open */}
      <circle cx="45" cy="36" r="2" fill="white" opacity="0.5" />
      <circle cx="52" cy="27" r="1.5" fill="white" opacity="0.45" />
      <circle cx="49" cy="45" r="1.5" fill="white" opacity="0.5" />
      {/* Moon crescent */}
      <rect width="64" height="64" fill="white" opacity="0.95" mask={`url(#${uid}-dormant-moon)`} />
      {/* Sleeping face on the lit side of the moon */}
      <g stroke="#374151" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M11 31.5Q14.5 36 18 31.5" />
        <path d="M22 31.5Q25.5 36 29 31.5" />
        <path d="M16 41Q20 45.5 24 41" />
      </g>
      {/* ZZZ */}
      <text x="38" y="26" fontSize="16" fill="white" opacity="0.95" fontFamily="serif" fontStyle="italic" fontWeight="bold">Z</text>
      <text x="45" y="18" fontSize="10.5" fill="white" opacity="0.7" fontFamily="serif" fontStyle="italic" fontWeight="bold">z</text>
    </svg>
  ),

  // DEFAULT - Generic achievement badge
  'default': (uid: string) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-default-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      {/* Hexagon */}
      <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" fill={`url(#${uid}-default-grad)`} className="badge-main" />
      {/* Inner hexagon */}
      <path d="M32 12L48 22V42L32 52L16 42V22L32 12Z" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      {/* Star */}
      <path d="M32 20L35 28L44 28L37 34L40 42L32 36L24 42L27 34L20 28L29 28L32 20Z" fill="white" opacity="0.95" />
    </svg>
  )
};

export function badgeIconUid(...parts: (string | number | undefined)[]): string {
  return parts
    .filter((part) => part !== undefined && part !== '')
    .join('-')
    .replace(/[^A-Za-z0-9_-]/g, '-');
}

export function renderBadgeIcon(name: string, uid: string): JSX.Element {
  return (BADGE_ICONS[name] || BADGE_ICONS['default'])(uid);
}

interface BadgeIconProps {
  name: string;
  isNew: boolean;
  uid: string;
}

export function BadgeIcon({ name, isNew, uid }: BadgeIconProps) {
  return (
    <div className={`badge-icon-container ${isNew ? 'badge-new' : ''}`}>
      {renderBadgeIcon(name, uid)}
    </div>
  );
}
