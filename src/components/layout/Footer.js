"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Axel Gutiérrez.{" "}
          {isEnglish
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}