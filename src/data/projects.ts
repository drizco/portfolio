export type ProjectType = 'personal' | 'work'

export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string // live site / demo
  github?: string // repo
  type: ProjectType
}

export const projects: Project[] = [
  {
    title: 'AI Tutor Performance',
    description:
      "Led performance improvements for Code.org's AI tutor feature. Added CloudWatch metrics, implemented backend streaming architecture, and refactored the chat UI — reducing response times from 10–15 seconds to near-instant.",
    tags: ['Rails', 'Action Cable', 'ActiveJob', 'SSE'],
    type: 'work',
  },
  {
    title: 'Oh Shit',
    description:
      'Multiplayer card game built with a real-time event-driven architecture. The classic card game, playable online with friends.',
    tags: ['Firebase', 'TypeScript', 'Multiplayer'],
    github: 'https://github.com/drizco/ohshit',
    url: 'https://ohshit.cards',
    type: 'personal',
  },
  {
    title: 'MEmail',
    description:
      'Chrome extension for sending links straight to your gmail inbox in one click. Mobile app in development',
    tags: ['Chrome Extension', 'Android app', 'Flutter'],
    github: 'https://github.com/drizco/memail',
    url: 'https://memail.drizco.dev',
    type: 'personal',
  },
]
