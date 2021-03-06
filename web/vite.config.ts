import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss'
import solidPlugin from 'vite-plugin-solid';

let DEV = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [WindiCSS(), solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    host: '0.0.0.0'
  },
  base: DEV ? '/' : '/public/',
});
