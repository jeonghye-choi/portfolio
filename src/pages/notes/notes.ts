interface Frontmatter {
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

export interface NoteMeta extends Frontmatter {
  slug: string;
  thumbnail: string;
}

interface NoteWithContent extends NoteMeta {
  content: string;
}

const markdown = import.meta.glob<string>("/src/content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function readNote(path: string, raw: string): NoteWithContent {
  const slug = path.slice(path.lastIndexOf("/") + 1, -".md".length);
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) throw new Error(`Missing frontmatter in ${path}`);

  const { title, date, tags, summary } = JSON.parse(match[1]) as Frontmatter;

  return {
    slug,
    title,
    date,
    tags,
    summary,
    thumbnail: `/images/notes/${slug}/thumbnail.png`,
    content: match[2],
  };
}

const notes = Object.entries(markdown)
  .map(([path, raw]) => readNote(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export function getAllNotes(): NoteMeta[] {
  return notes;
}

export function getNoteBySlug(slug: string): NoteWithContent | undefined {
  return notes.find((note) => note.slug === slug);
}
