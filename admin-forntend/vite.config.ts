import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/", // 设置打包路径
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@utils": "/src/utils"
    }
  },
  define: {
    'process.env': {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/global.scss";'
      }
    }
  },
  server: {
    port: 8080,
    open: true
  }
})
