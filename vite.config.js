import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Khondamir-cyber.github.io/portfolio',
  build: {
    outDir: 'dist',
    assetsDir: './',
  }
})
