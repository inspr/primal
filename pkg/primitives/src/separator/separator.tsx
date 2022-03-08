import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { ColorKind, ColorSwatch } from "../types"
import { BaseProps } from "../utils"
import { View } from "../view/view"

interface SeparatorProps {
    kind?: "dashed" | "line"
    color?: ColorKind | ColorSwatch
}

const Separator: FunctionComponent<BaseProps<"div"> & SeparatorProps> = ({
    kind = "line",
    color = "gray.600",
}) => {
    const dashedColor = useTheme().actions.color(color)

    if (kind == "line") {
        return (
            <View
                layout={{
                    maxHeight: "1px",
                }}
                styles={{
                    borderColor: color,
                    borderStyle: "solid",
                    borderWidth: "1px 0px 0px 0px",
                }}
            />
        )
    }
    return (
        <View
            styles={{
                backgroundImage: `linear-gradient(
                    to right,
                    ${dashedColor} 50%,
                    rgba(255, 255, 255, 0) 0%
                )`,
                backgroundPosition: "bottom",
                backgroundSize: "8px 1px",
                backgroundRepeat: "repeat-x",
            }}
            layout={{
                width: "100%",
                height: "xxxs",
            }}
        />
    )
}

Separator.displayName = "Separator"

export { Separator }
