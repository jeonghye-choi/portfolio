import Container from "@/components/Container";
import LabItem from "./LabItem";
import { labs } from "./labs";
import PageHeader from "@/components/PageHeader";

export default function Labs() {
  return (
    <Container>
      <section className="py-12">
        <PageHeader
          title="Labs"
          description="Experiments, not projects. No polish required here."
        />

        <div className="mt-10 flex flex-col gap-10 pb-16 md:gap-14">
          {labs.map((lab) => (
            <LabItem key={lab.id} lab={lab} />
          ))}
        </div>
      </section>
    </Container>
  );
}
