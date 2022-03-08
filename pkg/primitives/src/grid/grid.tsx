import { css, SerializedStyles } from "@emotion/react"
import React, { FunctionComponent } from "react"
import { GridProps, Unit } from "../types"
import { BaseProps } from "../utils"
import { View, ViewKinds } from "../view/view"
import { GridItem } from "./grid-item"
import { verifyDimensionsIntegrity } from "./grid-utils"

const gridStyle = (props: {
    maxRows?: {
        repeat: number
        unit: Unit | `${number}fr`
    }
    maxColumns?: {
        repeat: number
        unit: Unit | `${number}fr`
    }
    injectedCSS?: SerializedStyles
}) => css`
    ${props.maxRows
        ? `grid-template-rows: repeat(${props.maxRows.repeat}, ${props.maxRows.unit});`
        : ""}
    ${props.maxColumns
        ? `grid-template-columns: repeat(${props.maxColumns.repeat}, ${props.maxColumns.unit});`
        : ""}
    ${props.injectedCSS ? props.injectedCSS : ""}
`

const Grid: FunctionComponent<BaseProps<ViewKinds> & GridProps> & {
    Item: typeof GridItem
} = ({
    is = "div",
    children,
    layout,
    styles,
    maxRows,
    maxColumns,
    __unsafeClassName,
    onEvents: { onClick } = {},
    injectedCSS,
    ...props
}) => {
    return (
        <View
            is={is}
            onEvents={{
                onClick: onClick,
            }}
            layout={{
                ...layout,
                display: "grid",
            }}
            styles={styles}
            injectedCSS={gridStyle({
                maxRows: maxRows,
                maxColumns: maxColumns,
                injectedCSS: injectedCSS,
            })}
            __unsafeClassName={__unsafeClassName}
            {...props}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    if (child?.props?.ignore) return
                    if (
                        process.env.NODE_ENV === "development" &&
                        (maxColumns || maxRows)
                    ) {
                        verifyDimensionsIntegrity(
                            child?.props,
                            maxRows?.repeat,
                            maxColumns?.repeat
                        )
                    }
                    return React.cloneElement(child, {
                        key: index,
                    })
                }
            })}
        </View>
    )
}

Grid.displayName = "Grid"
Grid.Item = GridItem

export { Grid }
