# @cblackcom/term-ui

UI component library for prototyping.  License MIT.

---

## Internal

### Designs

See "Wave" in PNDLM Design Figma account.

### Plain HTML version

Currently uncommitted; for now, view source on https://static.pndlm.net for a starting point.

### Setup

If you install the official "Oxc" plugin under the Recommended Extensions of vscode, you will see linter errors automatically within the code editor and should not need to run the linter separately.

### Component Development

```sh
pnpm storybook
```

### Storybook

(WIP) Component previews ~~are~~ should be published to GitHub Pages on every push to `development`, but this configuration needs to be completed when the library is in more usable shape.

### Using locally

To try changes in another Vite project on disk before publishing to npm, link directly to this repo instead of installing from the registry.

In the other project's `package.json`:

```jsonc
"dependencies": {
	"@cblackcom/term-ui": "link:/absolute/path/to/term-ui"
}
```

Then `pnpm install` in that project. This creates a real symlink, so imports resolve through this package's `exports` field exactly as they would post-publish — which also means `dist/` has to exist and stay up to date:

```sh
pnpm watch
```

The other project's Vite config needs `resolve.dedupe` for `react` and `react-dom`. Without it, the consuming app can end up loading two separate copies of React (its own, and the one in this repo's `node_modules`), which breaks hooks with an error like
`TypeError: null is not an object (evaluating '...useContext')`:

```ts
// vite.config.ts, in the OTHER project
export default defineConfig({
	resolve: {
		dedupe: ['react', 'react-dom'],
	},
})
```

If Vite's dev server can't see files through the symlink, or its dependency pre-bundler treats this package as unprocessed source, also try:

```ts
export default defineConfig({
	resolve: { dedupe: ['react', 'react-dom'] },
	optimizeDeps: { include: ['@cblackcom/term-ui'] },
	server: { fs: { allow: ['/absolute/path/to/term-ui'] } },
})
```
