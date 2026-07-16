import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import { getNoteBySlug, type NoteWithContent } from "@/lib/notes";
import { formatLongDate } from "@/utils/formatDate";
import { SITE } from "@/data/site";

export default function NoteDetail() {
  const { slug } = useParams();
  const [note, setNote] = useState<NoteWithContent | undefined>();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getNoteBySlug(slug).then((result) => {
      if (result) {
        setNote(result);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) return null;
  if (notFound) return <Navigate to="/notes" replace />;
  if (!note) return null;

  return (
    <Container>
      <article className="py-12 pb-24">
        <Link to="/notes" className="text-text hover:text-text-h text-sm">
          ← Back to Notes
        </Link>

        <h1 className="text-text-h mt-6 font-serif text-3xl font-medium">
          {note.title}
        </h1>

        <div className="mt-3 flex flex-col gap-2">
          <span className="text-text/70 text-sm">
            {formatLongDate(note.date)}
          </span>
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="text-text/70 text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="border-border mt-8 aspect-video max-h-100 w-full overflow-hidden rounded-md border">
          <img
            src={note.thumbnail}
            alt={note.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-invert note-content mt-10 max-w-none">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="border-border my-6 w-full rounded-md border"
                />
              ),
            }}
          >
            {note.content}
          </ReactMarkdown>
        </div>

        <div className="border-border mt-16 flex items-center justify-between border-t pt-8">
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-secondary text-sm font-medium hover:underline"
          >
            Let's connect on LinkedIn →
          </a>
          <Link to="/notes" className="text-text hover:text-text-h text-sm">
            ← Back to Notes
          </Link>
        </div>
      </article>
    </Container>
  );
}
