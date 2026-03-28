import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Built with React.{' '}
          <a
            href={profile.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-repo-link"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
