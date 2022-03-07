import styled from "@emotion/styled"
import React from "react"

interface CheckboxIconProps {
    size?: "sm" | "md" | "lg"
    disabled?: boolean
    checked?: boolean
    borderColor?: string
    backgroundColor?: string
    checkColor?: string
    checkedBorderColor?: string
    checkedBackgroundColor?: string
}

const iconSizeMap = {
    sm: "15",
    md: "20",
    lg: "25",
}

const CheckboxSVG = styled.svg<{ disabled: boolean }>`
    display: inline-flex;
    user-select: none;
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    filter: drop-shadow(0px 2px 4px rgba(17, 17, 17, 0.05))
        drop-shadow(0px 2px 4px rgba(17, 17, 17, 0.05));
`

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
    size = "md",
    disabled = false,
    checked = false,
    borderColor = "#111111",
    backgroundColor = "#111111",
    checkColor = "#111111",
    checkedBorderColor = "#111111",
    checkedBackgroundColor = "#FFFFFF",
}) => {
    return (
        <>
            {checked ? (
                <CheckboxSVG
                    disabled={disabled}
                    width={iconSizeMap[size]}
                    height={iconSizeMap[size]}
                    viewBox="0 0 30 30"
                    fill="none">
                    <rect
                        x="5"
                        y="3"
                        width="20"
                        height="20"
                        rx="2"
                        fill={disabled ? "#F5F5F5" : checkedBackgroundColor}
                    />
                    <rect
                        x="5"
                        y="3"
                        width="20"
                        height="20"
                        rx="2"
                        stroke={disabled ? "#B8B8B8" : checkedBorderColor}
                        strokeWidth="1.75"
                    />
                    <path
                        d="M10 12.3619L13.8175 15.9507C14.0213 16.1423 14.3426 16.1294 14.5304 15.9222L19.9 9.99941"
                        stroke={disabled ? "#B8B8B8" : checkColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </CheckboxSVG>
            ) : (
                <CheckboxSVG
                    disabled={disabled}
                    width={iconSizeMap[size]}
                    height={iconSizeMap[size]}
                    viewBox="0 0 30 30"
                    fill="none">
                    <rect
                        x="5"
                        y="3"
                        width="20"
                        height="20"
                        rx="2"
                        fill={disabled ? "#F5F5F5" : backgroundColor}
                    />
                    <rect
                        x="5"
                        y="3"
                        width="20"
                        height="20"
                        rx="2"
                        stroke={disabled ? "#B8B8B8" : borderColor}
                        strokeWidth="1.75"
                    />
                </CheckboxSVG>
            )}
        </>
    )
}

CheckboxIcon.displayName = "CheckboxIcon"

export { CheckboxIcon }
