import { ReactNode } from 'react'

declare const __IS_MAIN_BRANCH__: boolean

interface Props {
  children: ReactNode
}

export function DevOnly({ children }: Props) {
  if (__IS_MAIN_BRANCH__) {
    return null
  }
  return <>{children}</>
}
