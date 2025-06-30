import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: 'entry-bundle.js',
  output: {
    file: 'dist/lit-all.bundle.js',
    format: 'esm',
    sourcemap: false
  },
  plugins: [
    resolve({ browser: true, exportConditions: ['default', 'module'] }),
    commonjs()
  ],
  treeshake: true
});