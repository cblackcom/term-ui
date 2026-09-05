import { type CSSObject } from '@emotion/react'

export enum TermUiBreakpoint {
	TabletMinWidth = '720px',
}

export const TermUiFont = {
	RegularNormal: {
		fontFamily: '"IBM Plex Mono", monospace',
		fontWeight: 400,
		fontStyle: 'normal',
	},
	MediumNormal: {
		fontFamily: '"IBM Plex Mono", monospace',
		fontWeight: 500,
		fontStyle: 'normal',
	},
	BoldItalic: { fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, fontStyle: 'italic' },
} as const satisfies Record<string, CSSObject>

export enum TermUiColorVar {
	Transparent = 'var(--termui-color-transparent)',
	White = 'var(--termui-color-white)',
	ScreenBg = 'var(--termui-color-screen-bg)',
	Orange = 'var(--termui-color-orange)',
	Orange08 = 'var(--termui-color-orange08)',
	Orange08T = 'var(--termui-color-orange08t)',
}

// TermUiRawHexColor mirrors the :root values below as plain hex, for
// consumers that can't resolve a CSS custom property -- e.g. drawing to a
// <canvas> (a generated QR code, etc.) rather than through normal CSS.
// sRGB only -- unlike TermUiColorVar, this doesn't get the display-p3
// upgrade below, since canvas fillStyle doesn't support that color() syntax.
export const TermUiRawHexColor = {
	Orange: '#fd6a00',
	Transparent: '#00000000',
} as const

export const termUiGlobalStyle: CSSObject = {
	':root': {
		'--termui-color-transparent': 'transparent',
		'--termui-color-white': 'white',
		'--termui-color-screen-bg': '#1d1d1d',
		'--termui-color-orange': 'rgb(253, 106, 0)',
		// this color was invented by using the opacity slider in xd
		// but actually we need the default version of it to be opaque
		// so that boxes can overlay and still be usable
		'--termui-color-orange08': 'rgb(47, 35, 27)',
		// this is the actual transparent version of the preceeding
		'--termui-color-orange08t': 'rgba(253, 106, 0, 0.08)',
		'--termui-radius': '0.25rem',
		'--termui-opacity-disabled-box': 0.24,
		'--termui-opacity-disabled-control': 0.4,
	},
	'@supports (color: color(display-p3 1 1 1))': {
		':root': {
			'--termui-color-screen-bg': 'color(display-p3 0.114 0.114 0.114)',
			'--termui-color-orange': 'color(display-p3 0.992 0.416 0.000)',
			'--termui-color-orange08': 'color(display-p3 0.184 0.138 0.105)',
			'--termui-color-orange08t': 'color(display-p3 0.992 0.416 0.000 / 0.08)',
		},
	},
	'body, #root, #reactroot': {
		margin: 0,
		padding: 0,
		width: '100vw',
		height: '100vh',
		overflow: 'hidden',
		background: 'var(--termui-color-screen-bg)',
	},
	'body > *': {
		color: 'var(--termui-color-orange)',
		...TermUiFont.RegularNormal,
		fontSize: `${14 / 16}rem`,
	},
	'input,button': {
		...TermUiFont.MediumNormal,
		fontSize: `${14 / 16}rem`,
	},
	a: {
		color: 'inherit',
		...TermUiFont.BoldItalic,
		'&:hover': {
			textDecoration: 'none',
		},
	},
	'h1,h2,h3,h4,h5,h6': {
		...TermUiFont.BoldItalic,
	},
	h1: {
		fontSize: '2rem',
	},
	h2: {
		fontSize: '1.33rem',
	},
	h3: {
		fontSize: '1.17rem',
	},
}
