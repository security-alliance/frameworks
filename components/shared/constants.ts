/**
 * Shared constants for the components
 */

// Tag color mapping for consistent styling across components
export const TAG_COLORS: Record<string, string> = {
  'Security Specialist': '#9F2026',     // red
  'Operations & Strategy': '#9A055D',   // purple  
  'Community & Marketing': '#5B2371',   // violet
  'HR': '#285AD2',                      // blue
  'Engineer/Developer': '#B2439F',      // pink
  'Devops': '#059669',                  // emerald
  'SRE': '#ea580c',                     // orange
  'SEAL/Initiative': '#4339db',         // indigo
}

/**
 * Get the color for a specific tag
 * @param tag - The tag name
 * @returns The hex color code for the tag, or default gray if not found
 */
export function getTagColor(tag: string): string {
  return TAG_COLORS[tag] || '#6b7280' // default gray if tag not found
}

/**
 * Generate a DOM-safe ID from a tag name
 * @param tag - The tag name
 * @returns A lowercase, hyphenated string safe for use as an ID
 */
export function getTagId(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]/g, '-')
}