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
							sourceMap: true,
						},
					],
				],
			}),
		],
	},
});
