import "./globals.css";

export const metadata = {
  title: "Axel Gutiérrez | Desarrollador de Software | Soporte Técnico",
  description: "Portafolio profesional de Axel Gutiérrez, estudiante de Ciencias Computacionales interesado en el desarrollo de software y las tecnologías de TI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
