import type { Meta, StoryObj } from '@storybook/react-vite'
import { L3ScreenStatus as Component } from './L3ScreenStatus'
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from '../misc/L1Logos'

const meta: Meta<typeof Component> = {
	title: 'Components/Screen/L3ScreenStatus',
	component: Component,
}

export default meta

export const Landing: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L1ScreenStatusLogoCBlack />
			<L1ScreenStatusLogoPNDLM />
		</Component>
	),
}

export const LoremIpsum: StoryObj<typeof meta> = {
	args: {
		title: 'LOREM IPSUM',
	},
	render: (args) => (
		<Component {...args}>
			<L1ScreenStatusLogoPNDLM />
		</Component>
	),
}
