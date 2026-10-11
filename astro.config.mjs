// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site (SSG) — output murni HTML/CSS/JS ke dist/.
// Tailwind v4 dipasang sebagai Vite plugin (tanpa file tailwind.config).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
