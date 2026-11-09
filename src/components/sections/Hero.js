"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>

        {/*Fotografía*/}
        <div className={styles.imageContainer}>
          <Image
            src="/images/AxelGutiérrez.jpg"
            alt={isEnglish ? "Axel Gutiérrez" : "Axel Gutiérrez"}
            width={400}
            height={400}
            priority
            className={styles.image}
          />
        </div>

        {/*Presentación*/}
        <div className={styles.content}>
          <p className={styles.greeting}>{isEnglish ? "Hello! I'm" : "¡Hola! Soy"}</p>
          <h1 className={styles.title}>Axel Gutiérrez</h1>

          <h2 className={styles.subtitle}>
            {isEnglish
              ? "Software Developer & IT Support"
              : "Desarrollador de Software y Soporte Técnico"}
          </h2>

          <p className={styles.description}>
            {isEnglish
              ? "Computer Science student at Universidad Autónoma de Nuevo León (UANL)."
              : "Estudiante de Ciencias Computacionales en la Universidad Autónoma de Nuevo León."}
          </p>

          {/*Botones*/}
          <div className={styles.buttons}>
            <a href="/cv/CV_AxelGutierrez.pdf" download="CV_AxelGutierrez.pdf" className={styles.primaryButton}>
              {isEnglish ? "Download CV" : "Descargar CV"}
            </a>

            <Link href="#proyectos" className={styles.secondaryButton}>
              {isEnglish ? "Projects" : "Proyectos"}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}