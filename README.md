# GrowthClicksLab

Sitio construido con [Astro](https://astro.build). Landing de servicios + 4 demos completas
navegables (estética, médicos, abogados, dentistas) para prospectos del nicho.

## Levantar en local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a cualquier hosting estático
(Netlify, Vercel, cPanel, GitHub Pages, etc.).

## Estructura

- `src/pages/index.astro` — landing principal
- `src/pages/demos/index.astro` — galería de demos
- `src/pages/demos/{estetica,medicos,abogados,dentistas}.astro` — sitios demo completos
- `src/data/demos.js` — datos compartidos de las 4 demos (edítalo para cambiar textos/colores)
- `src/components/` — piezas reutilizables (Header, Footer, botón de WhatsApp, tarjeta de precio)
- `src/layouts/Layout.astro` — layout base (fuentes, meta tags)
- `src/layouts/DemoLayout.astro` — envuelve cada demo con la franja "esto es una demo"

## Cosas para revisar antes de publicar

- Cambia el número de WhatsApp y el correo en `src/data/demos.js` y `src/components/Footer.astro`
  si llegan a cambiar.
- Reemplaza los textos de reseñas de ejemplo en cada página de `src/pages/demos/` por reseñas
  reales apenas tengas tus primeros clientes del nicho.
- Los bloques "Antes/Después" y el mapa son marcadores visuales (`.gallery-item`,
  `.map-placeholder`) — reemplázalos por fotos e iframe de Google Maps reales cuando tengas
  clientes concretos para mostrar.
