// ============================================================================
// BadgeDisplay.tsx - Enhanced Version
// ============================================================================

import React, { JSX, useEffect, useRef, useState } from 'react';
import './BadgeDisplay.css';
import contributorsData from '../../docs/pages/config/contributors.json';

interface Badge {
  name: string;
  assigned: string;
  framework?: string;
}

interface Contributor {
  slug: string;
  name: string;
  avatar: string;
  github: string | null;
  twitter: string | null;
  role: string;
  steward: string[];
  badges: Badge[];
}

function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

function isNewlyEarned(assignedDate: string): boolean {
  if (!assignedDate) return false;
  try {
    const date = new Date(assignedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  } catch {
    return false;
  }
}

const BadgeIcon = ({ name, isNew }: { name: string; isNew: boolean }) => {
  const icons: Record<string, JSX.Element> = {
    // FRAMEWORK STEWARD - Shield with gear/cog representing maintenance & protection
    'Framework-Steward': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="steward-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="steward-inner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path d="M32 4L8 14V30C8 44 18 54 32 60C46 54 56 44 56 30V14L32 4Z"
          fill="url(#steward-grad)" className="badge-main" />
        <path d="M32 8L12 16V30C12 42 20 50 32 56C44 50 52 42 52 30V16L32 8Z"
          fill="url(#steward-inner)" opacity="0.3" />
        {/* Gear/cog icon - represents maintenance */}
        <circle cx="32" cy="32" r="8" fill="white" opacity="0.95" />
        <circle cx="32" cy="32" r="5" fill="#1e40af" />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 32 + Math.cos(rad) * 12;
          const y = 32 + Math.sin(rad) * 12;
          return <circle key={i} cx={x} cy={y} r="3" fill="white" opacity="0.9" />;
        })}
        {/* Crown on top - leadership */}
        <path d="M24 18L28 14L32 18L36 14L40 18L38 22H26L24 18Z" fill="#fbbf24" />
      </svg>
    ),

    // CORE CONTRIBUTOR - Star with connected nodes (network/core team)
    'Core-Contributor': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <filter id="core-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Outer star burst */}
        <path d="M32 2L38 22L58 22L42 36L48 56L32 44L16 56L22 36L6 22L26 22L32 2Z"
          fill="url(#core-grad)" className="badge-main" />
        {/* Core hub - center */}
        <circle cx="32" cy="32" r="10" fill="white" filter="url(#core-glow)" />
        <circle cx="32" cy="32" r="6" fill="#d97706" />
        {/* Connected nodes - representing team */}
        <circle cx="20" cy="24" r="4" fill="white" opacity="0.9" />
        <circle cx="44" cy="24" r="4" fill="white" opacity="0.9" />
        <circle cx="20" cy="40" r="4" fill="white" opacity="0.9" />
        <circle cx="44" cy="40" r="4" fill="white" opacity="0.9" />
        {/* Connection lines */}
        <line x1="24" y1="26" x2="28" y2="30" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="40" y1="26" x2="36" y2="30" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="24" y1="38" x2="28" y2="34" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="40" y1="38" x2="36" y2="34" stroke="white" strokeWidth="2" opacity="0.7" />
      </svg>
    ),

    // LEAD - Compass/direction representing leadership and guiding the project
    'Lead': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lead-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <linearGradient id="lead-inner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Outer circle badge */}
        <circle cx="32" cy="32" r="28" fill="url(#lead-grad)" className="badge-main" />
        {/* Inner compass ring */}
        <circle cx="32" cy="32" r="20" fill="white" opacity="0.95" />
        <circle cx="32" cy="32" r="16" stroke="#be185d" strokeWidth="2" fill="none" opacity="0.3" />
        {/* Compass needle - pointing up (North/direction) */}
        <path d="M32 14L38 32L32 28L26 32L32 14Z" fill="#be185d" />
        <path d="M32 50L26 32L32 36L38 32L32 50Z" fill="#f9a8d4" />
        {/* Center dot */}
        <circle cx="32" cy="32" r="4" fill="#be185d" />
        <circle cx="32" cy="32" r="2" fill="white" />
        {/* Cardinal direction markers */}
        <circle cx="32" cy="16" r="2" fill="#be185d" />
        <circle cx="32" cy="48" r="2" fill="#be185d" opacity="0.5" />
        <circle cx="16" cy="32" r="2" fill="#be185d" opacity="0.5" />
        <circle cx="48" cy="32" r="2" fill="#be185d" opacity="0.5" />
        {/* Star accent */}
        <path d="M50 12L52 16L56 16L53 19L54 23L50 20L46 23L47 19L44 16L48 16L50 12Z" fill="#fbbf24" />
      </svg>
    ),

    // CONTRIBUTOR-5 - Bronze medal with code brackets
    'Contributor-5': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bronze-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="bronze-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Ribbon */}
        <path d="M24 4L32 16L40 4L44 4L38 20L32 24L26 20L20 4Z" fill="#c2410c" opacity="0.9" />
        <path d="M28 4L32 12L36 4" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
        {/* Medal circle */}
        <circle cx="32" cy="38" r="20" fill="url(#bronze-grad)" className="badge-main" />
        <circle cx="32" cy="38" r="20" fill="url(#bronze-shine)" />
        <circle cx="32" cy="38" r="16" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
        {/* Code brackets < > representing contributions */}
        <path d="M24 32L18 38L24 44" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 32L46 38L40 44" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Number 5 */}
        <text x="32" y="43" fontSize="14" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">5</text>
      </svg>
    ),

    // CONTRIBUTOR-10 - Silver medal with merge icon
    'Contributor-10': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="silver-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Ribbon */}
        <path d="M22 4L32 18L42 4L46 4L38 22L32 26L26 22L18 4Z" fill="#4b5563" opacity="0.9" />
        <path d="M32 8L26 4M32 8L38 4" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
        {/* Medal */}
        <circle cx="32" cy="40" r="20" fill="url(#silver-grad)" className="badge-main" />
        <circle cx="32" cy="40" r="20" fill="url(#silver-shine)" />
        <circle cx="32" cy="40" r="16" stroke="white" strokeWidth="1" opacity="0.4" />
        {/* Git merge icon */}
        <circle cx="26" cy="34" r="3" fill="white" />
        <circle cx="38" cy="34" r="3" fill="white" />
        <circle cx="32" cy="48" r="3" fill="white" />
        <path d="M26 37V42C26 45 28 48 32 48M38 37V40C38 43 36 46 32 48" stroke="white" strokeWidth="2" />
        {/* Number */}
        <text x="32" y="43" fontSize="10" fill="#4b5563" fontWeight="bold" textAnchor="middle">10</text>
      </svg>
    ),

    // CONTRIBUTOR-25 - Gold medal with diamond & pull request icon
    'Contributor-25': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-medal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="gold-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Premium ribbon */}
        <path d="M20 2L32 20L44 2L48 2L38 24L32 28L26 24L16 2Z" fill="#b45309" opacity="0.9" />
        <path d="M24 4L32 16L40 4" stroke="#fcd34d" strokeWidth="1" opacity="0.7" />
        {/* Stars on ribbon */}
        <circle cx="24" cy="8" r="2" fill="#fcd34d" />
        <circle cx="32" cy="6" r="2" fill="#fcd34d" />
        <circle cx="40" cy="8" r="2" fill="#fcd34d" />
        {/* Medal */}
        <circle cx="32" cy="42" r="20" fill="url(#gold-medal-grad)" className="badge-main" />
        <circle cx="32" cy="42" r="20" fill="url(#gold-shine)" />
        <circle cx="32" cy="42" r="16" stroke="white" strokeWidth="1.5" opacity="0.5" />
        {/* Diamond shape in center */}
        <path d="M32 30L42 42L32 54L22 42Z" fill="white" opacity="0.95" />
        <path d="M32 30L37 38H27L32 30Z" fill="#ec4899" opacity="0.8" />
        <path d="M27 38L32 54L22 42L27 38ZM37 38L32 54L42 42L37 38Z" fill="#be185d" opacity="0.6" />
        {/* Number */}
        <text x="32" y="47" fontSize="12" fill="#be185d" fontWeight="bold" textAnchor="middle">25</text>
      </svg>
    ),

    // REVIEWER-10 - Document with checkmarks
    'Reviewer-10': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="review10-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        {/* Hexagon badge */}
        <path d="M32 4L54 18V46L32 60L10 46V18L32 4Z" fill="url(#review10-grad)" className="badge-main" />
        {/* Document */}
        <rect x="20" y="14" width="24" height="32" rx="2" fill="white" opacity="0.95" />
        <path d="M40 14L44 18V14H40Z" fill="#6d28d9" opacity="0.3" />
        {/* Code/text lines */}
        <rect x="24" y="22" width="16" height="2" rx="1" fill="#6d28d9" opacity="0.3" />
        <rect x="24" y="28" width="12" height="2" rx="1" fill="#6d28d9" opacity="0.3" />
        <rect x="24" y="34" width="14" height="2" rx="1" fill="#6d28d9" opacity="0.3" />
        {/* Checkmarks - reviewed */}
        <circle cx="26" cy="23" r="4" fill="#10b981" />
        <path d="M24 23L25.5 24.5L28 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="35" r="4" fill="#10b981" />
        <path d="M24 35L25.5 36.5L28 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Number badge */}
        <circle cx="44" cy="48" r="10" fill="#fbbf24" />
        <text x="44" y="52" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">10</text>
      </svg>
    ),

    // REVIEWER-25 - Stack of reviewed documents with star
    'Reviewer-25': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="review25-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Star burst background */}
        <path d="M32 2L38 20L56 24L42 36L46 54L32 44L18 54L22 36L8 24L26 20L32 2Z"
          fill="url(#review25-grad)" className="badge-main" />
        {/* Stacked documents */}
        <rect x="22" y="22" width="20" height="26" rx="1" fill="white" opacity="0.6" transform="rotate(-5 32 35)" />
        <rect x="22" y="20" width="20" height="26" rx="1" fill="white" opacity="0.8" transform="rotate(3 32 33)" />
        <rect x="22" y="18" width="20" height="26" rx="1" fill="white" opacity="0.95" />
        {/* Document lines */}
        <rect x="25" y="24" width="14" height="2" rx="1" fill="#7c3aed" opacity="0.3" />
        <rect x="25" y="29" width="10" height="2" rx="1" fill="#7c3aed" opacity="0.3" />
        <rect x="25" y="34" width="12" height="2" rx="1" fill="#7c3aed" opacity="0.3" />
        {/* Big checkmark */}
        <path d="M26 32L30 36L38 26" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Number badge */}
        <circle cx="46" cy="46" r="10" fill="#fbbf24" />
        <text x="46" y="50" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">25</text>
      </svg>
    ),

    // ISSUE-OPENER-5 - Bug with magnifying glass
    'Issue-Opener-5': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="issue5-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        {/* Octagon */}
        <path d="M22 6L42 6L58 22L58 42L42 58L22 58L6 42L6 22L22 6Z" fill="url(#issue5-grad)" className="badge-main" />
        {/* Bug body */}
        <ellipse cx="32" cy="32" rx="12" ry="14" fill="white" opacity="0.95" />
        {/* Bug segments */}
        <line x1="20" y1="28" x2="44" y2="28" stroke="#0891b2" strokeWidth="1.5" />
        <line x1="20" y1="36" x2="44" y2="36" stroke="#0891b2" strokeWidth="1.5" />
        {/* Bug head */}
        <circle cx="32" cy="20" r="6" fill="white" />
        <circle cx="29" cy="19" r="2" fill="#0891b2" />
        <circle cx="35" cy="19" r="2" fill="#0891b2" />
        {/* Antennae */}
        <path d="M28 14L24 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 14L40 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {/* Bug legs */}
        <path d="M20 26L14 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 26L50 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 38L14 42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 38L50 42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {/* Number */}
        <circle cx="46" cy="50" r="8" fill="#fbbf24" />
        <text x="46" y="54" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">5</text>
      </svg>
    ),

    // ISSUE-OPENER-10 - Alert/warning icon with exclamation
    'Issue-Opener-10': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="issue10-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Circle */}
        <circle cx="32" cy="32" r="28" fill="url(#issue10-grad)" className="badge-main" />
        {/* Warning triangle */}
        <path d="M32 12L52 48H12L32 12Z" fill="white" opacity="0.95" />
        {/* Exclamation mark */}
        <rect x="29" y="22" width="6" height="14" rx="2" fill="#0284c7" />
        <circle cx="32" cy="42" r="3" fill="#0284c7" />
        {/* Number badge */}
        <circle cx="48" cy="18" r="10" fill="#fbbf24" />
        <text x="48" y="22" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">10</text>
      </svg>
    ),

    // ISSUE-OPENER-25 - Radar/scanner detecting issues
    'Issue-Opener-25': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="issue25-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* Star badge */}
        <path d="M32 2L40 22L60 26L46 40L50 60L32 48L14 60L18 40L4 26L24 22L32 2Z"
          fill="url(#issue25-grad)" className="badge-main" />
        {/* Radar circles */}
        <circle cx="32" cy="34" r="16" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="32" cy="34" r="11" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="32" cy="34" r="6" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
        {/* Radar sweep */}
        <path d="M32 34L32 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 34L44 26" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        {/* Detected dots (issues found) */}
        <circle cx="38" cy="28" r="3" fill="#ef4444" />
        <circle cx="26" cy="38" r="2" fill="#ef4444" opacity="0.8" />
        <circle cx="40" cy="40" r="2" fill="#ef4444" opacity="0.6" />
        {/* Center */}
        <circle cx="32" cy="34" r="3" fill="white" />
        {/* Number badge */}
        <circle cx="50" cy="50" r="10" fill="#fbbf24" />
        <text x="50" y="54" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">25</text>
      </svg>
    ),

    // EARLY CONTRIBUTOR - Pioneer/rocket ship
    'Early-Contributor': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="early-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        {/* Circle badge */}
        <circle cx="32" cy="32" r="28" fill="url(#early-grad)" className="badge-main" />
        {/* Rocket ship */}
        <path d="M32 8C32 8 24 20 24 32C24 40 28 46 32 46C36 46 40 40 40 32C40 20 32 8 32 8Z"
          fill="white" opacity="0.95" />
        {/* Rocket window */}
        <circle cx="32" cy="24" r="5" fill="#f59e0b" />
        <circle cx="32" cy="24" r="3" fill="white" opacity="0.5" />
        {/* Rocket fins */}
        <path d="M24 36L18 42L24 44Z" fill="white" opacity="0.9" />
        <path d="M40 36L46 42L40 44Z" fill="white" opacity="0.9" />
        {/* Rocket flames */}
        <path d="M28 46L32 56L36 46" fill="#ef4444" />
        <path d="M30 46L32 52L34 46" fill="#fbbf24" />
        {/* Stars */}
        <circle cx="14" cy="16" r="2" fill="white" opacity="0.8" />
        <circle cx="50" cy="20" r="1.5" fill="white" opacity="0.6" />
        <circle cx="18" cy="48" r="1.5" fill="white" opacity="0.7" />
        <circle cx="48" cy="44" r="2" fill="white" opacity="0.8" />
        {/* #1 badge */}
        <circle cx="48" cy="14" r="8" fill="white" />
        <text x="48" y="18" fontSize="9" fill="#b45309" fontWeight="bold" textAnchor="middle">#1</text>
      </svg>
    ),

    // FIRST CONTRIBUTION - Calendar with star marking the date
    'First-Contribution': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="first-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="first-shine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Shield/badge background */}
        <path d="M32 4L54 14V34C54 46 44 56 32 60C20 56 10 46 10 34V14L32 4Z"
          fill="url(#first-grad)" className="badge-main" />
        <path d="M32 4L54 14V34C54 46 44 56 32 60C20 56 10 46 10 34V14L32 4Z"
          fill="url(#first-shine)" />
        {/* Calendar body */}
        <rect x="18" y="20" width="28" height="28" rx="3" fill="white" opacity="0.95" />
        {/* Calendar header */}
        <rect x="18" y="20" width="28" height="8" rx="3" fill="#7c3aed" />
        <rect x="18" y="24" width="28" height="4" fill="#7c3aed" />
        {/* Calendar rings */}
        <circle cx="24" cy="20" r="2" fill="white" opacity="0.9" />
        <circle cx="32" cy="20" r="2" fill="white" opacity="0.9" />
        <circle cx="40" cy="20" r="2" fill="white" opacity="0.9" />
        {/* Calendar grid dots (days) */}
        <circle cx="24" cy="32" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="30" cy="32" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="36" cy="32" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="42" cy="32" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="24" cy="37" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="30" cy="37" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="36" cy="37" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="42" cy="37" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="24" cy="42" r="1.5" fill="#7c3aed" opacity="0.3" />
        <circle cx="30" cy="42" r="1.5" fill="#7c3aed" opacity="0.3" />
        {/* Highlighted date with star - THE FIRST CONTRIBUTION */}
        <circle cx="36" cy="42" r="5" fill="#fbbf24" />
        <path d="M36 39L37 41.5L39.5 41.5L37.5 43L38 45.5L36 44L34 45.5L34.5 43L32.5 41.5L35 41.5Z"
          fill="white" />
        {/* Confetti/sparkle effects */}
        <circle cx="14" cy="16" r="1.5" fill="#fbbf24" opacity="0.8" />
        <circle cx="50" cy="18" r="1.5" fill="#ec4899" opacity="0.8" />
        <circle cx="12" cy="44" r="1" fill="#10b981" opacity="0.7" />
        <circle cx="52" cy="46" r="1" fill="#3b82f6" opacity="0.7" />
        {/* #1 badge in corner */}
        <circle cx="48" cy="14" r="7" fill="#fbbf24" />
        <text x="48" y="18" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">#1</text>
      </svg>
    ),

    // FIRST REVIEW - Document with checkmark and calendar date
    'First-Review': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="first-review-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="first-review-shine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Shield/badge background */}
        <path d="M32 4L54 14V34C54 46 44 56 32 60C20 56 10 46 10 34V14L32 4Z"
          fill="url(#first-review-grad)" className="badge-main" />
        <path d="M32 4L54 14V34C54 46 44 56 32 60C20 56 10 46 10 34V14L32 4Z"
          fill="url(#first-review-shine)" />
        {/* Document body */}
        <rect x="18" y="16" width="28" height="36" rx="3" fill="white" opacity="0.95" />
        {/* Document fold corner */}
        <path d="M40 16L46 22H40V16Z" fill="#059669" opacity="0.3" />
        {/* Document lines */}
        <rect x="22" y="24" width="18" height="2" rx="1" fill="#059669" opacity="0.3" />
        <rect x="22" y="30" width="14" height="2" rx="1" fill="#059669" opacity="0.3" />
        <rect x="22" y="36" width="16" height="2" rx="1" fill="#059669" opacity="0.3" />
        {/* Big checkmark - review approved */}
        <circle cx="32" cy="44" r="8" fill="#10b981" />
        <path d="M28 44L31 47L37 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Sparkle effects */}
        <circle cx="14" cy="16" r="1.5" fill="#fbbf24" opacity="0.8" />
        <circle cx="50" cy="18" r="1.5" fill="#ec4899" opacity="0.8" />
        <circle cx="12" cy="44" r="1" fill="#8b5cf6" opacity="0.7" />
        <circle cx="52" cy="46" r="1" fill="#3b82f6" opacity="0.7" />
        {/* #1 badge in corner */}
        <circle cx="48" cy="14" r="7" fill="#fbbf24" />
        <text x="48" y="18" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">#1</text>
      </svg>
    ),

    // ACTIVE-LAST-7D - Lightning bolt with calendar
    'Active-Last-7d': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="active30-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        {/* Circle */}
        <circle cx="32" cy="32" r="28" fill="url(#active30-grad)" className="badge-main" />
        {/* Lightning bolt - energy/activity */}
        <path d="M36 8L22 32H30L28 56L42 28H34L36 8Z" fill="white" opacity="0.95" />
        {/* Inner bolt highlight */}
        <path d="M34 14L26 30H32L30 48L40 32H34L34 14Z" fill="#10b981" opacity="0.3" />
        {/* Pulse rings */}
        <circle cx="32" cy="32" r="24" stroke="white" strokeWidth="1" opacity="0.2" />
        <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="1" opacity="0.3" />
        {/* 7d indicator */}
        <rect x="42" y="44" width="18" height="14" rx="2" fill="white" />
        <text x="51" y="54" fontSize="8" fill="#047857" fontWeight="bold" textAnchor="middle">7d</text>
      </svg>
    ),

    // ACTIVE-LAST-90D - Activity chart
    'Active-Last-30d': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="active90-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
        {/* Rounded square */}
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#active90-grad)" className="badge-main" />
        {/* Activity pulse line */}
        <path d="M10 36L18 36L22 28L28 44L34 20L40 38L46 32L54 32"
          stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Activity dots */}
        <circle cx="22" cy="28" r="3" fill="white" />
        <circle cx="28" cy="44" r="3" fill="white" />
        <circle cx="34" cy="20" r="3" fill="white" />
        <circle cx="40" cy="38" r="3" fill="white" />
        {/* 30d label */}
        <rect x="20" y="48" width="24" height="10" rx="2" fill="white" opacity="0.95" />
        <text x="32" y="56" fontSize="8" fill="#0d9488" fontWeight="bold" textAnchor="middle">30 DAYS</text>
      </svg>
    ),

    // NEW JOINER - Welcome with sparkles
    'New-Joiner': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="newbie-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        {/* Starburst */}
        <path d="M32 0L36 24L60 20L40 32L60 44L36 40L32 64L28 40L4 44L24 32L4 20L28 24L32 0Z"
          fill="url(#newbie-grad)" className="badge-main" />
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
    'Dormant-90d+': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dormant-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
        {/* Circle */}
        <circle cx="32" cy="32" r="28" fill="url(#dormant-grad)" className="badge-main" />
        {/* Moon crescent */}
        <path d="M38 14A18 18 0 1 1 38 50A14 14 0 1 0 38 14Z" fill="white" opacity="0.9" />
        {/* Sleeping face on moon */}
        <path d="M26 30C26 30 28 32 30 30" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 30C34 30 36 32 38 30" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 38C30 38 32 40 34 38" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
        {/* ZZZ */}
        <text x="48" y="20" fontSize="10" fill="white" opacity="0.9" fontFamily="serif" fontStyle="italic" fontWeight="bold">Z</text>
        <text x="52" y="14" fontSize="8" fill="white" opacity="0.7" fontFamily="serif" fontStyle="italic" fontWeight="bold">z</text>
        <text x="55" y="10" fontSize="6" fill="white" opacity="0.5" fontFamily="serif" fontStyle="italic" fontWeight="bold">z</text>
        {/* Stars */}
        <circle cx="14" cy="18" r="1.5" fill="white" opacity="0.6" />
        <circle cx="20" cy="12" r="1" fill="white" opacity="0.5" />
        <circle cx="10" cy="26" r="1" fill="white" opacity="0.4" />
        <circle cx="16" cy="48" r="1.5" fill="white" opacity="0.5" />
      </svg>
    ),

    // DEFAULT - Generic achievement badge
    'default': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="default-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        {/* Hexagon */}
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" fill="url(#default-grad)" className="badge-main" />
        {/* Inner hexagon */}
        <path d="M32 12L48 22V42L32 52L16 42V22L32 12Z" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        {/* Star */}
        <path d="M32 20L35 28L44 28L37 34L40 42L32 36L24 42L27 34L20 28L29 28L32 20Z" fill="white" opacity="0.95" />
      </svg>
    )
  };

  return (
    <div className={`badge-icon-container ${isNew ? 'badge-new' : ''}`}>
      {icons[name] || icons['default']}
    </div>
  );
};

