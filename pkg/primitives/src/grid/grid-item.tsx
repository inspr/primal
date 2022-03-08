import React, { FunctionComponent } from "react"
import { useTheme } from "../theme"
import { GridBreakpoints, GridItemProps } from "../types"
import { BaseProps, flexStyle } from "../utils"
import { ViewKinds } from "../view/view"
import { generateGridStyling } from "./grid-utils"

const GridItem: FunctionComponent<BaseProps<ViewKinds> & GridItemProps> = ({
    is = "div",
    display = "flex",
    children,
    justify,
    alignItems,
    alignContent,
    direction,
    wrap = "wrap",
    ignore,
    injectedCSS,
    ...props
}) => {
    const { actions } = useTheme()
    const usedBreakpoints = { ...props } as GridBreakpoints

    const gridItemStyles = generateGridStyling(
        actions.breakpoints(),
        usedBreakpoints,
        flexStyle({
            justify: justify,
            alignItems: alignItems,
            alignContent: alignContent,
            direction: direction,
            wrap: wrap,
        }),
        display
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
                    injectedCSS: gridItemStyles,
                },
                [child.props?.children]
            )
        }
        return child
    })

    return <>{childrenWithProps}</>
}

GridItem.displayName = "Grid.Item"

export { GridItem }
