# Despliegue del Portafolio Web

## 1. Plataforma de despliegue

El proyecto está publicado mediante **Netlify**, plataforma utilizada para alojar la aplicación Next.js y generar nuevas versiones a partir del repositorio de GitHub.

El código fuente se mantiene en GitHub, mientras que Netlify se encarga de instalar las dependencias, ejecutar la compilación y publicar el resultado.

- **Plataforma:** Netlify.
- **Framework:** Next.js 16.4.5.
- **Repositorio:** GitHub.
- **Rama de producción:** `main`.
- **Comando de compilación:** `npm run build`.
- **Directorio de publicación:** `.next`.
- **Runtime:** Netlify Next.js Runtime.

La configuración del proyecto fue detectada automáticamente por Netlify al importar el repositorio.

## 2. Configuración del sitio

El sitio se configuró con los siguientes parámetros:

- Visibilidad pública: cualquier persona con la dirección puede acceder al portafolio.
- Despliegue de producción asociado a la rama `main`.
- Despliegues automáticos cuando se incorporan nuevos cambios a la rama de producción.
- Generación de vistas previas para Pull Requests.

Netlify utiliza el runtime de Next.js para gestionar la compilación y publicación de la aplicación.

## 3. Proceso de despliegue

El flujo de publicación utiliza GitHub como repositorio de origen y Netlify como plataforma de alojamiento.

### 3.1. Preparación del proyecto

Antes de publicar cambios, se debe comprobar que el proyecto pueda generar una compilación de producción:

```bash
npm install
npm run build
```

El comando `npm run build` ejecuta la compilación de Next.js y permite detectar errores que puedan impedir la generación de la aplicación.

### 3.2. Integración con GitHub

El repositorio se conecta con Netlify para habilitar la integración continua.

La rama `main` se utiliza como fuente de los despliegues de producción. Los cambios incorporados mediante Pull Requests pueden generar despliegues de vista previa.

### 3.3. Publicación automática

Cuando se incorporan cambios a `main`, Netlify inicia automáticamente un nuevo despliegue.

El proceso contempla:

1. Obtener el código fuente del repositorio.
2. Instalar las dependencias.
3. Ejecutar `npm run build`.
4. Procesar la aplicación mediante el runtime de Next.js.
5. Publicar la nueva versión del sitio.

El estado del proceso puede consultarse desde la sección **Deploys** del panel de Netlify.

### 3.4. Reintento de despliegues

Netlify permite volver a ejecutar un despliegue utilizando el último commit de la rama configurada.

La opción **Retry without cache with latest branch commit** permite realizar una nueva compilación sin reutilizar la caché del despliegue anterior.

Esta opción se utilizó para generar una compilación nueva después de configurar la variable de entorno del formulario de contacto.

## 4. Variables de entorno en producción

El formulario de contacto utiliza Web3Forms para recibir los mensajes enviados desde el navegador.

Para habilitar esta integración, se configura la siguiente variable en Netlify:

```text
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
```

La variable se administra desde:

**Site configuration → Environment variables**

Debe configurarse con el valor de la Access Key proporcionada por Web3Forms y estar disponible durante la compilación de producción.

La variable utiliza el prefijo `NEXT_PUBLIC_`, por lo que Next.js puede incorporarla al código JavaScript enviado al navegador. En consecuencia, no debe tratarse como una credencial privada de servidor.

El valor de la variable no debe incluirse directamente en el repositorio ni compartirse en archivos públicos.

Cuando se modifica una variable `NEXT_PUBLIC_`, es necesario generar un nuevo despliegue para que el cambio se incorpore a la compilación.

## 5. Verificación del despliegue

Después de publicar una nueva versión, se debe comprobar:

- Que Netlify indique que el despliegue terminó correctamente.
- Que el sitio sea accesible mediante su dirección pública.
- Que las secciones principales se visualicen correctamente.
- Que la navegación interna funcione.
- Que el cambio de idioma y tema funcione.
- Que las imágenes, iconos y documentos públicos estén disponibles.
- Que los enlaces externos funcionen.
- Que el diseño responda correctamente a distintos tamaños de pantalla.
- Que el formulario de contacto complete su flujo de verificación y envío.

La validación del formulario requiere comprobar tanto la integración de hCaptcha como la recepción del mensaje mediante Web3Forms.

## 6. Estado del despliegue

El portafolio cuenta con un despliegue de producción publicado en Netlify.

La configuración de la variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` se incorporó posteriormente mediante una nueva compilación sin caché.

La dirección pública del sitio debe mantenerse actualizada en el README del repositorio.

## 7. Consideraciones

- GitHub conserva el código fuente y el historial de cambios.
- Netlify administra la compilación y el alojamiento.
- Los despliegues de producción dependen de la rama `main`.
- Las variables de entorno utilizadas durante la compilación deben configurarse también en Netlify.
- Las modificaciones de variables `NEXT_PUBLIC_` requieren una nueva compilación.
- La disponibilidad del formulario depende de los servicios externos hCaptcha y Web3Forms.