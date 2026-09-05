import { defineConfig } from 'oxlint'

export default defineConfig({
	plugins: ['react', 'typescript', 'oxc'],
	options: {
		// oxlint will error out if type options are present
		// anywhere other than the root package
		typeAware: true,
		typeCheck: true,
	},
	categories: {
		// includes react/exhaustive-deps
		correctness: 'error',
	},
	rules: {
		// create-vite react-ts defaults below 👇
		'react/rules-of-hooks': 'error',
		'react/only-export-components': ['error', { allowConstantExport: true }],
		// custom preferences below 👇
		'react/exhaustive-effect-dependencies': 'error',
	},
})
