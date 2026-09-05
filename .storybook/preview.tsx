import type { Preview } from '@storybook/react-vite'
import { Global as EmotionGlobal } from '@emotion/react'
import { termUiGlobalStyle } from '../src/globalStyle'

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
