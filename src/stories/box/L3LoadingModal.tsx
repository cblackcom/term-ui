import styled from "@emotion/styled"
import { L1Loading } from "../misc/L1Loading"
import { L2BoxContent, L3BoxRoot } from "./L3Box"
import { L3BoxSize } from "./L3Box.constants"

const LoadingModalContent = styled(L2BoxContent)({
	padding: '1rem 1rem 1rem 1.5rem',
})

interface L3LoadingModalProps {
	title?: string
}

export const L3LoadingModal = ({title}: L3LoadingModalProps) => {
	return (
		<L3BoxRoot size={L3BoxSize.MaxContent}>
			<LoadingModalContent>
				<L1Loading title={title} />
			</LoadingModalContent>
		</L3BoxRoot>
	)
}
