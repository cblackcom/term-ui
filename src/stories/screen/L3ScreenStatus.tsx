import styled from "@emotion/styled"
import { TermUiBreakpoint } from "../../globalStyle"
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from "./L1ScreenStatusLogo"

const L3ScreenStatusRoot = styled.div({
	background: "var(--termui-color-orange08)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	columnGap: "1rem",
	padding: "1rem",
	[`@media (min-width: ${TermUiBreakpoint.TabletMinWidth})`]: {
		padding: "1rem 2rem",
	},
	fontSize: '1rem',
	fontWeight: 500,
})

export enum L3ScreenStatusLogos {
	CBlack = 'CBlack',
	PNDLM = 'PNDLM',
}

interface L3ScreenStatusProps {
	logos?: L3ScreenStatusLogos[]
	title?: string
}

export const L3ScreenStatus = ({logos, title}: L3ScreenStatusProps) => {
	return (
		<L3ScreenStatusRoot>
			{logos?.map(logo => {
				switch(logo) {
					case L3ScreenStatusLogos.CBlack:
						return (
							<L1ScreenStatusLogoCBlack />
						)
					case L3ScreenStatusLogos.PNDLM:
						return (
							<L1ScreenStatusLogoPNDLM />
						)
				}
			})}
			{title ? <div>{title}</div> : null}
		</L3ScreenStatusRoot>
	)
}
