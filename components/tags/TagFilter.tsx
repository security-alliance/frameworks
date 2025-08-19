import { useState, useEffect } from 'react'
import { useTagFilter } from './TagContext'
import { getAllTags, getTagsIndex } from '../../utils/pages-index'
import { getTagColor } from '../shared/constants'
import './TagFilter.css'

interface TagFilterProps {
  onTagSelect?: (tags: string[]) => void
  availableTags?: string[]
}

export function TagFilter({ onTagSelect, availableTags }: TagFilterProps) {
  const { selectedTags, setSelectedTags } = useTagFilter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const tagsIndex = getTagsIndex()
  
  // Get available tags from pages index if not provided
  const allTags = availableTags || getAllTags()
  const tags = query ? allTags.filter(t => t.toLowerCase().includes(query.toLowerCase())) : allTags

  // Load persisted selection and filter mode on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('selected_tags')
      if (raw) {
        const saved = JSON.parse(raw)
        if (Array.isArray(saved) && saved.length) {
          setSelectedTags(saved)
        }
      }

    } catch {}
  }, [setSelectedTags])

  useEffect(() => {
    // Notify parent
    if (onTagSelect) {
      onTagSelect(selectedTags)
    }

    // Persist to localStorage
    try { 
      localStorage.setItem('selected_tags', JSON.stringify(selectedTags))
    } catch {}

    // Apply OR logic and highlight existing sidebar links
    // Try various selectors for Vocs sidebar structure
    const sidebarSelectors = [
      'aside a', // Vocs uses aside for sidebar
      'nav a',   // Sometimes nav
      '.sidebar a', // Class-based
      '[data-testid="sidebar"] a', // Data attribute
      '.vocs_sidebar a', // Vocs-specific class
      '#sidebar a' // Fallback ID
    ]
    
    // Remove all previous selections and clear inline styles
    sidebarSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((link) => {
        link.classList.remove('selected')
        
        // Clear inline styles
        if (link instanceof HTMLElement) {
          link.style.backgroundColor = ''
          link.style.borderLeft = ''
          link.style.paddingLeft = ''
          link.style.fontWeight = ''
          link.style.opacity = ''
          
          // Remove tag indicators
          const indicators = link.querySelector('.sidebar-tag-indicators')
          if (indicators) {
            indicators.remove()
          }
        }
      })
    })

    if (selectedTags.length === 0) {
      const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
      if (sidebar instanceof HTMLElement) {
        sidebar.classList.remove('filtered')
      }
      return
    }

    // OR logic: union of all pages (any tag matches)
    const selectedPages = new Set<string>()
    selectedTags.forEach(tag => {
      const pages = tagsIndex[tag] || []
      pages.forEach(page => selectedPages.add(page))
    })

    console.log('Selected tags:', selectedTags)
    console.log('Selected pages:', Array.from(selectedPages))
    console.log('Tags index:', tagsIndex)

    // Highlight matching pages in existing sidebar - try multiple approaches
    selectedPages.forEach((page) => {
      // Try exact href match
      let link = document.querySelector(`a[href="${page}"]`)
      
      // Try href ending with page
      if (!link) {
        link = document.querySelector(`a[href$="${page}"]`)
      }
      
      // Try href containing page (without leading slash)
      if (!link) {
        const pageWithoutSlash = page.startsWith('/') ? page.slice(1) : page
        link = document.querySelector(`a[href*="${pageWithoutSlash}"]`)
      }
      
      // Try within sidebar containers
      if (!link) {
        sidebarSelectors.forEach(selector => {
          if (!link) {
            link = document.querySelector(`${selector.replace(' a', '')} a[href$="${page}"]`)
          }
        })
      }
      
      if (link) {
        console.log('Highlighting link:', link.getAttribute('href'), link.textContent)
        link.classList.add('selected')
        
        // Find which selected tags apply to this page
        const pageTags = selectedTags.filter(tag => 
          tagsIndex[tag] && tagsIndex[tag].includes(page)
        )
        
        // Force styling with inline styles to ensure visibility
        if (link instanceof HTMLElement) {
          link.style.backgroundColor = 'rgba(139, 92, 246, 0.2)'
          link.style.borderLeft = '4px solid #7c3aed'
          link.style.paddingLeft = '12px'
          link.style.fontWeight = '600'
          
          // Remove any existing tag indicators
          const existingIndicators = link.querySelector('.sidebar-tag-indicators')
          if (existingIndicators) {
            existingIndicators.remove()
          }
          
          // Add colored tag indicators
          if (pageTags.length > 0) {
            const indicators = document.createElement('div')
            indicators.className = 'sidebar-tag-indicators'
            
            pageTags.forEach(tag => {
              const indicator = document.createElement('span')
              indicator.className = 'sidebar-tag-indicator'
              indicator.style.backgroundColor = getTagColor(tag)
              indicator.title = tag
              indicators.appendChild(indicator)
            })
            
            link.appendChild(indicators)
          }
        }
      } else {
        console.log('Could not find link for page:', page)
      }
    })

    // Add filtered state to sidebar and dim non-selected links
    const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
    if (sidebar instanceof HTMLElement) {
      sidebar.classList.add('filtered')
      
      // Dim non-selected links
      sidebar.querySelectorAll('a:not(.selected)').forEach(link => {
        if (link instanceof HTMLElement) {
          link.style.opacity = '0.4'
        }
      })
    }
  }, [selectedTags, onTagSelect, tagsIndex])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev: string[]) => 
      prev.includes(tag) 
        ? prev.filter((t: string) => t !== tag)
        : [...prev, tag]
    )
  }

  const clearAll = () => {
    setSelectedTags([])
  }

  const hasActiveFilters = selectedTags.length > 0

  return (
    <div className="tag-filter">
      <button 
        className={`tag-filter-toggle ${isOpen ? 'active' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
        </svg>
        Filter by Tags
        {hasActiveFilters && (
          <span className="filter-count">{selectedTags.length}</span>
        )}
      </button>

      {isOpen && (
        <div className="tag-filter-dropdown">
          <div className="tag-filter-header">
            <h3>Filter by Tags</h3>
            {hasActiveFilters && (
              <button 
                className="clear-filters"
                onClick={clearAll}
                type="button"
              >
                Clear All
              </button>
            )}
          </div>
          

          
          <div className="tag-filter-search">
            <input
              type="text"
              placeholder="Search tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <div className="tag-filter-list">
            {tags.map(tag => (
              <label key={tag} className="tag-filter-item">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                <span 
                  className="tag-filter-badge"
                  style={{ backgroundColor: getTagColor(tag) }}
                >
                  {tag}
                </span>
              </label>
            ))}
          </div>

          {hasActiveFilters && (
            <div className="active-filters">
              <span className="active-filters-label">Active filters:</span>
              <div className="active-filters-list">
                {selectedTags.map(tag => (
                  <button
                    key={tag}
                    className="active-filter-item"
                    onClick={() => toggleTag(tag)}
                    style={{ backgroundColor: getTagColor(tag) }}
                  >
                    {tag}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div 
          className="tag-filter-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}