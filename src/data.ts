export const EMAIL = 'jen@jendev.com'

export interface Project {
  name: string
  impact: string
  body: string
  stack: string[]
}

export interface Company {
  id: string
  name: string
  period: string
  role: string
  summary: string
  stack: string[]
  projects: Project[]
}

export interface Post {
  slug: string
  date: string
  title: string
  desc: string
  body: string[]
}

export interface Activity {
  when: string
  title: string
  desc: string
  details: string[]
}

export interface Moment {
  city: string
  date: string
  feeling: string
  img: string
}

export const COMPANIES: Company[] = [
  {
    id: 'teamgrit',
    name: 'TeamGRIT',
    period: 'JUN 2023 – JUL 2025',
    role: 'Frontend Engineer',
    summary: 'Real-time control surfaces for fleets of robots — built so chaos felt in control.',
    stack: ['React', 'TypeScript', 'WebSocket', 'MediaPipe', 'Node.js'],
    projects: [
      {
        name: 'Multi-Robot Remote Monitoring Platform',
        impact: '10–50 robots. Live video. Live audio.\nReal users depending on zero lag.',
        body: "Built real-time video/audio streaming pipelines for a multi-robot control platform — WebSocket device communication, custom protocol unifying robots across entirely different hardware stacks (quadruped to custom embedded systems).\n\nThe hard part wasn't the features. It was making chaos feel in control.\n\nAlso integrated AI gesture controls (MediaPipe) — hand tracking, head tracking — running entirely in the browser. No plugins.",
        stack: ['React', 'TypeScript', 'WebSocket', 'MediaPipe', 'Node.js', 'Custom media protocol'],
      },
      {
        name: 'IEEE QRC Global Competition System',
        impact: '4 countries. 2 months. Zero to production.',
        body: 'Built the entire competition system for a global robotics event running live across Korea, Japan, China, and the US — scheduling, registration, real-time events. Timezone conflicts solved by treating UTC as the only truth.',
        stack: ['TypeScript', 'Express', 'Node.js'],
      },
    ],
  },
  {
    id: 'toss',
    name: 'Toss',
    period: 'JUN 2022 – DEC 2022',
    role: 'Frontend Engineer',
    summary: "South Korea's leading fintech. Millions of users. One design system.",
    stack: ['React', 'TypeScript', 'Framer', 'styled-components', 'Storybook'],
    projects: [
      {
        name: 'Toss Design System × Framer',
        impact: 'Small change, big consistency.',
        body: "Built React/TypeScript components for Toss Design System — Framer integration so designers could generate production-ready React code without leaving their design tool.\n\nThe consistency you can't see is the kind that scales.",
        stack: ['React', 'TypeScript', 'Framer', 'styled-components', 'Storybook'],
      },
    ],
  },
  {
    id: 'gdsc',
    name: 'Google Developer Student Clubs',
    period: 'OCT 2021 – DEC 2022',
    role: 'Frontend Lead',
    summary: 'Led weekly JS/React sessions. Shipped a production web app as a team project.',
    stack: ['React', 'JavaScript', 'Firebase'],
    projects: [
      {
        name: 'Emotion Diary — team project',
        impact: 'Led a small team from kickoff to deploy.',
        body: "Weekly JavaScript and React study sessions. Then we built one thing together: an emotion diary, deployed to real users. The real lesson wasn't React. It was running a tiny team of strangers and getting them to ship.",
        stack: ['React', 'JavaScript', 'Firebase'],
      },
    ],
  },
  {
    id: 'onad',
    name: 'While True, Onad',
    period: '2020 – 2021',
    role: 'UI/UX Designer',
    summary: 'A Twitch ad platform. Two user types. One coherent system.',
    stack: ['Figma', 'Design Systems'],
    projects: [
      {
        name: 'Twitch ad platform — design',
        impact: 'First time I understood what design-to-dev handoff really meant.',
        body: "Designed for a Twitch ad platform with two distinct audiences — streamers and advertisers — sharing one interface. Watching engineers translate my files in real time taught me more about constraints than any course did.",
        stack: ['Figma', 'Design Systems'],
      },
    ],
  },
]

