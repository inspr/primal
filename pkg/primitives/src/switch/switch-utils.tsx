import { css, SerializedStyles } from "@emotion/react"
import { ActionType } from "../theme/create-actions"
import { SwitchVariant } from "../types"
import { SwitchSize } from "./switch"

const sizeMapping = {
    sm: {
        width: "30px",
        height: "18px",
        "padding-top": "2px",
        "padding-right": "2px",
        "padding-bottom": "2px",
        "padding-left": "2px",
        innerBall: {
            width: "14px",
            height: "14px",
        },
    },
    md: {
        width: "38px",
        height: "22px",
        "padding-top": "3px",
        "padding-right": "3px",
        "padding-bottom": "3px",
        "padding-left": "3px",
        innerBall: {
            width: "16px",
            height: "16px",
        },
    },
    lg: {
        width: "46px",
        height: "30px",
        "padding-top": "5px",
        "padding-right": "5px",
        "padding-bottom": "5px",
        "padding-left": "5px",
        innerBall: {
            width: "20px",
            height: "20px",
        },
    },
}

export const switchSizeApply = (size: SwitchSize) => {
    let styles: string = ""
    Object.entries(sizeMapping[size]).forEach(([key, value]) => {
        if (typeof value === "string") styles += `${key}: ${value};`
    })
    return styles
}

export const innerBallSizeApply = (size: SwitchSize) => {
    let styles: string = ""
    Object.entries(sizeMapping[size].innerBall).forEach(([key, value]) => {
        styles += `${key}: ${value};`
    })
    return styles
}

export const generateSwitchCSS = (
    actions: ActionType,
    isActive: boolean,
    switchVariant: SwitchVariant,
    size: SwitchSize,
    paddingLeft: string,
    injectedCSS?: SerializedStyles
) => {
    return css`
        input {
            display: none;
        }
        label {
            display: flex;
            ${switchSizeApply(size)}
            ${isActive ? `padding-left: ${paddingLeft}` : ""};
            border-radius: 100px;
            cursor: pointer;
            background-color: ${actions.color(
                (isActive
                    ? switchVariant.onColor
                    : switchVariant.offColor) as string
            )};
            box-shadow: 0px 2px 4px rgba(17, 17, 17, 0.05),
                0px 2px 4px rgba(17, 17, 17, 0.05);
            transition: ease 150ms;
        }
        label:after {
            position: relative;
            content: "";
            ${innerBallSizeApply(size)}
            border-radius: 50%;
            background-color: ${actions.color(
                switchVariant.ballColor as string
            )};
            display: inline-block;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1),
                0px 2px 4px rgba(7, 43, 116, 0.1),
                0px 4px 8px rgba(61, 0, 122, 0.1);
        }

        @media (prefers-reduced-motion) {
            label {
                transition: all !important;
            }
        }
        ${injectedCSS ? injectedCSS : ""}
    `
}
