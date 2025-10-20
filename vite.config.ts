import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import']
      }
    }
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress warnings about public directory paths
        if (warning.code === 'FILE_NAME_CONFLICT') return
        warn(warning)
      }
    }
  }
})