export const POSTS: Post[] = [
  {
    slug: 'two-majors-one-engineer',
    date: '2025.03.12',
    title: 'How I became an engineer with two majors and a design background',
    desc: 'Design school taught me to look. CS taught me to build. The bridge was the interesting part.',
    body: [
      "I didn't choose engineering. I drifted into it.",
      "The design degree came first. I learned how to look at things — how a button's weight changes when its corner radius shifts by one pixel, why a typeface can feel like a person. It was a kind of training I didn't realize was training.",
      "Then I doubled in computer science. Mostly out of curiosity. The first time I wrote a function that worked, I felt the same thing I felt when a layout finally clicked. The artifact was different. The discipline was the same.",
      "What I tell people now: I don't have two careers stitched together. I have one practice that runs through both. Design is engineering with imprecise inputs. Engineering is design with strict ones.",
      'The bridge was never academic. It was the small projects where the code had to feel right, not just work.',
    ],
  },
  {
    slug: 'robots-and-frontend-perf',
    date: '2025.01.22',
    title: 'What building a robot control platform taught me about frontend performance',
    desc: '60fps feels like 60fps until your stream is 200ms behind reality.',
    body: [
      "When you're rendering a live video feed from a robot 8,000 km away, the frame rate of your UI is not the frame rate the operator sees. The operator sees a chain.",
      "Every link in that chain — encoding, network, decoding, paint, GPU compositing — adds latency you can't undo. The frontend's job isn't to be fast in isolation. It's to be honest about where the slow parts are.",
      "We rewrote the streaming pipeline three times. Each time, the lesson was the same: make the latency visible, not invisible. A 250ms indicator is more useful than a frame that looks live but isn't.",
      "Frontend performance, when the stakes are real, isn't about benchmarks. It's about trust.",
    ],
  },
  {
    slug: 'korean-engineer-london',
    date: '2024.11.05',
    title: 'Job hunting in London as a Korean engineer',
    desc: "Notes from the inside of a process I'm still mid-way through.",
    body: [
      "I won't pretend I have answers. I'll write down what I've learned so far.",
      'First: the bar is not the same. The companies that say "we hire globally" often mean "we hire globally in theory." You have to find the ones that mean it.',
      "Second: my work history reads as a list of Korean company names that nobody outside Korea recognizes. I had to learn to lead with what I actually built, not who I built it for.",
      "Third: writing in English is part of the job, not a separate skill. Slack messages, PR descriptions, design docs — every one of them is an interview in slow motion.",
      "I'll write a part two when I'm on the other side of this.",
    ],
  },
  {
    slug: 'works-vs-feels-right',
    date: '2024.08.18',
    title: '"it works" vs "it feels right"',
    desc: 'Most engineering culture stops at the first one. The second one is where the craft is.',
    body: [
      'There is a moment, late in any project, where the feature works. The tests pass. The PM signs off. You could ship.',
      "And then there is a different moment, often a week later, where it feels right. The button responds the way a button should. The transition lands instead of stutters. The error state stops feeling like a punishment.",
      "Most engineers I admire live in the second moment. Most teams I've been on don't budget for it.",
      "I don't have a clean argument for why the second moment matters. I just know that the products I trust were made by people who didn't stop at the first one.",
    ],
  },
]

