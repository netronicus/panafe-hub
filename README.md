# PANAFE Hub 🇲🇽

**Herramienta informativa para registrar tu línea móvil en el PANAFE antes del 30 de junio de 2026.**

PANAFE Hub es una aplicación web independiente de página única (SPA) que ayuda a usuarios en México a comprender y cumplir con el registro obligatorio de líneas móviles en el PANAFE. La aplicación no tiene backend ni servidor propio; todos los datos personales se almacenan exclusivamente en el Almacenamiento Local del navegador.

🔗 **Sitio en vivo:** [https://panafe-hub.localto.net/](https://panafe-hub.localto.net/)

---

## 🚀 Características

- **Cuenta regresiva en tiempo real** hasta la fecha límite del PANAFE (30 de junio de 2026)
- **Directorio de operadoras** con enlaces directos a los portales oficiales de registro:
  - Telcel, AT&T, Movistar, Bait, Altán Redes, Virgin Mobile, Flash Mobile
- **Seguimiento personal de líneas** — CRUD privado para administrar tus registros
- **Checklist de documentos** interactivo con filtros por tipo de usuario
- **Alertas de estafas** — Conoce patrones de fraude y reporta intentos de phishing
- **Preguntas frecuentes** con respuestas claras sobre el proceso de registro
- **Exportación de datos** en JSON y CSV
- **100% privacidad** — Sin servidores, sin cookies de seguimiento, sin analíticas

---

## 🛠️ Tecnologías

| Tecnología | Versión |
|---|---|
| React | 18.3.1 |
| TypeScript | 5.5.3 |
| Vite | 5.4.1 |
| Tailwind CSS | 3.4.10 |
| react-helmet-async | 2.0.5 |
| lucide-react | 0.436.0 |

---

## 📦 Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/netronicus/panafe-hub.git
cd panafe-hub

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview
```

---

## 🔒 Privacidad

- **Sin servidor:** la aplicación no envía datos a ningún servidor.
- **Almacenamiento Local:** el seguimiento de líneas y el checklist se guardan únicamente en tu navegador.
- **Enmascaramiento:** los números telefónicos se muestran parcialmente (solo primeros 3 y últimos 4 dígitos).
- **Sin cookies:** no hay seguimiento ni analíticas externas.

---

## ⚠️ Aviso legal

Este sitio es una herramienta informativa **independiente**. No está afiliado al gobierno mexicano ni a las operadoras de telefonía. Para trámites oficiales, visite siempre los portales oficiales de su compañía.

---

## 📄 Licencia

Proyecto de código abierto. Puedes usarlo, modificarlo y distribuirlo libremente.
