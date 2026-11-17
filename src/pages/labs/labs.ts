export interface Lab {
  id: string;
  title: string;
  description: string;
  inspiration?: string;
  tools: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl: string;
}

function getDemoPath(id: string): string {
  return `/images/labs/${id}/demo.gif`;
}

export const labs: Lab[] = [
  {
    id: "the-first-snow",
    title: "The First Snow",
    description:
      "An interactive artwork that brings a miniature Christmas village to life. Press and move your pointer to make snow.",
    tools: ["React", "TypeScript", "PixiJS"],
    tags: ["interactive", "motion"],
    liveUrl: "https://snow.jenchoi.dev/",
    demoUrl: "/images/labs/the-first-snow/demo.mp4",
  },
  {
    id: "hand-tracking",
    title: "Hand Tracking",
    description:
      "What happens if a browser could just... see your hand? I'd worked with MediaPipe before at TeamGRIT for gesture-based robot control, but that was buried inside a much larger interface. I wanted to isolate it — just the tracking, just the interaction, nothing else around it.",
    tools: ["MediaPipe", "Canvas", "TypeScript"],
    inspiration:
      "Partly the LiDAR point-cloud work I did for robot control, partly just wanting to see how far real-time tracking could go without any hardware beyond a laptop camera.",
    tags: ["mediapipe", "computer-vision"],
    demoUrl: getDemoPath("hand-tracking"),
  },
];
