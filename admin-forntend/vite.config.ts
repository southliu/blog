import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePluginElementPlus({
    //   // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
    //   // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
    //   // 的文档注释
    //   // useSource: true
    //   format: process.env === 'development' ? 'esm' : 'cjs',
    // })
  ],
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
  server: {
    port: 8080,
    open: true
  }
})
