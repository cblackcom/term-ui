import type { Meta, StoryObj } from "@storybook/react-vite"
import { L3ScreenStatus as Component, L3ScreenStatusLogos } from "./L3ScreenStatus"

const meta: Meta<typeof Component> = {
	title: "Components/Screen/L3ScreenStatus",
	component: Component,
}

export default meta

export const Landing: StoryObj<typeof meta> = {
	args: {
		logos: [L3ScreenStatusLogos.CBlack, L3ScreenStatusLogos.PNDLM],
	},
}

export const LoremIpsum: StoryObj<typeof meta> = {
	args: {
		logos: [L3ScreenStatusLogos.PNDLM],
		title: 'LOREM IPSUM',
	},
}
