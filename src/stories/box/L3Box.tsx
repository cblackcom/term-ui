import styled, { type CSSObject } from "@emotion/styled"
import type { ReactNode } from "react"
import { TermUiColorVar } from "../../globalStyle"
import { L1Button } from "../buttons/L1Button"

// TODO is this really the right approach ??
export enum L3BoxSize {
	Small = 'small',
	Medium = 'medium',
}

export const L3BoxSizeOptions = [L3BoxSize.Small, L3BoxSize.Medium] as const

interface L3BoxRootProps {
	size: L3BoxSize
}

export const L3BoxRoot = styled.div<L3BoxRootProps>(({size}) => {
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
				maxWidth: '25rem',
			}
		case L3BoxSize.Medium:
			return {
				...style,
				maxWidth: '40rem',
			}
	}
})

export const L3BoxContentBackgroundColorOptions = [TermUiColorVar.Transparent, TermUiColorVar.Orange08] as const

interface L3BoxContentProps {
	backgroundColor?: typeof L3BoxContentBackgroundColorOptions[number]
}

export const L3BoxContent = styled.div<L3BoxContentProps>(({backgroundColor = TermUiColorVar.Orange08}) => ({
	backgroundColor,
	padding: '1rem',
}))

export const L3BoxTitle = styled.div({
	backgroundColor: TermUiColorVar.Orange,
	color: TermUiColorVar.ScreenBg,
    fontSize: `${14/16}rem`,
    fontWeight: 500,
    padding: '0.25rem 0.5rem 1px',
})

interface L3BoxProps {
	size?: L3BoxRootProps["size"]
	backgroundColor?: L3BoxContentProps["backgroundColor"]
	children?: ReactNode
	title?: string
}

export const L3Box = ({size = L3BoxSize.Medium, backgroundColor, children, title = "\u00A0"}: L3BoxProps) => {
	return (
		<L3BoxRoot size={size}>
			<L3BoxContent backgroundColor={backgroundColor}>{children}</L3BoxContent>
			<L3BoxTitle>{title}</L3BoxTitle>
		</L3BoxRoot>
	)
}

export const L3FpoBox = ({size, title = 'LOREM IPSUM', ...props}: L3BoxProps) => {
	return (
		<L3Box size={size} title={title} {...props}>
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
		</L3Box>
	)
}
