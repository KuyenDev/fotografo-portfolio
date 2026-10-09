# NOIR FRAME — Photography Studio
## KuyénDev Web Showcase · Proyecto 01: Fotografía Profesional

> **Aviso de Demostración**: Este proyecto es una muestra visual y técnica desarrollada para el catálogo de diseños web de **KuyénDev**. La marca "NOIR FRAME", sus proyectos, series fotográficas, datos de contacto y cotizaciones son ficticios y tienen un propósito exclusivamente ilustrativo.

---

## 1. Objetivo de la Demostración

El propósito de esta web es demostrar el nivel de dirección de arte, diseño de interacción, arquitectura frontend y sensibilidad estética que **KuyénDev** ofrece a fotógrafos de autor, directores creativos, agencias de publicidad y estudios editoriales de alta gama.

El diseño se aleja deliberadamente de las plantillas comerciales genéricas, ofreciendo:
- Una experiencia editorial cinematográfica inspirada en publicaciones de arte contemporáneo y diseño suizo.
- Tipografía monumental y escalado fluido (`clamp()`).
- Ritmo visual asimétrico en cada sección (sin patrones de tarjetas repetitivas).
- Galería adaptable con filtrado dinámico en tiempo real y visor Lightbox inmersivo con metadatos EXIF.
- Navegación estática resiliente optimizada para despliegue sin costos en GitHub Pages.

---

## 2. Tecnologías Utilizadas

- **React 18**: Biblioteca base para componentes reactivos y arquitectura modular.
- **TypeScript**: Tipado estricto de extremo a extremo para asegurar mantenibilidad y consistencia.
- **Vite 6**: Empaquetador y entorno de desarrollo ultra veloz.
- **Vanilla CSS + Design Tokens**: Arquitectura de tokens CSS nativos (`tokens.css`) sin dependencias de frameworks CSS externos, brindando control absoluto sobre la estética y el rendimiento.
- **Framer Motion**: Motion design refinado, orquestación de entradas, transiciones de filtros y microinteracciones.
- **Lucide React**: Iconografía minimalista y precisa de trazo fino (sin emojis).
- **React Router (HashRouter)**: Enrutamiento del lado del cliente 100% compatible con GitHub Pages en cualquier subdirectorio, sin riesgo de errores 404 al recargar páginas internas.

---

## 3. Instalación de Dependencias

Requisitos previos: **Node.js 18+** y **npm**.

```bash
# Clonar el repositorio o ingresar a la carpeta del proyecto
cd fotografo-web

# Instalar dependencias
npm install
```

---

## 4. Iniciar en Modo Desarrollo

Para iniciar el servidor local con recarga en caliente (HMR):

```bash
npm run dev
```

El sitio estará disponible por defecto en: `http://localhost:5173/`

---

## 5. Compilación para Producción

Para compilar el proyecto en archivos estáticos listos para producción:

```bash
npm run build
```

Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

Para previsualizar la compilación localmente:

```bash
npm run preview
```

---

## 6. Despliegue en GitHub Pages

El proyecto ya está preconfigurado para GitHub Pages:
- `vite.config.ts` utiliza `base: './'` para rutas relativas.
- `App.tsx` utiliza `HashRouter`, permitiendo navegar y recargar rutas internas sin necesitar redirecciones de servidor.

### Pasos para publicar:

1. **Opción A: GitHub Actions (Recomendada)**
   Crea un archivo `.github/workflows/deploy.yml` con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Opción B: Despliegue manual con `gh-pages`**
