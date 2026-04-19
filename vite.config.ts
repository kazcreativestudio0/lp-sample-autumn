import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

/** 開発サーバーだけ：ブラウザ・Simple Browser が古い JS/CSS を抱え続けないよう全レスポンスで無効化 */
function devNoStore(): Plugin {
  return {
    name: 'dev-no-store-headers',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        res.setHeader(
          'Cache-Control',
          'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
        );
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devNoStore()],
  server: {
    port: 5174,
    open: true,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
});
