import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.API_URL': process.env.VITE_API_URL
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './shared'),
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, './src'),
    }
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8081,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8081",
  }
});