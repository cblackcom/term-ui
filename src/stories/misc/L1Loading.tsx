import styled from "@emotion/styled"
import { L1BlinkingCursor } from "./L1BlinkingCursor"

const CursorContainer = styled.div({
	display: 'inline-block',
	position: 'relative',
	top: '-0.125em',
})

interface L1LoadingProps {
	title?: string
}

export const L1Loading = ({title = 'LOADING'}: L1LoadingProps) => {
	return (
		<div>{title} <CursorContainer><L1BlinkingCursor /></CursorContainer></div>
	)
}
