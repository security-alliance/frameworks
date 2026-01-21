import { ReactNode } from 'react'

declare const __IS_MAIN_BRANCH__: boolean

interface Props {
  children: ReactNode
}

/**
 * Hides its children on the main branch (production).
 * Use this to wrap dev-only sections in the overview page.
 *
 * Usage in MDX:
 * <DevOnly>
 *   ## Some Dev Framework
 *   Description here...
 * </DevOnly>
 */
export function DevOnly({ children }: Props) {
  if (__IS_MAIN_BRANCH__) {
    return null
  }
  return <>{children}</>
}
