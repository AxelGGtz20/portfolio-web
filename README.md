# Portafolio Web

Portafolio web personal desarrollado con Next.js para presentar información profesional, formación académica, habilidades técnicas y medios de contacto.

Su objetivo es ofrecer una presentación clara y responsive del perfil profesional para procesos de búsqueda de empleo, prácticas profesionales y oportunidades de desarrollo de software.

## Características

- Diseño responsive con enfoque Mobile-First.
- Contenido disponible en español e inglés.
- Tema claro y tema oscuro con preferencias persistentes.
- Navegación interna entre las secciones del portafolio.
- Presentación profesional con fotografía y descarga del CV.
- Presentación de habilidades técnicas y habilidades blandas.
- Tarjetas de contacto y formulario con integración de hCaptcha.
- Envío de mensajes mediante Web3Forms.
- Uso de imágenes, iconos y documentos públicos.
- Footer con copyright y año dinámico.

## Tecnologías

### Tecnologías principales

- [Next.js](https://nextjs.org/) 16.4.5.
- React 19.3.0.
- React DOM 19.3.0.
- JavaScript con archivos `.js`.
- Tailwind CSS 4.3.5.
- CSS Modules.
- React Context para idioma y tema.
- LocalStorage para persistir las preferencias.

### Bibliotecas complementarias

- `@hcaptcha/react-hcaptcha` 2.2.0.
- `lucide-react` 1.70.0.
- `simple-icons` 16.37.0.

### Herramientas de desarrollo

- ESLint 9.39.5.
- PostCSS 8.5.32.
- `@tailwindcss/postcss` 4.3.5.
- React Compiler mediante `babel-plugin-react-compiler`.

## Estructura del proyecto

```text
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── layout/
│   └── sections/
└── context/

public/
├── cv/
├── icons/
└── images/

docs/
├── architecture.md
└── api-integrations.md
```

## Requisitos previos

- Node.js 20.9.0 o superior.
- npm.

El requisito de Node.js corresponde a Next.js 16.

## Instalación y ejecución

1. Clona el repositorio y entra a su directorio.

2. Instala las dependencias:

```bash
npm install
```

3. Configura la variable de entorno descrita en el apartado siguiente si deseas habilitar el formulario de contacto.

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Por defecto, Next.js mostrará la aplicación local en `http://localhost:3000`.

## Variables de entorno

El formulario de contacto utiliza la siguiente variable:

```text
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
```

Habilita el envío del formulario mediante Web3Forms. Debe configurarse para utilizar esa funcionalidad.

Ejemplo ilustrativo:

```text
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_clave_de_acceso
```

Las variables con el prefijo `NEXT_PUBLIC_` pueden exponerse en el navegador y no deben considerarse secretas.

La variable no es necesaria para ejecutar las demás secciones del portafolio. Actualmente no existe un archivo `.env.example` en el repositorio.

## Scripts disponibles

- `npm install`: instala las dependencias declaradas en `package.json`.
- `npm run dev`: inicia el servidor de desarrollo de Next.js.
- `npm run build`: genera una compilación de producción.
- `npm run start`: inicia la aplicación desde una compilación existente.
- `npm run lint`: ejecuta ESLint sobre el proyecto.

## Secciones del portafolio

### Hero

Presentación principal con fotografía, nombre, profesión, descripción académica y enlaces internos.

Incluye la descarga del CV y navegación hacia el apartado de proyectos, actualmente pendiente de desarrollo.

### AboutMe

Información personal, formación académica, áreas de interés y formación complementaria.

### Skills

Habilidades técnicas organizadas por categorías y habilidades blandas.

### Contact

Información de correo electrónico, LinkedIn y GitHub.

Incluye la acción de copiar el correo y un formulario con integración de hCaptcha y Web3Forms.

## Estado del proyecto

### Implementado

- Hero.
- AboutMe.
- Skills.
- Contact.
- Navegación interna.
- Interfaz bilingüe español/inglés.
- Temas claro y oscuro.
- Diseño responsive.
- Descarga del CV.
- Persistencia de preferencias en LocalStorage.
- Footer

### Pendiente

- Projects: actualmente contiene un encabezado placeholder.

## Integraciones externas

- **hCaptcha:** proporciona el widget utilizado para obtener la verificación CAPTCHA del formulario en el navegador.
- **Web3Forms:** recibe los datos enviados desde el navegador.
- **Clipboard API:** permite copiar la dirección de correo electrónico.

La configuración y los detalles técnicos se encuentran en [docs/api-integrations.md](./docs/api-integrations.md). El funcionamiento completo depende de la configuración externa de hCaptcha y Web3Forms y no incluye validación propia del lado del servidor.

## Documentación adicional

- [Arquitectura del proyecto](./docs/architecture.md): describe la organización de carpetas, el App Router, los componentes, los contextos y los estilos.
- [Integraciones y APIs](./docs/api-integrations.md): describe hCaptcha, Web3Forms, variables de entorno y limitaciones técnicas.
