import type { Meta, StoryObj } from "@storybook/react-vite"
import { L1Button } from "./L1Button"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

const meta: Meta<typeof L1Button> = {
	title: "Components/Buttons/L1/Button",
	component: L1Button,
}

export default meta

export const AddButton: StoryObj<typeof meta> = {
	args: {
		title: 'ADD',
		icon: faPlus,
	},
}

export const TrashIconButton: StoryObj<typeof meta> = {
	args: {
		icon: faTrashAlt,
	}
}
