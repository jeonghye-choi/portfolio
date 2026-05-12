import type { Work } from '@/types'

export const works: Work[] = [
  {
    id: 'teamgrit',
    company: 'TeamGRIT',
    position: 'Frontend Engineer',
    startDate: 'FEB 2023',
    endDate: 'JUL 2025',
    description: 'Real-time control surfaces for fleets of robots — built so chaos felt in control.',
    projects: [
      {
        name: 'Multi-Robot Remote Monitoring Platform',
        description: '10–50 robots. Live video. Live audio. Real users depending on zero lag.',
        stack: ['React', 'TypeScript', 'WebSocket', 'MediaPipe', 'Node.js', 'Custom media protocol'],
      },
      {
        name: 'IEEE QRC Global Competition System',
        description: '4 countries. 2 months. Zero to production.',
        stack: ['TypeScript', 'Express', 'Node.js'],
      },
    ],
  },
  {
    id: 'toss',
    company: 'Toss',
    position: 'Frontend Engineer',
    startDate: 'JUN 2022',
    endDate: 'DEC 2022',
    description: "South Korea's leading fintech. Millions of users. One design system.",
    projects: [
      {
        name: 'Toss Design System × Framer',
        description: 'Built React/TypeScript components for Toss Design System — Framer integration so designers could generate production-ready React code without leaving their design tool.',
        stack: ['React', 'TypeScript', 'Framer', 'styled-components', 'Storybook'],
      },
    ],
  },
  {
    id: 'gdsc',
    company: 'Google Developer Student Clubs',
    position: 'Core Member',
    startDate: 'JAN 2022',
    endDate: 'DEC 2022',
    description: 'Led weekly JS/React sessions. Shipped a production web app as a team project.',
    projects: [
      {
        name: 'Emotion Diary — team project',
        description: 'Led a small team from kickoff to deploy. Weekly JavaScript and React study sessions.',
        stack: ['React', 'JavaScript', 'Firebase'],
      },
    ],
  },
  {
    id: 'onad',
    company: 'While True, Onad',
    position: 'UI/UX Designer',
    startDate: '2020',
    endDate: '2021',
    description: 'A Twitch ad platform. Two user types. One coherent system.',
    projects: [
      {
        name: 'Twitch ad platform — design',
        description: 'Designed for a Twitch ad platform with two distinct audiences — streamers and advertisers — sharing one interface.',
        stack: ['Figma', 'Design Systems'],
      },
    ],
  },
]