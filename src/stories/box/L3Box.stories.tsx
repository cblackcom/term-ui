import type { Meta, StoryObj } from '@storybook/react-vite'
import { L3FpoBox as Component } from './L3Box'
import { L2BoxContentBackgroundColorOptions, L3BoxSize } from './L3Box.constants'
import { TermUiColorVar } from '../../globalStyle'

const meta: Meta<typeof Component> = {
	title: 'Components/Box/L3FpoBox',
	component: Component,
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(L3BoxSize),
		},
		backgroundColor: {
			control: 'select',
			options: L2BoxContentBackgroundColorOptions,
		},
	},
}

export default meta

export const Acknowledgement: StoryObj<typeof meta> = {
	args: {
		size: L3BoxSize.Medium,
		backgroundColor: TermUiColorVar.Orange08,
	},
}
