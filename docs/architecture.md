# Arquitectura del Portafolio Web

## 1. Descripción general

El proyecto es un portafolio web desarrollado con Next.js y JavaScript. Utiliza el App Router de Next.js, React Context para las preferencias globales y CSS Modules para los estilos de los componentes. El sitio presenta un perfil profesional, información académica, habilidades, medios de contacto y un formulario de contacto.

Las tecnologías principales declaradas son Next.js 16.4.5, React y React DOM 19.3.0. Tailwind CSS 4 está integrado mediante PostCSS y se importa desde los estilos globales, aunque los componentes revisados utilizan principalmente CSS Modules.

## 2. Estructura de directorios

### `src/app/`

Contiene el layout raíz, la página principal, los estilos globales y el favicon.

- `layout.js`: define el layout HTML compartido, importa los estilos globales y envuelve la aplicación con los proveedores de tema e idioma.
- `page.js`: representa la ruta principal `/` y compone las secciones visibles.
- `globals.css`: define las variables globales, el tema claro y oscuro, el modelo de caja y los estilos base del documento.

### `src/components/layout/`

Contiene componentes de estructura común.

- `Header.js`: muestra la navegación principal, el cambio de idioma, el cambio de tema y el menú móvil.
- `LanguageDocument.js`: sincroniza el atributo `lang` del elemento HTML con el idioma seleccionado.
- `Footer.js`: muestra nombre del autor, copyright y año actual.

`Header` y `Footer` utiliza su propio CSS Module. `LanguageDocument` no requiere estilos propios.

### `src/components/sections/`

Contiene las secciones renderizadas en la página principal.

- `Hero.js`: fotografía, presentación, descarga del CV y enlace interno a Proyectos.
- `AboutMe.js`: presentación personal, formación académica, áreas de interés y formación complementaria.
- `Skills.js`: habilidades técnicas organizadas por categorías y habilidades blandas.
- `Contact.js`: enlaces de contacto, copia del correo electrónico y formulario de contacto.

Cada sección tiene su propio CSS Module.

### `src/components/ui/`
carpeta existente, actualmente vacía y reservada para futuros componentes de interfaz.

### `src/context/`

Contiene el estado global basado en React Context.

- `LanguageContext.js`: administra español e inglés y persiste la selección.
- `ThemeContext.js`: administra los temas claro y oscuro y persiste la selección.

### `public/`

Contiene recursos servidos desde la raíz del sitio.

- `images/AxelGutiérrez.jpg`: fotografía utilizada por `Hero`.
- `cv/CV_AxelGutierrez.pdf`: documento descargado por el botón del `Hero`.
- `icons/skills/`: recursos SVG locales utilizados por `Skills`.

### Archivos de configuración

- `package.json`: declara scripts, dependencias y versiones.
- `next.config.mjs`: habilita Cache Components, prefetch parcial y React Compiler.
- `jsconfig.json`: configura el alias `@/` hacia `src/`.
- `postcss.config.mjs`: integra `@tailwindcss/postcss`.
- `eslint.config.mjs`: aplica las reglas de Next.js para Core Web Vitals.

## 3. Punto de entrada y funcionamiento de App Router

La ruta principal se define en `src/app/page.js`. Next.js representa automáticamente esta página como `/` gracias al App Router.

`src/app/layout.js` actúa como layout raíz. Define metadatos básicos, aplica `globals.css`, establece el idioma inicial en español y compone el siguiente orden:

1. `ThemeProvider`.
2. `LanguageProvider`.
3. `LanguageDocument`.
4. `Header`.
5. El contenido de la página recibido mediante `children`.
6. `Footer`.

En `page.js`, el componente `Home` devuelve un elemento `main` que, en orden, contiene:

1. `Hero`.
2. `AboutMe`.
3. Una sección placeholder con el identificador `proyectos`.
4. `Skills`.
5. `Contact`.

Los enlaces internos del `Header` y del `Hero` usan identificadores correspondientes a estas secciones. La navegación dentro de la página utiliza enlaces a fragmentos como `#inicio`, `#sobre-mi`, `#habilidades` y `#contacto`.

## 4. Composición de componentes y secciones

El `Header` comparte una lista de enlaces de navegación utilizada tanto por la vista de escritorio como por el menú móvil. También consume los contextos de idioma y tema para mostrar controles y etiquetas bilingües.

Cada sección implementada consume `LanguageContext` para seleccionar textos en español o inglés:

- `Hero` usa `next/image` para la fotografía y `next/link` para la navegación interna. Además ofrece el CV como enlace descargable.
- `AboutMe` presenta datos internos declarados dentro del componente y utiliza iconos de `lucide-react`.
- `Skills` define categorías y habilidades dentro del componente. Combina recursos SVG locales, iconos de `simple-icons` e iconos genéricos de `lucide-react`.
- `Contact` mantiene el estado local del botón de copia, el estado de envío, el token CAPTCHA y el estado de resultado del formulario.

La sección de Proyectos está implementada solamente como un encabezado placeholder. No contiene datos, tarjetas ni componentes de proyectos.

El `Footer` muestra el copyright del portafolio con el año dinámico y el nombre del propietario.

## 5. Contextos globales de idioma y tema

