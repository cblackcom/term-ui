import type { Meta, StoryObj } from "@storybook/react-vite"
import { L3Box as Component, L3BoxContentBackgroundColorOptions, L3BoxSize, L3FpoBox } from "./L3Box"
import { TermUiColorVar } from "../../globalStyle"

const meta: Meta<typeof Component> = {
	title: "Components/Box/L3Box",
	component: Component,
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(L3BoxSize),
		},
		backgroundColor: {
			control: 'select',
			options: L3BoxContentBackgroundColorOptions,
		},
	},
}

export default meta

export const Acknowledgement: StoryObj<typeof meta> = {
	args: {
		size: L3BoxSize.Medium,
		backgroundColor: TermUiColorVar.Orange08,
		title: 'LOREM IPSUM',
	},
	render: (args) => (
		<L3FpoBox {...args} />
	),
	// decorators: [
	// 	(Story) => (
	// 		<div style={{maxWidth: '40rem'}}>
	// 			<Story />
	// 		</div>
	// 	)
	// ],
}
