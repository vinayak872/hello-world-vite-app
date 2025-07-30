import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hello-world-vite-app/',    REPO-NAME
  plugins: [react()],
});
