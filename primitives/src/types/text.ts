import { Token } from "../theme"
import { ColorOptions } from "./"
import { TextTypes } from "./variants" 

type FontFamilyValues = keyof Token["font"]["family"]
type LineHeightValues = keyof Token["font"]["lineHeight"]
type FontSizeValues = keyof Token["font"]["size"]
type LetterSpaceValues = keyof Token["font"]["letterSpace"]
type FontWeightValues = keyof Token["font"]["weight"]
type FontStyle = "serif" | "sans-serif"
type WhiteSpaceOptions = "normal" | "nowrap" | "pre-line"
type TextAlignOptions = "left" | "right" | "center" | "justify" | "start"
type TextDecorationLine = "none" | "underline"

export type FontFamily = `"${string}", ${FontStyle}`
export type FontStyleOptions =
    | "normal"
    | "italic"
    | "oblique"
    | "initial"
    | "inherit"

export type FontVariantOptions = "normal" | "small-caps" | "initial" | "inherit"
export type InternalHRef = `/${string}`
export type HRef = `https://${string}` | InternalHRef

interface TextHoverEffect {
    textDecoration?: TextDecorationLine
}

export interface TextProps {
    color?: ColorOptions
    textAlign?: TextAlignOptions
    whiteSpace?: WhiteSpaceOptions
    textVariant?: TextTypes
    family?: FontFamilyValues
    weight?: FontWeightValues
    letterSpace?: LetterSpaceValues
    lineHeight?: LineHeightValues
    size?: FontSizeValues
    uppercase?: boolean
    italic?: boolean
    href?: HRef
    textDecoration?: TextDecorationLine
    fitContent?: boolean
    hover?: TextHoverEffect
    __unsafeClassName?: string
}
