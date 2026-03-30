// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ensure a fully static site output.
  output: 'static',
  vite: {
    server: {
      allowedHosts: ["51bf-185-191-52-200.ngrok-free.app"],
    },
  },
});
