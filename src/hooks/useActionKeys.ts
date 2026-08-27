import { useCallback, useEffect, useRef } from "react"

export interface UseActionKeysProps {
	onEscape?: (e: KeyboardEvent) => void
	onEnter?: (e: KeyboardEvent) => void
}

export const useActionKeys = <T extends HTMLElement = HTMLElement>({onEscape, onEnter}: UseActionKeysProps = {}) => {
	// escape key should work on non-disabled boxes
	// wether or not a descendant is in focus
	const onGlobalKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			onEscape?.(e)
		}
	}, [])
	useEffect(() => {
		document.addEventListener("keydown", onGlobalKeyDown)
		return () => document.removeEventListener("keydown", onGlobalKeyDown)
	}, [])
	// start capturing spacial key events from the element
	// that gets this ref
	const ref = useRef<T>(null)
	// spacial: look for return or enter key to bubble up from a
	// descendant child element, like a form field
	const onSpacialKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Enter") {
			onEnter?.(e)
		}
	}, [onEnter])
	useEffect(() => {
		const node = ref.current
		if (!node) return
		node.addEventListener("keydown", onSpacialKeyDown)
		return () => node.removeEventListener("keydown", onSpacialKeyDown)
	}, [onSpacialKeyDown])
	return ref
}
