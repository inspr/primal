import { SerializedStyles } from "@emotion/react"
import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { SwitchTypes, SwitchVariant, ViewProps } from "../types"
import { View } from "../view/view"
import { generateSwitchCSS } from "./switch-utils"

export type SwitchSize = "sm" | "md" | "lg"

type SwitchProps = {
    isActive: boolean
    variant?: SwitchTypes
    size?: SwitchSize
    onChange?: (value: boolean) => void
    injectedCSS?: SerializedStyles
}

const Switch: FunctionComponent<SwitchProps & ViewProps> = ({
    isActive,
    variant = "primary",
    size = "md",
    onChange = () => {},
    layout,
    styles,
    injectedCSS,
}) => {
    const { actions } = useTheme()
    const switchVariant = actions.variants("switch", variant) as SwitchVariant
    const paddingLeft = size === "sm" ? "13px" : size === "md" ? "19px" : "21px"

    return (
        <View
            layout={layout}
            styles={styles}
            injectedCSS={generateSwitchCSS(
                actions,
                isActive,
                switchVariant,
                size,
                paddingLeft,
                injectedCSS
            )}>
            <label>
                <input type="checkbox" onChange={() => onChange(!isActive)} />
            </label>
        </View>
    )
}

Switch.displayName = "Switch"

export { Switch }
