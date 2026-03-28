import { Section } from '../components/Section'
import { SkillGroup } from '../components/SkillGroup'
import { skillGroups } from '../data/skills'

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Technical skills">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroup key={group.id} label={group.label} items={group.items} />
        ))}
      </div>
    </Section>
  )
}
