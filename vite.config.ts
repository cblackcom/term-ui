import { resolve } from 'node:path'
import { execSync } from 'node:child_process'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const emitDeclarations = (): Plugin => ({
	name: 'emit-declarations',
	// closeBundle() fires after every build, including each rebuild in
	// `vite build --watch`, so this keeps dist/*.d.ts in sync without needing
	// a separate build step.
	// Not incremental: vite empties dist/ on every rebuild (including
	// mid-watch-session, not just the first), which would desync an
	// incremental tsc cache from what's actually still on disk and cause it to
	// skip re-emitting files it wrongly believes are already there.
	closeBundle() {
		console.log(`\n[emit-declarations] generating type declarations...`)
		const start = Date.now()
		try {
			execSync('tsc -p tsconfig.emit.json', { stdio: 'inherit' })
		} catch (error) {
			console.error('[emit-declarations] failed to generate type declarations')
			// In watch mode, keep the watcher alive so it can recover on the next save
			// instead of dying on every type error. A one-shot build should still fail
			// the process so CI catches it.
			if (!this.meta.watchMode) {
				throw error
			}
			return
		}
		console.log(`[emit-declarations] done in ${Date.now() - start}ms`)
	},
})

export default defineConfig({
	define: {
		φ: (1 + Math.sqrt(5)) / 2,
	},
	plugins: [
		react({
			// https://oxc.rs/blog/2026-08-18-react-compiler-support.html
			// compiler: true,
		}),
		emitDeclarations(),
	],
	build: {
		lib: {
			entry: resolve(import.meta.dirname, 'src/index.ts'),
			name: '@cblackcom/term-ui',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: (id) => {
				if (['react', 'react-dom', 'react/jsx-runtime', '@emotion/react', '@emotion/styled'].includes(id)) {
					return true
				}
				// Library-mode builds otherwise inline every asset referenced from CSS
				// (the font files globalStyle.ts imports) as base64 data URIs regardless
				// of size (build.assetsInlineLimit has no effect here), which defeats
				// @font-face unicode-range's normal lazy-fetch behavior and bloats
				// dist/index.css to 500+ KB. Externalizing by prefix (rather than listing
				// each weight file, which would duplicate globalStyle.ts's own import
				// list) leaves these imports untouched in dist/index.js so the consumer's
				// own bundler resolves and serves them normally. Scoped to this vendor
				// package specifically (not just any *.css) so a future local stylesheet
				// authored in src/ would still get bundled/copied normally rather than
				// left as a dangling relative import.
				return id.startsWith('@fontsource/')
			},
		},
		sourcemap: true,
	},
})
