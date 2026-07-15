export interface ExperienceProject {
  title: string;
  bullets: string[];
  techStack: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  startDate: string; // "2023-02"
  endDate: string | null; // null = present
  companySummary: string;
  projects: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    id: "teamgrit",
    company: "TeamGRIT",
    role: "Frontend Engineer",
    location: "Seongnam, South Korea",
    startDate: "2023-02",
    endDate: "2025-07",
    companySummary:
      "Built real-time control interfaces for robotics hardware and led the platform for an international robotics competition.",
    projects: [
      {
        title: "Robot Control Interface",
        bullets: [
          "Designed a modular directional command protocol over WebSocket, enabling frontend control of 10+ robot and hardware models through a single adaptable interface.",
          "Implemented role-based access control to differentiate views and permissions between administrator and operator roles.",
          "Integrated MediaPipe for real-time face and pose recognition to enable gesture-based remote robot control, delivering low-latency AI-driven interaction in the browser.",
          "Built real-time 2D/3D point cloud visualisations of LiDAR sensor data using WebGL, rendering dense spatial data directly in the browser.",
        ],
        techStack: ["WebSocket", "MediaPipe", "WebGL", "TypeScript"],
      },
      {
        title: "IEEE QRC Registration Platform",
        bullets: [
          "Built and launched the registration and qualification platform for IEEE QRC, an international quadruped robot competition held at IEEE ICRA, within two months.",
          "Supported real-time registration, scheduling, and participation for teams across multiple countries, handling concurrent access and time-sensitive coordination.",
          "Implemented UTC-based scheduling with local time conversion at the UI layer for users across Korea, Japan, China, and the United States.",
        ],
        techStack: ["TypeScript", "Express"],
      },
      {
        title: "Backend Migration",
        bullets: [
          "Led backend migration from Express to Java Spring Boot for the robot management control system, improving reliability and maintainability across 10+ hardware models.",
        ],
        techStack: ["Spring Boot", "Express"],
      },
    ],
  },
  {
    id: "toss",
    company: "Viva Republica (Toss)",
    role: "Frontend Engineer",
    location: "Seoul, South Korea",
    startDate: "2022-06",
    endDate: "2022-12",
    companySummary:
      "Built the shared component library implementing the Toss Design System, bridging design and engineering across the product portfolio.",
    projects: [
      {
        title: "Toss Design System Component Library",
        bullets: [
          "Built the shared React/TypeScript component library implementing the Toss Design System (TDS), bridging design and engineering — designers composed screens in Framer using production-ready components, developers implemented them directly.",
          "Migrated component styling from SCSS to styled-components to resolve style-override conflicts caused by class name collisions across component versions, improving style isolation and consistency for design-to-code handoff.",
          "Built Storybook-based verification workflows for the component library, enabling designers and developers to visually confirm implementation accuracy before release.",
        ],
        techStack: ["React", "TypeScript", "styled-components", "Storybook"],
      },
      {
        title: "Team Documentation",
        bullets: [
          "Authored procedural documentation for recurring frontend workflows, reducing repetitive onboarding explanations as the team scaled.",
        ],
        techStack: [],
      },
    ],
  },
  {
    id: "onad",
    company: "ONAD",
    role: "UI/UX Designer",
    location: "Busan, South Korea",
    startDate: "2019-05",
    endDate: "2019-09",
    companySummary:
      "Designed wireframes and prototypes for advertising and streaming platforms.",
    projects: [
      {
        title: "Advertising & Streaming Platform Design",
        bullets: [
          "Created wireframes and high-fidelity prototypes for advertising and streaming platforms using Figma and Adobe XD.",
        ],
        techStack: ["Figma", "Adobe XD"],
      },
    ],
  },
];
