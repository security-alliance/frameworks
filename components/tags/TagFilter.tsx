import { useState, useEffect, useMemo, useRef } from 'react'
import { useTagFilter } from './TagContext'
import { getTagColor } from '../shared/constants'
import tagsFetched from '../../utils/fetched-tags.json'
import './TagFilter.css'

interface TagFilterProps {
  onTagSelect?: (tags: string[]) => void
  availableTags?: string[]
}

export function TagFilter({ onTagSelect, availableTags }: TagFilterProps) {
  const { selectedTags, setSelectedTags } = useTagFilter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const prevSelectedTagsRef = useRef<string[]>([])
  const isControllingsidebar = useRef(false)
  const mutationObserverRef = useRef<MutationObserver | null>(null)
  const lastControlTimestamp = useRef<number>(0)
  const filterContainerRef = useRef<HTMLDivElement>(null)

  const pageTagsMap = tagsFetched?.pageTagsMap || {}
  
  // Create tags index once and memoize it
  const tagsIndex: Record<string, string[]> = useMemo(() => {
    const index: Record<string, string[]> = {}
  Object.entries(pageTagsMap).forEach(([page, pageTags]) => {
    pageTags.forEach(tag => {
        if (!index[tag]) {
          index[tag] = []
        }
        if (!index[tag].includes(page)) {
          index[tag].push(page)
        }
      })
    })
    return index
  }, [pageTagsMap])
  
  // Helper function to find which sidebar sections contain matching pages
  // Returns both top-level sections (e.g., "incident-management") and nested subsections (e.g., "playbooks")
  const getSectionsWithMatchingPages = (selectedPages: Set<string>) => {
    const sectionsWithMatches = new Set<string>()
    
    // Map pages to their sections based on URL structure
    selectedPages.forEach(page => {
      // Extract all parts of the path to handle nested sections
      const pathParts = page.split('/').filter(Boolean)
      
      // Add top-level section (e.g., "incident-management")
      if (pathParts.length > 0) {
        sectionsWithMatches.add(pathParts[0])
      }
      
      // Add nested subsections
      if (pathParts.length > 1) {
        sectionsWithMatches.add(pathParts[1])
      }
    })
    
    return sectionsWithMatches
  }

  /**
   * Controls sidebar section collapse/expand states based on selected tags
   * Only runs when tags change (add/remove), then hands control back to user
   * Throttled to prevent rapid re-triggers during navigation
   */
  const controlSidebarSections = (selectedPages: Set<string>) => {
    // Throttle to prevent rapid re-triggers (e.g. during navigation)
    const now = Date.now()
    const timeSinceLastControl = now - lastControlTimestamp.current
    if (timeSinceLastControl < 100) {
      return
    }
    lastControlTimestamp.current = now
    
    // Only control sections if we actually have selected tags
    if (selectedTags.length === 0) {
      return
    }
    
    // Set flag to indicate we're programmatically controlling the sidebar
    isControllingsidebar.current = true
    
    const sectionsWithMatches = getSectionsWithMatchingPages(selectedPages)
    
    // Find the sidebar and specifically target child sections within "Frameworks"
    const sidebar = document.querySelector('aside')
    if (!sidebar) return
    
    // Find the "Frameworks" section first
    const frameworksSection = Array.from(sidebar.querySelectorAll('nav > div > section')).find(section => {
      const titleElement = section.querySelector('div > div, div > a')
      return titleElement?.textContent?.trim() === 'Frameworks'
    })
    
    if (!frameworksSection) {
      return
    }
    
    // Helper function to toggle sections based on matches
    const toggleSections = (sections: NodeListOf<Element>) => {
      sections.forEach(section => {
        const sectionTitleElement = section.querySelector('div > div, div > a')
        const sectionTitle = sectionTitleElement?.textContent?.trim()
        
        if (!sectionTitle) return
        
        // Use the pre-generated section mappings from fetched-tags.json
        const sectionMappings: Record<string, string> = tagsFetched?.sectionMappings || {}
        const sectionUrlSegment = sectionMappings[sectionTitle]
        
        const shouldExpand = sectionUrlSegment && sectionsWithMatches.has(sectionUrlSegment)
        
        // Find the collapse/expand button
        const collapseButton = section.querySelector('[role="button"]')
        if (!collapseButton) return
        
        // Detect if section is currently collapsed by checking for visible links
        const allLinksInSection = section.querySelectorAll('a')
        const visibleLinks = Array.from(allLinksInSection).filter(link => {
          const style = getComputedStyle(link)
          return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
        })
        
        const isCurrentlyCollapsed = visibleLinks.length === 0
        
        // Only click if we need to change the state
        if (shouldExpand && isCurrentlyCollapsed) {
          // Need to expand
          ;(collapseButton as HTMLElement).click()
        } else if (!shouldExpand && !isCurrentlyCollapsed) {
          // Need to collapse
          ;(collapseButton as HTMLElement).click()
        }
      })
    }
    
    // First pass: toggle all currently visible sections (top-level)
    const childSections = frameworksSection.querySelectorAll('section')
    toggleSections(childSections)
    
    // Second pass: wait for DOM to update, then toggle newly visible nested subsections
    setTimeout(() => {
      const updatedSections = frameworksSection.querySelectorAll('section')
      toggleSections(updatedSections)
    }, 200)
    
    // Reset flag after all passes complete
    setTimeout(() => {
      isControllingsidebar.current = false
    }, 100)
  }

  /**
   * Applies highlighting to selected pages in the sidebar
   * Highlights matching links and dims non-matching ones
   */
  const reapplyHighlighting = (selectedPages: Set<string>) => {
    // Clear all previous highlighting and styles first
    const allLinksForClearing = document.querySelectorAll('aside a, nav a, .sidebar a')
    allLinksForClearing.forEach((link) => {
      link.classList.remove('selected')
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
    
    // Highlight matching pages in the sidebar using multiple search strategies
    selectedPages.forEach((page) => {
      let matchingLinks: Element[] = []
      
      // Try exact href match in sidebar only (get ALL matches, not just first)
      let links = document.querySelectorAll(`aside a[href="${page}"]`)
      if (links.length > 0) {
        matchingLinks = Array.from(links)
      }
      
      // Try href ending with page in sidebar only
      if (matchingLinks.length === 0) {
        links = document.querySelectorAll(`aside a[href$="${page}"]`)
        if (links.length > 0) {
          matchingLinks = Array.from(links)
        }
      }
      
      // Try href containing page in sidebar only (without leading slash)
      if (matchingLinks.length === 0) {
        const pageWithoutSlash = page.startsWith('/') ? page.slice(1) : page
        links = document.querySelectorAll(`aside a[href*="${pageWithoutSlash}"]`)
        if (links.length > 0) {
          matchingLinks = Array.from(links)
        }
      }
      
      // Try flexible matching across all sidebar links
      if (matchingLinks.length === 0) {
        const allLinks = document.querySelectorAll('aside a')
        Array.from(allLinks).forEach(linkEl => {
          const href = linkEl.getAttribute('href')
          if (href && href !== '/' && href.length > 1) {
            if (href.includes(page) || (page.includes(href) && href.length > 3)) {
              matchingLinks.push(linkEl)
            }
          }
        })
      }
      
      // Apply highlighting to ALL matching links (handles duplicate sidebar entries)
      matchingLinks.forEach(link => {
        link.classList.add('selected')
        
        // Find which selected tags apply to this page
        const pageTags = selectedTags.filter(tag => 
          tagsIndex[tag] && tagsIndex[tag].includes(page)
        )
        
        // Apply highlighting styles
        if (link instanceof HTMLElement) {
          link.style.backgroundColor = '#4339db2e'
          link.style.borderLeft = '4px solid #4339DB'
          link.style.paddingLeft = '12px'
          link.style.fontWeight = '600'
          
          // Remove any existing tag indicators
          const existingIndicators = link.querySelector('.sidebar-tag-indicators')
          if (existingIndicators) {
            existingIndicators.remove()
          }
          
          // Add colored tag indicators for each matching tag
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
      })
    })

    // Re-apply dimming to non-selected links
    const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
    if (sidebar instanceof HTMLElement) {
      sidebar.classList.add('filtered')
      
      // Dim non-selected links, but exclude logo and brand elements
      sidebar.querySelectorAll('a:not(.selected)').forEach(link => {
        if (link instanceof HTMLElement) {
          // Skip logo, brand, and navigation elements that shouldn't be dimmed
          const isLogoOrBrand = link.querySelector('img') || 
                               link.querySelector('svg') || 
                               link.classList.contains('logo') ||
                               link.classList.contains('brand') ||
                               link.getAttribute('href') === '/' ||
                               link.getAttribute('href') === '' ||
                               link.textContent?.includes('Frameworks') ||
                               link.textContent?.includes('Security Frameworks') ||
                               link.closest('.logo') ||
                               link.closest('.brand') ||
                               link.closest('[data-testid="logo"]') ||
                               link.parentElement?.classList.contains('logo') ||
                               link.parentElement?.classList.contains('brand') ||
                               // Vocs-specific selectors
                               link.closest('header') ||
                               link.classList.contains('vocs_nav_logo') ||
                               link.classList.contains('vocs_header_logo')
          
          if (!isLogoOrBrand) {
            link.style.opacity = '0.4'
          }
        }
      })
    }
  }

  /**
   * Sets up MutationObserver to watch for manual section toggles
   * This observer only watches for manual section toggles to reapply highlighting
   * It does NOT control which sections should be open/closed
   */
  const setupSidebarObserver = () => {
    // Clean up existing observer
    if (mutationObserverRef.current) {
      mutationObserverRef.current.disconnect()
    }

    const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
    if (!sidebar || selectedTags.length === 0) {
      return
    }

    const observer = new MutationObserver((mutations) => {
      // Only react if we're not currently controlling the sidebar
      if (isControllingsidebar.current) {
        return
      }

      let shouldReapplyHighlighting = false
      let detectedSectionToggle = false

      mutations.forEach((mutation) => {
        // Check if any nodes were added/removed (indicating section toggle)
        if (mutation.type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // Only consider it a section toggle if MULTIPLE links are added/removed at once
          // This filters out navigation changes which usually affect single elements
          const addedLinks = Array.from(mutation.addedNodes).filter(node => 
            node.nodeType === Node.ELEMENT_NODE && 
            ((node as Element).tagName === 'A' || (node as Element).querySelector('a'))
          )
          
          const removedLinks = Array.from(mutation.removedNodes).filter(node => 
            node.nodeType === Node.ELEMENT_NODE && 
            ((node as Element).tagName === 'A' || (node as Element).querySelector('a'))
          )
          
          // Only react if multiple links changed (actual section toggle)
          if (addedLinks.length > 2 || removedLinks.length > 2) {
            detectedSectionToggle = true
            shouldReapplyHighlighting = true
          }
        }
        
        // Also check for attribute changes on section elements
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement
          if (target.hasAttribute('aria-expanded') || target.hasAttribute('data-collapsed') || target.classList.contains('levelCollapsed')) {
            detectedSectionToggle = true
            shouldReapplyHighlighting = true
          }
        }
      })

      if (shouldReapplyHighlighting && detectedSectionToggle) {
        // Get current selected pages
        const selectedPages = new Set<string>()
        selectedTags.forEach(tag => {
          const pages = tagsIndex[tag] || []
          pages.forEach(page => selectedPages.add(page))
        })

        // Reapply highlighting after a brief delay to let DOM settle
        setTimeout(() => {
          reapplyHighlighting(selectedPages)
        }, 20)
      }
    })

    // Observe the entire sidebar for changes - including attributes for collapse state
    observer.observe(sidebar, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-expanded', 'data-collapsed', 'class']
    })

    mutationObserverRef.current = observer
  }
  

  /**
   * Clears all highlighting styles and resets the sidebar to default state
   */
  const clearAllHighlighting = () => {
    // Remove all selected classes and inline styles from all links
    const allLinks = document.querySelectorAll('aside a, nav a, .sidebar a, [data-testid="sidebar"] a, .vocs_sidebar a, #sidebar a')
    allLinks.forEach((link) => {
      link.classList.remove('selected')
      
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
    
    // Remove filtered class from sidebar
    const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
    if (sidebar instanceof HTMLElement) {
      sidebar.classList.remove('filtered')
    }
    
    // Clean up observer
    if (mutationObserverRef.current) {
      mutationObserverRef.current.disconnect()
      mutationObserverRef.current = null
    }
    
    // Reset throttle timestamp
    lastControlTimestamp.current = 0
  }

  // Only use tags that actually exist in sidebar files (from fetched-tags.json)
  const dynamicTags = tagsFetched?.allTags || []
  const allAvailableTags = availableTags || dynamicTags
  const tags = query ? allAvailableTags.filter(t => t.toLowerCase().includes(query.toLowerCase())) : allAvailableTags

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
  }, [selectedTags, onTagSelect])

  /**
   * Main effect for sidebar section control - only runs when tags actually change
   * Handles expanding/collapsing sections and applying highlighting
   */
  useEffect(() => {
    // Check if tags actually changed (not just a re-render)
    const prevTags = prevSelectedTagsRef.current
    const prevSorted = [...prevTags].sort().join(',')
    const currentSorted = [...selectedTags].sort().join(',')
    const tagsChanged = prevSorted !== currentSorted
    
    if (!tagsChanged) {
      // Update ref on initial load
      if (prevTags.length === 0 && selectedTags.length > 0) {
        prevSelectedTagsRef.current = [...selectedTags]
      }
      return
    }
    
    // Update the ref for next comparison
    prevSelectedTagsRef.current = [...selectedTags]
    
    // Clear highlighting if no tags selected
    if (selectedTags.length === 0) {
      clearAllHighlighting()
      return
    }

    // Collect all pages matching selected tags (OR logic: union)
    const selectedPages = new Set<string>()
    selectedTags.forEach(tag => {
      const pages = tagsIndex[tag] || []
      pages.forEach(page => selectedPages.add(page))
    })

    // Control sidebar sections, then apply highlighting after DOM settles
    controlSidebarSections(selectedPages)
    
    setTimeout(() => {
      reapplyHighlighting(selectedPages)
      setupSidebarObserver()
      
      // Retry if no links were highlighted
      setTimeout(() => {
        const highlightedCount = document.querySelectorAll('aside a.selected').length
        if (highlightedCount === 0 && selectedPages.size > 0) {
          reapplyHighlighting(selectedPages)
        }
      }, 100)
    }, 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags])

  /**
   * Cleanup effect - handles clearing sidebar styling when tags are cleared
   */
  useEffect(() => {
    // Prevent interference with sidebar control
    if (isControllingsidebar.current) {
      return
    }
    
    // Check if tags were cleared by user
    const prevTags = prevSelectedTagsRef.current
    const tagsWereCleared = prevTags.length > 0 && selectedTags.length === 0
    
    if (tagsWereCleared) {
      // Clear all styling from sidebar links
      const sidebarSelectors = [
        'aside a',
        'nav a',
        '.sidebar a',
        '[data-testid="sidebar"] a',
        '.vocs_sidebar a',
        '#sidebar a'
      ]
      
      sidebarSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((link) => {
          link.classList.remove('selected')
          
          if (link instanceof HTMLElement) {
            link.style.backgroundColor = ''
            link.style.borderLeft = ''
            link.style.paddingLeft = ''
            link.style.fontWeight = ''
            link.style.opacity = ''
            
            const indicators = link.querySelector('.sidebar-tag-indicators')
            if (indicators) {
              indicators.remove()
            }
          }
        })
      })

      const sidebar = document.querySelector('aside, nav, .sidebar, [data-testid="sidebar"], .vocs_sidebar, #sidebar')
      if (sidebar instanceof HTMLElement) {
        sidebar.classList.remove('filtered')
        
        sidebar.querySelectorAll('a').forEach(link => {
          if (link instanceof HTMLElement) {
            link.style.opacity = ''
          }
        })
      }
    }
  }, [selectedTags])

  /**
   * Persistent observer setup and highlight maintenance
   * Ensures observer is active and highlights are maintained when tags are selected
   * Checks every 50ms for missing highlights or undimmed links
   */
  useEffect(() => {
    if (selectedTags.length > 0) {
      // Get selected pages
      const selectedPages = new Set<string>()
      selectedTags.forEach(tag => {
        const pages = tagsIndex[tag] || []
        pages.forEach(page => selectedPages.add(page))
      })
      
      // Ensure observer is set up
      const checkAndSetupObserver = () => {
        if (!mutationObserverRef.current) {
          setupSidebarObserver()
        }
      }
      
      // Check if highlights and dimming are properly applied
      const checkAndReapplyHighlights = () => {
        const expectedHighlights = selectedPages.size
        const currentHighlights = document.querySelectorAll('aside a.selected').length
        const allVisibleLinks = document.querySelectorAll('aside a')
        let needsReapply = false
        
        // Check if highlights are missing
        if (currentHighlights < expectedHighlights && expectedHighlights > 0) {
          needsReapply = true
        }
        
        // Check if non-selected links need dimming
        const nonSelectedLinks = Array.from(allVisibleLinks).filter(link => 
          !link.classList.contains('selected') &&
          link instanceof HTMLElement &&
          !link.querySelector('img') &&
          !link.querySelector('svg') &&
          link.getAttribute('href') !== '/'
        )
        
        const undimmedNonSelectedLinks = nonSelectedLinks.filter(link => {
          if (link instanceof HTMLElement) {
            return link.style.opacity !== '0.4'
          }
          return false
        })
        
        if (undimmedNonSelectedLinks.length > 0) {
          needsReapply = true
        }
        
        if (needsReapply) {
          reapplyHighlighting(selectedPages)
        }
      }
      
      // Check immediately
      checkAndSetupObserver()
      checkAndReapplyHighlights()
      
      // Periodic check to maintain highlights
      const intervalId = setInterval(() => {
        checkAndSetupObserver()
        checkAndReapplyHighlights()
      }, 50)
      
      return () => clearInterval(intervalId)
    }
  }, [selectedTags, tagsIndex])

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect()
      }
    }
  }, [])

  /**
   * Click outside handler to close dropdown while keeping sidebar scrollable
   */
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      if (filterContainerRef.current && !filterContainerRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    // Add listener with a small delay to avoid closing immediately on open
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev: string[]) => {
      const newTags = prev.includes(tag) 
        ? prev.filter((t: string) => t !== tag)
        : [...prev, tag]
      return newTags
    })
  }

  const clearAll = () => {
    setSelectedTags([])
  }

  return (
    <div className="tag-filter" ref={filterContainerRef}>
      <button 
        className={`tag-filter-toggle ${isOpen ? 'active' : ''} ${selectedTags.length > 0 ? 'has-filters' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
        </svg>
        Filter by Tags
        {selectedTags.length > 0 && (
          <span className="filter-count">{selectedTags.length}</span>
        )}
      </button>

      {isOpen && (
        <div className="tag-filter-dropdown">
          <div className="tag-filter-header">
            <h3>Filter by Tags</h3>
            {selectedTags.length > 0 && (
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