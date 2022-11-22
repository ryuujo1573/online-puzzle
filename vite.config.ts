import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import windiCSS from 'vite-plugin-windicss';
import router from 'vite-plugin-react-views';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        mdx(),
      ]
    },
  },
  plugins: [
    react(),
    {
      ...mdx(),
      enforce: 'pre',
      apply: 'build',
    },
    windiCSS(),
    router(),
    // reactPages({ pagesDir: path.join(__dirname, 'pages') }),
  ],
});
