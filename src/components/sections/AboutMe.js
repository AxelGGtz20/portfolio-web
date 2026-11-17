"use client";

import { useLanguage } from "@/context/LanguageContext";
import {GraduationCap, Code2, Network, ShieldCheck,} from "lucide-react";
import styles from "./AboutMe.module.css";

export default function AboutSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const interests = [
    {
      icon: Code2,
      title: isEnglish ? "Software Development" : "Desarrollo de software",
      description: isEnglish
        ? "Interested in backend development, web applications, and building practical software solutions."
        : "Interés en el desarrollo backend, las aplicaciones web y la creación de soluciones de software prácticas.",
    },
    {
      icon: Network,
      title: isEnglish
        ? "IT Infrastructure and Support"
        : "Infraestructura y soporte técnico",
      description: isEnglish
        ? "Interested in computer networks, operating systems, IT infrastructure, and technical troubleshooting."
        : "Interés en redes de computadoras, sistemas operativos, infraestructura tecnológica y resolución de problemas técnicos.",
    },
    {
      icon: ShieldCheck,
      title: isEnglish ? "Cybersecurity" : "Ciberseguridad",
      description: isEnglish
        ? "Interested in information security, network protection, and learning about cybersecurity practices."
        : "Interés en la seguridad de la información, la protección de redes y el aprendizaje de buenas prácticas de ciberseguridad.",
    },
  ];

  const training = [
    {
      institution: "Cisco Networking Academy",
      courses: ["IT Support Specialist Career Path"],
      status: isEnglish ? "Completed" : "Completado",
    },
    {
      institution: "Fortinet",
      courses: ["NSE 1", "NSE 2"],
      status: isEnglish ? "Badges" : "Insignias",
    },
    {
      institution: "Red Hat",
      courses: ["RH124", "RH134", "AD183"],
      status: isEnglish
        ? "Certificates of Attendance"
        : "Constancias de asistencia",
    },
  ];

  return (
    <section id="sobre-mi" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {isEnglish ? "About me" : "Sobre mí"}
        </h2>

        {/*Presentación y formación académica*/}
        <div className={styles.intro}>
          <div className={styles.presentation}>
            <h3>
              {isEnglish ? "Who I am" : "¿Quién soy?"}
            </h3>

            <p>
              {isEnglish
                ? "I am a Computer Science undergraduate student at the Universidad Autónoma de Nuevo León (UANL). My main interest is software development, particularly backend development and web applications. I am also interested in exploring areas such as IT infrastructure, technical support, and cybersecurity."
                : "Soy estudiante de la Licenciatura en Ciencias Computacionales en la Universidad Autónoma de Nuevo León. Mi principal interés es el desarrollo de software, especialmente el desarrollo backend y las aplicaciones web. También me interesa explorar áreas como la infraestructura tecnológica, el soporte técnico y la ciberseguridad."}
            </p>
          </div>

          <article className={styles.education}>
            <GraduationCap className={styles.educationIcon} size={28} />

            <h3>{isEnglish ? "Academic Education" : "Formación académica"}</h3>

            <h4>
              {isEnglish
                ? "B.S. in Computer Science"
                : "Licenciatura en Ciencias Computacionales"}
            </h4>

            <p>Universidad Autónoma de Nuevo León (UANL)</p>
            <p>Facultad de Ciencias Físico Matemáticas (FCFM)</p>

            <span>
              {isEnglish ? "In progress" : "En curso"}
            </span>
          </article>
        </div>

        {/*Áreas de interés*/}
        <div className={styles.interests}>
          <h3 className={styles.blockTitle}>
            {isEnglish ? "Areas of Interest" : "Áreas de interés"}
          </h3>

          <div className={styles.interestsGrid}>
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <article className={styles.interestCard} key={interest.title}>
                  <Icon size={28} className={styles.interestIcon} />

                  <h4>{interest.title}</h4>
                  <p>{interest.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/*Formación complementaria*/}
        <div className={styles.training}>
          <h3 className={styles.blockTitle}>
            {isEnglish
              ? "Additional Training"
              : "Formación complementaria"}
          </h3>

          <div className={styles.trainingList}>
            {training.map((item) => (
              <article className={styles.trainingItem} key={item.institution}>
                <div>
                  <h4>{item.institution}</h4>
                  <p>{item.courses.join(" · ")}</p>
                </div>
                <span>{item.status}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}