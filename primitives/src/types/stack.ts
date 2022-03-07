import { Token } from "../theme"
import { onEvents } from "../types/event"
import { FlexProps, LayoutProps } from "./layout"
import { StyleProps } from "./style"
import { ViewBreakPoints } from "./view"

export type StackItemBreakpointsValue = number | boolean

export type StackItemLayoutValue = {
    grow: number
    width: string
    basis: string
    display: string
}

export type StackItemBreakpoints = {
    [key in keyof Token["breakpoint"]]?: StackItemBreakpointsValue
}

export interface StackItemProps extends StackItemBreakpoints, FlexProps {}

export interface StackProps extends FlexProps, ViewBreakPoints {
    layout?: LayoutProps
    styles?: StyleProps
    onEvents?: onEvents
    // Each time you use this prop, a panda dies
    __unsafeClassName?: string
}
