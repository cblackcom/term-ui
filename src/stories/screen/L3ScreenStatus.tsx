import styled from '@emotion/styled'
import { TermUiBreakpoint, TermUiColorVar, TermUiFont } from '../../globalStyle'
import type { ReactNode } from 'react'

const L3ScreenStatusRoot = styled.div({
	background: TermUiColorVar.Orange08,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	columnGap: '1rem',
	padding: '1rem',
	[`@media (min-width: ${TermUiBreakpoint.TabletMinWidth})`]: {
		padding: '1rem 2rem',
	},
	...TermUiFont.MediumNormal,
	fontSize: '1rem',
	// maintain same height as if L1ScreenStatusLogoCBlack were present
	boxSizing: 'content-box',
	minHeight: '22px',
})

interface L3ScreenStatusProps {
	children?: ReactNode
	title?: string
}

export const L3ScreenStatus = ({ children, title }: L3ScreenStatusProps) => {
	return (
		<L3ScreenStatusRoot>
			{children}
			{title ? <div>{title}</div> : null}
		</L3ScreenStatusRoot>
	)
}
