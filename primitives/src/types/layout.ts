import { Token } from "../theme"
import { Unit } from "./"

type PositionValues = "relative" | "absolute" | "sticky" | "static"
type Gap = Unit | `${Unit} ${Unit}`

type Justify =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
type AlignItems = "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
type AlignContent =
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"

export type AllSizes = `${keyof Token["size"]}`
export type DimensionValue = AllSizes | Unit | "auto" | "fit-content"
export type Direction = "top" | "bottom" | "left" | "right"

export interface FlexProps {
    justify?: Justify
    alignItems?: AlignItems
    alignContent?: AlignContent
    direction?: FlexDirection
    wrap?: FlexWrap
}

export type SpacerBreakPoints = {
    [key in keyof Token["breakpoint"]]?: {
        size: AllSizes
    }
}

export interface LayoutProps {
    display?: "flex" | "grid" | "none"
    overflow?: "hidden"
    padding?: {
        top?: AllSizes | Unit
        right?: AllSizes | Unit
        bottom?: AllSizes | Unit
        left?: AllSizes | Unit
    }
    margin?: {
        top?: AllSizes | Unit | "auto"
        right?: AllSizes | Unit | "auto"
        bottom?: AllSizes | Unit | "auto"
        left?: AllSizes | Unit | "auto"
    }
    zIndex?: number
    position?: PositionValues
    width?: DimensionValue
    maxWidth?: DimensionValue
    minWidth?: DimensionValue
    height?: DimensionValue
    top?: DimensionValue
    right?: DimensionValue
    bottom?: DimensionValue
    left?: DimensionValue
    maxHeight?: DimensionValue
    minHeight?: DimensionValue
    gap?: Gap
}
