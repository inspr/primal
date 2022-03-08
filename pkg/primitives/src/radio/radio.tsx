import { SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import React, { FunctionComponent } from "react"
import { Text } from "../text/text"
import { useTheme } from "../theme"
import {
    ColorOptions,
    RadioTypes,
    RadioVariant,
    Size,
    TextProps,
} from "../types"
import { RadioGroup } from "./radio-group"

type RadioSize = "sm" | "md" | "lg"

type TextSizeMap = {
    [k in Size<0>]: "xxxs" | "xxs" | "xs"
}

type RadioSizeMap = {
    [k in Size<0>]: "15" | "20" | "25"
}

interface RadioProps {
    isActive?: boolean
    disabled?: boolean
    variant?: RadioTypes
    size?: Size<0>
    onClick?: (value: boolean) => void
    value?: string
    injectedCSS?: SerializedStyles
}

const radioSizeMap: RadioSizeMap = {
    sm: "15",
    md: "20",
    lg: "25",
}

const textSizeMap: TextSizeMap = {
    sm: "xxxs",
    md: "xxs",
    lg: "xs",
}

const RadioLabel = styled.label<{
    borderColor: string
    backgroundColor: string
    size: RadioSize
    disabled: boolean
    radioSizeMap: RadioSizeMap
    injectedCSS?: SerializedStyles
}>`
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    height: fit-content;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    input {
        display: none;
    }

    .point {
        height: ${(props) => props.radioSizeMap[props.size]}px;
        width: ${(props) => props.radioSizeMap[props.size]}px;
        border-radius: 50%;
        border: 2px solid ${(props) => props.borderColor};
        position: relative;
        display: inline-block;
        margin-right: 3px;
        box-shadow: 0px 2px 4px rgba(17, 17, 17, 0.05),
            0px 2px 4px rgba(17, 17, 17, 0.05);
    }

    .point:before {
        content: "";
        position: absolute;
        left: -2px;
        top: -2px;
        height: ${(props) => props.radioSizeMap[props.size]}px;
        width: ${(props) => props.radioSizeMap[props.size]}px;
        border-radius: 50%;
    }
    .point.active:before {
        transform: scale(0.6);
        background-color: ${(props) => props.borderColor};
    }
    ${(props) => (props.injectedCSS ? props.injectedCSS : "")}
`

const Radio: FunctionComponent<RadioProps & TextProps> & {
    Group: typeof RadioGroup
} = ({
    variant = "primary",
    isActive = false,
    disabled = false,
    size = "md",
    onClick = () => {},
    children,
    injectedCSS,
    ...props
}) => {
    if (disabled) {
        variant = "disabled"
    }
    const { actions } = useTheme()
    const radioVariant = actions.variants("radio", variant) as RadioVariant
    const radioStyle = {
        borderColor: actions.color(radioVariant.borderColor as ColorOptions),
        backgroundColor: actions.color(
            radioVariant.backgroundColor as ColorOptions
        ),
    }

    return (
        <RadioLabel
            borderColor={radioStyle.borderColor}
            backgroundColor={radioStyle.backgroundColor}
            size={size}
            disabled={disabled}
            radioSizeMap={radioSizeMap}
            injectedCSS={injectedCSS}>
            <input
                type="radio"
                onClick={() => onClick(!isActive)}
                disabled={disabled}
            />
            <span className={`point ${isActive ? "active" : ""}`} />
            <Text size={textSizeMap[size]} {...props}>
                {children}
            </Text>
        </RadioLabel>
    )
}

Radio.displayName = "Radio"
Radio.Group = RadioGroup

export { Radio }
