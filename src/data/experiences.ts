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
  startDate: string;
  endDate: string | null;
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
      "Built real-time control interfaces for robotics hardware and led platforms for international robotics competitions and education.",
    projects: [
      {
        title: "Multi-Robot Remote Control System",
        bullets: [
          "Designed a modular directional command protocol over WebSocket, enabling remote control of 10+ robot and hardware models through a single adaptable interface.",
          "Implemented role-based access control (RBAC) to differentiate views and permissions between administrator and operator roles across the control interface.",
          "Built real-time 2D/3D point cloud visualisations of LiDAR sensor data using WebGL, rendering dense spatial data directly in the browser with minimal latency.",
          "Piloted the system with a local fire department, testing self-designed emergency-response scenarios to validate remote robot control for hazardous environments.",
          "Deployed the platform live at iREX 2023 in Tokyo, one of the world's largest robotics trade shows, running a hand robot and a quadruped robot (PuppyPi) over 4 days on unreliable venue Wi-Fi — set up a dedicated local network on-site to guarantee connection stability.",
          "Migrated the backend from Express to Rust, then to Java Spring Boot, improving reliability and maintainability across 10+ hardware models.",
        ],
        techStack: [
          "WebSocket",
          "WebGL",
          "Vue.js",
          "AWS",
          "Express",
          "Rust",
          "Spring Boot",
          "RBAC",
        ],
      },
      {
        title: "IEEE QRC 2024 — Global Quadruped Robotics Competition Platform",
        bullets: [
          "Built and launched the qualifying round platform for IEEE QRC, an international quadruped robot competition held at IEEE ICRA, within two months.",
          "Supported team registration and real-time remote control of each team's robot directly through the platform, handling concurrent access for teams competing simultaneously across multiple countries.",
          "Implemented UTC-based scheduling with local time conversion at the UI layer for users across Korea, Japan, China, and the United States.",
        ],
        techStack: ["React", "TypeScript", "Express.js", "GCP"],
      },
      {
        title: "Interactive Robot Control Education Platform",
        bullets: [
          "Built multi-modal robot control supporting gesture (MediaPipe-based face/pose recognition), keyboard, and gamepad input, delivering low-latency AI-driven interaction in the browser.",
          "Delivered a month-long on-site teacher training program at Jeonbuk National University, teaching robotics and communication fundamentals (Bluetooth, Wi-Fi, Micro:bit, ESP32-CAM) and guiding teachers through building and running their own LEGO-based robots.",
          "Ran hands-on workshops at various events where children could directly operate robots.",
        ],
        techStack: [
          "React",
          "TypeScript",
          "GCP",
          "MediaPipe",
          "Bluetooth",
          "ESP32-CAM",
          "Micro:bit",
        ],
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
          "Built the shared React/TypeScript component library implementing the Toss Design System (TDS).",
          "Migrated component styling from SCSS to styled-components to resolve style-override conflicts caused by class name collisions across component versions.",
          "Built Storybook-based verification workflows for the component library, enabling designers and developers to visually confirm implementation accuracy before release.",
          "Authored procedural documentation for recurring frontend workflows, reducing repetitive onboarding explanations as the team scaled.",
        ],
        techStack: [
          "React",
          "TypeScript",
          "styled-components",
          "SCSS",
          "Storybook",
        ],
      },
    ],
  },
  {
    id: "gdsc",
    company: "Google Developer Student Clubs (GDSC)",
    role: "Core Member",
    location: "Busan, South Korea",
    startDate: "2021-10",
    endDate: "2022-12",
    companySummary:
      "Led community study groups and collaborative hackathon projects for a regional developer community.",
    projects: [
      {
        title: "Developer Study Groups & Community Leadership",
        bullets: [
          "Organised and led recurring JavaScript and Vue.js study groups, and hosted a dedicated Git workshop session for the community.",
          "Introduced Jira-based task management and restructured team roles to improve collaboration across designers and backend developers.",
        ],
        techStack: [],
      },
      {
        title: "Google Solution Challenge 2022",
        bullets: [
          "Built a web app supporting emotional wellbeing for single mothers as part of the Google Solution Challenge 2022 hackathon.",
        ],
        techStack: ["TypeScript", "React"],
      },
    ],
  },
  {
    id: "assi",
    company: "ASSI",
    role: "Frontend Engineer Intern",
    location: "Seoul, South Korea",
    startDate: "2020-10",
    endDate: "2020-10",
    companySummary:
      "Built an admin dashboard to visualise user behaviour data.",
    projects: [
      {
        title: "Admin Dashboard",
        bullets: [
          "Built a React and Firebase-based admin dashboard to visualise user behaviour data.",
          "Implemented interactive data visualisations to improve visibility into key user metrics.",
        ],
        techStack: ["React", "Firebase", "Adobe XD"],
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
          "Created wireframes and high-fidelity prototypes for advertising and streaming platforms using Figma",
        ],
        techStack: ["Figma", "Adobe Illustrator"],
      },
    ],
  },
];
