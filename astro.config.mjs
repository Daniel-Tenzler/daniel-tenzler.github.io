// @ts-nocheck
/* global process */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath, URL } from 'url';
import { config } from 'dotenv';
import babel from '@rollup/plugin-babel';

// Load environment variables
config();

// https://astro.build/config
const baseUrl = process.env.BASE_URL || 'https://daniel-tenzler.github.io';

export default defineConfig({
	outDir: './dist',
	output: 'static',
	site: baseUrl,
	base: baseUrl === 'https://daniel-tenzler.github.io' ? '/' : '/',

	// Inline small stylesheets to avoid render-blocking CSS requests
	inlineStylesheets: 'auto',

	build: {
		assetsInlineLimit: 0,

		rollupOptions: {
			output: {
				manualChunks(id) {
					// React vendor
					if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
						return 'react-vendor';
					}
					// Emotion vendor
					if (id.includes('node_modules/@emotion')) {
						return 'emotion-vendor';
					}
					// Markdown vendor
					if (id.includes('node_modules/react-markdown')) {
						return 'markdown-vendor';
					}
					// Group small utilities together (Colors, useIsMobile, etc)
					if (id.includes('/src/consts/') || id.includes('/src/hooks/') || id.includes('/src/infrastructure/')) {
						return 'shared-utils';
					}
				},
				chunkFileNames: () => {
					return `assets/[name]-[hash].js`;
				},
			},
		},
	},

	compression: true,

	integrations: [mdx(), sitemap(), react()],
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
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				babelHelpers: 'bundled',
				include: /src\/.*\.(js|jsx|ts|tsx)$/,
				plugins: ['@emotion/babel-plugin'],
			}),
		],
	},
});
