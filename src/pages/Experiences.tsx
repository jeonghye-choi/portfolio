import Container from "@/components/Container";
import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experiences";

export default function Experiences() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-text-h font-serif text-3xl font-medium">
          Experiences
        </h1>
        <div className="mt-10 pb-16">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
    </Container>
  );
}
