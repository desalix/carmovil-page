// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio de la web: se usa para las URLs canónicas, el sitemap y las etiquetas para redes sociales.
  site: 'https://autotallerescarmovil.es',
  // URLs sin barra final (/servicios/frenos): una sola versión de cada página para Google.
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  redirects: {
    '/about': '/nosotros'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
