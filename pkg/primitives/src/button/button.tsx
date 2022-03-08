import { SerializedStyles } from "@emotion/react"
import { FunctionComponent } from "react"
import { IconKind } from "../"
import { Icon } from "../icon/icon"
import { Stack } from "../stack/stack"
import { Text } from "../text/text"
import { useTheme } from "../theme"
import { iconNames } from "../token"
import { ButtonTypes, Size, TextProps } from "../types"
import { StyledButton } from "./button-utils"

interface ButtonProps {
    size?: Size<0>
    label?: string
    iconLeft?: iconNames
    iconRight?: iconNames
    iconKind?: IconKind
    variant?: ButtonTypes
    disabled?: boolean
    onClick?: () => void
    injectedCSS?: SerializedStyles
}

type ButtonSizeMap = {
    [k in Size<0>]: {
        vertical: "xxs" | "xs" | "sm"
        horizontal: "xs" | "sm" | "md"
        icon: "md" | "lg" | "xl"
    }
}

const buttonSizeMap: ButtonSizeMap = {
    sm: { vertical: "xxs", horizontal: "xs", icon: "md" },
    md: { vertical: "xs", horizontal: "sm", icon: "lg" },
    lg: { vertical: "sm", horizontal: "md", icon: "xl" },
}

const Button: FunctionComponent<ButtonProps & TextProps> = ({
    label,
    iconLeft,
    iconRight,
    iconKind = "line",
    size = "md",
    variant = "primary",
    disabled = false,
    onClick,
    injectedCSS,
    ...props
}) => {
    const { actions } = useTheme()

    return (
        <StyledButton
            type="button"
            disabled={disabled}
            onClick={onClick}
            actions={actions}
            variant={variant}
            injectedCSS={injectedCSS}>
            <Stack
                direction="row"
                alignItems="center"
                layout={{
                    width: "fit-content",
                    height: "fit-content",
                    position: "relative",
                    padding: {
                        top: `${buttonSizeMap[size].vertical}`,
                        bottom: `${buttonSizeMap[size].vertical}`,
                        left: `${buttonSizeMap[size].horizontal}`,
                        right: `${buttonSizeMap[size].horizontal}`,
                    },
                    gap: `${iconLeft || iconRight ? "8px" : "0px"}`,
                }}>
                {iconLeft ? (
                    <Icon
                        __unsafeClassName="buttonIcon"
                        name={iconLeft}
                        kind={iconKind}
                        size={buttonSizeMap[size].icon}
                    />
                ) : null}
                <Text {...props} size={size} __unsafeClassName="buttonText">
                    {label}
                </Text>
                {iconRight ? (
                    <Icon
                        __unsafeClassName="buttonIcon"
                        name={iconRight}
                        kind={iconKind}
                        size={buttonSizeMap[size].icon}
                    />
                ) : null}
            </Stack>
        </StyledButton>
    )
}

export { Button }
