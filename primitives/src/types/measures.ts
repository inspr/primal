type BaseSize = "sm" | "md" | "lg" // 3 elements
type ExtendedSize1 = "xs" | BaseSize | "xl" // 5 elements
type ExtendedSize2 = "xxs" | ExtendedSize1 | "xxl" // 7 elements
type ExtendedSize3 = "xxxs" | ExtendedSize2 | "xxxl" // 9 elements

export type Size<Level extends 0 | 1 | 2 | 3 = 0> = Level extends 0
    ? BaseSize
    : Level extends 1
    ? ExtendedSize1
    : Level extends 2
    ? ExtendedSize2
    : Level extends 3
    ? ExtendedSize3
    : never

export type Weight =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"

export type AnySize = Size<0> | Size<1> | Size<2> | Size<3>
export type AnyTypedSize<T> =
    | { [size in Size<0>]: T }
    | { [size in Size<1>]: T }
    | { [size in Size<2>]: T }
    | { [size in Size<3>]: T }

type Percentage = `${number}%`
type REM = `${number}rem`
export type PX = `${number}px`
type ViewPorts =
    | `${number}vw`
    | `${number}vh`
    | `${number}vmin`
    | `${number}vmax`

export type Unit = PX | REM | Percentage | ViewPorts
export type RelativeUnit = REM | Percentage | ViewPorts
