import contributorsData from '../../docs/pages/config/contributors.json';
import './Contributors.css';
import BadgeDisplay from './BadgeDisplay';

interface Badge {
  name: string;
  assigned: string;
  framework?: string;
}

interface Contributor {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  github: string | null;
  twitter: string | null;
  website: string | null;
  company: string | null;
  job_title: string | null;
  steward: string[];
  badges: Badge[];
  description: string;
}

// Helper to format steward array with "&" between items
function formatStewards(stewards: string[]): string {
  if (!stewards || stewards.length === 0) return '';
  if (stewards.length === 1) return stewards[0];
  if (stewards.length === 2) return `${stewards[0]} & ${stewards[1]}`;
  return stewards.slice(0, -1).join(', ') + ' & ' + stewards[stewards.length - 1];
}

interface ContributorGroup {
  label: string;
  contributors: Contributor[];
}

// Helper to create a slug for heading IDs (matching Vocs slugify behavior)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function Contributors() {
  // Convert JSON object to array
  const contributors = Object.values(contributorsData as Record<string, Contributor>);

  const groups: ContributorGroup[] = [
    {
      label: "Leadership",
      contributors: contributors.filter(c => c.role === "lead")
    },
    {
      label: "Stewards",
      contributors: contributors.filter(c => c.role === "steward")
    },
    {
      label: "Core Contributors",
      contributors: contributors.filter(c => c.role === "core")
    },
    {
      label: "Contributors",
      contributors: contributors.filter(c => c.role === "contributor")
    }
  ].filter(group => group.contributors.length > 0);

  return (
    <div>
      {groups.map((group) => {
        const headingSlug = slugify(group.label);
        return (
          <div
            key={group.label}
            className={`contributors-group ${group.label.toLowerCase().replace(' ', '-')}-group`}
          >
            <h2 className="vocs_H2 vocs_Heading">
              <div id={headingSlug} className="vocs_Heading_slugTarget"></div>
              {group.label}
              <a
                className="vocs_Anchor vocs_Autolink"
                aria-hidden="true"
                tabIndex={-1}
                href={`#${headingSlug}`}
              >
                <div
                  data-autolink-icon="true"
                  className="vocs_Div vocs_AutolinkIcon"
                  style={{ '--vocs_AutolinkIcon_iconUrl': 'url(/.vocs/icons/link.svg)' } as React.CSSProperties}
                ></div>
              </a>
            </h2>

            <div className="contributors-page-list">
              {group.contributors.map((contributor, index) => (
                <div
                  key={contributor.slug}
                  className="contributors-page-card"
                  id={contributor.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9_-]/g, '')}
                  style={{ '--card-index': index } as React.CSSProperties}
                >
                  {/* Avatar */}
                  <div className="avatar-wrapper">
                    <img
                      className="contributors-page-avatar"
                      src={contributor.avatar}
                      alt={`${contributor.name}'s avatar`}
                      loading="lazy"
                    />
                  </div>

                  {/* Header with name */}
                  <div className="contributors-page-header">
                    <div className="contributors-page-name">{contributor.name}</div>
                  </div>

                  {/* Company */}
                  {contributor.company && (
                    <div className="contributors-page-company">{contributor.company}</div>
                  )}

                  {/* Job Title */}
                  {contributor.job_title && (
                    <div className="contributors-page-role">{contributor.job_title}</div>
                  )}

                  {/* Steward info */}
                  {contributor.steward && contributor.steward.length > 0 && (
                    <div className="contributors-page-steward">
                      <span className="steward-label">Steward:</span>
                      <span className="steward-name">{formatStewards(contributor.steward)}</span>
                    </div>
                  )}

                  {/* Description - only show for non-stewards */}
                  {contributor.description && contributor.role !== "steward" && (
                    <div className="contributors-page-description">
                      {contributor.description}
                    </div>
                  )}

                  {/* Badges display */}
                  {contributor.badges && contributor.badges.length > 0 && (
                    <div className="contributors-page-badges">
                      <BadgeDisplay badges={contributor.badges} compact={true} />
                    </div>
                  )}

                  {/* Social links */}
                  <div className="contributors-page-social">
                    {contributor.github && (
                      <a
                        href={contributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Profile"
                        className="contributor-link github-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {contributor.twitter && (
                      <a
                        href={contributor.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter Profile"
                        className="contributor-link twitter-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                    {contributor.website && (
                      <a
                        href={contributor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Website"
                        className="contributor-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contributors;