import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Essential for GitHub Pages project sites:
  base: '/Portfolio_Website/', // This must match your GitHub repository name exactly, with leading and trailing slashes.
});