import styled from '@emotion/styled'

export const L1UnstyledButton = styled.button({
	appearance: 'none',
	background: 'none',
	border: 'none',
	padding: 0,
	margin: 0,
	font: 'inherit',
	color: 'inherit',
	cursor: 'pointer',
	'&:disabled': {
		cursor: 'default',
	},
})
