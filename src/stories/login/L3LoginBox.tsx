import styled from "@emotion/styled"
import { L3Box } from "../box/L3Box"
import { L1LogoPNDLM } from "../logos/L1Logos"
import { L1TextInput } from "../inputs/L1TextInput"
import { L1Button } from "../buttons/L1Button"
import { useId } from "react"
import { L3BoxSize } from "../box/L3Box.constants"

const LoginBoxContent = styled.div({
	display: 'grid',
	gridTemplateColumns: `1fr ${φ}fr`,
	gap: '0.5rem 1rem',
	'label': {
		justifySelf: 'right',
		alignSelf: 'center',
	},
})

const LoginLogo = styled(L1LogoPNDLM)({
	gridColumn: '1 / -1',
	justifySelf: 'center',
	// width: `${(2-φ)*100}%`,
	width: '11.5rem',
	height: 'auto',
	marginTop: '0.5rem',
	marginBottom: '1rem',
})

const OkContainer = styled.div({
	gridColumn: '1 / -1',
	display: 'grid',
	justifyItems: 'center',
	marginTop: '1rem',
})

export const L3LoginBox = () => {
	const usernameId = useId()
	const passwordId = useId()
	return (
		<L3Box size={L3BoxSize.Small} title="LOGIN">
			<LoginBoxContent>
				<LoginLogo />
				<label htmlFor={usernameId}>USERNAME</label>
				<L1TextInput id={usernameId} spellCheck={false} />
				<label htmlFor={passwordId}>PASSWORD</label>
				<L1TextInput id={passwordId} type="password" />
				<OkContainer>
					<L1Button>OK</L1Button>
				</OkContainer>
			</LoginBoxContent>
		</L3Box>
	)
}
