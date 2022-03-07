import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { ViewBreakPoints, ViewProps } from "../types"
import { BaseProps } from "../utils"
import { validateSmallestBPUsage, ViewStyle } from "./view-utils"

export type ViewKinds =
    | "div"
    | "main"
    | "article"
    | "footer"
    | "nav"
    | "a"
    | "aside"
    | "body"
    | "canvas"
    | "button"
    | "section"
    | "ul"
    | "ol"
    | "span"

const View: FunctionComponent<BaseProps<ViewKinds> & ViewProps> = ({
    is = "div",
    children,
    layout,
    styles,
    onEvents: { onClick, onChange } = {},
    injectedCSS,
    __unsafeClassName,
    ...props
}) => {
    const { actions } = useTheme()
    const usedBreakpoints = { ...props } as ViewBreakPoints

    if (process.env.NODE_ENV === "development")
        validateSmallestBPUsage(usedBreakpoints, actions.breakpoints())

    return (
        <ViewStyle
            as={is}
            actions={actions}
            usedBreakpoints={usedBreakpoints}
            layout={layout}
            styles={styles}
            injectedCSS={injectedCSS}
            className={__unsafeClassName}>
            {children}
        </ViewStyle>
    )
}

View.displayName = "View"

export { View }
