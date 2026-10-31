import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    rolldownOptions: {
      output: {
        // Keep stable vendor chunks so app updates do not bust their cache.
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/,
            },
            { name: 'motion', test: /node_modules[\\/](motion|framer-motion)[^\\/]*[\\/]/ },
            { name: 'icons', test: /node_modules[\\/](lucide-react|simple-icons)[\\/]/ },
          ],
        },
      },
    },
  },
})
