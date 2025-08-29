// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    allowedHosts: ['codehub.devabraham.com'],
    host: true,
    port: 4321
  }
});