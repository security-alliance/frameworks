"use client";

import './BadgeDisplay.css';
import contributorsData from '../../docs/pages/config/contributors.json';
import {
  getBadgeConfig,
  badgeIconUid,
  BadgeIcon,
  getTierChip,
  isDisplayableBadge,
  renderBadgeIcon
} from '../shared/badgeConfig';

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
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });
  } catch {
    return dateString;
  }
}

function getBadgeDateLabel(badge: Badge): 'Earned' | 'Last active' {
  return badge.lastActive ? 'Last active' : 'Earned';
}

const COMPACT_MAX_VISIBLE = 5;

interface BadgeDisplayProps {
  contributorSlug?: string;
  badges?: Badge[];
  compact?: boolean;
  showCount?: boolean;
  layout?: 'grid' | 'stack';
}

function BadgeCard({ badge, index, uid }: { badge: Badge; index: number; uid: string }) {
  const config = getBadgeConfig(badge.name);
  const tierChip = getTierChip(config);
  const effectiveDate = getBadgeDate(badge);
  const dateLabel = getBadgeDateLabel(badge);
  const isNew = isNewlyEarned(effectiveDate);
  const badgeDate = formatDate(effectiveDate);
  const badgeKey = `${badge.name}-${badge.framework || ''}-${index}`;
  const badgeLabel = badge.name === 'Framework-Steward' ? 'Steward' : config.label;
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
      role="img"
      aria-label={`${badgeLabel}: ${badgeDescription}`}
    >
      <div className="badge-card">
        <BadgeIcon name={badge.name} isNew={isNew} uid={uid} />
        {isNew && (
          <div className="new-indicator">
            <span className="pulse-dot"></span>
          </div>
        )}
      </div>

      <div className="badge-tooltip">
        <div className="tooltip-header">
          <span className="tooltip-art" aria-hidden="true">
            {renderBadgeIcon(badge.name, `${uid}-tip`)}
          </span>
          <span className="tooltip-heading">
            <strong>{badgeLabel}</strong>
            <span className={`tier-badge ${tierChip.className}`}>{tierChip.text}</span>
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
}

export function BadgeDisplay({
  contributorSlug,
  badges,
  compact = false,
  showCount = false,
  layout = 'grid'
}: BadgeDisplayProps) {
  let displayBadges: Badge[] = [];

  if (badges) {
    displayBadges = badges.filter(b => isDisplayableBadge(b.name));
  } else if (contributorSlug) {
    const contributors = contributorsData as unknown as Record<string, Contributor>;
    const contributor = contributors[contributorSlug];
    if (contributor?.badges) {
      displayBadges = contributor.badges.filter(b => isDisplayableBadge(b.name));
    }
  }

  if (displayBadges.length === 0) return null;

  const byDateDesc = (a: Badge, b: Badge) =>
    new Date(getBadgeDate(b) || '1970-01-01').getTime() - new Date(getBadgeDate(a) || '1970-01-01').getTime();

  let visibleBadges: Badge[];
  let hiddenBadges: Badge[];

  if (compact) {
    const roleBadges = displayBadges.filter(b => getBadgeConfig(b.name).category === 'role').sort(byDateDesc);
    const nonRoleBadges = displayBadges.filter(b => getBadgeConfig(b.name).category !== 'role').sort(byDateDesc);
    const nonRoleSlots = Math.max(0, COMPACT_MAX_VISIBLE - roleBadges.length);
    visibleBadges = [...nonRoleBadges.slice(0, nonRoleSlots), ...roleBadges];
    hiddenBadges = nonRoleBadges.slice(nonRoleSlots);
  } else {
    visibleBadges = [...displayBadges].sort(byDateDesc);
    hiddenBadges = [];
  }

  return (
    <div className={`badge-display ${compact ? 'compact' : ''} ${layout}`}>
      {showCount && !compact && (
        <div className="badge-summary">
          <span className="badge-count">{displayBadges.length}</span>
          <span className="badge-count-label">Achievement{displayBadges.length !== 1 ? 's' : ''}</span>
        </div>
      )}

      <div className={`badges-container ${layout}`}>
        {visibleBadges.map((badge, index) => (
          <BadgeCard
            key={`${badge.name}-${badge.framework || ''}-${index}`}
            badge={badge}
            index={index}
            uid={badgeIconUid('b', contributorSlug, index)}
          />
        ))}
        {hiddenBadges.length > 0 && (() => {
          const count = hiddenBadges.length;
          const cols = count <= 3 ? count : count === 4 ? 2 : 4;
          return (
            <div className="badge-overflow-chip">
              +{count}
              <div className="badge-overflow-tooltip" data-cols={cols}>
                <div className="badge-overflow-tooltip-grid" data-cols={cols}>
                  {hiddenBadges.map((badge, index) => (
                    <BadgeCard
                      key={`overflow-${badge.name}-${badge.framework || ''}-${index}`}
                      badge={badge}
                      index={index}
                      uid={badgeIconUid('o', contributorSlug, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

export default BadgeDisplay;