```bash
npm install -D gh-pages
# Agregar en scripts de package.json: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## 7. Cómo Cambiar la Marca (Personalización)

Toda la identidad de marca está centralizada en [`src/config/site.ts`](file:///home/kuyen/Proyectos/Webs/Portafolio%20de%20dise%C3%B1os/fotografo-web/src/config/site.ts):

```typescript
export const siteConfig = {
  brand: {
    name: 'TU MARCA O NOMBRE',
    sub: 'PHOTOGRAPHY STUDIO',
    fullName: 'TU NOMBRE — ESTUDIO FOTOGRÁFICO',
    tagline: 'Tu frase o manifiesto central...',
    concept: 'Retratos, moda y arquitectura...',
    location: 'Ciudad, País',
  },
  // Configuración de contacto, redes sociales y créditos de KuyénDev...
};
```

---

## 8. Cómo Cambiar Fotografías

Las imágenes de la galería principal se gestionan en [`src/data/gallery.ts`](file:///home/kuyen/Proyectos/Webs/Portafolio%20de%20dise%C3%B1os/fotografo-web/src/data/gallery.ts). Cada elemento cuenta con:

```typescript
{
  id: 'port-1',
  title: 'Título de la Fotografía',
  category: 'PORTRAITS', // 'PORTRAITS' | 'EDITORIAL' | 'FASHION' | 'ARCHITECTURE' | 'EVENTS'
  year: '2025',
  aspectRatio: 'vertical', // 'vertical' | 'horizontal' | 'square' | 'wide'
  imageUrl: 'https://tus-imagenes... o ./images/portraits/tu-foto.jpg',
  alt: 'Texto descriptivo accesible',
  description: 'Descripción editorial o contextual',
  camera: 'Hasselblad X2D 100C',
  lens: '90mm f/2.5',
  aperture: 'f/2.8',
  shutter: '1/320s',
  iso: 'ISO 64',
  location: 'Santiago, Chile'
}
```

---

## 9. Cómo Agregar o Modificar Proyectos

Los proyectos y series monográficas se configuran en [`src/data/projects.ts`](file:///home/kuyen/Proyectos/Webs/Portafolio%20de%20dise%C3%B1os/fotografo-web/src/data/projects.ts).
Cada proyecto genera automáticamente su propia página interna en `#/project/:slug` con su hero fotográfico, ficha técnica, galería editorial alternada y teaser hacia el siguiente proyecto.

---

## 10. Cómo Editar Servicios

Los paquetes de servicio se configuran en [`src/data/services.ts`](file:///home/kuyen/Proyectos/Webs/Portafolio%20de%20dise%C3%B1os/fotografo-web/src/data/services.ts). Puedes editar el título, descripción, entregables, pasos del proceso y rango de inversión. Cada servicio enlaza de forma directa con el formulario de contacto con su nombre preseleccionado.

---

## 11. Cómo Cambiar Colores y Fuentes

Los tokens globales de diseño se encuentran en [`src/styles/tokens.css`](file:///home/kuyen/Proyectos/Webs/Portafolio%20de%20dise%C3%B1os/fotografo-web/src/styles/tokens.css):

```css
:root {
  --color-bg: #0B0B0B;            /* Fondo principal oscuro */
  --color-surface: #131313;       /* Superficie de tarjetas */
  --color-text-primary: #F4F1EB;  /* Texto principal */
  --color-text-secondary: #A7A39D;/* Texto secundario */
  --color-accent: #B99B76;        /* Acento oro/champagne */
  
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

---

## 12. Funcionalidades Simuladas en la Demostración

Para mantener el proyecto como un archivo estático seguro, sin costes y sin compromisos legales:
1. **Formulario de Contacto**: Valida todos los campos en el navegador (nombre, formato de email, selección de servicio, mensaje) y muestra un modal de confirmación con el resumen de la consulta. **No transmite datos a servidores externos ni almacena información personal.**
2. **Precios y Presupuestos**: Los montos expuestos en la página de servicios son valores referenciales de ejemplo identificados como ficticios.
3. **Ficha de Clientes y Proyectos**: Las marcas y exposiciones mencionadas son ejercicios conceptuales de diseño.
4. **Protección Visual Ligera**: Desactiva el arrastre accidental de imágenes y muestra una notificación discreta al hacer clic derecho sobre las fotos de la galería, preservando la accesibilidad y el copiado de textos y formularios.

---

## 13. Qué Faltaría para Convertirla en una Web Comercial Real

Para transformar esta demostración en la web oficial activa de un cliente real:
1. **Conexión de Formulario**: Integrar un servicio de correos o API serverless como Formspree, Resend o EmailJS, o un webhook hacia el CRM del cliente.
2. **Fotografías Originales y CDN**: Subir el catálogo de obras del fotógrafo en formatos optimizados (WebP / AVIF) a Cloudinary, BunnyCDN o un bucket S3.
3. **Dominio Propio y SSL**: Configurar un dominio personalizado (ej. `estudioperz.com`) en Cloudflare o GitHub Pages con certificado SSL.
4. **SEO Indexable**: Cambiar `<meta name="robots" content="noindex, nofollow" />` en `index.html` a `index, follow`, y agregar un `sitemap.xml` y Schema.org estructurado para `LocalBusiness` o `Photographer`.
5. **Políticas de Privacidad**: Incorporar páginas de Aviso Legal y Política de Privacidad adaptadas a la legislación local.
6. **Sistema de Contenidos (Opcional)**: Conectar los archivos de datos a un CMS headless como Sanity, Strapi o Decap CMS si el fotógrafo requiere subir nuevas fotografías sin editar código.

---

Diseño y desarrollo frontend por **KuyénDev** · Demostración de portafolio web.
