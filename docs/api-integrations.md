# Integraciones y APIs del formulario de contacto

## 1. Alcance y fuentes de información

Este documento describe las integraciones implementadas por el formulario de contacto del portafolio. Las afirmaciones técnicas se basan en el código fuente, en particular en `src/components/sections/Contact.js`, y en las dependencias declaradas en `package.json`.

Las fuentes principales revisadas fueron:

- `src/components/sections/Contact.js`: interfaz, validaciones, estados, hCaptcha y comunicación con Web3Forms.
- `src/components/sections/Contact.module.css`: presentación de mensajes y campos del formulario.
- `package.json`: dependencias relacionadas.
- `.gitignore`: exclusión de archivos de entorno.

La documentación distingue entre:

- **Implementado y comprobable en el código**: comportamiento presente directamente en el repositorio.
- **Configuración externa**: requisitos que dependen de hCaptcha o Web3Forms y no pueden verificarse únicamente mediante inspección estática.
- **Prueba manual reportada**: el envío real fue probado satisfactoriamente por el desarrollador. Esta prueba no constituye una verificación independiente realizada por Copilot.

## 2. Integraciones externas utilizadas

El formulario utiliza dos integraciones externas:

- **hCaptcha**: presenta y gestiona el desafío CAPTCHA en el navegador. El componente obtiene un token de respuesta y lo entrega al flujo de envío.
- **Web3Forms**: recibe la información del formulario mediante una petición HTTP desde el cliente y procesa el envío externo.

Además, la sección de contacto usa la API de portapapeles del navegador para copiar la dirección de correo electrónico. Esta operación no envía datos a una API HTTP propia del proyecto.

## 3. Dependencias relacionadas

Las dependencias declaradas en `package.json` son:

- `@hcaptcha/react-hcaptcha`: integración React de hCaptcha.
- `lucide-react`: iconos utilizados por la interfaz.
- `react` y `react-dom`: componentes y estados del formulario.
- `next`: ejecución y arquitectura de la aplicación.

La integración con Web3Forms se realiza mediante `fetch`, por lo que no requiere una biblioteca específica instalada en el proyecto.

## 4. Arquitectura del formulario de contacto

`Contact` es un componente cliente de React y mantiene los siguientes estados:

- `copied`: indica si el correo fue copiado.
- `isSubmitting`: impide envíos simultáneos.
- `submitStatus`: identifica los estados `idle`, `captcha`, `success` o `error`.
- `captchaToken`: almacena temporalmente el token obtenido del widget CAPTCHA.
- `captchaRef`: mantiene una referencia al componente hCaptcha para poder reiniciarlo.

El componente contiene enlaces a Email, LinkedIn y GitHub, así como un formulario con los campos:

- Nombre.
- Correo electrónico.
- Asunto.
- Mensaje.

El formulario no utiliza una ruta ni un manejador API propio de Next.js. El envío se realiza directamente desde el navegador hacia el endpoint externo de Web3Forms.

## 5. Flujo completo de envío

El flujo implementado es el siguiente:

1. El usuario completa los campos requeridos.
2. El navegador realiza las validaciones HTML nativas, como campos requeridos, formato de correo electrónico y límites de longitud.
3. El usuario completa el widget hCaptcha.
4. hCaptcha entrega un token al componente mediante `onVerify`.
5. Al enviar, `handleSubmit` evita el proceso si ya existe un envío en curso.
6. Si no existe un token CAPTCHA, establece el estado `captcha` y detiene el envío.
7. El componente obtiene `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
8. Si la variable no está disponible, el código produce internamente un error antes de realizar la petición.
9. Los datos se leen mediante `FormData` y se convierten a un objeto.
10. El objeto se combina con la clave de Web3Forms y el token CAPTCHA.
11. Se realiza una petición `POST` a Web3Forms.
12. Se intenta leer la respuesta como JSON.
13. El código acepta el envío únicamente si la respuesta HTTP es satisfactoria y contiene `success: true`.
14. En éxito, se muestra el mensaje correspondiente y se limpian los campos.
15. En error, se muestra un mensaje general.
16. En todos los resultados, se desactiva el bloqueo de envío y se reinicia el widget CAPTCHA.

La ausencia de `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` no implica necesariamente que la aplicación falle al compilar. El código accede a la variable durante el envío y, si no tiene valor, ejecuta su manejo de error y muestra el estado correspondiente.

## 6. Configuración y funcionamiento de hCaptcha

El widget se representa mediante `HCaptcha` con los siguientes comportamientos comprobables:

- Se proporciona un identificador público de sitio directamente al componente.
- `reCaptchaCompat` está deshabilitado.
- El idioma del widget se sincroniza con el idioma activo del portafolio.
- `onVerify` recibe el token generado por hCaptcha y lo guarda en `captchaToken`.
- `onExpire` limpia `captchaToken` cuando el widget informa que el token ha expirado.
- `captchaRef.current.resetCaptcha()` reinicia el widget al finalizar un intento de envío.

La obtención del token ocurre en el navegador. La presencia del token indica que hCaptcha entregó una respuesta al componente cliente, pero no constituye por sí sola una verificación independiente realizada por el repositorio.

La verificación efectiva del token corresponde a hCaptcha y al procesamiento realizado por Web3Forms o por sus servicios asociados. El proyecto no implementa un secreto de hCaptcha ni una validación propia de CAPTCHA en el servidor.

Si el token no existe al enviar, el estado `captcha` muestra el mensaje correspondiente y no se realiza la petición a Web3Forms.

## 7. Comunicación con Web3Forms

### Endpoint y método

La comunicación implementada usa:

- **Endpoint**: `https://api.web3forms.com/submit`
- **Método HTTP**: `POST`

