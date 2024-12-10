import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://your-server-url',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
