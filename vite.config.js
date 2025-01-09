import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Импортируем плагин

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Плагин для поддержки React
    svgr(),  // Плагин для поддержки SVG как React-компонентов
  ],
});