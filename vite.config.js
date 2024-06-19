import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
  AutoImport({
    include: [
      /\.[tj]sx?$/,
      /\.vue$/,
      /\.vue\?vue/,
    ],
    imports: [
      // @ts-expect-error
      'vue',
      // @ts-expect-error
      'vue-router',
      // @ts-expect-error
      'vitest',
    ],
    vueTemplate: true
  })],
  optimizeDeps: {
    exclude: ['w3c-css-validator']
  },
  publicPath: process.env.NODE_ENV === "production" ? '/tp-seconde/' : "/"
  // base: '/tp-seconde/'
})