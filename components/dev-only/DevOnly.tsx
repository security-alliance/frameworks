import { ReactNode } from 'react'

const isMainBranch = process.env.CF_PAGES_BRANCH === 'main'

interface Props {
  children: ReactNode
}

export function DevOnly({ children }: Props) {
  if (isMainBranch) {
    return null
  }
  return <>{children}</>
}
