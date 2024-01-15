import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      //或
      // "~": path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
})
