import { css, SerializedStyles } from "@emotion/react"
import { FlexProps } from "../types"

// camelToKebab receives a string in camelCase and
// returns it in kebab-case
export function camelToKebab(string: string) {
    return string
        .split("")
        .map((letter) =>
            letter == letter.toUpperCase() ? "-" + letter.toLowerCase() : letter
        )
        .join("")
}

export const flexStyle = (
    props: FlexProps & { injectedCSS?: SerializedStyles }
) => css`
    ${props.justify ? `justify-content: ${props.justify};` : ""}
    ${props.alignItems ? `align-items: ${props.alignItems};` : ""}
    ${props.alignContent ? `align-content: ${props.alignContent};` : ""}
    ${props.direction ? `flex-direction: ${props.direction};` : ""}
    flex-wrap: ${props.wrap};
    ${props.injectedCSS ? props.injectedCSS : ""}
`
