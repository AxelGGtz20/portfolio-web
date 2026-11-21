# COPILOT.md

## 1. Descripción del proyecto

Este proyecto es un portafolio web profesional desarrollado con Next.js y JavaScript.

Su objetivo es presentar mi perfil como estudiante de Ciencias Computacionales, mis conocimientos técnicos, proyectos personales y académicos, formación complementaria y medios de contacto.

El portafolio está orientado a oportunidades profesionales, prácticas y primeros empleos en desarrollo de software y áreas de TI.

El sitio contempla las siguientes secciones:

- Inicio (Hero).
- Sobre mí (AboutMe).
- Proyectos (pendiente de desarrollo).
- Habilidades (Skills).
- Contacto (Contact).

## 2. Usuario objetivo

El público principal está conformado por:

- Reclutadores de empresas tecnológicas.
- Profesionales y responsables de equipos de desarrollo.
- Empresas interesadas en perfiles junior y estudiantes para prácticas profesionales.

La información debe ser fácil de localizar, comprender y recorrer. El diseño debe facilitar la identificación de tecnologías, herramientas y competencias.

## 3. Personalidad visual

La personalidad visual del portafolio debe transmitir:

- Profesionalismo.
- Modernidad.
- Minimalismo.
- Claridad y organización.
- Accesibilidad.

Se busca un diseño equilibrado que transmita organización, capacidad técnica y atención al detalle, sin parecer excesivamente corporativo.

Evitar elementos decorativos innecesarios y mantener una jerarquía visual consistente.

## 4. Paleta de colores

Se utiliza como referencia visual la propuesta Slate & Emerald.

| Color | Código HEX | Uso |
|---|---|---|
| Fondo claro | #F8FAFC | Fondo principal |
| Texto principal | #0F172A | Títulos y contenido |
| Color de acento | #059669 | Iconos y elementos destacados |
| Bordes | #E2E8F0 | Separadores y tarjetas |

Para el tema oscuro se deben respetar las variables y colores definidos en el proyecto.

Las variables de `src/app/globals.css` son la referencia principal para los estilos.

No implementar un sistema de temas nuevo ni modificar globalmente la paleta sin una justificación concreta.

## 5. Contexto técnico y tecnologías

Tecnologías y dependencias declaradas en `package.json`:

- Next.js: `^16.4.5`.
- React: `^19.3.0`.
- React DOM: `^19.3.0`.
- JavaScript.
- Tailwind CSS: versión 4.
- @tailwindcss/postcss: `^4.3.5`.
- PostCSS: `^8.5.32`.
- ESLint: versión 9.
- lucide-react: `^1.70.0`.
- simple-icons: `^16.37.0`.
- @hcaptcha/react-hcaptcha: `^2.2.0`.
- CSS Modules para los estilos de los componentes.

Los rangos indicados corresponden a las declaraciones de `package.json`. Para conocer las versiones exactas instaladas y resueltas, consultar `package-lock.json`.

Integraciones externas:

- Web3Forms para el envío del formulario de contacto.
- hCaptcha para la verificación CAPTCHA.

Características y configuraciones:

- Next.js App Router.
- React Context para la gestión global del idioma y tema.
- LocalStorage para persistir las preferencias.
- Alias de importación `@/` hacia `src/`.
- React Compiler habilitado.
- Cache Components habilitado.
- Tailwind CSS integrado mediante PostCSS e importado globalmente.

**Convención de estilos:** aunque Tailwind CSS está instalado e integrado globalmente, los componentes revisados utilizan principalmente CSS Modules. No asumir que las clases utilitarias de Tailwind son el mecanismo principal de estilos ni que todas las dependencias instaladas se utilizan en todos los componentes.

Las integraciones Web3Forms y hCaptcha están implementadas en el código, pero su funcionamiento depende de la configuración de variables de entorno y de los servicios externos. Distinguir siempre entre implementación en código y validación operativa.

## 6. Arquitectura y convenciones

La estructura principal del proyecto se organiza de la siguiente manera:

- `src/app/`: páginas, layout y estilos globales.
- `src/components/layout/`: componentes generales de estructura y navegación.
- `src/components/sections/`: componentes correspondientes a las secciones del portafolio.
- `src/components/ui/`: carpeta existente, actualmente vacía y reservada para componentes de interfaz.
- `src/context/`: contextos globales de React.
- `public/`: imágenes, iconos y documentos públicos.

Convenciones obligatorias:

- Utilizar archivos `.js`, nunca `.jsx`.
- Mantener los CSS Modules para los estilos de los componentes.
- Seguir un enfoque Mobile-First.
- Mantener soporte para español e inglés.
- Mantener soporte para tema claro y oscuro.
- Reutilizar componentes cuando exista una necesidad real.
- Utilizar el alias `@/` para las importaciones desde `src/`.
- Respetar la estructura actual de Next.js App Router.
- Mantener una separación clara de responsabilidades.

No asumir que las carpetas reservadas contienen componentes implementados. Verificar siempre su contenido real.

## 7. Estado funcional del proyecto

Las siguientes secciones están implementadas:

