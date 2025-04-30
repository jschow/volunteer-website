import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  // For development
  server: {
    port: 3000,
    host: true,
  },
  // For preview (e2e tests)
  preview: {
    port: 3001,
    host: true,
  },
});
