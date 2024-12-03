import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'emailjs-com'], // Exclude emailjs-com from optimization
  },
  build: {
    rollupOptions: {
      external: ['emailjs-com'], // Mark emailjs-com as an external dependency
    },
  },
});
