import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="sobre-mi">
        <h2>Sobre mí</h2>
      </section>

      <section id="proyectos">
        <h2>Proyectos</h2>
      </section>

      <Skills />

      <section id="contacto">
        <h2>Contacto</h2>
      </section>

    </main>
  );
}
