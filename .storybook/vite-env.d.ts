/// <reference types="vite/client" />

// @fontsource's per-weight exports (e.g. "400.css") only declare "sass"/"default"
// conditions, not "types", so TS resolves a real file but finds no declaration
// and won't fall back to vite/client's ambient `declare module '*.css'`.
declare module '@fontsource/ibm-plex-mono/*.css'
