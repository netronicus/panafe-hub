# PANAFE Hub

## Descripción general

PANAFE Hub es una aplicación web informativa e independiente de página única (SPA) desarrollada en React 18 y TypeScript 5.5. Su objetivo es ayudar a usuarios en México a comprender y cumplir con el registro obligatorio de líneas móviles en el PANAFE antes del 30 de junio de 2026. La aplicación no tiene backend ni servidor propio; todos los datos personales del usuario se almacenan exclusivamente en el Almacenamiento Local (`localStorage`) del navegador.

La interfaz está completamente en español (`es-MX`) y está optimizada para dispositivos móviles (diseño responsive con Tailwind CSS).

## Pila tecnológica

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.3.1 | Framework de UI (modo estricto) |
| React DOM | 18.3.1 | Renderizado en el cliente |
| TypeScript | 5.5.3 | Lenguaje con configuración estricta |
| Vite | 5.4.1 | Bundler, dev server y build de producción |
| React Router DOM | 6.26.1 | Enrutamiento con `HashRouter` |
| react-helmet-async | 2.0.5 | Gestión de metadatos `<head>` |
| lucide-react | 0.436.0 | Iconos SVG (`Shield`, `CheckCircle2`, `AlertTriangle`, etc.) |
| Tailwind CSS | 3.4.10 | Estilos utilitarios |
| PostCSS | 8.4.41 | Procesamiento de CSS |
| Autoprefixer | 10.4.20 | Prefijos CSS automáticos |
| @vitejs/plugin-react | 4.3.1 | Plugin de React para Vite (Fast Refresh) |

Fuentes tipográficas: **Inter** (400, 500, 600, 700) cargada vía Google Fonts CDN en `index.html`.

## Estructura del proyecto

```
src/
├── components/          # Componentes de UI (todos con retorno explícito JSX.Element)
│   ├── Navbar.tsx       # Navegación sticky responsive con menú hamburguesa y scroll suave
│   ├── Hero.tsx         # Banner principal con cuenta regresiva en tiempo real
│   ├── CarrierDirectory.tsx   # Tarjetas de operadoras, enlaces oficiales y copiar URL
│   ├── RegistrationTracker.tsx # CRUD privado de líneas, resumen, exportación JSON/CSV
│   ├── DocumentChecklist.tsx   # Checklist interactivo con filtros por tipo de usuario y barra de progreso
│   ├── ScamAlert.tsx    # Alertas de estafas conocidas + formulario de reporte por correo
│   ├── FAQ.tsx          # Acordeón de preguntas frecuentes + fuentes oficiales
│   ├── Footer.tsx       # Pie de página con aviso legal de independencia
│   ├── PrivacyNotice.tsx # Modal (dialog) explicando el manejo local de datos
│   └── ErrorBoundary.tsx # Límite de error de clase que captura errores de renderizado
├── context/
│   └── TrackerContext.tsx # Estado global de líneas registradas (localStorage key: panafe-lines)
├── hooks/
│   ├── useCountdown.ts  # Cuenta regresiva con actualización cada segundo
│   └── useLocalStorage.ts # Persistencia tipada en localStorage con manejo de errores
├── data/
│   ├── carriers.ts      # Datos estáticos de 7 operadoras (Telcel, AT&T, Movistar, Bait, Altán, Virgin, Flash)
│   ├── deadline.ts      # Constante centralizada PANAFE_DEADLINE (2026-06-30T23:59:59-06:00)
│   ├── faq.ts           # 5 preguntas frecuentes con referencia dinámica a la fecha límite
│   └── scams.ts         # 3 reportes de fraudes conocidos (datos estáticos)
├── types/
│   └── index.ts         # Tipos compartidos: Carrier, LineEntry, FAQItem, ScamReport, etc.
├── App.tsx              # Composición de la página, Helmet global y TrackerProvider
├── main.tsx             # Punto de entrada: createRoot + StrictMode + ErrorBoundary + HelmetProvider + HashRouter
└── index.css            # Directivas de Tailwind + utilidad personalizada focus-ring

public/                  # Activos estáticos copiados directamente a dist/
├── favicon.svg
├── manifest.json        # Manifiesto PWA ligero
├── robots.txt           # Allow: / + Sitemap
└── sitemap.xml
```

## Archivos de configuración

- **package.json**: Módulos ES (`"type": "module"`). Sin frameworks de testing configurados.
- **tsconfig.json**: Configuración estricta con `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, `noImplicitReturns: true`, `forceConsistentCasingInFileNames: true`, `jsx: react-jsx`.
- **tsconfig.node.json**: Configuración project references para `vite.config.ts` (`composite: true`).
- **vite.config.ts**: Único plugin `@vitejs/plugin-react`; `base: './'` para despliegue en rutas relativas (GitHub Pages / carpetas estáticas).
- **tailwind.config.js**: Extiende colores (`mexico-green: #006847`, `mexico-red: #CE1126`, `mexico-gold: #B5A642`) y fuente sans (`Inter`, `system-ui`).
- **postcss.config.js**: Plugins `tailwindcss` y `autoprefixer`.
- **index.html**: Metadatos SEO completos (Open Graph, Twitter Cards), lang="es-MX", preconnect a Google Fonts.

