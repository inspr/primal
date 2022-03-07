import { css, SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import { Token } from "../theme"
import { ActionType } from "../theme/create-actions"
import {
    AllSizes,
    DimensionValue,
    LayoutProps,
    StyleProps,
    ViewBreakPoints,
} from "../types"

export const validateSmallestBPUsage = (
    usedBreakpoints: ViewBreakPoints,
    allBreakPoints: Token["breakpoint"]
) => {
    const usedBPKeys = Object.keys(usedBreakpoints)
    const smallestBP = findSmallestBreakPoint(
        Object.keys(allBreakPoints)
    ) as keyof Token["breakpoint"]

    if (usedBPKeys.includes(smallestBP))
        console.warn(
            "You are using the smallest breakpoint defined on theme.ts as a prop, " +
                "this breakpoint will be ignored by the View component. " +
                "Use the 'layout' and 'style' props instead."
        )
}

// replaceCSSProp is a helper function that gets the respective size values for props
const replaceCSSProp = (
    value: DimensionValue,
    cssProp: string,
    actions: ActionType
) => {
    if (!value) return ""

    const staticSizes = [
        "sm",
        "md",
        "lg",
        "xs",
        "xl",
        "xxs",
        "xxl",
        "xxxs",
        "xxxl",
    ]
    return `${cssProp}: ${
        staticSizes.includes(value) ? actions.size(value as AllSizes) : value
    };`
}

// findSmallestBreakPoint returns the smallest breakpoint of the current Theme
const findSmallestBreakPoint = (breakpoints: string[]) => {
    if (breakpoints.includes("xxxs")) return "xxxs"
    if (breakpoints.includes("xxs")) return "xxs"
    if (breakpoints.includes("xs")) return "xs"
    return "sm"
}

// generateCSS receives layout and style values and a breakpoint, and generates the
// media query for it
const generateMediaQueryCSS = (
    actions: ActionType,
    usedBreakpoints: ViewBreakPoints
) => {
    const allBreakpoints = actions.breakpoints()
    type BreakpointKeys = keyof typeof usedBreakpoints
    const bpKeys = Object.keys(usedBreakpoints) as BreakpointKeys[]

    let mediaStyles: SerializedStyles[] = []

    bpKeys.forEach((bp) => {
        const mediaCSS = css`
            @media only screen and (min-width: ${allBreakpoints[bp].min}) {
                ${mountCSSString(
                    actions,
                    usedBreakpoints[bp]?.layout,
                    usedBreakpoints[bp]?.styles
                )}
            }
        `
        mediaStyles.push(mediaCSS)
    })

    return mediaStyles
}

const mountCSSString = (
    actions: ActionType,
    layout?: LayoutProps,
    styles?: StyleProps
) => {
    if (!layout && !styles) return ""

    return `${
        layout?.display && layout?.display !== "none"
            ? `display: ${layout?.display};`
            : ""
    }
        ${replaceCSSProp(
            layout?.padding?.top as DimensionValue,
            "padding-top",
            actions
        )}
        ${replaceCSSProp(
            layout?.padding?.right as DimensionValue,
            "padding-right",
            actions
        )}
        ${replaceCSSProp(
            layout?.padding?.bottom as DimensionValue,
            "padding-bottom",
            actions
        )}
        ${replaceCSSProp(
            layout?.padding?.left as DimensionValue,
            "padding-left",
            actions
        )}
        ${replaceCSSProp(
            layout?.margin?.top as DimensionValue,
            "margin-top",
            actions
        )}
        ${replaceCSSProp(
            layout?.margin?.right as DimensionValue,
            "margin-right",
            actions
        )}
        ${replaceCSSProp(
            layout?.margin?.bottom as DimensionValue,
            "margin-bottom",
            actions
        )}
        ${replaceCSSProp(
            layout?.margin?.left as DimensionValue,
            "margin-left",
            actions
        )}
        ${replaceCSSProp(layout?.width as DimensionValue, "width", actions)}
        ${replaceCSSProp(
            layout?.maxWidth as DimensionValue,
            "max-width",
            actions
        )}
        ${replaceCSSProp(
            layout?.minWidth as DimensionValue,
            "min-width",
            actions
        )}
        ${replaceCSSProp(layout?.height as DimensionValue, "height", actions)}
        ${replaceCSSProp(layout?.top as DimensionValue, "top", actions)}
        ${replaceCSSProp(layout?.bottom as DimensionValue, "bottom", actions)}
        ${replaceCSSProp(layout?.left as DimensionValue, "left", actions)}
        ${replaceCSSProp(layout?.right as DimensionValue, "right", actions)}
        ${replaceCSSProp(
            layout?.maxHeight as DimensionValue,
            "max-height",
            actions
        )}
        ${replaceCSSProp(
            layout?.minHeight as DimensionValue,
            "min-height",
            actions
        )}
        ${layout?.overflow ? `overflow: ${layout?.overflow};` : ""}
        ${layout?.zIndex ? `z-index: ${layout?.zIndex};` : ""}
        ${layout?.position ? `position: ${layout?.position};` : ""}
        ${layout?.gap ? `gap : ${layout?.gap};` : ""}
        ${
            styles?.shadow
                ? `box-shadow : ${actions.shadow(styles?.shadow)};`
                : ""
        }
        ${
            styles?.backgroundColor
                ? `background-color: ${actions.color(styles?.backgroundColor)};`
                : ""
        }
        ${
            styles?.backgroundImage
                ? `background-image : ${styles?.backgroundImage};`
                : ""
        }
        ${
            styles?.backgroundPosition
                ? `background-position: ${styles?.backgroundPosition};`
                : ""
        }
        ${
            styles?.backgroundRepeat
                ? `background-repeat: ${styles?.backgroundRepeat};`
                : ""
        }
        ${
            styles?.backgroundSize
                ? `background-size: ${styles?.backgroundSize};`
                : ""
        }
        ${
            styles?.borderColor
                ? `border-color: ${actions.color(styles?.borderColor)};`
                : ""
        }
        ${styles?.borderRadius ? `border-radius: ${styles?.borderRadius};` : ""}
        ${styles?.borderWidth ? `border-width: ${styles?.borderWidth};` : ""}
        ${styles?.borderStyle ? `border-style: ${styles?.borderStyle};` : ""}
        ${styles?.opacity ? `opacity: ${styles?.opacity};` : ""}
        ${styles?.cursor ? `cursor: ${styles?.cursor};` : ""}
        ${styles?.transition ? `transition: ${styles?.transition};` : ""}`
}

export const ViewStyle = styled.div<{
    actions: ActionType
    usedBreakpoints: ViewBreakPoints
    layout?: LayoutProps
    styles?: StyleProps
    injectedCSS?: SerializedStyles
}>`
    ${(props) => mountCSSString(props.actions, props.layout, props.styles)}
    ${(props) => generateMediaQueryCSS(props.actions, props.usedBreakpoints)}
    ${(props) => (props.injectedCSS ? props.injectedCSS : "")}
`
