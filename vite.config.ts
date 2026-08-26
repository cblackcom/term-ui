import { resolve } from "node:path"
import { execSync } from "node:child_process"
import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"

// unplugin-dts couldn't resolve this project's re-exports (see tsconfig.build.json),
// so declarations are emitted by shelling out to tsc instead. closeBundle fires after
// every build, including each rebuild in `vite build --watch`, so this keeps dist/*.d.ts
// in sync without needing a separate build step. Not incremental: vite empties dist/ on
// every rebuild (including mid-watch-session, not just the first), which would desync an
// incremental tsc cache from what's actually still on disk and cause it to skip re-emitting
// files it wrongly believes are already there.
const emitDeclarations = (): Plugin => ({
	name: "emit-declarations",
	closeBundle() {
		console.log("\n[emit-declarations] generating type declarations...")
		const start = Date.now()
		try {
			execSync("tsc -p tsconfig.build.json", { stdio: "inherit" })
		} catch (error) {
			console.error("[emit-declarations] failed to generate type declarations")
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
		φ: ((1 + Math.sqrt(5)) / 2),
	},
	plugins: [
		react(),
		emitDeclarations(),
	],
	build: {
		lib: {
			entry: resolve(import.meta.dirname, "src/index.ts"),
			name: "@cblackcom/term2026",
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			external: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"@emotion/react",
				"@emotion/styled",
			],
		},
		sourcemap: true,
	},
})
