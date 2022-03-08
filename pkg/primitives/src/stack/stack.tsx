import React, { FunctionComponent } from "react"
import { StackProps } from "../types"
import { BaseProps, flexStyle } from "../utils"
import { View, ViewKinds } from "../view/view"
import { StackItem } from "./stack-item"

const Stack: FunctionComponent<BaseProps<ViewKinds> & StackProps> & {
    Item: typeof StackItem
} = ({
    is = "div",
    children,
    layout,
    styles,
    justify,
    alignItems,
    alignContent,
    direction,
    wrap = "wrap",
    onEvents: { onClick } = {},
    __unsafeClassName,
    injectedCSS,
    ...props
}) => {
    return (
        <View
            is={is}
            layout={{ ...layout, display: "flex" }}
            styles={styles}
            onEvents={{
                onClick: onClick,
            }}
            injectedCSS={flexStyle({
                justify: justify,
                alignItems: alignItems,
                alignContent: alignContent,
                direction: direction,
                wrap: wrap,
                injectedCSS: injectedCSS,
            })}
            __unsafeClassName={__unsafeClassName}
            {...props}>
            {children}
        </View>
    )
}

Stack.displayName = "Stack"
Stack.Item = StackItem
export { Stack }
