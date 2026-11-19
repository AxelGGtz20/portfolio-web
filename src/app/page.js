import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutMe />

      <section id="proyectos">
        <h2>Proyectos</h2>
      </section>

      <Skills />

      <Contact />

    </main>
  );
}
