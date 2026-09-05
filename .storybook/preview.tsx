import type { Preview } from '@storybook/react-vite'
import { Global as EmotionGlobal } from '@emotion/react'
import { termUiGlobalStyle } from '../src/globalStyle'
// the following reference eliminates a current typecheck problem
// (with oxlint?) with the fontsource css imports below
import './vite-env.d.ts'
// Reviewed subsetting to latin-only files here; savings were negligible
// (~700 bytes gzip'd total, since unicode-range already lazy-loads only the
// subsets actually used) so we're keeping the plain per-weight imports.
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/700.css'
import '@fontsource/ibm-plex-mono/700-italic.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<>
				<EmotionGlobal styles={termUiGlobalStyle} />
				<Story />
			</>
		),
	],
}

export default preview
