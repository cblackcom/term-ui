import styled from "@emotion/styled"

// container of this component should be 100vw/100vh, no margin or padding
// see also: #root in globalStyle
export const L5Screen = styled.div({
	margin: 0,
	padding: 0,
	width: '100vw',
	height: '100vh',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateRows: '1fr max-content',
})

// default candidate for the first grid space in the above
export const L4ScreenContentStack = styled.div({
	padding: '1rem',
	overflow: 'auto',
	display: 'grid',
	placeItems: 'center',
	'& > *': {
		// stack everything in the same cell
		gridArea: '1 / 1',
	},
})
