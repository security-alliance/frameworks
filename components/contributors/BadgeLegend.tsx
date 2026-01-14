import React from 'react';
import './BadgeLegend.css';

interface BadgeInfo {
  name: string;
  label: string;
  description: string;
  category: 'role' | 'milestone' | 'activity';
}

const BADGE_LEGEND: BadgeInfo[] = [
  // Role Badges (Blue)
  {
    name: 'Framework-Steward',
    label: 'Framework Steward',
    description: 'Official maintainer responsible for framework quality',
    category: 'role'
  },
  {
    name: 'Core-Contributor',
    label: 'Core Team',
    description: 'Elite contributor with governance duties',
    category: 'role'
  },
  {
    name: 'Lead',
    label: 'Lead',
    description: 'Initiative lead and project maintainer',
    category: 'role'
  },
  // Milestone Badges (Green)
  {
    name: 'Contributor-5',
    label: 'Bronze Contributor',
    description: '5+ merged contributions',
    category: 'milestone'
  },
  {
    name: 'Contributor-10',
    label: 'Gold Contributor',
    description: '10+ merged contributions',
    category: 'milestone'
  },
  {
    name: 'Contributor-25',
    label: 'Diamond Contributor',
    description: '25+ merged contributions',
    category: 'milestone'
  },
  {
    name: 'Reviewer-10',
    label: 'Skilled Reviewer',
    description: '10+ code reviews completed',
    category: 'milestone'
  },
  {
    name: 'Reviewer-25',
    label: 'Review Master',
    description: '25+ code reviews completed',
    category: 'milestone'
  },
  {
    name: 'Issue-Opener-5',
    label: 'Issue Reporter',
    description: '5+ issues opened',
    category: 'milestone'
  },
  {
    name: 'Issue-Opener-10',
    label: 'Active Reporter',
    description: '10+ issues opened',
    category: 'milestone'
  },
  {
    name: 'Issue-Opener-25',
    label: 'Master Reporter',
    description: '25+ issues opened',
    category: 'milestone'
  },
  {
    name: 'First-Contribution',
    label: 'First Contribution',
    description: 'Made their first contribution to the project',
    category: 'milestone'
  },
  {
    name: 'First-Review',
    label: 'First Review',
    description: 'Completed their first code review',
    category: 'milestone'
  },
  {
    name: 'Early-Contributor',
    label: 'Early Contributor',
    description: 'Among the first contributors to the project',
    category: 'milestone'
  },
  // Activity Badges (Yellow)
  {
    name: 'Active-Last-7d',
    label: 'Recently Active',
    description: 'Active in the last 7 days',
    category: 'activity'
  },
  {
    name: 'Active-Last-30d',
    label: 'Active Contributor',
    description: 'Active in the last 30 days',
    category: 'activity'
  },
  {
    name: 'New-Joiner',
    label: 'New Joiner',
    description: 'Welcome to the community!',
    category: 'activity'
  },
  {
    name: 'Dormant-90d+',
    label: 'Dormant',
    description: 'Inactive for 90+ days',
    category: 'activity'
  }
];

const CATEGORY_INFO = {
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

function CategoryCard({ category }: { category: 'role' | 'milestone' | 'activity' }) {
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
        {/* Left column: Role + Activity (shorter lists) */}
        <div className="badge-legend-column">
          <CategoryCard category="role" />
          <CategoryCard category="activity" />
        </div>

        {/* Right column: Milestone (longer list) */}
        <div className="badge-legend-column">
          <CategoryCard category="milestone" />
        </div>
      </div>

      <div className="badge-legend-note">
        <strong>Note:</strong> Badges with a pulsing indicator were earned within the last 7 days.
      </div>
    </div>
  );
}

export default BadgeLegend;
