import React, { FunctionComponent, useEffect, useState } from "react"
import { Stack } from "../stack/stack"
import { StackProps } from "../types"

interface RadioGroupProps {
    value: string
    disabled?: boolean
    onChange?: (values: string) => void
}

type StackPropsExt = Omit<StackProps, "onEvents">

export const hasInvalidValue = (children: React.ReactNode) => {
    const childrenValues = React.Children.map(children, (child) =>
        React.isValidElement(child) && child?.props?.value
            ? child.props.value
            : ""
    )
    const childrenValuesSet = new Set(childrenValues)

    return (
        childrenValues?.length !== childrenValuesSet.size ||
        childrenValuesSet.has("")
    )
}

const RadioGroup: FunctionComponent<RadioGroupProps & StackPropsExt> = ({
    disabled = false,
    value = "",
    onChange,
    layout,
    styles,
    justify,
    alignItems,
    alignContent,
    direction,
    wrap = "wrap",
    children,
    __unsafeClassName,
    ...props
}) => {
    if (process.env.NODE_ENV === "development" && hasInvalidValue(children)) {
        throw new Error(
            "Radios in groups mustn't have empty or repeated values!"
        )
    }
    const [radioValues, setRadio] = useState(value)

    useEffect(() => {
        onChange && onChange(radioValues)
    }, [radioValues, onChange])

    return (
        <Stack
            layout={layout}
            styles={styles}
            justify={justify}
            alignItems={alignItems}
            alignContent={alignContent}
            direction={direction}
            wrap={wrap}
            __unsafeClassName={__unsafeClassName}
            {...props}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child) && child.props?.value) {
                    const radioName = child.props.value
                    const isActive = radioValues.includes(radioName)
                    const onChange = () => setRadio(radioName)
                    return React.cloneElement(child, {
                        key: index,
                        value: radioName,
                        disabled: disabled,
                        isActive: isActive,
                        onClick: onChange,
                    })
                }
            })}
        </Stack>
    )
}
RadioGroup.displayName = "RadioGroup"

export { RadioGroup }
