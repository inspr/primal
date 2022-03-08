import { SerializedStyles } from "@emotion/react"
import React, { DOMAttributes, PropsWithChildren } from "react"

export interface CSSResolvedStyle {
    className: string
    styles: JSX.Element
}
export type Style = CSSResolvedStyle | string

export type BaseProps<Kinds extends React.ElementType> = PropsWithChildren<
    JSX.IntrinsicAttributes &
        DOMAttributes<HTMLDivElement> & {
            is?: Kinds
            injectedCSS?: SerializedStyles
        }
>
