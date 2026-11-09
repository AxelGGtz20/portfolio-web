import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageDocument from "@/components/layout/LanguageDocument";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Axel Gutiérrez | Desarrollador de Software | Soporte Técnico",
  description: "Portafolio profesional de Axel Gutiérrez, estudiante de Ciencias Computacionales interesado en el desarrollo de software y las tecnologías de TI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <LanguageDocument />
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
