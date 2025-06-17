import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    port: 9091,
    open: true,
    proxy: {
      "/api": {
        target: 'https://localhost:9091', // Cambia esto a la URL de tu backend
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", "")
      }
    }
  }
})