`LanguageContext` expone `language`, `setLanguage` y `toggleLanguage`. El idioma inicial es español y puede cambiarse entre español e inglés. Cuando existe una preferencia válida en LocalStorage, el proveedor la restaura.

`ThemeContext` expone `theme`, `setTheme` y `toggleTheme`. El tema inicial es claro y puede alternarse entre claro y oscuro. La selección válida se restaura desde LocalStorage y se refleja agregando o quitando la clase `dark` en el elemento HTML.

`LanguageDocument` observa el idioma del contexto y actualiza el atributo `lang` del documento.

Los contextos lanzan un error si `useLanguage` o `useTheme` se utilizan fuera de su proveedor correspondiente.

## 6. Gestión de estilos

Tailwind CSS está integrado globalmente mediante `@import "tailwindcss"` en `globals.css`, el plugin de PostCSS y las dependencias de desarrollo. Sin embargo, los componentes revisados utilizan principalmente CSS Modules.

Las variables globales de `globals.css` definen la superficie visual principal:

- Tema claro: fondo, superficie, texto, acento, texto secundario y bordes.
- Tema oscuro: variantes correspondientes aplicadas mediante la clase `.dark`.
- Tipografía base.
- Suavizado de desplazamiento.
- Transiciones globales de color y fondo.

Cada sección y el componente `Header` tienen un archivo `.module.css` propio. Las clases se importan desde los componentes mediante objetos locales de estilos.

Los CSS Modules contienen estilos base y consultas `@media (min-width: ...)` que amplían la presentación conforme aumenta el ancho disponible. Esta organización permite un enfoque Mobile-First, con estilos compactos iniciales y adaptaciones posteriores para tamaños mayores.

## 7. Imágenes, iconos y documentos públicos

La fotografía principal se sirve desde `public/images/` y se carga con el componente `Image` de Next.js.

El CV se sirve desde `public/cv/` y se ofrece mediante un enlace con descarga directa.

Los iconos de `Skills` se gestionan de tres formas comprobables:

- Recursos SVG locales dentro de `public/icons/skills/`.
- Iconos obtenidos del paquete `simple-icons`, renderizados como SVG.
- Iconos genéricos obtenidos de `lucide-react`.

## 8. Configuraciones relevantes de Next.js

`next.config.mjs` habilita:

- `cacheComponents: true`.
- `partialPrefetching: true`.
- `reactCompiler: true`.

`jsconfig.json` configura `@/` como alias hacia `src/`. Los componentes utilizan este alias para importar contextos y componentes.

Los scripts disponibles en `package.json` son `dev`, `build`, `start` y `lint`.

Las versiones exactas resueltas pueden consultarse en `package-lock.json`; `package.json` contiene las restricciones declaradas por el proyecto.

## 9. Flujo general de funcionamiento

Al cargar la página principal:

1. Next.js crea el layout raíz y aplica los estilos globales.
2. `ThemeProvider` inicializa el tema claro o restaura una preferencia válida.
3. `LanguageProvider` inicializa español o restaura una preferencia válida.
4. `LanguageDocument` mantiene sincronizado el atributo `lang`.
5. `Header` representa navegación, idioma y tema.
6. `page.js` compone las secciones principales.
7. `Footer`representa el copyright después del contenido de la página.
8. Los componentes consumidores acceden al contexto para renderizar el idioma correspondiente.

Las preferencias se almacenan en LocalStorage y se consultan desde el navegador. Por ello, el contenido inicial puede cambiar después de montar los proveedores.

La navegación principal utiliza enlaces internos a fragmentos existentes o al placeholder de Proyectos.

En `Contact`, la copia del correo utiliza la API de portapapeles del navegador. El formulario requiere una selección CAPTCHA antes de enviarse. Cuando se completa la selección, construye los datos del formulario y los envía a Web3Forms desde el navegador.

Esta descripción corresponde al flujo implementado en el código. La disponibilidad del servicio externo y el comportamiento operativo real requieren verificación externa y no quedan comprobados mediante inspección estática.

## 10. Estado actual y limitaciones

### Implementado

- Layout raíz y ruta principal.
- `Header` con navegación y controles.
- Sección `Hero`.
- Sección `AboutMe`.
- Sección `Skills`.
- Sección `Contact`.
- `Footer` con autor, copyright y año dinámico.
- Contextos de idioma y tema.
- Persistencia de preferencias en LocalStorage.
- Sincronización del atributo `lang`.
- Temas claro y oscuro.
- CSS responsive con CSS Modules y consultas por ancho.
- Recursos públicos para fotografía, CV e iconos.
- Interfaz para copia de correo y envío de formulario.

### Pendiente de desarrollo

- Proyectos: existe solo el placeholder en `page.js`.

### Pendiente de validación

- El funcionamiento operativo de Web3Forms.
- El funcionamiento operativo de hCaptcha.
- La configuración externa necesaria para completar el envío del formulario.
- La disponibilidad real del CV y la fotografía en el entorno desplegado.
- El comportamiento visual en dispositivos reales y tamaños intermedios.

La arquitectura actual es una página principal con componentes separados por responsabilidades. No hay rutas adicionales implementadas, API internas, capa de datos propia ni servicios backend dentro del repositorio. La integración de hCaptcha y Web3Forms representa una dependencia de servicios externos y no debe interpretarse como una capacidad backend propia del proyecto.
