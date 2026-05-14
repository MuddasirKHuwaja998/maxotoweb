import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  ssr: {
    noExternal: ['@tanstack/start']
  },
  preview: {
    allowedHosts: ['maxoto-q8qb.onrender.com']
  }
})
