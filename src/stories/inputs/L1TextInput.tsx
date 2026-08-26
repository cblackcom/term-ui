import styled from "@emotion/styled"
import type { InputHTMLAttributes } from "react"
import { TermUiColorVar } from "../../globalStyle"

export const L1TextInput = styled(
	(props: InputHTMLAttributes<HTMLInputElement>) => <input type="text" {...props} />
)({
	backgroundColor: TermUiColorVar.ScreenBg,
	color: TermUiColorVar.White,
	border: `1px solid ${TermUiColorVar.Orange}`,
	borderRadius: 'var(--termui-radius)',
	'&:focus-visible': {
		outline: `1px solid ${TermUiColorVar.Orange}`,
		outlineOffset: '2px',
	},
	padding: '0.5rem',
})
