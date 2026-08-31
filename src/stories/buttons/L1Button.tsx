import styled from '@emotion/styled'
import { L1UnstyledButton } from './L1UnstyledButton'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { ButtonHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TermUiColorVar } from '../../globalStyle'
import { L1ButtonSize } from './L1ButtonSize'

const Button = styled(L1UnstyledButton)<{ size: L1ButtonSize }>(({ size }) => ({
	border: `1px solid ${TermUiColorVar.Orange}`,
	borderRadius: 'var(--termui-radius)',
	fontSize: `${14 / 16}rem`,
	fontWeight: 500,
	minWidth: size === L1ButtonSize.MinSmall ? '8rem' : 'auto',
	padding: '0.5rem',
	display: 'inline-flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	columnGap: '0.5rem',
	'&:disabled': {
		opacity: 'var(--termui-opacity-disabled-control)',
	},
}))

export interface L1ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: L1ButtonSize
	icon?: IconProp
}

export const L1Button = ({ size, icon, children, ...props }: L1ButtonProps) => {
	// default sizes
	if (size === undefined) {
		if (icon && !children) {
			size = L1ButtonSize.None
		} else {
			size = L1ButtonSize.MinSmall
		}
	}
	return (
		<Button size={size} {...props}>
			{icon ? <FontAwesomeIcon icon={icon} /> : null}
			{children}
		</Button>
	)
}
