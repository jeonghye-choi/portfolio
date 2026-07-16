import Container from "@/components/Container";
import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experiences";
import PageHeader from "@/components/PageHeader";

export default function Experiences() {
  return (
    <Container>
      <section className="py-12">
        <PageHeader title="Experiences" />
        <div className="mt-10 pb-16">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
    </Container>
  );
}
