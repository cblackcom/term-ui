import type { Meta, StoryObj } from '@storybook/react-vite'
import { L5Screen as Component, L4ScreenContentStack } from './L5Screen'
import { L3ScreenStatus } from './L3ScreenStatus'
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from '../misc/L1Logos'
import { L2BoxContent, L2BoxTitle, L3BoxRoot, L3FpoBox } from '../box/L3Box'
import { L3BoxSize } from '../box/L3Box.constants'
import { L2BoxBottomButtonRow } from '../box/L2BoxButtonRow'
import { L1Button } from '../buttons/L1Button'

const meta: Meta<typeof Component> = {
	title: 'Components/Screen/L5Screen',
	component: Component,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta

export const FpoInScreenContentStack: StoryObj<typeof meta> = {
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
		),
	],
}

export const StackedBoxes: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L4ScreenContentStack>
				<L3FpoBox disabled />
				<L3BoxRoot size={L3BoxSize.None}>
					<L2BoxContent>
						LOREM IPSUM DINGLE DANGLE
						<br />
						DOOBIUS.
						<L2BoxBottomButtonRow>
							<L1Button>NO, JUST NO</L1Button>
						</L2BoxBottomButtonRow>
					</L2BoxContent>
					<L2BoxTitle>COOL BOX</L2BoxTitle>
				</L3BoxRoot>
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
		),
	],
}
