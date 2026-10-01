import adapter from '@sveltejs/adapter-node';
import { relative, sep } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    cssTarget: 'chrome124'
  },
	plugins: [
		sveltekit({
			compilerOptions: {
				// defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
				runes: ({ filename }) => {
					const relativePath = relative(import.meta.dirname, filename);
					const pathSegments = relativePath.toLowerCase().split(sep);
					const isExternalLibrary = pathSegments.includes('node_modules');

					return isExternalLibrary ? undefined : true;
				}
			},
			adapter: adapter()
		})
	]
});
