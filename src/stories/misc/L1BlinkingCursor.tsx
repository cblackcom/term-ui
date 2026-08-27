import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const blink = keyframes({
	'50%': { opacity: 0 },
})

const Cursor = styled.span({
	animation: `${blink} 0.75s step-end infinite`,
})

export const L1BlinkingCursor = () => <Cursor>█</Cursor>

