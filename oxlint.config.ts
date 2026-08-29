import { defineConfig } from 'oxlint'

export default defineConfig({
	plugins: ["react", "typescript", "oxc"],
	options: {
		typeAware: true,
		typeCheck: true,
	},
	rules: {
		'react/rules-of-hooks': 'error',
		'react/only-export-components': ['error', { allowConstantExport: true }],
	},
})
