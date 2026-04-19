import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
    /* ローカルで古い CSS が残りやすいブラウザ向け（開発時のみ） */
    headers: {
      'Cache-Control': 'no-store'
    }
  }
});
