import { getTagColor, getTagId } from '../shared/constants'
import './TagList.css'

interface TagListProps {
  tags?: string[]
}

export function TagList({ tags = [] }: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="tag-item"
          data-tag-id={getTagId(tag)}
          style={{ 
            backgroundColor: getTagColor(tag),
            borderColor: getTagColor(tag) 
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}