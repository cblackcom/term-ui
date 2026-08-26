import type { Meta, StoryObj } from "@storybook/react-vite"
import { L1Loading as Component } from "./L1Loading"

const meta: Meta<typeof Component> = {
	title: "Components/Misc/L1Loading",
	component: Component,
}

export default meta

export const L1Loading: StoryObj<typeof meta> = {}
