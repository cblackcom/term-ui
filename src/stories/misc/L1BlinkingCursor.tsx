import { useEffect, useState } from "react"

export const L1BlinkingCursor = () => {
	const [opacity, setOpacity] = useState(1)
	useEffect(() => {
		let on = true
		const id = setInterval(() => {
			on = !on
			setOpacity(on ? 1 : 0)
		}, 500)
		return () => clearInterval(id)
	}, [setOpacity])
	return (
		<span style={{opacity}}>█</span>
	)
}
