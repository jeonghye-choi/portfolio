export interface NoteMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  thumbnail: string;
}

function getThumbnailPath(slug: string): string {
  return `/images/notes/${slug}/thumbnail.png`;
}

export const noteIndex: NoteMeta[] = [
  {
    slug: "understanding-codecs",
    title: "Understanding Codecs",
    date: "2024-07-12",
    tags: ["codecs", "realtime"],
    summary:
      "Notes on how video codecs evolved, and why the choice between software, GPU, and hardware decoding matters more than it seems.",
    thumbnail: getThumbnailPath("understanding-codecs"),
  },
  {
    slug: "camera-latency-and-codecs",
    title: "Exploring Latency and Codec Choices for Various Camera Types",
    date: "2024-07-12",
    tags: ["codecs", "hardware"],
    summary:
      "Comparing latency across USB, MIPI CSI, network, and GMSL cameras, and how codec choice compounds the difference in real-time systems.",
    thumbnail: getThumbnailPath("camera-latency-and-codecs"),
  },
  {
    slug: "network-design",
    title: "Network Design: Structure and Architecture",
    date: "2024-04-21",
    tags: ["systems"],
    summary:
      "Notes on what makes a network design efficient and stable, and how structural choices affect reliability under real usage.",
    thumbnail: getThumbnailPath("network-design"),
  },
  {
    slug: "docker-multi-stage-builds",
    title: "Understanding Docker Multi-Stage Builds",
    date: "2024-07-12",
    tags: ["docker"],
    summary:
      "What multi-stage builds solve, and why leaner Docker images end up mattering more than they seem to at first.",
    thumbnail: getThumbnailPath("docker-multi-stage-builds"),
  },
];
