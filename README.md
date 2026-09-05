# @cblackcom/term-ui

UI component library for prototyping. License MIT.

---

## Usage

### Font

Components are styled for IBM Plex Mono, and it's included automatically —
`@fontsource/ibm-plex-mono` is a real `dependency` of this package, and
[`src/globalStyle.ts`](src/globalStyle.ts) imports the weights/styles actually
used (check there for the current list, since it may grow) as a side effect.
Importing anything from `@cblackcom/term-ui` pulls this in, so no extra install
or import step is needed in consuming projects.

Those font imports are externalized in `vite.config.ts`'s `rollupOptions`
rather than bundled into `dist/index.js` — the consumer's own bundler resolves
and serves them normally, which keeps `@font-face`'s unicode-range lazy-loading
intact and avoids inlining the font files into this package's own build output.

---

## Internal

### Experiments in newer tooling and best practices

- Install the official "Oxc" plugin under the "Recommended Extensions" of VSCode
    - Oxlint displays linter problems as red squigglies within the IDE editor
    - Oxfmt formats files on save to PNDLM specifications
- Vite uses TS 7 to update `d.ts` files on watcher using custom simple `emitDeclaration` plugin

### Experiments TODO

- [Oxc's React Compiler](https://oxc.rs/blog/2026-08-18-react-compiler-support.html) is ~~enabled~~ disabled in `vite.config.ts` because it appears to activate rolldown and something about it is not working. To readdress later. It _does_ work on projects that consume this library.

In the near future it will make sense to re-investigate Vite+ and tsdown.

### Designs

See "Wave" in PNDLM Design Figma account.

### Plain HTML version

Currently uncommitted; for now, view source on https://static.pndlm.net for a starting point.

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
	"@cblackcom/term-ui": "link:../relative/path/to/term-ui"
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
