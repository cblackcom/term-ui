import styled from '@emotion/styled'

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
		// Force every stacked child into its own stacking context so DOM
		// order always decides paint order. Without this, a child that
		// happens to trigger a stacking context on its own (e.g. opacity
		// < 1) paints above plain siblings regardless of DOM order --
		// see the CSS spec's painting-order rules for stacking contexts.
		isolation: 'isolate',
	},
})

// alternate candidate for first grid space
// for displaying a scrollable page of unboxed content
export const L4ScreenContentScroll = styled.div({
	padding: '1rem 2rem',
	overflow: 'auto',
})
