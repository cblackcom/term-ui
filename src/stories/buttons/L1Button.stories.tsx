import type { Meta, StoryObj } from "@storybook/react-vite"
import { L1Button as Component } from "./L1Button"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

const meta: Meta<typeof Component> = {
	title: "Components/Buttons/L1Button",
	component: Component,
}

export default meta

export const Add: StoryObj<typeof meta> = {
	args: {
		title: 'ADD',
		icon: faPlus,
	},
}

export const TrashIcon: StoryObj<typeof meta> = {
	args: {
		icon: faTrashAlt,
	}
}
