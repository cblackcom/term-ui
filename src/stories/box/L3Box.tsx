import styled, { type CSSObject } from "@emotion/styled"
import type { HTMLAttributes } from "react"
import { TermUiColorVar } from "../../globalStyle"
import { L1Button } from "../buttons/L1Button"
import { L2BoxBottomButtonRow } from "./L2BoxButtonRow"
import { L3BoxSize, L2BoxContentBackgroundColorOptions } from "./L3Box.constants"

interface L3BoxRootProps {
	size?: L3BoxSize
	disabled?: boolean
}

// this is a component that the rule is not picking up on
// oxlint-disable-next-line react/only-export-components
export const L3BoxRoot = styled.div<L3BoxRootProps>(({size = L3BoxSize.Medium, disabled}) => {
	let style: CSSObject = {
		overflow: 'hidden',
		boxSizing: 'border-box',
		border: "1px solid var(--termui-color-orange)",
		borderRadius: "var(--termui-radius)",
		display: "grid",
		gridTemplateRows: "1fr max-content",
		opacity: disabled ? 'var(--termui-opacity-disabled-box)' : 1,
	}
	switch(size) {
		case L3BoxSize.None:
			return style
		case L3BoxSize.MaxContent:
			return {
				...style,
				width: 'max-content',
				maxWidth: '100%',
			}
		case L3BoxSize.Small:
			return {
				...style,
				width: 'min(26rem, 100%)',
			}
		case L3BoxSize.Medium:
			return {
				...style,
				width: 'min(40rem, 100%)',
			}
	}
})

interface L2BoxContentProps {
	backgroundColor?: typeof L2BoxContentBackgroundColorOptions[number]
}

// this is a component that the rule is not picking up on
// oxlint-disable-next-line react/only-export-components
export const L2BoxContent = styled.div<L2BoxContentProps>(({backgroundColor = TermUiColorVar.Orange08}) => ({
	backgroundColor,
	padding: '1rem 1rem 1.5rem',
	display: 'flex',
	flexDirection: 'column',
	rowGap: '1rem',
}))

// this is a component that the rule is not picking up on
// oxlint-disable-next-line react/only-export-components
export const L2BoxTitle = styled(
	({children = "\u00A0", ...props}: HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>
)({
	backgroundColor: TermUiColorVar.Orange,
	color: TermUiColorVar.ScreenBg,
    fontSize: `${14/16}rem`,
    fontWeight: 500,
    padding: '0.25rem 0.5rem 1px',
})

interface L3FpoBoxProps {
	size?: L3BoxRootProps["size"]
	disabled?: L3BoxRootProps["disabled"]
	backgroundColor?: L2BoxContentProps["backgroundColor"]
}

export const L3FpoBox = ({size, disabled, backgroundColor}: L3FpoBoxProps) => {
	return (
		<L3BoxRoot size={size} disabled={disabled}>
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
