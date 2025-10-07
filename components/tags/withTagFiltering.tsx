import { ReactNode } from 'react'
import { TagProvider } from './TagContext'
import { TagFilter } from './TagFilter'
import './withTagFiltering.css'

// Higher-order component that wraps page content with tag filtering
export function withTagFiltering(WrappedComponent: React.ComponentType<any>) {
  return function TagFilteringWrapper(props: any) {
    return (
      <TagProvider>
        <div className="frameworks-page-wrapper">
          {/* Tag filter in header area */}
          <div className="frameworks-header-controls">
            <TagFilter />
          </div>

          {/* Main content - no custom sidebar, just existing content */}
          <div className="frameworks-main-content">
            <WrappedComponent {...props} />
          </div>
        </div>
      </TagProvider>
    )
  }
}

// Simple wrapper function for easier usage
export function TagFilteringLayout({ children }: { children: ReactNode }) {
  return (
    <TagProvider>
      <div className="frameworks-page-wrapper">
        {/* Tag filter in header area */}
        <div className="frameworks-header-controls">
          <TagFilter />
        </div>

        {/* Main content - existing Vocs sidebar will be highlighted */}
        <div className="frameworks-main-content">
          {children}
        </div>
      </div>
    </TagProvider>
  )
}