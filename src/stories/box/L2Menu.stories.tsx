import type { Meta, StoryObj } from "@storybook/react-vite"
import { L2Menu as Component } from "./L2Menu"
import { L3Box } from "./L3Box"
import { L1Button } from "../buttons/L1Button"

const meta: Meta<typeof Component> = {
	title: "Components/Box/L2Menu",
	component: Component,
}

export default meta

export const L2Menu: StoryObj<typeof meta> = {
	args: {
		title: 'MENU',
	},
	render: (args) => (
		<Component {...args}>
			<L1Button>[1] LOREM IPSUM</L1Button>
			<L1Button>[2] DOLOR SIT AMET</L1Button>
			<L1Button>[3] CONSECTETUR</L1Button>
			<L1Button>[4] ADIPISCING ELIT</L1Button>
		</Component>
	),
	decorators: [
		(Story) => (
			<div style={{maxWidth: '25rem'}}>
				<L3Box title="MENU">
					<Story />
				</L3Box>
			</div>
		)
	],
}
