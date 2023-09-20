import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ['framer-motion'], // Exclude framer-motion from optimization
      },
});
