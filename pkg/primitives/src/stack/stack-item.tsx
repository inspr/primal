import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { StackItemBreakpoints, StackItemProps } from "../types"
import { BaseProps, flexStyle } from "../utils"
import { ViewKinds } from "../view/view"
import { generateStackStyling } from "./stack-utils"

const StackItem: FunctionComponent<BaseProps<ViewKinds> & StackItemProps> = ({
    is = "div",
    children,
    justify,
    alignItems,
    alignContent,
    direction,
    wrap = "wrap",
    injectedCSS,
    ...props
}) => {
    const { actions } = useTheme()
    const usedBreakpoints = { ...props } as StackItemBreakpoints

    const stackItemStyles = generateStackStyling(
        actions.breakpoints(),
        usedBreakpoints,
        flexStyle({
            justify: justify,
            alignItems: alignItems,
            alignContent: alignContent,
            direction: direction,
            wrap: wrap,
        })
    )

    // ! if you use third party component libs, wrap the components in our View component
    // ! otherwise it will not work (unless it has the prop __unsafeClassName)
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            let cname = child.props?.__unsafeClassName
                ? child.props?.__unsafeClassName
                : ""

            return React.cloneElement(
                child,
                {
                    __unsafeClassName: cname,
                    is: is,
                    injectedCSS: stackItemStyles,
                },
                [child.props?.children]
            )
        }
        return child
    })

    return <>{childrenWithProps}</>
}

StackItem.displayName = "Stack.Item"
export { StackItem }
