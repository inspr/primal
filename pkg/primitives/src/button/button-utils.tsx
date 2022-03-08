import { css, SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import { ActionType } from "../theme/create-actions"
import { AnySize, ButtonTypes, ButtonVariant } from "../types"

const generateButtonStyle = (
    actions: ActionType,
    variant: ButtonTypes,
    disabled: boolean
) => {
    const button = actions.variants(
        "button",
        variant
    ) as ButtonVariant[typeof variant]
    const hover = button.hover
    const buttonStyles: SerializedStyles[] = []

    buttonStyles.push(css`
        position: relative;
        border-radius: 8px;
        width: fit-content;
        box-shadow: 0px 0px 0px 1.5px ${actions.color(button.borderColor)} inset
            ${button.shadow ? `, ${actions.shadow(button.shadow)}` : ""};
        background: ${actions.color(button.backgroundColor)};
        cursor: ${disabled ? "not-allowed" : "pointer"};

        .buttonIcon {
            filter: ${button.iconColor ? button.iconColor : "invert(0)"};
        }

        .buttonText {
            color: ${actions.color(button.textColor)};
        }
    `)

    if (!disabled && hover)
        buttonStyles.push(
            generateDynamicStyle(
                actions,
                hover.backgroundColor,
                hover.borderColor,
                hover.textColor,
                hover.shadow,
                hover.iconColor
            )
        )

    if (!disabled && hover && hover.opacity)
        buttonStyles.push(
            generateFilterStyle(
                actions,
                hover.opacity.color,
                hover.opacity.value
            )
        )

    return buttonStyles
}

const generateDynamicStyle = (
    actions: ActionType,
    bgColor?: string,
    borderColor?: string,
    textColor?: string,
    shadow?: AnySize,
    iconColor?: string
) => {
    return css`
        &:hover,
        &:focus {
            background: ${bgColor ? actions.color(bgColor) : ""};
            box-shadow: ${borderColor
                    ? `0px 0px 0px 1.5px ${actions.color(borderColor)} inset`
                    : ""}
                ${shadow ? `, ${actions.shadow(shadow)}` : ""};

            .buttonIcon {
                filter: ${iconColor ? iconColor : ""};
                z-index: 1;
            }

            .buttonText {
                color: ${textColor ? actions.color(textColor) : ""};
                z-index: 1;
            }
        }
    `
}

const generateFilterStyle = (
    actions: ActionType,
    color: string,
    value: number
) => {
    return css`
        &:before {
            content: "";
            z-index: -1;
            position: absolute;

            left: 0;
            top: 0;
            right: 0;
            bottom: 0;

            background: ${actions.color(color)};
            opacity: 0;
            transition: opacity 350ms ease;
            border-radius: inherit;
        }

        &:hover:before,
        &:focus:before {
            opacity: ${value};
            z-index: 1;
        }
    `
}

export const StyledButton = styled.button<{
    actions: ActionType
    variant: ButtonTypes
    disabled: boolean
    injectedCSS?: SerializedStyles
}>`
    ${(props) =>
        generateButtonStyle(props.actions, props.variant, props.disabled)}
    ${(props) => (props.injectedCSS ? props.injectedCSS : "")}
`
