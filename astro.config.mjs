// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ensure a fully static site output.
  output: 'static',
  vite: {
    server: {
      allowedHosts: ["30fb-94-199-21-85.ngrok-free.app"],
    },
  },
});
