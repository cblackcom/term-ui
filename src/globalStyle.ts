import { CSSObject } from "@emotion/react";

export const termUiGlobalStyle: CSSObject = {
	':root': {
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
	'body': {
		margin: 0,
		height: '100vh',
		overflow: 'hidden',
		background: 'var(--termui-color-screen-bg)',
		color: 'var(--termui-color-orange)',
		fontFamily: '"IBM Plex Mono", monospace',
		fontWeight: 400,
		fontStyle: 'normal',
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
