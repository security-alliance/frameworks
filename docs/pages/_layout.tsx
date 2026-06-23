import type { ReactNode } from 'react'
import { TagProvider } from '../../components'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <TagProvider>
      {children}
    </TagProvider>
  )
}
