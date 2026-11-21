import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutMe />

      <Projects />

      <Skills />

      <Contact />

    </main>
  );
}
