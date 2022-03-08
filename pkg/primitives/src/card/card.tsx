import { SerializedStyles } from "@emotion/react"
import { FunctionComponent } from "react"
import { View } from "../"
import {
    AllSizes,
    ColorKind,
    ColorSwatch,
    DimensionValue,
    PX,
    ShadowValues,
    Unit,
} from "../types"
import { BaseProps } from "../utils"
import { ViewKinds } from "../view/view"

interface CardProps {
    shadow?: ShadowValues
    backgroundColor?: ColorKind | ColorSwatch
    borderColor?: ColorKind | ColorSwatch
    borderRadius?: Unit
    borderWidth?: PX
    borderStyle?: "dashed" | "solid"
    padding?: AllSizes
    width?: DimensionValue
    height?: DimensionValue
    injectedCSS?: SerializedStyles
    __unsafeClassName?: string
}

const Card: FunctionComponent<BaseProps<ViewKinds> & CardProps> = ({
    is = "div",
    shadow,
    backgroundColor = "lumen",
    borderColor = "transparent",
    borderRadius = "4px",
    borderWidth = "1px",
    borderStyle = "solid",
    padding = "md",
    width,
    height,
    injectedCSS,
    __unsafeClassName,
    children,
}) => {
    return (
        <View
            is={is}
            styles={{
                shadow,
                backgroundColor,
                borderColor,
                borderRadius,
                borderWidth,
                borderStyle,
            }}
            layout={{
                padding: {
                    top: padding,
                    bottom: padding,
                    left: padding,
                    right: padding,
                },
                width: width,
                height: height,
            }}
            injectedCSS={injectedCSS}
            __unsafeClassName={__unsafeClassName}>
            {children}
        </View>
    )
}

Card.displayName = "Card"

export { Card }
