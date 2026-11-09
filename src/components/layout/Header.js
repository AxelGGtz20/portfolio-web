"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#inicio", es: "Inicio", en: "Home" },
  { href: "#sobre-mi", es: "Sobre mí", en: "About me" },
  { href: "#proyectos", es: "Proyectos", en: "Projects" },
  { href: "#habilidades", es: "Habilidades", en: "Skills" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ES");
  const [theme, setTheme] = useState("light");

  //Recuperar el tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const initialTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  //Cambiar idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"));
    setMenuOpen(false);
  };

  //Cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
  };

  const isEnglish = language === "EN";

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/*Navegación de escritorio*/}
        <nav aria-label={isEnglish ? "Main navigation" : "Navegación principal"} className={styles.navigation}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {isEnglish ? link.en : link.es}
            </Link>
          ))}
        </nav>

        {/*Controles*/}
        <div className={styles.controls}>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={isEnglish ? "Change to Spanish" : "Change to English"}
            className={styles.controlButton}
          >
            {isEnglish ? "ES" : "EN"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            className={styles.controlButton}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>

          {/*Botón menú móvil*/}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className={`${styles.controlButton} ${styles.menuButton}`}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>
      </div>

      {/*Navegación móvil*/}
      {menuOpen && (
        <nav aria-label={isEnglish ? "Mobile navigation" : "Navegación móvil"} className={styles.mobileNavigation}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={styles.navLink}>
              {isEnglish ? link.en : link.es}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}