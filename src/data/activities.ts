import type { Activity } from '@/types'

export const activities: Activity[] = [
  {
    id: 'london-frontend-meetups',
    title: 'London frontend meetups',
    intro: 'Slowly meeting the local community. Sharing notes, comparing stacks, learning how London teams ship.',
    startDate: '2024',
    endDate: null,
    description: "Regulars: London React, Frontend North, the smaller TypeScript drink-ups in Shoreditch.\n\nWhat I'm taking from it: London teams talk about reliability and observability the way Seoul teams talked about UX polish. Different defaults.\n\nWhat I'm giving back: live-streaming work demos and writing them up afterwards. Small contribution; it adds up.",
  },
  {
    id: 'ieee-qrc',
    title: 'IEEE QRC Global Event — operations',
    intro: "Beyond writing the code, I co-ran the day-of operations across four time zones. The hard part wasn't the system. It was the calls at 3am.",
    startDate: '2023',
    endDate: '2023',
    description: "Korea, Japan, China, US — four host sites running simultaneously over a 36-hour window.\n\nBuilt a runbook in Notion that became the second source of truth (the first was UTC).\n\nLesson: redundant communication channels save events. We had Slack, Discord, and a phone tree. We used all three the same night.",
  },
  {
    id: 'side-projects',
    title: 'Side projects (small, weekly)',
    intro: 'A canvas of small experiments — physics toys, type sketches, dataviz prototypes. Most of them go nowhere. A few inform real work.',
    startDate: '2022',
    endDate: null,
    description: "Current rule: one Saturday afternoon, one new toy. Ship to a public URL by Sunday evening.\n\nSome of them: a particle layout for this site, an SVG variable-font tester, a tiny markdown-to-zine converter.\n\nWhy: the side projects are where I take the risks I can't take at work.",
  },
  {
    id: 'gdsc-frontend-lead',
    title: 'GDSC Frontend Study Lead',
    intro: 'Weekly sessions on JavaScript and React for ~30 students. Wrote a small curriculum and ran code reviews.',
    startDate: '2021',
    endDate: '2022',
    description: "Twelve weeks, twelve hands-on labs. Final week was a one-day team build, deploying live.\n\nCode reviewed ~140 PRs. The recurring issue: not syntax, but how to break a problem into pieces that fit in your head.\n\nTook two students to their first dev internships. That part was the most rewarding.",
  },
  {
    id: 'hackathons',
    title: 'Hackathons & jam events',
    intro: 'Three jams, two finals, one demo that crashed live. The crash was the most useful one.',
    startDate: '2020',
    endDate: '2021',
    description: "Junction Asia, MakeUS Hackathon, a small game-jam I forget the name of.\n\nWhat the crash taught me: have a screenshot ready. Always.\n\nWhat the finals taught me: the demo is the product, for the next ten minutes.",
  },
]