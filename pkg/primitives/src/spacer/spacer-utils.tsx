import { css, SerializedStyles } from "@emotion/react"
import { ActionType } from "../theme/create-actions"
import { AllSizes, SpacerBreakPoints } from "../types"

export const generateSpacerStyling = (
    actions: ActionType,
    usedBreakpoints: SpacerBreakPoints,
    injectedCSS?: SerializedStyles
) => {
    const allBreakpoints = actions.breakpoints()
    type BreakpointKeys = keyof typeof usedBreakpoints
    const bpKeys = Object.keys(usedBreakpoints) as BreakpointKeys[]

    let mediaStyles: SerializedStyles[] = []

    bpKeys.forEach((bp) => {
        const mediaCSS = css`
            @media only screen and (min-width: ${allBreakpoints[bp].min}) {
                height: ${actions.size(usedBreakpoints[bp]?.size as AllSizes)};
                width: ${actions.size(usedBreakpoints[bp]?.size as AllSizes)};
            }
        `
        mediaStyles.push(mediaCSS)
    })

    return css`
        ${injectedCSS}
        ${mediaStyles}
    `
}
