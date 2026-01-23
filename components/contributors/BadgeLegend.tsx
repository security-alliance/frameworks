import React from 'react';
import './BadgeLegend.css';
import { BADGE_CONFIG, BadgeCategory } from '../shared/badgeConfig';

// Convert BADGE_CONFIG to array format for the legend
const BADGE_LEGEND = Object.entries(BADGE_CONFIG).map(([name, config]) => ({
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
            <span className="badge-label">{badge.label}</span>
            <span className="badge-description">{badge.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BadgeLegend() {
  return (
    <div className="badge-legend">
      <h2 className="vocs_H2 vocs_Heading badge-legend-title">
        <div id="badge-legend" className="vocs_Heading_slugTarget"></div>
        Badge Legend
        <a
          className="vocs_Anchor vocs_Autolink"
          aria-hidden="true"
          tabIndex={-1}
          href="#badge-legend"
        >
          <div
            data-autolink-icon="true"
            className="vocs_Div vocs_AutolinkIcon"
            style={{ '--vocs_AutolinkIcon_iconUrl': 'url(/.vocs/icons/link.svg)' } as React.CSSProperties}
          ></div>
        </a>
      </h2>
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
  );
}

export default BadgeLegend;
