import { Token } from "../theme"
import { LayoutProps, onEvents, StyleProps, Unit } from "./"
import { FlexProps } from "./layout"
import { ViewBreakPoints } from "./view"

export type GridItemTuple = {
    row: [number, number]
    column: [number, number]
}

export type GridBreakpoints = {
    [key in keyof Token["breakpoint"]]?: GridItemTuple
}

export interface GridItemProps extends GridBreakpoints, FlexProps {
    display?: "flex" | "grid" | "none"
    ignore?: boolean
}

export interface GridProps extends ViewBreakPoints {
    layout?: LayoutProps
    styles?: StyleProps
    onEvents?: onEvents
    maxRows?: {
        repeat: number
        unit: Unit | `${number}fr`
    }
    maxColumns?: {
        repeat: number
        unit: Unit | `${number}fr`
    }
    __unsafeClassName?: string
}
