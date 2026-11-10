"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {siSpringboot, siJavascript, siReact, siNextdotjs, siPython, siCplusplus, siHtml5, siCss, siMysql,
  siLinux, siGit, siGithub, siIntellijidea, siPostman, siSwagger,} from "simple-icons";
import {Users, Lightbulb, BookOpen, RefreshCw, Network, Headset, ShieldCheck,} from "lucide-react";
import styles from "./Skills.module.css";

//Habilidades técnicas
const skillCategories = [
  {
    id: "development",
    title: {
      es: "Desarrollo de software",
      en: "Software Development",
    },
    skills: [
      { id: "java", name: "Java", image: "/icons/skills/java.svg" },
      { id: "spring", name: "Spring Boot", icon: siSpringboot },
      { id: "javascript", name: "JavaScript", icon: siJavascript },
      { id: "react", name: "React", icon: siReact },
      { id: "react-native", name: "React Native", icon: siReact },
      { id: "nextjs", name: "Next.js", icon: siNextdotjs },
      { id: "python", name: "Python", icon: siPython },
      { id: "cplusplus", name: "C++", icon: siCplusplus },
      { id: "html", name: "HTML5", icon: siHtml5 },
      { id: "css", name: "CSS3", icon: siCss },
    ],
  },
  {
    id: "databases",
    title: {
      es: "Bases de datos",
      en: "Databases",
    },
    skills: [
      { id: "mysql", name: "MySQL", icon: siMysql },
      { id: "sql-server", name: "SQL Server", image: "/icons/skills/microsoftsqlserver.svg" },
    ],
  },
  {
    id: "infrastructure",
    title: {
      es: "Infraestructura, redes y soporte técnico",
      en: "Infrastructure, Networking & IT Support",
    },
    skills: [
      { id: "windows", name: "Windows", image: "/icons/skills/windows11.svg" },
      { id: "linux", name: "Linux", icon: siLinux },
      { id: "packet-tracer", name: "Cisco Packet Tracer", icon: null, genericIcon: Network },
      { id: "networking", name: "Redes de computadoras", nameEn: "Computer Networking", icon: null, genericIcon: Network },
      { id: "it-support", name: "Fundamentos de soporte técnico", nameEn: "IT Support Fundamentals", icon: null, genericIcon: Headset },
      { id: "cybersecurity", name: "Fundamentos de ciberseguridad", nameEn: "Cybersecurity Fundamentals", icon: null, genericIcon: ShieldCheck },
    ],
  },
  {
    id: "tools",
    title: {
      es: "Herramientas y plataformas",
      en: "Tools & Platforms",
    },
    skills: [
      { id: "git", name: "Git", icon: siGit },
      { id: "github", name: "GitHub", icon: siGithub },
      { id: "intellij", name: "IntelliJ IDEA", icon: siIntellijidea },
      { id: "vscode", name: "Visual Studio Code", image: "/icons/skills/vscode.svg" },
      { id: "postman", name: "Postman", icon: siPostman },
      { id: "swagger", name: "Swagger / OpenAPI", icon: siSwagger },
    ],
  },
];

//Habilidades blandas
const softSkills = [
  {
    id: "teamwork",
    name: "Trabajo en equipo",
    nameEn: "Teamwork",
    icon: Users,
  },
  {
    id: "problem-solving",
    name: "Resolución de problemas",
    nameEn: "Problem Solving",
    icon: Lightbulb,
  },
  {
    id: "continuous-learning",
    name: "Aprendizaje continuo",
    nameEn: "Continuous Learning",
    icon: BookOpen,
  },
  {
    id: "adaptability",
    name: "Adaptabilidad",
    nameEn: "Adaptability",
    icon: RefreshCw,
  },
];


//Tarjeta individual
function SkillCard({ skill, isEnglish }) {
  const GenericIcon = skill.genericIcon;

  return (
    <div className={styles.skillCard}>
      <div className={styles.iconContainer}>
        {skill.image ? (
            <Image
            src={skill.image}
            alt={skill.name}
            width={30}
            height={30}
            className={styles.skillLogo}
            />
        ) : skill.icon ? (
            <svg
            viewBox="0 0 24 24"
            className={styles.skillLogo}
            role="img"
            aria-label={skill.name}
            style={{ fill: `#${skill.icon.hex}` }}
            >
            <path d={skill.icon.path} />
            </svg>
        ) : GenericIcon ? (
            <GenericIcon
            size={26}
            strokeWidth={1.8}
            aria-hidden="true"
            />
        ) : null}
        </div>

      <span className={styles.skillName}>
        {isEnglish ? skill.nameEn || skill.name : skill.name}
      </span>
    </div>
  );
}

//Categoría de habilidades
function SkillCategory({ category, isEnglish }) {
  return (
    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>
        {category.title[isEnglish ? "en" : "es"]}
      </h3>

      <div className={styles.skillsGrid}>
        {category.skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} isEnglish={isEnglish} />
        ))}
      </div>
    </div>
  );
}


export default function Skills() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section id="habilidades" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.container}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>
            {isEnglish ? "Technical profile" : "Perfil técnico"}
          </span>

          <h2 id="skills-title" className={styles.title}>
            {isEnglish ? "Skills" : "Habilidades"}
          </h2>

          <p className={styles.description}>
            {isEnglish
              ? "Technologies, tools and skills I use in software development and IT."
              : "Tecnologías, herramientas y conocimientos que utilizo en el desarrollo de software y áreas de TI."}
          </p>
        </header>

        {/*Habilidades técnicas*/}
        <div className={styles.categories} aria-label={isEnglish ? "Technical skills" : "Habilidades técnicas"}>
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} isEnglish={isEnglish} />
          ))}
        </div>

        {/*Habilidades blandas*/}
        <div className={styles.softSkills}>
          <h3 className={styles.categoryTitle}>
            {isEnglish ? "Soft Skills" : "Habilidades blandas"}
          </h3>

          <div className={styles.softSkillsGrid}>
            {softSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div key={skill.id} className={styles.softSkill}>
                  <Icon size={22} strokeWidth={1.8} />
                  <span>
                    {isEnglish ? skill.nameEn : skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}