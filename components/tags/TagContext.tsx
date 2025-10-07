import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface TagContextType {
  selectedTags: string[]
  setSelectedTags: Dispatch<SetStateAction<string[]>>
  isFilterActive: boolean
}

const TagContext = createContext<TagContextType | undefined>(undefined)

export function TagProvider({ children }: { children: ReactNode }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <TagContext.Provider 
      value={{ 
        selectedTags, 
        setSelectedTags,
        isFilterActive: selectedTags.length > 0
      }}
    >
      {children}
    </TagContext.Provider>
  )
}

export function useTagFilter() {
  const context = useContext(TagContext)
  if (context === undefined) {
    throw new Error('useTagFilter must be used within a TagProvider')
  }
  return context
}