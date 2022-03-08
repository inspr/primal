import { Token } from "../theme"
import { onEvents } from "./event"
import { LayoutProps } from "./layout"
import { StyleProps } from "./style"

export type ViewBreakPoints = {
    [key in keyof Token["breakpoint"]]?: {
        layout?: LayoutProps
        styles?: StyleProps
    }
}

export interface ViewProps extends ViewBreakPoints {
    layout?: LayoutProps
    styles?: StyleProps
    onEvents?: onEvents
    // Each time you use this prop, a panda dies
    __unsafeClassName?: string
}
