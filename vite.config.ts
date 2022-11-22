import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    WindiCSS(),
  ],
});
