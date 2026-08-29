import type { Meta, StoryObj } from '@storybook/react-vite'
import { L3LoginBox as Component } from './L3LoginBox'
import { L3LoadingModal } from '../box/L3LoadingModal'
import { L4ScreenContentStack } from '../screen/L5Screen'

const meta: Meta<typeof Component> = {
	title: 'Components/Login/L3LoginBox',
	component: Component,
}

export default meta

export const Ready: StoryObj<typeof meta> = {}

export const LoggingIn: StoryObj<typeof meta> = {
	args: {
		disabled: true,
	},
	decorators: [
		(Story) => (
			<L4ScreenContentStack>
				<Story />
				<L3LoadingModal title="LOGGING IN" />
			</L4ScreenContentStack>
		),
	],
}
