/**
 * Work history — each entry is its own module for routing (`/experience/:id`).
 * Add a new object here and a detail page link appears automatically on the home page.
 * `logo` — path under /public (replace SVG in public/logos/ with your employer mark if you have one).
 */
export const experiences = [
  {
    id: 'lucky8-star-quest-inc',
    logo: '/logos/lucky8-star-quest-inc.svg',
    company: 'Lucky8 Star Quest Inc.',
    tag: 'System Provider',
    location: 'Mandaluyong City',
    arrangement: 'On-site',
    period: 'Oct 2020 – Oct 2023',
    role: 'Full Stack Developer',
    summary:
      'Full-stack delivery for gaming and compliance systems, APIs, and internal tools in an on-site environment.',
    responsibilities: [
      'Develop and maintain web services and interfaces.',
      'Contribute to front-end and back-end development processes.',
      'Build new product features.',
      'Create connectivity with other companies using APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Collaborate with other departments on projects and sprints.',
    ],
  },
  {
    id: 'paychat-inc',
    logo: '/logos/paychat-inc.svg',
    company: 'Paychat Inc.',
    tag: 'Financial Company',
    location: 'Pasig City',
    arrangement: 'On-site',
    period: 'Oct 2023 – Mar 2024',
    role: 'Mid Web Developer',
    summary:
      'Mid-level development and deployment ownership for a financial services product.',
    responsibilities: [
      'Develop and maintain web services and interfaces.',
      'Contribute to front-end and back-end development processes.',
      'Build new product features or APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Handle application deployment, configuration, and environment management.',
    ],
  },
  {
    id: 'gametime-solutions-inc',
    logo: '/logos/gametime-solutions-inc.svg',
    company: 'GameTime Solutions Inc.',
    tag: 'Game Provider',
    location: 'Mandaluyong City',
    arrangement: 'Work from home',
    period: 'Mar 2024 – Nov 2024',
    role: 'Full Stack Developer',
    summary:
      'Remote full-stack work on gaming platforms, betting flows, and reporting.',
    responsibilities: [
      'Develop and maintain web services and interfaces.',
      'Contribute to front-end and back-end development processes.',
      'Build new product features.',
      'Create connectivity with other companies using APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Collaborate with other departments on projects and sprints.',
    ],
  },
  {
    id: 'triple-diamond-hris',
    logo: '/logos/triple-diamond-hris.svg',
    company: 'Triple Diamond',
    tag: 'HRIS — Freelance',
    location: 'Mandaluyong City',
    arrangement: 'Work from home',
    period: 'Nov 2024 – Feb 2025',
    role: 'Full Stack Developer',
    summary:
      'Freelance HRIS-related web development and integrations.',
    responsibilities: [
      'Develop and maintain web services and interfaces.',
      'Contribute to front-end and back-end development processes.',
      'Build new product features.',
      'Create connectivity with other companies using APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Collaborate with other departments on projects and sprints.',
    ],
  },
  {
    id: 'digiluck-inc',
    logo: '/logos/digiluck-inc.svg',
    company: 'Digiluck Inc.',
    tag: 'Gaming Platform — Freelance',
    location: 'Makati City',
    arrangement: 'Work from home',
    period: 'Feb 2025 – May 2025',
    role: 'Full Stack Developer',
    summary:
      'Freelance work delivering gaming features and APIs for operators.',
    responsibilities: [
      'Develop and maintain web services and interfaces.',
      'Provide new games to all operators.',
      'Contribute to back-end development processes.',
      'Build new product features or APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Collaborate with other departments on projects and sprints.',
    ],
  },
  {
    id: 'ngsi',
    logo: '/logos/ngsi.svg',
    company: 'NGSI',
    tag: 'System Provider — Freelance',
    location: 'Pasig City',
    arrangement: 'Work from home',
    period: 'May 2025 – Present',
    role: 'Full Stack Developer',
    summary:
      'Freelance support for E-Lotto platform processes, APIs, and quality.',
    responsibilities: [
      'Implement and support E-Lotto platform business processes and workflows.',
      'Contribute to back-end development processes.',
      'Build new product features or APIs.',
      'Perform tests, troubleshoot software, and fix bugs.',
      'Collaborate with other departments on projects and sprints.',
    ],
  },
]

export function getExperienceById(id) {
  return experiences.find((e) => e.id === id) ?? null
}
