import { defineConfig } from 'oxfmt'

// see also editor.defaultFormatter, editor.formatOnSave
// in .vscode/settings.json

export default defineConfig({
	useTabs: true,
	tabWidth: 4,
	semi: false,
	singleQuote: true,
})