### Hero

Presentación principal con fotografía, información profesional y académica, soporte bilingüe, descarga del CV y navegación interna.

### AboutMe

Presentación personal, formación académica, áreas de interés y formación complementaria.

### Skills

Presentación de habilidades técnicas organizadas por categorías y habilidades blandas.

No agregar niveles, porcentajes ni barras de progreso para representar el dominio de las habilidades.

### Contact

Tarjetas de Email, LinkedIn y GitHub, funcionalidad para copiar el correo y formulario de contacto integrado con Web3Forms y hCaptcha.

El código contempla el envío del formulario y la verificación CAPTCHA. La disponibilidad y el funcionamiento de estos servicios dependen de la configuración externa correspondiente. No afirmar que la integración está operativa únicamente por encontrar su implementación en el código.

### Contextos globales

- `LanguageContext.js`: administración del idioma español e inglés.
- `ThemeContext.js`: administración del tema claro y oscuro.
- `LanguageDocument.js`: sincronización del atributo `lang` del documento HTML.

### Elementos pendientes

- Proyectos: actualmente existe únicamente un placeholder.
- Footer: pendiente de desarrollo.

No describir funcionalidades pendientes como implementadas.

Al documentar el estado del proyecto, utilizar estas distinciones:

- **Implementado:** existe una implementación identificable en el código.
- **Pendiente de validación:** existe una implementación, pero falta comprobar su comportamiento mediante pruebas o verificación externa.
- **Planificado:** es una funcionalidad contemplada, pero todavía no está desarrollada.

## 8. Principios generales de desarrollo

Todo cambio debe respetar los siguientes principios:

- Mantener la funcionalidad existente.
- Priorizar la claridad y mantenibilidad del código.
- Evitar duplicación innecesaria.
- Mantener una jerarquía visual coherente.
- Garantizar una experiencia responsive.
- Considerar accesibilidad semántica y navegación por teclado.
- Mantener compatibilidad con los temas e idiomas existentes.
- Evitar dependencias adicionales sin justificación.
- No modificar archivos globales sin una necesidad concreta.

Antes de modificar código, analizar la implementación existente y explicar qué cambios son necesarios y por qué.

## 9. Reglas para auditoría y documentación

Cuando se solicite auditar o documentar el proyecto:

1. Inspeccionar los archivos reales antes de describir su funcionamiento.
2. No inventar tecnologías, funcionalidades, configuraciones ni resultados de pruebas.
3. Distinguir entre funcionalidades implementadas, pendientes de validación y planificadas.
4. Documentar únicamente comportamientos que puedan comprobarse en el código o mediante pruebas.
5. No confundir dependencias instaladas con tecnologías utilizadas efectivamente.
6. No afirmar que una prueba fue ejecutada si no existe evidencia de su ejecución.
7. Identificar limitaciones técnicas, riesgos y oportunidades de mejora.
8. No modificar código durante una auditoría, salvo autorización explícita.
9. No crear ni sobrescribir archivos de documentación sin autorización.
10. Mantener consistencia entre la documentación y el estado real del repositorio.

La documentación debe ser clara, técnica y útil para comprender la arquitectura, funcionalidades, configuraciones, integraciones, pruebas y despliegue.

Las recomendaciones de mejora deben distinguirse de las características que ya existen. No implementar recomendaciones automáticamente.

## 10. Seguridad y manejo de información

- No mostrar valores de variables de entorno ni credenciales.
- No copiar claves API, tokens o secretos en documentación.
- No incluir archivos `.env.local` ni otros archivos de entorno en el repositorio.
- Utilizar nombres de variables y ejemplos ficticios cuando sea necesario documentar configuraciones.
- No modificar configuraciones de seguridad sin justificación.
- Identificar las limitaciones de seguridad de las integraciones externas.
- No asumir que una variable de entorno está configurada correctamente por el simple hecho de encontrar su referencia en el código.

## 11. Git y control de cambios

- No ejecutar operaciones destructivas de Git.
- No utilizar `git reset --hard`, `git clean -f` ni comandos que puedan eliminar cambios locales.
- No cambiar de rama ni modificar el historial sin autorización.
- No realizar commits ni push automáticamente.
- Antes de realizar modificaciones, revisar el estado de Git cuando corresponda.
- No sobrescribir archivos existentes sin autorización.
- Mantener los cambios limitados al alcance solicitado.

## 12. Forma de trabajo

Trabajar de manera incremental y ordenada.

Antes de implementar cambios importantes:

1. Analizar el contexto y los archivos involucrados.
2. Identificar las modificaciones necesarias.
3. Explicar brevemente el propósito de los cambios.
4. Evitar modificaciones fuera del alcance solicitado.

Después de cada tarea:

- Resumir los archivos revisados o modificados.
- Explicar los cambios realizados.
- Indicar las validaciones ejecutadas y sus resultados reales.
- Señalar los aspectos que continúan pendientes.

Respetar el alcance y las autorizaciones de cada tarea. No iniciar una etapa posterior de un flujo de trabajo previamente acordado sin autorización explícita.