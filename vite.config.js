import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  build: {
    rollupOptions: {
      external: ['/voice.plugin.js']
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
