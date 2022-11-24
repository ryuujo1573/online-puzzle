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
      plugins: []
    },
  },
  plugins: [
    react(),
    mdx(),
    windiCSS(),
    router(),
  ],
  resolve: {
    alias: [
      { find: '@comps', replacement: path.resolve(__dirname) + '/src/components' }
    ]
  }
});
