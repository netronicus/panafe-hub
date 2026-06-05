# Guía SEO - PANAFE Hub

## Checklist de verificación SEO

### Meta tags
- [ ] Title único en cada página (≤ 60 caracteres)
- [ ] Description única en cada página (≤ 160 caracteres)
- [ ] Canonical URL correcta
- [ ] Open Graph tags completos
- [ ] Twitter Cards configuradas

### Archivos estáticos
- [x] `public/sitemap.xml` con todas las URLs
- [x] `public/robots.txt` apuntando al sitemap
- [x] `public/og-image.png` (1200x630)
- [x] `public/apple-touch-icon.png` (180x180)
- [ ] `public/google-verification.html` - Requiere código real

### Schema markup
- [x] WebSite schema en página principal
- [x] HowTo schema en páginas de operadoras
- [x] FAQPage schema en páginas de FAQ
- [x] BreadcrumbList schema en todas las páginas

### Google Search Console

1. Ve a https://search.google.com/search-console
2. Añade tu propiedad: `https://panafe-hub.localto.net/`
3. Elige el método de verificación por "Etiqueta HTML"
4. Copia el código de verificación (ej: `abc123def456`)
5. Reemplaza `CODIGO_DE_VERIFICACION` en `public/google-verification.html`
6. Despliega el sitio
7. Vuelve a Search Console y haz clic en "Verificar"
8. Sube el sitemap en "Sitemaps" → `sitemap.xml`

### Rich Results Test

Prueba tus páginas en:
- https://search.google.com/test/rich-results
- Ingresa la URL de cada página nueva
- Verifica que los schemas HowTo y FAQPage se detecten correctamente

### URLs indexables

| Página | URL |
|--------|-----|
| Inicio | `https://panafe-hub.localto.net/` |
| Registro Telcel | `https://panafe-hub.localto.net/#/registro-telcel` |
| Registro AT&T | `https://panafe-hub.localto.net/#/registro-att` |
| Registro Movistar | `https://panafe-hub.localto.net/#/registro-movistar` |
| Documentos | `https://panafe-hub.localto.net/#/documentos-requeridos` |
| Extranjeros | `https://panafe-hub.localto.net/#/extranjeros` |
| Empresas | `https://panafe-hub.localto.net/#/empresas` |
| Estafas | `https://panafe-hub.localto.net/#/estafas` |
| FAQ | `https://panafe-hub.localto.net/#/faq` |

### Notas

- El sitio usa **HashRouter**, por lo que las URLs contienen `/#/`. Esto es subóptimo para SEO pero necesario para GitHub Pages/localto.net.
- Google puede indexar contenido de SPAs con hash, aunque con limitaciones.
- El contenido de las nuevas páginas es estático y renderizado en el cliente.
- Los meta tags se inyectan dinámicamente via React Helmet Async.
