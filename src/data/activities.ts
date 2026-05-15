import type { Activity } from '@/types'

export const activities: Activity[] = [
  {
    id: 'opensource-githru',
    title: 'Open Source Contribution — githru-vscode-ext',
    intro: 'Contributed to a VS Code extension for visualising Git history. Awarded Excellence by NIPA.',
    startDate: '2022',
    endDate: '2022',
    description: "Contributed to githru-vscode-ext, an open source VS Code extension for visualising Git repository history, as part of the Open Source Contribution Academy run by NIPA (National IT Industry Promotion Agency).\n\nBuilt the TemporalFilter component from scratch — including types, data structures, sorting utilities, and UI — enabling users to filter commit history by time range.\n\nAlso established the design system foundations: color palettes, dark/light theme tokens, font variables, and global styles.\n\nAwarded Excellence (우수상) among all participating teams.",
  },
    {
    id: 'gdsc',
    title: 'Google Developer Student Clubs — Core Member',
    intro: 'Led weekly frontend study sessions and shipped a production web app as a team.',
    startDate: '2021',
    endDate: '2022',
    description: "Led weekly frontend study sessions on JavaScript and React for a group of students.\n\nBuilt and deployed a PWA (emotion diary for single parents) as a team project using React and TypeScript, leveraging push notifications and native device features.\n\nOrganised and participated in hackathons and tech talks, fostering a collaborative learning environment.",
  },
  {
    id: 'dnd',
    title: 'DND — Organiser',
    intro: 'Supported frontend developers as an organiser in a non-profit developer community.',
    startDate: '2022',
    endDate: '2023',
    description: "Served as an organiser at DND, a non-profit developer community running side project sprints for designers and developers.\n\nSupported frontend developers throughout the project lifecycle — from initial architecture decisions to code reviews and shipping — helping teams navigate technical challenges and deliver working products.",
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    intro: 'Multiple awards across national and university-level hackathons.',
    startDate: '2019',
    endDate: '2021',
    description: "BUSAN ICT Convergence Hackathon — Grand Prize (2021)\n\nCreative Convergence Hackathon — Grand Prize (2019), Encouragement Award (2020)",
  },
]