const BADGE_CONFIG: Record<string, {
  color: string;
  category: 'role' | 'milestone' | 'activity';
  label: string;
  description: string;
  tier?: 'legendary' | 'epic' | 'rare' | 'common';
}> = {
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
  'Lead': {
    color: '#ec4899',
    category: 'role',
    label: 'Lead',
    description: 'Initiative lead and project maintainer',
    tier: 'epic'
  },
  'Contributor-25': {
    color: '#ec4899',
    category: 'milestone',
    label: 'Diamond Contributor',
    description: '25+ merged contributions',
    tier: 'epic'
  },
  'Contributor-10': {
    color: '#f59e0b',
    category: 'milestone',
    label: 'Gold Contributor',
    description: '10+ merged contributions',
    tier: 'rare'
  },
  'Contributor-5': {
    color: '#fb923c',
    category: 'milestone',
    label: 'Bronze Contributor',
    description: '5+ merged contributions',
    tier: 'common'
  },
  'Reviewer-10': {
    color: '#8b5cf6',
    category: 'milestone',
    label: 'Skilled Reviewer',
    description: '10+ code reviews completed',
    tier: 'rare'
  },
  'Reviewer-25': {
    color: '#a855f7',
    category: 'milestone',
    label: 'Review Master',
    description: '25+ code reviews completed',
    tier: 'epic'
  },
  'Issue-Opener-5': {
    color: '#06b6d4',
    category: 'milestone',
    label: 'Issue Reporter',
    description: '5+ issues opened',
    tier: 'common'
  },
  'Issue-Opener-10': {
    color: '#0ea5e9',
    category: 'milestone',
    label: 'Active Reporter',
    description: '10+ issues opened',
    tier: 'rare'
  },
  'Issue-Opener-25': {
    color: '#3b82f6',
    category: 'milestone',
    label: 'Master Reporter',
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
    label: 'Recently Active',
    description: 'Active in the last 7 days',
    tier: 'common'
  },
  'Active-Last-30d': {
    color: '#14b8a6',
    category: 'activity',
    label: 'Active Contributor',
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

function getBadgeConfig(badgeName: string) {
  return BADGE_CONFIG[badgeName] || {
    color: '#6366f1',
    category: 'milestone' as const,
    label: badgeName,
    description: 'Community recognition',
    tier: 'common' as const
  };
}

function formatDate(dateString: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateString;
  }
}

interface BadgeDisplayProps {
  contributorSlug?: string;
  badges?: Badge[];
  compact?: boolean;
  showCount?: boolean;
  layout?: 'grid' | 'stack';
}

export function BadgeDisplay({
  contributorSlug,
  badges,
  compact = false,
  showCount = false,
  layout = 'grid'
}: BadgeDisplayProps) {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  let displayBadges: Badge[] = [];

  if (badges) {
    displayBadges = badges.filter(b => b.name && b.name.trim() !== '');
  } else if (contributorSlug) {
    const contributors = contributorsData as Record<string, Contributor>;
    const contributor = contributors[contributorSlug];
    if (contributor?.badges) {
      displayBadges = contributor.badges.filter(b => b.name && b.name.trim() !== '');
    }
  }

  if (displayBadges.length === 0) return null;

  // Sort badges chronologically by assigned date (newest first)
  const sortedBadges = [...displayBadges].sort((a, b) => {
    const dateA = new Date(a.assigned || '1970-01-01').getTime();
    const dateB = new Date(b.assigned || '1970-01-01').getTime();
    return dateB - dateA;
  });

  return (
    <div
      ref={containerRef}
      className={`badge-display ${compact ? 'compact' : ''} ${layout} ${isVisible ? 'visible' : ''}`}
    >
      {showCount && !compact && (
        <div className="badge-summary">
          <span className="badge-count">{displayBadges.length}</span>
          <span className="badge-count-label">Achievement{displayBadges.length !== 1 ? 's' : ''}</span>
        </div>
      )}

      <div className={`badges-container ${layout}`}>
        {sortedBadges.map((badge, index) => {
          const config = getBadgeConfig(badge.name);
          const isNew = isNewlyEarned(badge.assigned);
          const badgeDate = formatDate(badge.assigned);
          const badgeKey = `${badge.name}-${badge.framework || ''}-${index}`;
          const badgeLabel = badge.framework && badge.name === 'Framework-Steward'
            ? `${badge.framework} Steward`
            : config.label;
          const badgeDescription = badge.framework && badge.name === 'Framework-Steward'
            ? `Steward of the ${badge.framework} framework`
            : config.description;

          return (
            <div
              key={badgeKey}
              className={`badge-wrapper tier-${config.tier} ${isNew ? 'newly-earned' : ''} ${config.category}`}
              style={{
                '--delay': `${index * 0.08}s`,
                '--badge-color': config.color,
                '--tier-glow': `${config.color}33`
              } as React.CSSProperties}
              title={`${badgeLabel} - ${badgeDescription}`}
            >
              <div className="badge-card">
                <BadgeIcon name={badge.name} isNew={isNew} />
                {isNew && (
                  <div className="new-indicator">
                    <span className="pulse-dot"></span>
                  </div>
                )}
                {!compact && (
                  <div className="badge-tier-indicator">
                    {config.tier === 'legendary' && '👑'}
                    {config.tier === 'epic' && '💎'}
                    {config.tier === 'rare' && '⭐'}
                  </div>
                )}
              </div>

              <div className="badge-tooltip">
                  <div className="tooltip-header">
                    <strong>{badgeLabel}</strong>
                    <span className={`tier-badge tier-${config.tier}`}>
                      {config.tier?.toUpperCase()}
                    </span>
                  </div>
                  <p className="tooltip-description">{badgeDescription}</p>
                  {badgeDate && (
                    <div className="tooltip-footer">
                      <span className="tooltip-date">
                        {isNew && <span className="new-badge-text">✨ NEW</span>}
                        Earned {badgeDate}
                      </span>
                    </div>
                  )}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BadgeDisplay;
