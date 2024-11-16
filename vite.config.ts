import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      utils: '/src/utils',
      services: '/src/services',
      styles: '/src/styles',
      config: '/src/config',
      hooks: '/src/hooks',
      types: '/src/types',
    },
  },
});
