import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
