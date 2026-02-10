/**
 * Tag colors
 */

export const TAG_COLORS: Record<string, string> = {
  'Security Specialist': '#9F2026',   
  'Operations & Strategy': '#9A055D',   
  'Community & Marketing': '#5B2371', 
  'HR': '#285AD2',                  
  'Engineer/Developer': '#B2439F',  
  'Devops': '#5C234A',                 
  'SRE': '#2E51BA',                    
  'SEAL/Initiative': '#4339db',
  'Cloud': '#0873B5',
  'DAO': '#5112C1',
  'Legal & Compliance': '#0525B1',
  'Protocol': '#495EA9',
  'Whitehat': '#571A70',
  'Certifications': '#EA580C',
  'Multisig Security': '#2DD4BF',
  'SFC': '#9333EA',
  'DeFi': '#0ce66d',
  'Operations': '#a1fdaa',
  'Risk Management': '#933176',
  'Treasury Ops': '#f00120',
  'Business Tools': '#3ebbc9',
  'Communication Platforms': '#bf9504',
  'DevOps Accounts': '#f43e7c',
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