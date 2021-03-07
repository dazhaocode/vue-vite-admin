import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "plugins": path.resolve(__dirname, "src/plugins"),
    }
  },
  plugins: [vue()]
})
