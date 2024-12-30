import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
	site: 'https://www.mcareydsgn.com',
	build: {
		assets: 'assets',
		inlineStylesheets: 'auto',
	},
	devToolbar: {
		enabled: false
	}

});