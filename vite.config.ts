import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// @ts-ignore
import nodeExternals from './src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    nodeExternals(),
  ],
  build: {
    lib: {
      fileName: 'index',
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
    },
    polyfillModulePreload: false,
    modulePreload: false,
    sourcemap: false,
    minify: false,
    copyPublicDir: false,
    cssCodeSplit: true,
    outDir: 'dist',
  },
})
