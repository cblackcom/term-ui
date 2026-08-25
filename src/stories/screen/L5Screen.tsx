import styled from "@emotion/styled"
import { ReactNode } from "react"

export const L5ScreenRoot = styled.div({
	margin: 0,
	padding: 0,
	width: '100vw',
	height: '100vh',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateRows: '1fr max-content',
})

export const ContentSpace = styled.div({
	overflow: 'auto',
	padding: '1rem',
	display: 'flex',
})

interface L5ScreenProps {
	children?: ReactNode
	status?: ReactNode
}

// use this component to lay out the (majority) content space where boxes go
// vs. the bottom status bar
// container of this component should be 100vw/100vh, no margin or padding
// see also: #root in globalStyle
export const L5Screen = ({children, status}: L5ScreenProps) => {
	return (
		<L5ScreenRoot>
			<ContentSpace>{children}</ContentSpace>
			{status}
		</L5ScreenRoot>
	)
}
