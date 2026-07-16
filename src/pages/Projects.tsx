import Container from "@/components/Container";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/data/projects";
import PageHeader from "@/components/PageHeader";

export default function Projects() {
  return (
    <Container>
      <section className="py-12">
        <PageHeader title="Projects" />
        <div className="mt-10 pb-16">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
