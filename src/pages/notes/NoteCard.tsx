import { Link } from "react-router-dom";
import type { NoteMeta } from "./notes";
import { formatShortDate } from "@/utils/formatDate";

export default function NoteCard({ note }: { note: NoteMeta }) {
  return (
    <Link to={`/notes/${note.slug}`} className="group block">
      <div className="border-border mb-4 aspect-3/2 w-full overflow-hidden rounded-md border">
        <img
          src={note.thumbnail}
          alt={note.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="note-card-title text-text-h mt-4 inline text-base font-medium">
        {note.title}
      </p>
      <p className="text-text mt-1 line-clamp-2 text-sm">{note.summary}</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span key={tag} className="text-text/70 text-xs">
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-text/70 text-xs">
          {formatShortDate(note.date)}
        </span>
      </div>

      <span className="text-text/50 group-hover:text-accent-secondary mt-2 inline-block text-xs font-medium transition-colors duration-300">
        Read more →
      </span>
    </Link>
  );
}
