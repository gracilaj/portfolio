import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="education-block">
        <h3 className="education-degree">{profile.education.degree}</h3>
        <p className="education-school">
          {profile.education.school} · {profile.education.years}
        </p>
        <div className="internship">
          <h4 className="internship-title">Internship</h4>
          <p>
            {profile.internship.organization}, {profile.internship.location}
          </p>
          <p className="muted">{profile.internship.period}</p>
        </div>
      </div>
    </Section>
  )
}
