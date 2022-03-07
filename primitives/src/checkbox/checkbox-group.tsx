import React, { FunctionComponent, useEffect, useState } from "react"
import { Stack } from "../stack/stack"
import { StackProps } from "../types"

interface CheckboxGroupProps {
    value: string[]
    disabled?: boolean
    onChange?: (values: string[]) => void
}

type StackPropsExt = Omit<StackProps, "onEvents">

// TODO: remove export once issue https://github.com/vercel/next.js/issues/33005 is resolved
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

const CheckboxGroup: FunctionComponent<CheckboxGroupProps & StackPropsExt> = ({
    disabled = false,
    value = [],
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
            "Checkbox in group mustn't have empty or repeated values!"
        )
    }

    const [cbValues, setCheckboxes] = useState(value)

    useEffect(() => {
        onChange && onChange(cbValues)
    }, [cbValues, onChange])

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
                    const cbName = child.props.value
                    const isActive = cbValues.includes(cbName)
                    const onChange = isActive
                        ? () =>
                              setCheckboxes(
                                  cbValues.filter(
                                      (targetString) => targetString !== cbName
                                  )
                              )
                        : () => setCheckboxes([...cbValues, cbName])
                    return React.cloneElement(child, {
                        key: index,
                        value: cbName,
                        disabled: disabled,
                        isActive: isActive,
                        onChange: onChange,
                    })
                }
            })}
        </Stack>
    )
}
CheckboxGroup.displayName = "CheckboxGroup"

export { CheckboxGroup }
