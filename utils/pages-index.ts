// Extract pages from vocs.config.ts structure and add tag metadata
// This would ideally scan the actual pages for frontmatter, but for now we'll manually maintain it

export interface PageInfo {
  title: string
  link: string
  tags: string[]
  description?: string
}

// This mirrors the vocs.config.ts sidebar structure with added tag metadata
export const PAGES_INDEX: PageInfo[] = [
  // Introduction pages
  {
    title: "Introduction to Frameworks",
    link: "/intro/introduction",
    tags: [],
    description: "Introduction to the SEAL Security Frameworks project"
  },
  {
    title: "How to Navigate",
    link: "/intro/how-to-navigate", 
    tags: [],
    description: "Guide on how to navigate and use this documentation"
  },
  {
    title: "Framework Overview",
    link: "/intro/overview",
    tags: [],
    description: "Overview of each security framework provided"
  },
  
  // Security Awareness
  {
    title: "Security Awareness Overview",
    link: "/awareness/overview",
    tags: ["Security Specialist", "Operations & Strategy"],
    description: "Overview of the security awareness framework"
  },
  {
    title: "Core Awareness Principles",
    link: "/awareness/core-awareness-principles", 
    tags: ["Security Specialist", "Operations & Strategy", "Community & Marketing", "HR", "Engineer/Developer"],
    description: "Fundamental principles for building security awareness in organizations"
  },
  {
    title: "Understanding Threat Vectors",
    link: "/awareness/understanding-threat-vectors",
    tags: ["Security Specialist", "Operations & Strategy", "Community & Marketing", "HR", "Engineer/Developer"], 
    description: "Comprehensive guide to common attack vectors and threats"
  },

  // Community Management
  {
    title: "Community Management Overview", 
    link: "/community-management/overview",
    tags: ["Community & Marketing", "Operations & Strategy"],
    description: "Overview of community management security practices"
  },
  {
    title: "Discord Security",
    link: "/community-management/discord",
    tags: ["Community & Marketing", "Operations & Strategy"],
    description: "Best practices for securing Discord servers and communications"
  },
  {
    title: "X (Twitter) Security",
    link: "/community-management/twitter",
    tags: ["Community & Marketing"],
    description: "Comprehensive guide to securing your Twitter/X account"
  },

  // Contributing
  {
    title: "How to Contribute",
    link: "/contribute/contributing",
    tags: ["Community & Marketing"],
    description: "Guide on how to contribute to the Security Frameworks project"
  }
]

// Get all unique tags from pages
export function getAllTags(): string[] {
  const tags = new Set<string>()
  PAGES_INDEX.forEach(page => {
    page.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Filter pages by selected tags
export function filterPagesByTags(selectedTags: string[]): PageInfo[] {
  if (selectedTags.length === 0) {
    return PAGES_INDEX
  }
  
  return PAGES_INDEX.filter(page => 
    selectedTags.every(tag => page.tags.includes(tag))
  )
}

// Group pages by their primary tag
export function groupPagesByTag(pages: PageInfo[]): Record<string, PageInfo[]> {
  return pages.reduce((groups, page) => {
    const primaryTag = page.tags[0] || 'General'
    if (!groups[primaryTag]) {
      groups[primaryTag] = []
    }
    groups[primaryTag].push(page)
    return groups
  }, {} as Record<string, PageInfo[]>)
}

// Build a tag -> pages index similar to mdBook's tagsIndex
export function getTagsIndex(): Record<string, string[]> {
  const index: Record<string, string[]> = {}
  for (const page of PAGES_INDEX) {
    for (const tag of page.tags) {
      if (!index[tag]) index[tag] = []
      index[tag].push(page.link)
    }
  }
  return index
}