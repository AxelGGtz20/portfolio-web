import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, isEnglish }) {
  const title = project.title[isEnglish ? "en" : "es"];

  const description =
    project.description[isEnglish ? "en" : "es"];

  const imageAlt = project.image
    ? project.image.alt[isEnglish ? "en" : "es"]
    : "";

  return (
    <article className={styles.card}>

      <div className={styles.imageContainer}>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={imageAlt}
            width={1200}
            height={675}
            className={styles.image}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>{isEnglish ? "Preview unavailable" : "Vista previa no disponible"}</span>
          </div>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.technologies} aria-label={isEnglish ? "Technologies used" : "Tecnologías utilizadas"}>
        {project.technologies.map((technology) => (
          <span key={technology} className={styles.technologyBadge}>{technology}</span>
        ))}
      </div>

      <p className={styles.description}>{description}</p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        aria-label={
          isEnglish
            ? `GitHub repository: ${title}`
            : `Repositorio de GitHub: ${title}`
        }
      >
        GitHub
      </a>

    </article>
  );
}