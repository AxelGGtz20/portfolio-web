"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

//Proveedor
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem("portfolio-language", language);
  }, [language, isInitialized]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => currentLanguage === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage debe utilizarse dentro de LanguageProvider");
  }

  return context;
}