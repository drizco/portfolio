export interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Code.org',
    role: 'Software Engineer III',
    period: '2024 — 2026',
    bullets: [
      'Transformed AI Tutor from polling-based to real-time streaming architecture, reducing user-perceived latency from up to 10 seconds to near instant responses',
      'Built a provider-agnostic SSE parser for Gemini and ChatGPT APIs, designed ActionCable subscription flow with Active Job broadcasting, and implemented client-side event buffering with sequence-based ordering for 5,000+ concurrent pilot users',
      'Conducted performance analysis via CloudWatch metrics, identifying an opportunity to defer model response toxicity validation post-stream',
      'Solved complex streaming UX challenges by designing a custom React hook with ResizeObserver and a "floating message" pattern to maintain scroll stability during AI response streaming',
      'Optimized AI chat history queries by redesigning database indexes, resolving MySQL memory errors and improving query latency',
      'Achieved WCAG accessibility compliance for workshop management and AI chat features by implementing ARIA attributes, optimizing keyboard navigation, and ensuring screen reader compatibility',
      'Led the AI Tutor pilot rollout by building data migration scripts for 10,000+ curriculum level files and implementing feature flag infrastructure enabling controlled rollout across multiple courses',
      'Developed school association and workshop management features using React/TypeScript, while mentoring  junior engineers through code reviews and pairing',
      'Improved codebase maintainability by helping to lead a spike team systematically replacing legacy components with design system elements using custom codemod scripts and JSCodeshift to bulk edit files in our repo',
      'Drove product innovation by conducting A/B experiments using Statsig for educator role and SSO features',
    ],
  },
  {
    company: 'Flatfile',
    role: 'Senior Software Engineer',
    period: '2021 — 2024',
    bullets: [
      'Product engineer overseeing Mapping and Data Storage Strategies, both critical areas of the application platform',
      'Maintained the Mapping engine, which utilized user/company/global history and machine learning to find the best matches between incoming csv file headers and a customer defined schema',
      'Developed and maintained multiple Data Storage Strategies used to generate PostgreSQL tables in various configurations to store customer file data depending on the required features, such as version history or optimized sorting, filtering, and find and replace',
      'Architected and built the migration system for "ephemeral" database tables where customer file data is stored, making regular table updates and maintenance possible and safe, with the option to roll back changes',
      "Leveraged PostgreSQL's JSONB operators to store and query raw customer data and apply validation messages to values that don't fit the defined field type or violate a field constraint like uniqueness or missing a required value",
      'Analyzed query execution plans for a subquery used in every request for customer data, which selected either the raw or modified value, adding indexes to improve query timing by 10x on large datasets over 1M rows',
      'Championed test driven development methodologies, leading to quality and reliability throughout the codebase',
      'Conducted thorough pull request reviews for peers across the entire engineering team',
      'Identified as the top contributor in Github for both code additions and deletions for the monorepo containing a complete rewrite of the platform to an API-first architecture, using NestJS, Prisma, OpenAPI, and PostgreSQL',
      'Adhered to a 100% code coverage strategy for the API, preventing untested code from shipping',
      'Received several company awards including the "CEO\'s Boxing Gloves" for outstanding company contribution, and the "Radical Support Board Award" for going above and beyond assisting with customer support issues',
    ],
  },
  {
    company: 'Reach Creative',
    role: 'Web Developer',
    period: '2017 — 2021',
    bullets: [
      'Lead for multiple web development projects requiring collaboration with internal and external teams',
      "Developed secure portals for Allstate Insurance, Ameribor.net, and McDonald's Corporate Marketing Creative Excellence Awards, implementing role-based access control backed by comprehensive tests",
      "Designed and implemented a voting system for National Geographic's Vote Your Mainstreet sweepstakes where over 70,000 users cast over 1.1 million votes for their local historic districts",
      'Built a web based “catch the falling items” game for National Geographic using Pixi.js with sprite sheets, custom game logic, collision detection, and animation using GSAP',
      'Developed and maintained the Ameribor.net Angular site, using Auth0 authentication, subscribing to an AWS SQS queue for real-time interest rate data, and GCP cron jobs for automated subscriber invoicing',
      'Led the effort to refresh the UI and add new features to the EcoCRED iOS App, using Swift and Xcode',
    ],
  },
]
