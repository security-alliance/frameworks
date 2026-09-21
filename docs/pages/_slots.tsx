import { DonateNavButton, DonateSidebarLink, TagFilter } from '../../components'

export function Footer() {
  return (
    <div className="footer">
      <div>Security Frameworks © 2026 by Security Alliance, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer">CC BY-SA 4.0</a>.</div>
    </div>
  )
}

export function SidebarHeader() {
  return (
    <>
      <TagFilter />
      <DonateSidebarLink />
      <DonateNavButton />
    </>
  )
}