## Comandos de build y desarrollo

| Comando | Descripción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo de Vite (hot reload) en localhost:5173 |
| `npm run build` | Compilar TypeScript (`tsc -b`) y construir para producción (`vite build`) |
| `npm run preview` | Previsualizar el build de producción localmente |

El build de producción se genera en `dist/`. Vite está configurado con `base: './'`, lo que permite desplegar la aplicación en rutas relativas.

## Convenciones de código

- **Módulos ES**: el proyecto usa `"type": "module"` en `package.json`.
- **Componentes funcionales**: todos los componentes son funciones con tipo de retorno explícito `JSX.Element`. `ErrorBoundary` es la única excepción: es una clase de React que implementa `componentDidCatch` y `getDerivedStateFromError`.
- **Hooks personalizados**: prefijo `use`, ubicados en `src/hooks/`.
- **Contextos**: siempre exportan un hook consumidor (`useTracker`) que lanza error si se usa fuera del provider.
- **Estilos**: se usa Tailwind CSS con clases utilitarias. No hay CSS modules ni styled-components.
- **Utilidades de Tailwind**:
  - `focus-ring`: clase utilitaria personalizada definida en `index.css` que aplica `focus:outline-none focus:ring-2 focus:ring-mexico-green focus:ring-offset-2`.
  - Colores extendidos: `mexico-green` (#006847), `mexico-red` (#CE1126), `mexico-gold` (#B5A642).
- **Navegación**: usa anclas hash (`#inicio`, `#operadoras`, `#seguimiento`, `#documentos`, `#estafas`, `#faq`) con scroll suave programado (`element.scrollIntoView({ behavior: 'smooth' })`). No hay rutas dinámicas.
- **Accesibilidad**: se usan atributos `aria-hidden`, `aria-label`, `aria-expanded`, `aria-pressed`, `aria-modal`, `role="progressbar"` y `aria-valuenow` en elementos interactivos.
- **Lenguaje en la interfaz**: todo el texto visible al usuario está en español. Se evitan términos técnicos en inglés en etiquetas, botones y mensajes (por ejemplo, se usa "Almacenamiento Local" en lugar de "localStorage").

## Testing

Actualmente el proyecto **no tiene tests automatizados**. No hay Jest, Vitest, Cypress ni Playwright configurados. Si se agrega un framework de testing, se recomienda Vitest por su compatibilidad nativa con el ecosistema Vite.

## Seguridad y privacidad

- **Sin servidor**: la aplicación no envía datos a ningún servidor. El seguimiento de líneas y el checklist de documentos se guardan únicamente en el Almacenamiento Local del navegador bajo las claves:
  - `panafe-lines` — array de objetos `LineEntry`.
  - `panafe-checklist` — array de strings con los IDs de documentos marcados.
- **Máscara de teléfono**: el componente `RegistrationTracker` enmascara los números para mostrar solo los primeros 3 y últimos 4 dígitos (ej. `551 **** 7890`).
- **Enlaces externos**: todos los enlaces a portales de operadoras usan `target="_blank"` con `rel="noopener noreferrer"`.
- **Aviso legal**: el footer incluye un aviso explícito de que el sitio es una herramienta informativa independiente, no afiliada al gobierno mexicano ni a las operadoras.
- **Modal de privacidad**: el componente `PrivacyNotice.tsx` explica al usuario que todo es local, que no hay cookies de seguimiento ni analíticas externas, y que puede exportar o eliminar sus datos.
- **Límite de error**: `ErrorBoundary.tsx` captura errores de renderizado y ofrece dos opciones: (1) recargar la página, o (2) borrar todos los datos del Almacenamiento Local y recargar (útil si los datos locales están corruptos).

## Consideraciones para agentes

- Si agregas una nueva operadora, actualiza `src/data/carriers.ts` y asegúrate de que `id` sea único. Los campos requeridos son: `id`, `name`, `logo`, `registrationUrl`, `requiredDocuments`, `methods` y `isOfficial`.
- Si modificas tipos en `src/types/index.ts`, revisa los consumidores en `TrackerContext.tsx` y `RegistrationTracker.tsx`.
- El deadline del PANAFE está centralizado en `src/data/deadline.ts` (`PANAFE_DEADLINE`, `PANAFE_DEADLINE_LABEL`, `getDaysLeft()`). Si cambia la fecha, actualiza únicamente ese archivo.
- Para nuevos iconos, usa `lucide-react` en lugar de agregar SVG manualmente.
- El proyecto usa `HashRouter`, por lo que las rutas del lado del cliente se manejan con `#`. No es necesario configurar reescrituras de servidor.
- El formulario de reporte de estafas en `ScamAlert.tsx` genera un `mailto:` a `orientacion@profeco.gob.mx`; no envía datos a ningún backend.
- Los reportes de estafas (`src/data/scams.ts`) son datos estáticos de ejemplo. Si se requiere persistencia de reportes de usuarios, se debería agregar un nuevo hook de localStorage y extender el contexto o el estado local del componente.
