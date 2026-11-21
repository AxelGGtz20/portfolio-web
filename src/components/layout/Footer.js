"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useLanguage();
  const [currentYear, setCurrentYear] = useState(null);

  const isEnglish = language === "en";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          {currentYear !== null && `© ${currentYear} `}
          Axel Gutiérrez.{" "}
          {isEnglish
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}