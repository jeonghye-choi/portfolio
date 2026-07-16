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
    techStack: ["React", "TypeScript", "Data Aggregation"],
    liveUrl: "https://londonindance.jenchoi.dev",
    description:
      "A performance discovery platform bringing together ballet and contemporary dance listings across London.",
    bullets: [
      "Aggregated live performance listings from Sadler's Wells, the Royal Ballet and Opera, and the London Coliseum into a single platform, solo-built from concept to deployment in one week.",
      "Optimised for mobile-first usage based on Vercel Analytics data showing 68% of traffic from mobile devices.",
    ],
  },
  {
    id: "unbound",
    title: "Unbound",
    event: "VibeHack London 2026",
    role: "Frontend Lead · 3-person team",
    startDate: "2026-06",
    endDate: "2026-06",
    techStack: ["React", "Web Speech API", "Multilingual"],
    githubUrl: "https://github.com/VibeHack-Unbound/vibehack2026-unbound",
    description:
      "A multilingual mental wellbeing app for international students, built in a 24-hour hackathon.",
    bullets: [
      "Led frontend development and UI design in a 3-person team, built within a 24-hour hackathon window.",
      "Implemented voice journaling with the Web Speech API, supporting multilingual transcription across English, Mandarin, and Korean.",
      "Presented a working live demo at the event.",
    ],
  },
  {
    id: "mentytarget",
    title: "MentyTarget",
    event: "Encode Club Vibe Coding Hackathon",
    role: "Frontend + Backend",
    startDate: "2026-06",
    endDate: "2026-06",
    techStack: ["Next.js", "TypeScript", "FastAPI", "3D Visualization"],
    liveUrl: "https://mentytarget-two.vercel.app",
    description:
      "An AI-powered target identification platform for psychiatric disorders, built in a 3-day hackathon.",
    bullets: [
      "Defined the product scope and information architecture, then built the full frontend, including a 3D visualisation of ranked genetic targets.",
      "Took on backend development alongside frontend work, extending an AI-generated FastAPI service and resolving deployment across Vercel and Railway.",
      "Built and deployed a working end-to-end product within a 3-day hackathon.",
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
      "A VS Code extension for visualising Git repository history. Awarded Excellence among all participating teams.",
    bullets: [
      "Built the TemporalFilter component from scratch — including types, data structures, sorting utilities, and UI — enabling users to filter commit history by time range.",
      "Established design system foundations: color palettes, dark/light theme tokens, font variables, and global styles.",
    ],
  },
  {
    id: "emotion-diary-pwa",
    title: "Emotion Diary",
    event: "Google Developer Student Clubs",
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
