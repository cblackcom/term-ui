import type { Preview } from '@storybook/react-vite'
import { Global } from '@emotion/react'
import { termUiGlobalStyle } from '../src/globalStyle'
import '@fontsource/ibm-plex-mono'

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
				<Global styles={termUiGlobalStyle} />
				<Story />
			</>
		),
	],
}

export default preview
