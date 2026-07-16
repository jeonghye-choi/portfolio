import Container from "@/components/Container";
import LabItem from "@/components/LabItem";
import { labs } from "@/data/labs";
import PageHeader from "@/components/PageHeader";

export default function Labs() {
  return (
    <Container>
      <section className="py-12">
        <PageHeader
          title="Labs"
          description="Experiments, not projects. No polish required here."
        />

        <div className="mt-10 pb-16">
          {labs.map((lab) => (
            <LabItem key={lab.id} lab={lab} />
          ))}
        </div>
      </section>
    </Container>
  );
}
