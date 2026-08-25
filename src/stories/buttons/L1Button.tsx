import styled from "@emotion/styled"
import { L1UnstyledButton } from "./L1UnstyledButton"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { ButtonHTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TermUiColorVar } from "../../globalStyle"

const Button = styled(L1UnstyledButton)<{hasTitle: boolean}>(({hasTitle}) => ({
	border: `1px solid ${TermUiColorVar.Orange}`,
	borderRadius: 'var(--termui-radius)',
	fontSize: `${14/16}rem`,
	fontWeight: 500,
	minWidth: hasTitle ? '128px' : 'auto',
	padding: '0.5rem',
	display: 'inline-flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	columnGap: '0.5rem',
}))

export interface L1ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string
	icon?: IconProp
}

export const L1Button = ({ title, icon, ...props }: L1ButtonProps) => {
	return (
		<Button hasTitle={Boolean(title)} {...props}>
			{icon ? <FontAwesomeIcon icon={icon} /> : null}
			{title}
		</Button>
	)
}
