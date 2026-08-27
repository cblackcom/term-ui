import { TermUiColorVar } from "../../globalStyle"

// Non-component values live in this file, separate from L3Box.tsx, because
// React Fast Refresh can only hot-swap a module that exports *only*
// components. Mixing in plain constants/enums makes Vite fall back to a
// full reload whenever their shape changes between edits.
export enum L3BoxSize {
	None = 'none',
	Small = 'small',
	Medium = 'medium',
}

export const L3BoxSizeOptions = [L3BoxSize.Small, L3BoxSize.Medium] as const

export const L2BoxContentBackgroundColorOptions = [TermUiColorVar.ScreenBg, TermUiColorVar.Orange08] as const
