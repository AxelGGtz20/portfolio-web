import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import AboutMe from "@/components/sections/AboutMe";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutMe />

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
