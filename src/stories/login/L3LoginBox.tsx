import { useId } from "react"
import styled from "@emotion/styled"
import { L2BoxContent, L2BoxTitle, L3BoxRoot } from "../box/L3Box"
import { L1LogoPNDLM } from "../misc/L1Logos"
import { L1TextInput } from "../inputs/L1TextInput"
import { L1Button } from "../buttons/L1Button"
import { L3BoxSize } from "../box/L3Box.constants"
import { L2BoxBottomButtonRow } from "../box/L2BoxButtonRow"
import { L1Loading } from "../misc/L1Loading"

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

interface L3LoginBoxProps {
	loading?: boolean
	username: string
	password: string
	totpCode: string
	onUsernameChange: React.ChangeEventHandler<HTMLInputElement>
	onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
	onSubmitClick: React.MouseEventHandler<HTMLButtonElement>
	onTotpCodeChange: React.ChangeEventHandler<HTMLInputElement>
}

export const L3LoginBox = ({loading, username, password, totpCode, onUsernameChange, onPasswordChange, onTotpCodeChange, onSubmitClick}: L3LoginBoxProps) => {
	const usernameId = useId()
	const passwordId = useId()
	const totpCodeId = useId()
	return (
		<L3BoxRoot size={L3BoxSize.Small}>
			<LoginBoxContent>
				<LoginLogo />
				{loading ? (
					<L2BoxBottomButtonRow>
						<L1Loading />
					</L2BoxBottomButtonRow>
				) : (
					<>
						<Fields>
							<label htmlFor={usernameId}>USERNAME</label>
							<L1TextInput
								id={usernameId}
								spellCheck={false}
								autoComplete="username"
								required
								autoFocus
								value={username}
								onChange={onUsernameChange}
							/>
							<label htmlFor={passwordId}>PASSWORD</label>
							<L1TextInput
								id={passwordId}
								type="password"
								autoComplete="current-password"
								required
								value={password}
								onChange={onPasswordChange}
							/>
							<label htmlFor={totpCodeId}>CODE</label>
							<L1TextInput
								id={totpCodeId}
								type="text"
								inputMode="numeric"
								autoComplete="one-time-code"
								value={totpCode}
								onChange={onTotpCodeChange}
							/>
						</Fields>
						<L2BoxBottomButtonRow>
							<L1Button onClick={onSubmitClick}>LOGIN</L1Button>
						</L2BoxBottomButtonRow>
					</>
				)}
			</LoginBoxContent>
			<L2BoxTitle>LOGIN</L2BoxTitle>
		</L3BoxRoot>
	)
}
