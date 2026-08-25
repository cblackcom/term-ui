import { type CSSObject } from "@emotion/react"

export enum TermUiBreakpoint {
	TabletMinWidth = '720px',
}

export enum TermUiColorVar {
	Transparent = 'var(--termui-color-transparent)',
	ScreenBg = 'var(--termui-color-screen-bg)',
	Orange = 'var(--termui-color-orange)',
	Orange08 = 'var(--termui-color-orange08)',
}

export const termUiGlobalStyle: CSSObject = {
	':root': {
		'--termui-color-transparent': 'transparent',
		'--termui-color-screen-bg': '#1d1d1d',
		'--termui-color-orange': 'rgba(253, 106, 0, 1)',
		'--termui-color-orange08': 'rgba(253, 106, 0, 0.08)',
		'--termui-radius': '0.25rem',
	},
	'@supports (color: color(display-p3 1 1 1))': {
		':root': {
			'--termui-color-screen-bg': 'color(display-p3 0.114 0.114 0.114)',
			'--termui-color-orange': 'color(display-p3 0.992 0.416 0.000)',
			'--termui-color-orange08': 'color(display-p3 0.992 0.416 0.000 / 0.08)',
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
	'a': {
		color: 'inherit',
		fontWeight: 'bold',
		fontStyle: 'italic',
		'&:hover': {
			textDecoration: 'none',
		},
	},
}
