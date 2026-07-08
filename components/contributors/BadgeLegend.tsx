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
      <h2 id="badge-legend" data-v="" className="badge-legend-title">
        Badge Legend
        <a className="heading-anchor" href="#badge-legend" aria-label="Link to this section">
          <svg
            className="heading-anchor-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="0.75em"
            height="0.75em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
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
