import { Token } from "../theme"
import { PX, Weight } from "./"

type Hex = `#${string}`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type RGB = `rgb(${number}, ${number}, ${number})`
type HSL = `hsl(${number}, ${number}%, ${number}%)`
export type LinearGradient = `linear-gradient(${string})`

export type Swatches = {
    [key: string]: {
        [weight in Weight]?: Swatch
    }
}

export type Swatch = Hex | RGBA | RGB | HSL

export type Color = {
    swatch: Swatches
    kind: {
        [key: string]: `${string}.${Weight}` | "transparent"
    }
    gradient: {
        [key: string]: LinearGradient
    }
}

export type ColorSwatch = `${keyof Token["color"]["swatch"]}.${Weight}`
export type ColorKind = keyof Token["color"]["kind"] | "transparent"
type ColorGradient = keyof Token["color"]["gradient"]
export type ColorOptions = ColorKind | ColorSwatch | ColorGradient

type BaseShadow =
    | `${PX} ${PX} ${PX} ${PX} ${RGBA}`
    | `${PX} ${PX} ${PX} ${RGBA}` // 1 element
type ExtendedShadow1 = BaseShadow | `${BaseShadow}, ${BaseShadow}` // 2 elements
type ExtendedShadow2 = ExtendedShadow1 | `${ExtendedShadow1}, ${BaseShadow}` // 3 elements
type ExtendedShadow3 = ExtendedShadow2 | `${ExtendedShadow2}, ${BaseShadow}` // 4 elements
type Shadow<Level extends 0 | 1 | 2 | 3 = 0> = Level extends 0
    ? BaseShadow
    : Level extends 1
    ? ExtendedShadow1
    : Level extends 2
    ? ExtendedShadow2
    : Level extends 3
    ? ExtendedShadow3
    : never

export type AnyShadow = Shadow<0> | Shadow<1> | Shadow<2> | Shadow<3>
export type ShadowValues = keyof Token["shadow"]
