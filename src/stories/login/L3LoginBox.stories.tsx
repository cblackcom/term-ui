import type { Meta, StoryObj } from "@storybook/react-vite"
import { L3LoginBox as Component } from "./L3LoginBox"

const meta: Meta<typeof Component> = {
	title: "Components/Login/L3LoginBox",
	component: Component,
}

export default meta

export const L3LoginBox: StoryObj<typeof meta> = {}
