import { NavLink, Link } from 'react-router-dom'
import { experiences } from '../data/experience'

const sectionLinks = [
  { to: '/#objective', label: 'Objective' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#systems', label: 'Systems' },
  { to: '/#education', label: 'Education' },
  { to: '/#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark-box" aria-hidden="true">
            <span className="logo-mark-lines">
              <span />
              <span />
              <span />
            </span>
          </span>
          <span className="logo-text">JG</span>
        </Link>
        <nav className="nav-primary" aria-label="Primary">
          {sectionLinks.map(({ to, label }) => (
            <a key={to} href={to} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <details className="nav-roles nav-roles-desktop">
          <summary className="nav-roles-summary">Roles</summary>
          <div className="nav-roles-panel">
            {experiences.map((job) => (
              <NavLink
                key={job.id}
                to={`/experience/${job.id}`}
                className={({ isActive }) =>
                  `nav-roles-item${isActive ? ' is-active' : ''}`
                }
              >
                <img
                  className="nav-roles-logo"
                  src={job.logo}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                />
                <span className="nav-roles-text">
                  <span className="nav-roles-company">{job.company}</span>
                  <span className="nav-roles-role">{job.role}</span>
                </span>
              </NavLink>
            ))}
          </div>
        </details>
        <details className="nav-mobile">
          <summary className="nav-mobile-trigger" aria-label="Open menu">
            <span className="nav-mobile-bars" aria-hidden="true" />
          </summary>
          <div className="nav-mobile-panel">
            <nav aria-label="Mobile primary">
              {sectionLinks.map(({ to, label }) => (
                <a key={to} href={to} className="nav-mobile-link">
                  {label}
                </a>
              ))}
            </nav>
            <p className="nav-mobile-heading">Roles</p>
            <nav aria-label="Mobile roles">
              {experiences.map((job) => (
                <NavLink
                  key={job.id}
                  to={`/experience/${job.id}`}
                  className={({ isActive }) =>
                    `nav-mobile-role${isActive ? ' is-active' : ''}`
                  }
                >
                  <img
                    className="nav-roles-logo"
                    src={job.logo}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="nav-roles-text">
                    <span className="nav-roles-company">{job.company}</span>
                    <span className="nav-roles-role">{job.role}</span>
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}
