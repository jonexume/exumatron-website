import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    // Poll because filesystem change events can be missed in the desktop workspace.
    watch: {usePolling: true, interval: 300},
  },
});
