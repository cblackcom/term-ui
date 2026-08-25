import type { Meta, StoryObj } from "@storybook/react-vite"
import { L5Screen as Component } from "./L5Screen"
import { L3ScreenStatus } from "./L3ScreenStatus"
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from "./L1ScreenStatusLogo"

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
		<Component
			status={<L3ScreenStatus><L1ScreenStatusLogoCBlack /><L1ScreenStatusLogoPNDLM /></L3ScreenStatus>}
		/>
	),
	decorators: [
		(Story) => (
			<div id="root">
				<Story />
			</div>
		)
	],
}
