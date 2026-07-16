import Container from "@/components/Container";
import LabItem from "@/components/LabItem";
import { labs } from "@/data/labs";

export default function Labs() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-text-h font-serif text-3xl font-medium">Labs</h1>
        <p className="text-text mt-2 text-sm">
          Experiments, not projects. No polish required here.
        </p>

        <div className="mt-10 pb-16">
          {labs.map((lab) => (
            <LabItem key={lab.id} lab={lab} />
          ))}
        </div>
      </section>
    </Container>
  );
}
