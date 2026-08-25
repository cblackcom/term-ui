import type { Meta, StoryObj } from "@storybook/react-vite"
import { L3Box as Component } from "./L3Box"
import { L1Button } from "../buttons/L1Button"

const meta: Meta<typeof Component> = {
	title: "Components/Box/L3Box",
	component: Component,
}

export default meta

export const Acknowledgement: StoryObj<typeof meta> = {
	args: {
		title: 'LOREM IPSUM',
	},
	render: (args) => (
		<Component {...args}>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Proin tortor purus platea sit eu id nisi litora libero. Neque
				vulputate consequat ac amet augue blandit maximus aliquet
				congue. Pharetra vestibulum posuere ornare faucibus fusce
				dictumst orci aenean eu facilisis ut volutpat commodo senectus
				purus himenaeos fames primis convallis nisi.
			</div>
			<div style={{marginTop: '1rem', textAlign: 'center'}}>
				<L1Button title="OK" />
			</div>
		</Component>
	),
	decorators: [
		(Story) => (
			<div style={{maxWidth: '40rem'}}>
				<Story />
			</div>
		)
	]
}
