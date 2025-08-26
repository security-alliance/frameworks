/**
 * Components index - provides easy access to all components
 * 
 * Usage examples:
 * import { TagFilter, useTagFilter } from './components'
 * import { AttributionList } from './components'
 * import { getTagColor } from './components'
 */

export { TagProvider, useTagFilter } from './tags/TagContext'
export { TagFilter } from './tags/TagFilter'
export { TagList } from './tags/TagList'
export { withTagFiltering, TagFilteringLayout } from './tags/withTagFiltering'
export { AttributionList } from './attribution/AttributionList'
export * from './shared/constants'