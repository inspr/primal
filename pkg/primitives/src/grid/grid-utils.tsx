import { css, SerializedStyles } from "@emotion/react"
import { ReactChild } from "react"
import { Token } from "../theme"
import { GridBreakpoints } from "../types"

export const generateGridStyling = (
    allBreakpoints: Token["breakpoint"],
    usedBreakpoints: GridBreakpoints,
    flexStyle: SerializedStyles,
    display: "flex" | "grid" | "none"
) => {
    type BreakpointKeys = keyof typeof usedBreakpoints
    const bpKeys = Object.keys(usedBreakpoints) as BreakpointKeys[]

    let mediaStyles: SerializedStyles[] = []

    bpKeys.forEach((bp) => {
        const [row, column] = [
            // As we're iterating through usedBreakpoints keys, it'll always return a value
            usedBreakpoints[bp]!.row,
            usedBreakpoints[bp]!.column,
        ]
        const mediaCSS = css`
            @media only screen and (min-width: ${allBreakpoints[bp].min}) {
                grid-area: ${row[0]} / ${column[0]} / ${row[1]} / ${column[1]};
            }
        `
        mediaStyles.push(mediaCSS)
    })

    return css`
        display: ${display};
        ${flexStyle}
        ${mediaStyles}
    `
}

export const verifyDimensionsIntegrity = (
    childProps: ReactChild,
    maxRows?: number,
    maxColumns?: number
) => {
    Object.entries(childProps).forEach((propValue) => {
        const [pName, pValue] = propValue
        if (
            maxRows &&
            pValue?.row?.filter((value: number) => value > maxRows + 1).length
        ) {
            console.error(
                "A Grid.Item child has more rows than the total number allowed!"
            )
            throw new Error(
                "A Grid.Item child has more rows than the total number allowed!"
            )
        }

        if (
            maxColumns &&
            pValue?.column?.filter((value: number) => value > maxColumns + 1)
                .length
        ) {
            console.error(
                "A Grid.Item child has more columns than the total number allowed!"
            )
            throw new Error(
                "A Grid.Item child has more columns than the total number allowed!"
            )
        }
    })
}