export const ACTIVITIES: Activity[] = [
  {
    when: '2024 — present',
    title: 'London frontend meetups',
    desc: 'Slowly meeting the local community. Sharing notes, comparing stacks, learning how London teams ship.',
    details: [
      'Regulars: London React, Frontend North, the smaller TypeScript drink-ups in Shoreditch.',
      "What I'm taking from it: London teams talk about reliability and observability the way Seoul teams talked about UX polish. Different defaults.",
      "What I'm giving back: live-streaming work demos and writing them up afterwards. Small contribution; it adds up.",
    ],
  },
  {
    when: '2023',
    title: 'IEEE QRC Global Event — operations',
    desc: "Beyond writing the code, I co-ran the day-of operations across four time zones. The hard part wasn't the system. It was the calls at 3am.",
    details: [
      'Korea, Japan, China, US — four host sites running simultaneously over a 36-hour window.',
      'Built a runbook in Notion that became the second source of truth (the first was UTC).',
      'Lesson: redundant communication channels save events. We had Slack, Discord, and a phone tree. We used all three the same night.',
    ],
  },
  {
    when: '2022 — present',
    title: 'Side projects (small, weekly)',
    desc: 'A canvas of small experiments — physics toys, type sketches, dataviz prototypes. Most of them go nowhere. A few inform real work.',
    details: [
      'Current rule: one Saturday afternoon, one new toy. Ship to a public URL by Sunday evening.',
      'Some of them: a particle layout for this site, an SVG variable-font tester, a tiny markdown-to-zine converter.',
      "Why: the side projects are where I take the risks I can't take at work.",
    ],
  },
  {
    when: '2021 – 2022',
    title: 'GDSC Frontend Study Lead',
    desc: 'Weekly sessions on JavaScript and React for ~30 students. Wrote a small curriculum and ran code reviews. Hardest part: keeping it interesting after week six.',
    details: [
      'Twelve weeks, twelve hands-on labs. Final week was a one-day team build, deploying live.',
      "Code reviewed ~140 PRs. The recurring issue: not syntax, but how to break a problem into pieces that fit in your head.",
      "Took two students to their first dev internships. That part was the most rewarding.",
    ],
  },
  {
    when: '2020 – 2021',
    title: 'Hackathons & jam events',
    desc: 'Three jams, two finals, one demo that crashed live. The crash was the most useful one.',
    details: [
      'Junction Asia, MakeUS Hackathon, a small game-jam I forget the name of.',
      'What the crash taught me: have a screenshot ready. Always.',
      'What the finals taught me: the demo is the product, for the next ten minutes.',
    ],
  },
]

export const MOMENTS: Moment[] = [
  { city: 'Tokyo',  date: '2023.04', feeling: '처음 혼자 가본 도시',   img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=900&q=80' },
  { city: 'London', date: '2024.09', feeling: '여기서 살아보고 싶어졌다', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900&q=80' },
  { city: 'Porto',  date: '2024.06', feeling: '강이 도시를 두 개로',    img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80' },
  { city: 'Seoul',  date: '2023.11', feeling: '익숙한데 낙설다',        img: 'https://images.unsplash.com/photo-1538485399081-7c8970d28a39?w=900&q=80' },
  { city: 'Kyoto',  date: '2023.04', feeling: '조용한 게 가장 켸다',    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80' },
  { city: 'Lisbon', date: '2024.06', feeling: '노란빛 오후',            img: 'https://images.unsplash.com/photo-1513735492246-483525079686?w=900&q=80' },
]

export const STACK_NOTES: Record<string, string> = {
  React: 'JSX, hooks, suspense — the daily driver.',
  TypeScript: 'Strict mode, generics, branded types where it matters.',
  WebSocket: 'Custom binary protocol on top.',
  MediaPipe: 'Hand and head tracking, browser-side, no plugins.',
  'Node.js': 'Express + small services. UTC as the only truth.',
  'Custom media protocol': 'Designed to unify quadrupeds and embedded boards.',
  Express: 'Routing, middleware, error boundaries.',
  Framer: 'Code components for designer-side hand-off.',
  'styled-components': 'Themed, typed, lightly opinionated.',
  Storybook: 'Source of truth for the design system.',
  JavaScript: 'Pre-TS work; mostly study sessions.',
  Firebase: 'Auth + Firestore for the team project.',
  Figma: 'Component-first, two-audience system.',
  'Design Systems': 'Tokens before components, always.',
}
