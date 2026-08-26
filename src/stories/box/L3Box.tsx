import styled, { type CSSObject } from "@emotion/styled"
import type { HTMLAttributes } from "react"
import { TermUiColorVar } from "../../globalStyle"
import { L1Button } from "../buttons/L1Button"
import { L2BoxBottomButtonRow } from "./L2BoxButtonRow"
import { L3BoxSize, L2BoxContentBackgroundColorOptions } from "./L3Box.constants"

interface L3BoxRootProps {
	size?: L3BoxSize
}

export const L3BoxRoot = styled.div<L3BoxRootProps>(({size = L3BoxSize.Medium}) => {
	let style: CSSObject = {
		border: "1px solid var(--termui-color-orange)",
		borderRadius: "var(--termui-radius)",
		display: "grid",
		gridTemplateRows: "1fr max-content",
	}
	switch(size) {
		case L3BoxSize.Small:
			return {
				...style,
				maxWidth: '26rem',
			}
		case L3BoxSize.Medium:
			return {
				...style,
				maxWidth: '40rem',
			}
	}
})

interface L2BoxContentProps {
	backgroundColor?: typeof L2BoxContentBackgroundColorOptions[number]
}

export const L2BoxContent = styled.div<L2BoxContentProps>(({backgroundColor = TermUiColorVar.Orange08}) => ({
	backgroundColor,
	padding: '1rem 1rem 1.5rem',
	display: 'flex',
	flexDirection: 'column',
	rowGap: '1rem',
}))

export const L2BoxTitle = styled(
	({children = "\u00A0", ...props}: HTMLAttributes<HTMLDivElement>) => <div children={children} {...props} />
)({
	backgroundColor: TermUiColorVar.Orange,
	color: TermUiColorVar.ScreenBg,
    fontSize: `${14/16}rem`,
    fontWeight: 500,
    padding: '0.25rem 0.5rem 1px',
})

interface L3FpoBoxProps {
	size?: L3BoxRootProps["size"]
	backgroundColor?: L2BoxContentProps["backgroundColor"]
}

export const L3FpoBox = ({size, backgroundColor}: L3FpoBoxProps) => {
	return (
		<L3BoxRoot size={size}>
			<L2BoxContent backgroundColor={backgroundColor}>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Proin tortor purus platea sit eu id nisi litora libero. Neque
					vulputate consequat ac amet augue blandit maximus aliquet
					congue. Pharetra vestibulum posuere ornare faucibus fusce
					dictumst orci aenean eu facilisis ut volutpat commodo senectus
					purus himenaeos fames primis convallis nisi.
				</div>
				<L2BoxBottomButtonRow>
					<L1Button title="OK" />
				</L2BoxBottomButtonRow>
			</L2BoxContent>
			<L2BoxTitle>LOREM IPSUM</L2BoxTitle>
		</L3BoxRoot>
	)
}
