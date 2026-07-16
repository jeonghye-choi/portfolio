import { noteIndex, type NoteMeta } from "@/content/notes";

export type { NoteMeta };

export interface NoteWithContent extends NoteMeta {
  content: string;
}

export function getAllNotes(): NoteMeta[] {
  return [...noteIndex].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Only this glob handles the markdown files — used exclusively for lazy content loading
const noteContentLoaders = import.meta.glob("/src/content/notes/*.md", {
  query: "?raw",
  import: "default",
});

function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  return match ? match[1] : raw;
}

export async function getNoteBySlug(
  slug: string
): Promise<NoteWithContent | undefined> {
  const meta = noteIndex.find((note) => note.slug === slug);
  if (!meta) return undefined;

  const path = `/src/content/notes/${slug}.md`;
  const loader = noteContentLoaders[path];
  if (!loader) return undefined;

  const raw = (await loader()) as string;
  const content = stripFrontmatter(raw);

  return { ...meta, content };
}
