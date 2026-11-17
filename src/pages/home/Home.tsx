import Container from "@/components/Container";
import ConstellationBackground from "./ConstellationBackground";

export default function Home() {
  return (
    <section className="relative -mt-16 h-dvh overflow-hidden select-none">
      <ConstellationBackground />
      <div className="relative z-10 flex h-full items-center justify-center pt-16">
        <Container>
          <div className="text-center">
            <h1 className="text-text-h font-serif text-4xl font-medium">
              Jeonghye Choi
            </h1>
            <h1 className="text-text-h font-serif text-4xl font-medium">
              Frontend Engineer
            </h1>
            <p className="text-text mt-6 text-sm">Based in London</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