### Encabezados

La petición configura:

- `Content-Type: application/json`
- `Accept: application/json`

### Cuerpo enviado

El componente construye el cuerpo como JSON a partir de `FormData`:

- `name`: nombre informado por el usuario.
- `email`: correo electrónico informado por el usuario.
- `subject`: asunto informado por el usuario.
- `message`: mensaje informado por el usuario.
- `access_key`: valor de `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- `h-captcha-response`: token obtenido actualmente desde hCaptcha.

El objeto se convierte mediante `JSON.stringify` antes de enviarse.

### Respuesta

El código intenta convertir la respuesta a JSON dentro de un bloque independiente.

Se considera un envío exitoso únicamente cuando se cumplen ambas condiciones:

- `response.ok` es verdadero.
- La respuesta contiene `result.success === true`.

En otros casos, el componente registra el estado HTTP en la consola y establece el estado general de error.

## 8. Variables de entorno y exposición pública

El proyecto utiliza actualmente la referencia:

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

Su propósito es proporcionar a Web3Forms la clave de acceso asociada con el envío del formulario.

Debido al prefijo `NEXT_PUBLIC_`, este valor puede estar disponible en el JavaScript ejecutado por el navegador. Por ello, no debe tratarse como un secreto ni almacenarse una clave privada dentro de esta variable.

## 9. Validaciones y estados del formulario

### Validaciones del navegador

Los campos implementados utilizan validación HTML:

- Nombre: requerido y máximo de 100 caracteres.
- Correo electrónico: requerido, formato de correo electrónico y máximo de 254 caracteres.
- Asunto: requerido y máximo de 150 caracteres.
- Mensaje: requerido y máximo de 2000 caracteres.
- CAPTCHA: se requiere un token antes de iniciar la petición.

Los límites están definidos mediante `required`, `type="email"` y `maxLength`.

Estas validaciones se ejecutan en el navegador o antes de que `handleSubmit` inicie el envío. No existe una validación propia del lado del servidor en el repositorio.

### Estados

El estado `submitStatus` admite:

- `idle`: no hay mensaje destacado.
- `captcha`: solicita completar la verificación CAPTCHA.
- `success`: confirma el envío correcto y limpia el formulario.
- `error`: informa un fallo general.

Mientras `isSubmitting` es verdadero:

- El botón se deshabilita.
- El texto cambia a “Enviando…” o a su equivalente en inglés.
- Las ejecuciones adicionales del manejador de envío se detienen.

Los estilos diferencian visualmente los mensajes de éxito y error mediante bordes laterales y mensajes accesibles con `role="status"` o `role="alert"`.

## 10. Manejo de respuestas y errores

El manejador distingue los siguientes casos:

- Sin token CAPTCHA: estado `captcha`, sin petición externa.
- Falta de clave de Web3Forms: error interno y estado `error`.
- Respuesta que no puede convertirse a JSON: error interno y estado `error`.
- Respuesta HTTP no satisfactoria: registro del estado HTTP y estado `error`.
- Respuesta satisfactoria sin `success: true`: estado `error`.
- Respuesta satisfactoria con `success: true`: estado `success` y limpieza del formulario.

Todos los intentos finalizan reiniciando `captchaToken`, desactivando `isSubmitting` y reiniciando el widget hCaptcha.

## 11. Consideraciones de seguridad

- El identificador público de hCaptcha es visible en el código de cliente y no debe considerarse secreto.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` queda expuesta al navegador por la naturaleza de una variable `NEXT_PUBLIC_*`; no debe almacenarse como secreto.
- El CAPTCHA ayuda a solicitar una respuesta verificable, pero no sustituye controles propios del servidor.
- Los datos enviados pueden ser manipulados por el navegador o por herramientas de red.
- No existe una API interna que vuelva a validar el correo, el contenido o el token antes de enviar.
- No se implementan desde el repositorio límite de frecuencia, bloqueo de solicitudes, protección adicional contra abuso, sanitización posterior ni registros propios de auditoría.
- La seguridad real depende parcialmente de las políticas y configuraciones de hCaptcha y Web3Forms.
- El CAPTCHA no garantiza por sí solo que el envío sea legítimo o seguro.

## 12. Limitaciones de la Implementación.

El formulario depende de servicios externos para procesar los envíos y realizar la verificación CAPTCHA.

La aplicación no implementa un backend propio para recibir los mensajes ni para validar directamente los tokens CAPTCHA. La comunicación con Web3Forms se realiza desde el navegador.

Además, la clave de acceso de Web3Forms utiliza el prefijo NEXT_PUBLIC_, por lo que está disponible en el código del cliente y no debe tratarse como una credencial secreta.

El funcionamiento del formulario depende de la disponibilidad y configuración de Web3Forms y hCaptcha.
