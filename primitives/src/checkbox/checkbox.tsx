import styled from "@emotion/styled"
import React, { FunctionComponent } from "react"
import { Text } from "../text/text"
import { useTheme } from "../theme"
import {
    CheckboxTypes,
    CheckboxVariant,
    ColorOptions,
    Size,
    TextProps,
} from "../types"
import { CheckboxGroup } from "./checkbox-group"
import { CheckboxIcon } from "./checkbox-icon"

interface CheckboxProps {
    isActive?: boolean
    disabled?: boolean
    variant?: CheckboxTypes
    size?: Size<0>
    onChange?: (value: boolean) => void
    value?: string
}

type TextSizeMap = {
    [k in Size<0>]: "xxxs" | "xxs" | "xs"
}

const textSizeMap: TextSizeMap = {
    sm: "xxxs",
    md: "xxs",
    lg: "xs",
}

const CheckboxLabel = styled.label<{ disabled: boolean }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.75 : 1)};
    width: fit-content;
    height: fit-content;

    input {
        display: none;
    }
`

const Checkbox: FunctionComponent<CheckboxProps & TextProps> & {
    Group: typeof CheckboxGroup
} = ({
    variant = "primary",
    isActive = false,
    disabled = false,
    size = "md",
    onChange = () => {},
    value = "",
    children,
    ...props
}) => {
    const { actions } = useTheme()
    const cbVariant = actions.variants(
        "checkbox",
        variant
    ) as CheckboxVariant[typeof variant]

    const iconStyle = {
        borderColor: actions.color(cbVariant.borderColor as ColorOptions),
        backgroundColor: actions.color(
            cbVariant.backgroundColor as ColorOptions
        ),
        checkColor: actions.color(
            cbVariant.checked?.checkColor as ColorOptions
        ),
        checkedBg: actions.color(
            cbVariant.checked?.backgroundColor as ColorOptions
        ),
        checkedBorder: actions.color(
            cbVariant.checked?.borderColor as ColorOptions
        ),
    }

    return (
        <CheckboxLabel disabled={disabled}>
            <CheckboxIcon
                size={size}
                disabled={disabled}
                checked={isActive}
                borderColor={iconStyle.borderColor}
                backgroundColor={iconStyle.backgroundColor}
                checkColor={iconStyle.checkColor}
                checkedBackgroundColor={
                    iconStyle.checkedBg ?? iconStyle.backgroundColor
                }
                checkedBorderColor={
                    iconStyle.checkedBorder ?? iconStyle.borderColor
                }
            />
            <input
                type="checkbox"
                disabled={disabled}
                checked={isActive}
                onChange={() => onChange(!isActive)}
            />
            <Text size={textSizeMap[size]} {...props}>
                {children}
            </Text>
        </CheckboxLabel>
    )
}

Checkbox.displayName = "Checkbox"
Checkbox.Group = CheckboxGroup

export { Checkbox }
