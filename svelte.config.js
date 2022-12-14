import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { config as mdsvexConfig } from './mdsvex.config.js';
import { defineConfig } from "vite";
import compress from "vite-plugin-compression";
import { viteSingleFile } from "vite-plugin-singlefile";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),

		vite: defineConfig({
			plugins: [
				compress({ algorithm: "brotliCompress" }),
				viteSingleFile()
			],
			
		})
	}
};

export default config;
