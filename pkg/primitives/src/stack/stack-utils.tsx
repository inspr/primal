import { css, SerializedStyles } from "@emotion/react"
import { Token } from "../theme"
import {
    StackItemBreakpoints,
    StackItemBreakpointsValue,
    StackItemLayoutValue,
} from "../types"

export const generateStackStyling = (
    allBreakpoints: Token["breakpoint"],
    usedBreakpoints: StackItemBreakpoints,
    flexStyle: SerializedStyles
) => {
    type BreakpointKeys = keyof typeof usedBreakpoints
    const bpKeys = Object.keys(usedBreakpoints) as BreakpointKeys[]

    let mediaStyles: SerializedStyles[] = []

    bpKeys.forEach((bp) => {
        const layout = getItemLayout(usedBreakpoints[bp])
        const mediaCSS = css`
            @media only screen and (min-width: ${allBreakpoints[bp].min}) {
                flex-grow: ${layout.grow};
                max-width: ${layout.width};
                flex-basis: ${layout.basis};
                ${layout.display}
            }
        `
        mediaStyles.push(mediaCSS)
    })

    return css`
        ${flexStyle}
        ${mediaStyles}
    `
}

export const getItemLayout = (
    val?: StackItemBreakpointsValue
): StackItemLayoutValue => {
    const display = val === 0 ? "display: none;" : "display: inherit;"
    if (typeof val === "number") {
        const width = (100 / 24) * val
        const ratio = width > 100 ? "100%" : width < 0 ? "0" : `${width}%`
        return {
            grow: 0,
            display,
            width: ratio,
            basis: ratio,
        }
    }
    return {
        grow: 1,
        display,
        width: "100%",
        basis: "0",
    }
}
