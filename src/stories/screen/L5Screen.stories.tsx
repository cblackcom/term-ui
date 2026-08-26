import type { Meta, StoryObj } from "@storybook/react-vite"
import { L5Screen as Component, L4ScreenContentStack } from "./L5Screen"
import { L3ScreenStatus } from "./L3ScreenStatus"
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from '../misc/L1Logos'
import { L3FpoBox } from "../box/L3Box"

const meta: Meta<typeof Component> = {
	title: "Components/Screen/L5Screen",
	component: Component,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta

export const L5Screen: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L4ScreenContentStack>
				<L3FpoBox />
			</L4ScreenContentStack>
			<L3ScreenStatus>
				<L1ScreenStatusLogoCBlack />
				<L1ScreenStatusLogoPNDLM />
			</L3ScreenStatus>
		</Component>
	),
	decorators: [
		(Story) => (
			<div id="root">
				<Story />
			</div>
		)
	],
}
