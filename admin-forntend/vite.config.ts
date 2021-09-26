import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  base: "/", // 设置打包路径
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@api": "/src/servers",
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
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus']
        }
      }
    }
  }
})
