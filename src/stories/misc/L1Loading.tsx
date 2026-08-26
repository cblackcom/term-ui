import styled from "@emotion/styled"
import { L1BlinkingCursor } from "./L1BlinkingCursor"

const CursorContainer = styled.div({
	display: 'inline-block',
	position: 'relative',
	top: '-0.125em',
})

export const L1Loading = () => {
	return (
		<div>LOADING <CursorContainer><L1BlinkingCursor /></CursorContainer></div>
	)
}
