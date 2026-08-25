import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig({
	define: {
		φ: ((1 + Math.sqrt(5)) / 2),
	},
	plugins: [
		react(),
		dts({
			include: ["src"],
		}),
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
