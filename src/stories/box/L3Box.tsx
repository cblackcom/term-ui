import styled from "@emotion/styled"
import { ReactNode } from "react"
import { TermUiColorVar } from "../../globalStyle"

export const L3BoxRoot = styled.div({
	border: "1px solid var(--termui-color-orange)",
	borderRadius: "var(--termui-radius)",
	display: "grid",
	gridTemplateRows: "1fr max-content",
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
	backgroundColor?: L3BoxContentProps["backgroundColor"]
	children?: ReactNode
	title?: string
}

export const L3Box = ({backgroundColor, children, title}: L3BoxProps) => {
	return (
		<L3BoxRoot>
			<L3BoxContent backgroundColor={backgroundColor}>{children}</L3BoxContent>
			<L3BoxTitle>{title}</L3BoxTitle>
		</L3BoxRoot>
	)
}
