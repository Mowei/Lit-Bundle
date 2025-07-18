import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default defineConfig({
  input: 'entry-bundle.js',
  output: {
    file: 'dist/lit-all.min.js',
    format: 'esm',
    sourcemap: false,
    plugins:[terser({
      format:{
        comments:false
      }
    })]    
  },
  plugins: [
    resolve({ browser: true, exportConditions: ['default', 'module'] }),
    commonjs(),
    terser(),
  ],
  treeshake: false
},
  {
    input: 'entry-bundle.js',
    output: {
      file: 'dist/lit-all.min2.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
  );
