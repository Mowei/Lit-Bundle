
import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'

export default defineConfig({

    build: {
        outDir: 'dist',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        lib: {
            entry: resolve(__dirname, 'src/entry-bundle.js'),
            name: 'lit-all.min',
            fileName: 'lit-all.min',
        },
        rollupOptions: {
            plugins: [
                babel({
                    extensions: ['.js', '.ts'],
                    babelHelpers: 'runtime',
                    plugins: ['@babel/plugin-transform-runtime'],
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: false,
                                targets: {
                                    browsers: ['last 2 versions', '> 1%', 'not ie <= 11'],
                                },
                            },
                        ],
                    ],
                }),
            ],
        },
    },

})