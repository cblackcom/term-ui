import type { Meta, StoryObj } from '@storybook/react-vite'
import { L3LoadingModal as Component } from './L3LoadingModal'

const meta: Meta<typeof Component> = {
	title: 'Components/Box/L3LoadingModal',
	component: Component,
}

export default meta

export const L3LoadingModal: StoryObj<typeof meta> = {
	args: {
		title: 'LOADING',
	},
}
