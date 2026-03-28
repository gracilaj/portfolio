import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function ObjectiveSection() {
  return (
    <Section id="objective" eyebrow="Career" title="Objective">
      <p className="prose">{profile.objective}</p>
    </Section>
  )
}
