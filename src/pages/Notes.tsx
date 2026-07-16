import Container from "@/components/Container";
import NoteCard from "@/components/NoteCard";
import { getAllNotes } from "@/lib/notes";
import PageHeader from "@/components/PageHeader";

export default function Notes() {
  const notes = getAllNotes();

  return (
    <Container>
      <section className="py-12">
        <PageHeader title="Notes" />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </Container>
  );
}
