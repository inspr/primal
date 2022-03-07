import { SerializedStyles } from "@emotion/react"
import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { AllSizes, BackgroundImage, SpacerBreakPoints } from "../types"
import { BaseProps } from "../utils"
import { View, ViewKinds } from "../view/view"
import { generateSpacerStyling } from "./spacer-utils"

interface SpacerProps extends SpacerBreakPoints {
    size?: AllSizes
    backgroundImage?: BackgroundImage
    fitContainer?: boolean
    css?: SerializedStyles
}

const Spacer: FunctionComponent<BaseProps<ViewKinds> & SpacerProps> = ({
    size = "md",
    fitContainer = false,
    backgroundImage,
    injectedCSS,
    ...props
}) => {
    const { actions } = useTheme()
    const usedBPs = { ...props } as SpacerBreakPoints
    const spacerStyles = generateSpacerStyling(actions, usedBPs, injectedCSS)

    return (
        <>
            <View
                layout={{ width: fitContainer ? "100%" : size, height: size }}
                styles={{ backgroundImage: backgroundImage }}
                injectedCSS={spacerStyles}
            />
        </>
    )
}

Spacer.displayName = "Spacer"

export { Spacer }
