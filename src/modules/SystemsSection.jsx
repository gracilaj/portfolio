import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { systems } from '../data/systems'

export function SystemsSection() {
  return (
    <Section id="systems" eyebrow="Highlights" title="Systems created">
      <ul className="systems-list">
        {systems.map((sys) => (
          <li key={sys.id} className="system-row">
            <div>
              <h3 className="system-title">{sys.title}</h3>
              <p className="system-desc">{sys.description}</p>
            </div>
            <Link
              to={`/experience/${sys.experienceId}`}
              className="system-link"
            >
              Context
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
