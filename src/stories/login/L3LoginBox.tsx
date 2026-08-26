import { useId } from "react"
import styled from "@emotion/styled"
import { L2BoxContent, L2BoxTitle, L3BoxRoot } from "../box/L3Box"
import { L1LogoPNDLM } from "../logos/L1Logos"
import { L1TextInput } from "../inputs/L1TextInput"
import { L1Button } from "../buttons/L1Button"
import { L3BoxSize } from "../box/L3Box.constants"
import { L2BoxBottomButtonRow } from "../box/L2BoxButtonRow"

const LoginBoxContent = styled(L2BoxContent)({
	rowGap: '1.5rem',
})

const LoginLogo = styled(L1LogoPNDLM)({
	alignSelf: 'center',
	// width: `${(2-φ)*100}%`,
	width: '11.5rem',
	height: 'auto',
	marginTop: '0.5rem',
})

const Fields = styled.div({
	display: 'grid',
	gridTemplateColumns: `1fr ${φ}fr`,
	gap: '0.5rem 1rem',
	'label': {
		justifySelf: 'right',
		alignSelf: 'center',
	},
})

export const L3LoginBox = () => {
	const usernameId = useId()
	const passwordId = useId()
	return (
		<L3BoxRoot size={L3BoxSize.Small}>
			<LoginBoxContent>
				<LoginLogo />
				<Fields>
					<label htmlFor={usernameId}>USERNAME</label>
					<L1TextInput id={usernameId} spellCheck={false} />
					<label htmlFor={passwordId}>PASSWORD</label>
					<L1TextInput id={passwordId} type="password" />
				</Fields>
				<L2BoxBottomButtonRow>
					<L1Button>OK</L1Button>
				</L2BoxBottomButtonRow>
			</LoginBoxContent>
			<L2BoxTitle>LOGIN</L2BoxTitle>
		</L3BoxRoot>
	)
}
