import { Hero } from '../modules/Hero'
import { ObjectiveSection } from '../modules/ObjectiveSection'
import { SkillsSection } from '../modules/SkillsSection'
import { ExperienceSection } from '../modules/ExperienceSection'
import { SystemsSection } from '../modules/SystemsSection'
import { EducationSection } from '../modules/EducationSection'
import { ContactSection } from '../modules/ContactSection'
import { ScrollToHash } from '../components/ScrollToHash'

export function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <ObjectiveSection />
      <SkillsSection />
      <ExperienceSection />
      <SystemsSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
