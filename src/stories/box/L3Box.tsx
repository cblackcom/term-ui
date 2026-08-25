import styled from "@emotion/styled"
import { ReactNode } from "react"

export const L3BoxRoot = styled.div({
	border: "1px solid var(--termui-color-orange)",
	borderRadius: "var(--termui-radius)",
	display: "grid",
	gridTemplateRows: "1fr max-content",
})

export const L3BoxContent = styled.div({
	padding: '1rem',
})

export const L3BoxTitle = styled.div({
	backgroundColor: "var(--termui-color-orange)",
	color: "var(--termui-color-screen-bg)",
    fontSize: `${14/16}rem`,
    fontWeight: 500,
    padding: '0.25rem 0.5rem 1px',
})

interface L3BoxProps {
	children?: ReactNode
	title?: string
}

export const L3Box = ({children, title}: L3BoxProps) => {
	return (
		<L3BoxRoot>
			<L3BoxContent>{children}</L3BoxContent>
			<L3BoxTitle>{title}</L3BoxTitle>
		</L3BoxRoot>
	)
}
