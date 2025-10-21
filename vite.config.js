import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Saiful-Islam-Portfolio-Website/',
  build: {
    outDir: 'dist'
  }
})
