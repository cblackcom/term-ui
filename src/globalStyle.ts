import { type CSSObject } from "@emotion/react"

export enum TermUiBreakpoint {
	TabletMinWidth = '720px',
}

export enum TermUiColorVar {
	Transparent = 'var(--termui-color-transparent)',
	White = 'var(--termui-color-white)',
	ScreenBg = 'var(--termui-color-screen-bg)',
	Orange = 'var(--termui-color-orange)',
	Orange08 = 'var(--termui-color-orange08)',
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
		// but actually we need it to be opaque so that
		// boxes can overlay and still be usable
		// '--termui-color-orange08': 'rgba(253, 106, 0, 0.08)',
		'--termui-color-orange08': 'rgb(47, 35, 27)',
		'--termui-radius': '0.25rem',
	},
	'@supports (color: color(display-p3 1 1 1))': {
		':root': {
			'--termui-color-screen-bg': 'color(display-p3 0.114 0.114 0.114)',
			'--termui-color-orange': 'color(display-p3 0.992 0.416 0.000)',
			// '--termui-color-orange08': 'color(display-p3 0.992 0.416 0.000 / 0.08)',
			'--termui-color-orange08': 'color(display-p3 0.184 0.138 0.105)',
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
		fontFamily: '"IBM Plex Mono", monospace',
		fontWeight: 400,
		fontStyle: 'normal',
		fontSize: `${14/16}rem`,
	},
	'input': {
		fontFamily: '"IBM Plex Mono", monospace',
		fontWeight: 500,
		fontStyle: 'normal',
		fontSize: `${14/16}rem`,
	},
	'a': {
		color: 'inherit',
		fontWeight: 'bold',
		fontStyle: 'italic',
		'&:hover': {
			textDecoration: 'none',
		},
	},
}
