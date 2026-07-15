import Container from "@/components/Container";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-text-h font-serif text-3xl font-medium">
          Projects
        </h1>
        <div className="mt-10 pb-16">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
