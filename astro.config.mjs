// @ts-nocheck
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath, URL } from 'url';
import babel from '@rollup/plugin-babel';

// https://astro.build/config
export default defineConfig({
    outDir: './dist',
    output: 'static',
    site: 'https://daniel-tenzler.github.io',
    base: '/',
    integrations: [
        mdx(),
        sitemap(),
        react({
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    vite: {
        resolve: {
            alias: {
                'src': fileURLToPath(new URL('./src',
                    import.meta.url)),
            },
        },
        plugins: [
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                include: ['src/**/*'],
                plugins: [
                    ['@emotion', {
                        autoLabel: 'always',
                        labelFormat: '[dirname]-[filename]',
                        sourceMap: true,
                    }]
                ]
            })
        ]
    },
});