import React, { useEffect, useRef, useState } from 'react';
import './BadgeDisplay.css';
import contributorsData from '../../docs/pages/config/contributors.json';
import { getBadgeConfig, BadgeIcon } from '../shared/badgeConfig';

interface Badge {
  name: string;
  assigned?: string;
  lastActive?: string;
  framework?: string;
}

// Get badge date (lastActive for activity badges, assigned for others)
function getBadgeDate(badge: Badge): string {
  return badge.lastActive || badge.assigned || '';
}

interface Contributor {
  slug: string;
  name: string;
  avatar: string;
  github: string | null;
  twitter: string | null;
  role: string;
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

function formatDate(dateString: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateString;
  }
}

function getBadgeDateLabel(badge: Badge): 'Earned' | 'Last active' {
  return badge.lastActive ? 'Last active' : 'Earned';
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

  // Sort badges chronologically by date (newest first)
  const sortedBadges = [...displayBadges].sort((a, b) => {
    const dateA = new Date(getBadgeDate(a) || '1970-01-01').getTime();
    const dateB = new Date(getBadgeDate(b) || '1970-01-01').getTime();
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
          const effectiveDate = getBadgeDate(badge);
          const dateLabel = getBadgeDateLabel(badge);
          const isNew = isNewlyEarned(effectiveDate);
          const badgeDate = formatDate(effectiveDate);
          const badgeKey = `${badge.name}-${badge.framework || ''}-${index}`;
          const badgeLabel = badge.name === 'Framework-Steward'
            ? 'Steward'
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
                      {dateLabel} {badgeDate}
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
