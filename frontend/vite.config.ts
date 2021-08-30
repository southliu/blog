import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  server: {
    port: 7000,
    open: true
  }
})
