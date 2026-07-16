import * as yaml from "js-yaml";

export interface NoteMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  thumbnail: string;
}

export interface NoteWithContent extends NoteMeta {
  content: string;
}

interface Frontmatter {
  title: string;
  date: string;
  tags?: string[];
  summary: string;
}

function parseFrontmatter(raw: string): {
  data: Frontmatter;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid frontmatter format in note file");
  }
  const data = yaml.load(match[1]) as Frontmatter;
  const content = match[2];
  return { data, content };
}

function getThumbnailPath(slug: string): string {
  return `/images/notes/${slug}/thumbnail.png`;
}

const noteMetaFiles = import.meta.glob("/src/content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function getSlugFromPath(path: string): string {
  return path.split("/").pop()!.replace(".md", "");
}

function parseAllMeta(): NoteMeta[] {
  return Object.entries(noteMetaFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    const slug = getSlugFromPath(path);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags ?? [],
      summary: data.summary,
      thumbnail: getThumbnailPath(slug),
    };
  });
}

export function getAllNotes(): NoteMeta[] {
  return parseAllMeta().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const noteContentLoaders = import.meta.glob("/src/content/notes/*.md", {
  query: "?raw",
  import: "default",
});

export async function getNoteBySlug(
  slug: string
): Promise<NoteWithContent | undefined> {
  const path = `/src/content/notes/${slug}.md`;
  const loader = noteContentLoaders[path];
  if (!loader) return undefined;

  const raw = (await loader()) as string;
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags ?? [],
    summary: data.summary,
    thumbnail: getThumbnailPath(slug),
    content,
  };
}
