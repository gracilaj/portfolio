import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * When the route includes a hash (e.g. /#experience), scroll the target section into view.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash || pathname !== '/') return
    const id = hash.replace(/^#/, '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])

  return null
}
