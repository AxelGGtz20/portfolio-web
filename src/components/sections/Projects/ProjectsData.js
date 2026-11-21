export const projects = [
  {
    id: "vehicle-reservation",

    title: {
      es: "Sistema de reserva de vehículos",
      en: "Vehicle Reservation System",
    },

    technologies: ["Java", "Spring Boot", "MySQL"],

    description: {
      es: "API backend para la gestión de reservas de vehículos. Permite administrar clientes, empleados y vehículos, así como registrar y gestionar reservaciones mediante operaciones CRUD.",
      en: "Backend API for vehicle reservation management. It allows managing clients, employees, and vehicles, as well as creating and managing reservations through CRUD operations.",
    },

    image: null,

    github: "https://github.com/AxelGGtz20/sistema-reserva-vehiculos",
  },

  {
    id: "operations-research-cpm",

    title: {
      es: "PIA de Investigación de Operaciones",
      en: "Operations Research Project (CPM)",
    },

    technologies: ["Python", "NetworkX"],

    description: {
      es: "Implementación del método CPM para planificar la migración de servidores físicos a infraestructura en la nube. Modela las actividades y sus dependencias mediante grafos, calcula tiempos y holguras, e identifica la ruta crítica del proyecto.",
      en: "Implementation of the CPM method to plan the migration of physical servers to cloud infrastructure. It models activities and their dependencies using graphs, calculates durations and slack times, and identifies the project's critical path.",
    },

    image: null,

    github: "https://github.com/AxelGGtz20/PIA_InvestigacionDeOperaciones",
  },

  {
    id: "notes-app",

    title: {
      es: "App de notas",
      en: "Notes App",
    },

    technologies: ["React Native", "JavaScript"],

    description: {
      es: "Aplicación móvil para crear, consultar, buscar y gestionar notas, utilizando el almacenamiento local del dispositivo para conservar la información.",
      en: "Mobile application for creating, viewing, searching, and managing notes, using the device's local storage to preserve information.",
    },

    image: null,

    github: "https://github.com/Erick12L/App-de-notas",
  },

  {
    id: "portfolio-web",

    title: {
      es: "Portfolio Web (En desarrollo)",
      en: "Portfolio Website (In progress)",
    },

    technologies: ["Next.js", "React", "JavaScript", "Web3Forms"],

    description: {
      es: "Sitio web personal desarrollado para presentar mi perfil profesional, habilidades y proyectos. Incluye soporte bilingüe, temas claro y oscuro, y un formulario de contacto integrado con Web3Forms.",
      en: "Personal website developed to showcase my professional profile, skills, and projects. It includes bilingual support, light and dark themes, and a contact form integrated with Web3Forms.",
    },

    image: {
      src: "/images/Portfolio.png",
      alt: {
        es: "Página principal del portafolio web personal.",
        en: "Homepage of the personal portfolio website.",
      },
    },

    github: "https://github.com/AxelGGtz20/portfolio-web",
  },
];