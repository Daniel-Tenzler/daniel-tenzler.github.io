// @ts-nocheck
/* global process */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath, URL } from 'url';
import babel from '@rollup/plugin-babel';
import { config } from 'dotenv';

// Load environment variables
config();

// https://astro.build/config
const baseUrl = process.env.BASE_URL || 'https://daniel-tenzler.github.io';

export default defineConfig({
	outDir: './dist',
	output: 'static',
	site: baseUrl,
	base: baseUrl === 'https://daniel-tenzler.github.io' ? '/' : '/',

	build: {
		assetsInlineLimit: 0,

		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'emotion-vendor': ['@emotion/react', '@emotion/styled'],
					'markdown-vendor': ['react-markdown'],
				},
				chunkFileNames: () => {
					return `assets/[name]-[hash].js`;
				},
			},
		},
	},

	compression: true,

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
				src: fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		build: {
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
			},
		},
		plugins: [
			babel({
				babelHelpers: 'bundled',
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				include: ['src/**/*'],
				plugins: [
					[
						'@emotion',
						{
							autoLabel: 'always',
							labelFormat: '[dirname]-[filename]',
							sourceMap: false,
						},
					],
				],
			}),
		],
	},
});
