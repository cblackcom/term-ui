import type { Meta, StoryObj } from "@storybook/react-vite"
import { L2Menu as Component } from "./L2Menu"
import { L3Box } from "./L3Box"
import { L1Button } from "../buttons/L1Button"
import { L3BoxSize } from "./L3Box.constants"
import { L2BoxTopButtonRow } from "./L2BoxButtonRow"
import { faClose } from "@fortawesome/free-solid-svg-icons"

const meta: Meta<typeof Component> = {
	title: "Components/Box/L2Menu",
	component: Component,
}

export default meta

export const L2Menu: StoryObj<typeof meta> = {
	render: (args) => (
		<Component {...args}>
			<L2BoxTopButtonRow>
				<L1Button icon={faClose} />
			</L2BoxTopButtonRow>
			<L1Button>[1] LOREM IPSUM</L1Button>
			<L1Button>[2] DOLOR SIT AMET</L1Button>
			<L1Button>[3] CONSECTETUR</L1Button>
			<L1Button>[4] ADIPISCING ELIT</L1Button>
		</Component>
	),
	decorators: [
		(Story) => (
			<L3Box size={L3BoxSize.Small} title="MENU">
				<Story />
			</L3Box>
		)
	],
}
