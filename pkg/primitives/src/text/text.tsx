import { css, SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import React, { forwardRef } from "react"
import { useTheme } from "../theme"
import { ActionType } from "../theme/create-actions"
import { TextProps, TextTypes, TextVariant } from "../types"
import { BaseProps } from "../utils"


const generateTextVariantStyles = (
    actions: ActionType,
    variant: TextTypes,
) => {
    const text = actions.variants(
        "text",
        variant
    ) as TextVariant[typeof variant]

    return css`
        ${text.fontStyle ? `font-style: ${text.fontStyle}` : ""};
        ${text.fontVariant ? `font-variant: ${text.fontVariant}` : ""};
        ${text.fontWeight ? `font-weight: ${text.fontWeight}` : ""};
        ${text.fontSize ? `font-size: ${text.fontSize}` : ""};
        ${text.lineHeight ? `line-height: ${text.lineHeight}` : ""};
        ${text.fontFamily ? `font-family: ${text.fontFamily}` : ""};
    `
}

const TextStyle = styled.a<
    {
        actions: ActionType
        textVariant?: TextTypes
        injectedCSS?: SerializedStyles
    } & TextProps
>`
    ${(props) => 
        props.textVariant
            ? generateTextVariantStyles(props.actions, props.textVariant) 
            : ""}
    color: ${(props) => props.actions.color(props.color!)};
    ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
    ${(props) => (props.whiteSpace ? `white-space: ${props.whiteSpace};` : "")}
    ${(props) =>
        props.weight
            ? `font-weight: ${props.actions.fontWeight(props.weight)};`
            : ""}
    ${(props) =>
        props.family
            ? `font-family: ${props.actions.fontFamily(props.family)};`
            : ""}
    ${(props) =>
        props.size ? `font-size: ${props.actions.fontSize(props.size)};` : ""}
    ${(props) =>
        props.letterSpace
            ? `letter-spacing: ${props.actions.letterSpace(props.letterSpace)};`
            : ""}
    ${(props) =>
        props.lineHeight
            ? `line-height: ${props.actions.lineHeight(props.lineHeight)};`
            : ""}
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
    font-style: ${(props) => (props.italic ? "italic" : "normal")};
    text-decoration: ${(props) => props.textDecoration};
    ${(props) => (props.fitContent ? "width: fit-content;" : "")}

    &:hover {
        ${(props) =>
            props.hover?.textDecoration
                ? `text-decoration: ${props.hover.textDecoration};`
                : ""}
    }
    ${(props) => (props.injectedCSS ? props.injectedCSS : "")}
`

export type TextKinds =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "i"
    | "u"
    | "span"
    | "a"
    | "li"

const Text = forwardRef<any, BaseProps<TextKinds> & TextProps>(
    (
        {
            is = "span",
            color = "gray.900",
            textVariant = "default",
            textAlign,
            whiteSpace,
            weight,
            size,
            letterSpace,
            family,
            lineHeight,
            uppercase,
            italic,
            textDecoration = "none",
            fitContent = false,
            hover,
            children,
            href,
            injectedCSS,
            __unsafeClassName,
        },
        ref
    ) => {
        const C: React.ElementType = is

        const { actions } = useTheme()

        return (
            <TextStyle
                as={is}
                ref={ref}
                href={href}
                className={__unsafeClassName}
                color={color}
                actions={actions}
                injectedCSS={injectedCSS}
                textVariant={textVariant}
                textAlign={textAlign}
                whiteSpace={whiteSpace}
                weight={weight}
                size={size}
                letterSpace={letterSpace}
                family={family}
                lineHeight={lineHeight}
                uppercase={uppercase}
                italic={italic}
                textDecoration={textDecoration}
                fitContent={fitContent}
                hover={hover}>
                {children}
            </TextStyle>
        )
    }
)

Text.displayName = "Text"

export { Text }
