import './BadgeLegend.css';
import './BadgeDisplay.css';
import {
  BADGE_CONFIG,
  badgeIconUid,
  renderBadgeIcon,
  isDisplayableBadge,
  BadgeCategory,
  BadgeTier
} from '../shared/badgeConfig';

// Convert BADGE_CONFIG to array format for the legend. Badges that never draw
// on a card have nothing to explain here; their effect is covered in the rules.
const BADGE_LEGEND = Object.entries(BADGE_CONFIG)
  .filter(([name]) => isDisplayableBadge(name))
  .map(([name, config]) => ({
    name,
    label: config.label,
    description: config.description,
    category: config.category
  }));

const CATEGORY_INFO: Record<BadgeCategory, { label: string; color: string; description: string }> = {
  role: {
    label: 'Role Badges',
    color: '#3b82f6',
    description: 'Recognize special roles and responsibilities within the project'
  },
  milestone: {
    label: 'Milestone Badges',
    color: '#10b981',
    description: 'Celebrate contribution milestones and achievements'
  },
  activity: {
    label: 'Activity Badges',
    color: '#fbbf24',
    description: 'Track recent activity and engagement status'
  }
};

const PREVIEW_BADGES = ['Lead', 'Contributor-25', 'Reviewer-10', 'Active-Last-7d']
  .filter(isDisplayableBadge);

const TIER_ORDER: BadgeTier[] = ['legendary', 'epic', 'rare', 'common'];

const TIER_INFO: Record<BadgeTier, string> = {
  legendary: 'The rarest thing on this page. Handed to the few people who carry a framework, or the project itself, on their back.',
  epic: 'Twenty-five deep. Years of showing up, and a very short list of holders.',
  rare: 'Ten and counting. The rung where someone stops being a visitor and starts being a regular.',
  common: 'Where everyone starts, including everyone above. The only badge nobody can take back is the first one.'
};

const STATUS_ROW = {
  key: 'status',
  label: 'Status',
  meaning: 'Says who is around right now, and it changes as people come and go.'
};

function tierMembers(tier: BadgeTier): string {
  const labels = Object.values(BADGE_CONFIG)
    .filter(c => c.tier === tier && c.category !== 'activity')
    .map(c => c.label);
  return Array.from(new Set(labels)).join(', ');
}

function statusMembers(): string {
  return BADGE_LEGEND.filter(b => b.category === 'activity').map(b => b.label).join(', ');
}

function CategoryCard({ category }: { category: BadgeCategory }) {
  const info = CATEGORY_INFO[category];
  const badges = BADGE_LEGEND.filter(b => b.category === category);

  return (
    <div className={`badge-legend-category ${category}`}>
      <div className="category-header">
        <span
          className="category-indicator"
          style={{ backgroundColor: info.color }}
        />
        <h3 className="category-title">{info.label}</h3>
      </div>
      <p className="category-description">{info.description}</p>

      <div className="badge-list">
        {badges.map((badge) => (
          <div key={badge.name} className="badge-item">
            <span className="badge-item-icon" aria-hidden="true">
              {renderBadgeIcon(badge.name, badgeIconUid('legend', badge.name))}
            </span>
            <span className="badge-item-text">
              <span className="badge-label">{badge.label}</span>
              <span className="badge-description">{badge.description}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BadgeLegend() {
  return (
    <details className="badge-legend">
      <summary className="badge-legend-summary">
        <span className="badge-legend-heading">
          <h2 id="badge-legend" data-v="" className="badge-legend-title">
            Badge Legend
          </h2>
          <span className="badge-legend-hint">What each badge means</span>
        </span>

        <span className="badge-legend-preview" aria-hidden="true">
          {PREVIEW_BADGES.map((name) => (
            <span key={name} className="badge-legend-preview-icon">
              {renderBadgeIcon(name, badgeIconUid('legend-preview', name))}
            </span>
          ))}
        </span>

        <span className="badge-legend-toggle" aria-hidden="true">
          <span className="badge-legend-toggle-label">Open</span>
          <span className="badge-legend-chevron" />
        </span>
      </summary>

      <div className="badge-legend-body">
        <p className="badge-legend-intro">
          Contributors earn badges based on their participation and achievements.
          Badges are color-coded by category and sorted chronologically on each contributor's card.
        </p>

        <div className="badge-legend-categories">
          {/* Left column: Role + Activity*/}
          <div className="badge-legend-column">
            <CategoryCard category="role" />
            <CategoryCard category="activity" />
          </div>

          {/* Right column: Milestone */}
          <div className="badge-legend-column">
            <CategoryCard category="milestone" />
          </div>
        </div>

        <div className="badge-legend-tiers">
          <h3 className="legend-block-title">Tiers</h3>
          <p className="legend-block-intro">
            Every badge carries one, shown on its tooltip. They are ranked by how much of the project
            the badge stands for, and the ladder is the same for everyone: today&rsquo;s Legendary
            holders all started at the bottom of it.
          </p>
          <ul className="legend-tier-list">
            {TIER_ORDER.map((tier) => (
              <li key={tier} className="legend-tier-row">
                <span className={`tier-badge tier-${tier}`}>
                  {tier.charAt(0).toUpperCase()}{tier.slice(1)}
                </span>
                <span className="legend-tier-text">
                  <span className="legend-tier-meaning">{TIER_INFO[tier]}</span>
                  <span className="legend-tier-members">{tierMembers(tier)}</span>
                </span>
              </li>
            ))}
            {/* Activity badges are not ranked, so Status closes the list rather
                than sitting inside it. */}
            <li className="legend-tier-row">
              <span className="tier-badge tier-status">{STATUS_ROW.label}</span>
              <span className="legend-tier-text">
                <span className="legend-tier-meaning">{STATUS_ROW.meaning}</span>
                <span className="legend-tier-members">{statusMembers()}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="badge-legend-note">
          <span className="legend-note-text">
            <strong>Badges earned within the last 30 days display a golden pulsing indicator</strong>
          </span>
          <span className="legend-note-arrow">→</span>
          <span className="legend-new-indicator">
            <span className="legend-pulse-dot"></span>
          </span>
        </div>
      </div>
    </details>
  );
}

export default BadgeLegend;
