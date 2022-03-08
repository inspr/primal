import {
    BackgroundImage,
    BackgroundRepeat,
    BackgroundSize,
    ColorOptions,
    Direction,
    PX,
    ShadowValues,
    Unit,
} from "./"

export type StyledJSXObject = {
    className: string
    styles: JSX.Element
}

export interface StyleProps {
    shadow?: ShadowValues
    backgroundColor?: ColorOptions
    backgroundImage?: BackgroundImage
    backgroundPosition?: Direction
    backgroundRepeat?: BackgroundRepeat
    backgroundSize?: BackgroundSize
    borderColor?: ColorOptions
    borderRadius?: Unit | `${Unit} ${Unit} ${Unit} ${Unit}`
    borderWidth?: PX | `${PX} ${PX} ${PX} ${PX}`
    borderStyle?: "dashed" | "solid"
    opacity?: number
    cursor?: "pointer" | "not-allowed"
    transition?: string
}
