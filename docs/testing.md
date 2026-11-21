# Testing

Este documento registra las pruebas de rendimiento y accesibilidad realizadas al portafolio web, así como los problemas detectados, las correcciones aplicadas y los resultados obtenidos.

## 1. Lighthouse

Se realizó una auditoría utilizando **Lighthouse** desde las herramientas de desarrollo de Google Chrome (DevTools).

**Resultado inicial:**

- **Puntuación:** 96/100.

### 1.1. Problemas detectados

La auditoría identificó una incidencia relacionada con el contraste entre el texto y el fondo (*Contrast*).

**Descripción:**

> Background and foreground colors do not have a sufficient contrast ratio.

Los elementos afectados fueron:

- Botón «Descargar CV» (`Hero.module.css`).
- Botón «Enviar mensaje» (`Contact.module.css`).

El problema se debía a que los colores utilizados como fondo de los botones no proporcionaban una relación de contraste suficiente con el texto blanco, incumpliendo el criterio de contraste mínimo de WCAG AA para texto normal (4.5:1).

### 1.2. Correcciones realizadas

Se ajustó la paleta de colores definida en `src/app/globals.css` para mejorar el contraste y mantener una identidad visual consistente en los temas claro y oscuro.

**Tema claro:**

| Variable | Color |
|---|---|
| `--accent` | `#047857` |
| `--accent-hover` | `#065F46` |
| `--button-accent` | `#047857` |
| `--button-accent-hover` | `#065F46` |

**Tema oscuro:**

| Variable | Color |
|---|---|
| `--accent` | `#34D399` |
| `--accent-hover` | `#6EE7B7` |
| `--button-accent` | `#047857` |
| `--button-accent-hover` | `#065F46` |

Se incorporaron las variables `--button-accent` y `--button-accent-hover` para separar los colores utilizados en textos, iconos y enlaces de los destinados a los botones con texto blanco.

También se actualizaron los siguientes archivos:

- **`Hero.module.css`:** se modificaron los estilos del botón de descarga del CV para utilizar las nuevas variables de color.
- **`Contact.module.css`:** se actualizaron los estilos del botón de envío del formulario, incluyendo su estado hover.

Los colores seleccionados para los botones proporcionan las siguientes relaciones de contraste con el texto blanco:

| Estado | Color de fondo | Relación de contraste |
|---|---|---:|
| Normal | `#047857` | 5.48:1 |
| Hover | `#065F46` | 7.68:1 |

Ambos valores cumplen con el criterio WCAG AA para texto normal.

## 2. Axe Core

Se realizó una auditoría de accesibilidad utilizando **Axe DevTools**, extensión de navegador basada en el motor de pruebas axe-core de Deque Systems.

### 2.1. Escenarios evaluados

Se realizaron escaneos en diferentes configuraciones de la interfaz:

- Tema claro y tema oscuro.
- Idioma español e inglés.
- Resolución de escritorio y móvil.

### 2.2. Resultados

La herramienta no detectó incidencias de accesibilidad en los escenarios evaluados.

**Resultado:** sin violaciones automatizadas detectadas.

## 3. Resumen de resultados

| Herramienta | Resultado |
|---|---|
| Lighthouse | 100/100 después de aplicar las correcciones de contraste. |
| Axe Core | Sin incidencias automatizadas detectadas en los escenarios evaluados. |

Las auditorías permitieron identificar y corregir problemas de contraste en los elementos interactivos y comprobar la accesibilidad automatizada del portafolio en diferentes temas, idiomas y tamaños de pantalla.

**Nota:** Las herramientas de análisis automatizado complementan las pruebas manuales de accesibilidad, pero no las sustituyen.