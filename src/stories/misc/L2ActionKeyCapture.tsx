import type { ReactNode } from 'react'
import { useActionKeys, type UseActionKeysProps } from '../../hooks/useActionKeys'

interface L2ActionKeyCaptureProps extends UseActionKeysProps {
	children?: ReactNode
}

export const L2ActionKeyCapture = ({ children, ...props }: L2ActionKeyCaptureProps) => {
	const ref = useActionKeys<HTMLDivElement>(props)
	return (
		<div ref={ref} style={{ display: 'contents' }}>
			{children}
		</div>
	)
}
