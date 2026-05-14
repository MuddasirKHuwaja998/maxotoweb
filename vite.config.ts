import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackPlugin } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackPlugin(),
    react(),
    tsconfigPaths()
  ],
  preview: {
    allowedHosts: ['maxoto-q8qb.onrender.com']
  }
})
