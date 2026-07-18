export interface Project {
  id: string;
  title: string;
  event: string;
  role?: string;
  startDate: string;
  endDate: string | null;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    id: "london-in-dance",
    title: "London in Dance",
    event: "Solo Project",
    startDate: "2026-06",
    endDate: null,
    techStack: ["React", "TypeScript", "Vercel", "Claude AI"],
    liveUrl: "https://londonindance.jenchoi.dev",
    description:
      "A performance discovery platform bringing together ballet and contemporary dance listings across London.",
    bullets: [
      "Directed an AI coding agent (Claude) to build a crawling pipeline aggregating live performance listings from Sadler's Wells, the Royal Ballet and Opera, and the London Coliseum into a single platform, solo-built from concept to deployment in one week.",
      "Optimised for mobile-first usage based on Vercel Analytics data showing 68% of traffic from mobile devices, with the UK and Korea as the top two visitor markets.",
    ],
  },
  {
    id: "unbound",
    title: "Unbound",
    event: "VibeHack London 2026",
    role: "Frontend Lead · 3-person team",
    startDate: "2026-06",
    endDate: "2026-06",
    techStack: ["React", "Web Speech API"],
    githubUrl: "https://github.com/VibeHack-Unbound/vibehack2026-unbound",
    description:
      "A multilingual mental wellbeing app for international students, built in a 24-hour hackathon.",
    bullets: [
      "Led frontend development and UI design in a 3-person team, built within a 24-hour hackathon window.",
      "Implemented voice journaling with the Web Speech API, transcribing spoken entries in any language, and built a custom emotion-classification function — based on indicators defined with a teammate — to surface the user's emotional state.",
      "Designed for international students who struggle to express emotions in a non-native language, addressing the hackathon's mental wellbeing theme.",
    ],
  },
  {
    id: "mentytarget",
    title: "MentyTarget",
    event: "Encode Club Vibe Coding Hackathon",
    role: "Frontend + Backend",
    startDate: "2026-06",
    endDate: "2026-06",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Open Targets API",
      "Vercel",
      "Railway",
    ],
    liveUrl: "https://mentytarget-two.vercel.app",
    description:
      "An AI-powered platform that ranks candidate drug targets for a searched disease using genomic and literature data, condensing a manual research process into an instant, explainable report.",
    bullets: [
      "Took the team's initial concept and narrowed it into a single, demo-able problem within the 3-day hackathon window, defining page structure, user flow, and data requirements before writing code.",
      "Built the full frontend UI (Search → Results → Reports) with a typed data-fetching layer and fallback-to-demo-data mode for resilience.",
      "Diagnosed and fixed a deployment issue that surfaced as a CORS error but was actually caused by a duplicate backend entry point silently overriding the intended FastAPI app — resolved via Railway's custom start command.",
      "Migrated backend hosting from Vercel to Railway after identifying that the FastAPI stack was incompatible with Vercel's serverless constraints.",
    ],
  },
  {
    id: "githru-vscode-ext",
    title: "githru-vscode-ext",
    event: "Open Source Contribution Academy (NIPA)",
    role: "Open Source Contributor",
    startDate: "2022-01",
    endDate: "2022-12",
    techStack: ["TypeScript", "React"],
    githubUrl: "https://github.com/githru/githru-vscode-ext",
    description:
      "A VS Code extension for visualising Git repository history, built through a government-supported open source contribution program (NIPA). Awarded Excellence among all participating teams.",
    bullets: [
      "Built the TemporalFilter component from scratch — including types, data structures, sorting utilities, and UI — enabling users to filter commit history by time range.",
      "Established design system foundations: color palettes, dark/light theme tokens, font variables, and global styles.",
    ],
  },
  {
    id: "emotion-diary-pwa",
    title: "Emotion Diary",
    event: "Google Developer Student Clubs — Google Solution Challenge 2022",
    role: "Core Member · Team project",
    startDate: "2021-01",
    endDate: "2022-12",
    techStack: ["React", "TypeScript"],
    description:
      "A PWA emotion diary built for single parents, developed and shipped as a GDSC team project.",
    bullets: [
      "Led weekly frontend study sessions on JavaScript and React for a group of students.",
      "Built and deployed the PWA leveraging push notifications and native device features.",
    ],
  },
];
