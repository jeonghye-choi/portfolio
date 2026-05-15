import type { Work } from '@/types'

export const works: Work[] = [
  {
    id: 'teamgrit',
    company: 'TeamGRIT',
    position: 'Frontend Engineer',
    startDate: 'FEB 2023',
    endDate: 'JUL 2025',
    description: 'A real-time remote control and monitoring platform for operating multiple robots simultaneously.',
    projects: [
      {
        name: 'Multi-Robot Remote Monitoring Platform',
        description: 'Designed a custom robot communication protocol based on directional commands, enabling users to control 10+ robots across entirely different hardware stacks — from quadruped robots to custom-built embedded systems — via gamepads, keyboards, and AI-based gesture controls including hand and head tracking using MediaPipe.\n\nBuilt real-time video and audio streaming pipelines using WebCodecs API and WebSocket, handling encoding/decoding and reducing latency in device communication.\n\nLed full backend migration from Rust to Java Spring Boot within 1 month, improving maintainability and scalability while applying TDD practices throughout.',
        stack: ['React', 'TypeScript', 'WebSocket', 'WebCodecs API', 'MediaPipe', 'Node.js'],
      },
      {
        name: 'IEEE QRC Global Competition System',
        description: 'Built a global robotics competition system from zero to production in 2 months using TypeScript and Express, enabling participants across Korea, Japan, China, and the United States to register, schedule, and compete without conflicts.\n\nEliminated scheduling conflicts across time zones by storing all data in UTC and converting to local time only at the UI layer.',
        stack: ['TypeScript', 'Express', 'Node.js'],
      },
      {
        name: 'Robot Remote Control Education Platform',
        description: 'Designed step-by-step UI/UX for a robot remote control education platform, enabling non-technical users — including teachers and students — to operate physical robots via web interface with minimal onboarding.\n\nIncreased hands-on engagement by integrating MediaPipe (face detection, pose estimation) directly into the browser, making AI interaction visible and intuitive for first-time users.',
        stack: ['React', 'TypeScript', 'MediaPipe'],
      },
    ],
  },
  {
    id: 'toss',
    company: 'Viva Republica (Toss)',
    position: 'Frontend Engineer',
    startDate: 'JUN 2022',
    endDate: 'DEC 2022',
    description: "South Korea's leading fintech. Millions of users. One design system.",
    projects: [
      {
        name: 'Toss Design System',
        description: 'Built React/TypeScript components for the Toss Design System (TDS) in Framer, allowing designers to place components and generate production-ready React code directly within the design tool — accelerating design-to-development workflows across multiple products.\n\nResolved persistent style override issues by migrating component styling from SCSS to styled-components, improving consistency and reducing UI defects across product variants.\n\nValidated component behaviour across states and edge cases using Storybook, catching UI defects before reaching production.',
        stack: ['React', 'TypeScript', 'Framer', 'styled-components', 'Storybook'],
      },
    ],
  },
  {
    id: 'assi',
    company: 'ASSI',
    position: 'Frontend Engineer Intern',
    startDate: 'OCT 2020',
    endDate: 'OCT 2020',
    description: 'Built an admin dashboard to visualise user behaviour data.',
    projects: [
      {
        name: 'Admin Dashboard',
        description: 'Built a React and Firebase-based admin dashboard to visualise user behaviour data.\n\nImplemented interactive data visualisations to improve visibility into key user metrics.',
        stack: ['React', 'Firebase'],
      },
    ],
  },
  {
    id: 'onad',
    company: 'While True, ONAD',
    position: 'UI/UX Designer',
    startDate: 'MAY 2019',
    endDate: 'SEP 2019',
    description: 'A Twitch ad platform. Two user types. One coherent system.',
    projects: [
      {
        name: 'Twitch Ad Platform — Design',
        description: 'Designed the service website for a Twitch ad platform, creating distinct UI experiences for two user types — advertisers managing campaigns and streamers configuring their channels.\n\nDeveloped brand identity systems including logos and visual assets, strengthening product positioning.\n\nWorked closely with frontend developers to ensure design intent was accurately implemented, building an early understanding of design-to-development handoff.',
        stack: ['Figma', 'Adobe XD'],
      },
    ],
  },
]