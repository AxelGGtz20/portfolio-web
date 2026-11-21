"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section id="proyectos" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.container}>

        <header className={styles.header}>
          <h2 id="projects-title" className={styles.title}>
            {isEnglish ? "Projects" : "Proyectos"}
          </h2>
        </header>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isEnglish={isEnglish}/>
          ))}
        </div>

      </div>
    </section>
  );
}