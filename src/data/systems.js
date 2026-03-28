/**
 * Notable systems — link to `experienceId` to show context on role pages.
 */
export const systems = [
  {
    id: 'online-betting-platform',
    title: 'Online Betting Platform',
    description:
      'Developed a gaming platform that supports betting, winner declaration, and automated financial reporting.',
    experienceId: 'lucky8-star-quest-inc',
  },
  {
    id: 'online-payment-solution',
    title: 'Online Payment Solution (Cash-In, Disbursement, Prefunding)',
    description:
      'Built a financial system enabling secure fund transfers between accounts with comprehensive transaction and financial reports.',
    experienceId: 'lucky8-star-quest-inc',
  },
  {
    id: 'e-kyc-portal',
    title: 'E-KYC Portal (Lucky 8 Star)',
    description:
      'Created a user verification and registration portal with account monitoring and reporting features.',
    experienceId: 'lucky8-star-quest-inc',
  },
  {
    id: 'ctr-automation',
    title: 'Currency Transaction Report (CTR) Automation (Lucky 8 Star)',
    description:
      'Implemented automated CTR generation that consolidates and filters user transactions for compliance and auditing purposes.',
    experienceId: 'lucky8-star-quest-inc',
  },
  {
    id: 'online-registration',
    title: 'Online Registration System (Lucky 8 Star)',
    description:
      'Developed an event-based registration system managing user entries required for participation in specific gaming events.',
    experienceId: 'lucky8-star-quest-inc',
  },
  {
    id: 'financial-app-paychat',
    title: 'Financial Application (Paychat Inc.)',
    description:
      'Designed and developed a financial application handling user registration, lending processes, and end-to-end financial transactions.',
    experienceId: 'paychat-inc',
  },
  {
    id: 'color-game-elotto',
    title: 'Color Game / E-Lotto Platform (GameTime Solutions Inc.)',
    description:
      'Built an online gaming platform for color-based and lottery games, including betting logic, winner declaration, and financial reporting.',
    experienceId: 'gametime-solutions-inc',
  },
]

export function getSystemsByExperienceId(experienceId) {
  return systems.filter((s) => s.experienceId === experienceId)
}
