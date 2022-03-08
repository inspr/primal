import type { PrimitivesTheme } from "@primal/primitives"
import { AtomicState, createState, Unpack, useInspr } from "@primal/state"
import {
    AnyShadow,
    AnyTypedSize,
    Color,
    FontFamily,
    PX,
    Size,
    Unit,
    Weight,
} from "../types"
import { VariantOptions } from "../types/variants"
import { createActions } from "./create-actions"

interface DefaultTheme {
    token: {
        shadow: { [size in Size]: string }
        color: {
            swatch: {}
            kind: {}
            gradient: {}
        }
        font: {
            family: {}
            lineHeight: {}
            weight: {}
            letterSpace: {}
            size: {}
        }
        size: {}
        breakpoint: {}
    }
    variants: {}
}

type Theme = DefaultTheme & PrimitivesTheme
export type Token = Theme["token"]
export type Variants = Theme["variants"]

export interface Spec {
    token: {
        color: Color
        font: {
            family: {
                [key: string]: FontFamily
            }
            weight: {
                [key: string]: Weight
            }
            letterSpace: {
                [size in Size<0>]: Unit
            }
            lineHeight: AnyTypedSize<Unit>
            size: AnyTypedSize<PX>
        }
        shadow: AnyTypedSize<AnyShadow>
        size: AnyTypedSize<Unit>
        breakpoint: AnyTypedSize<{ min: PX; max: PX }>
    }
    variants: VariantOptions
}

let primitivesThemeContext: AtomicState<any>

export const createTheme = <T extends Spec>(spec: T) => {
    const theme = createState({
        __theme: spec,
        actions: createActions(spec),
    })

    primitivesThemeContext = theme
    return theme
}

export const useTheme = (): Unpack<ReturnType<typeof createTheme>> => {
    if (!primitivesThemeContext) {
        if (process.env.NODE_ENV === "development") {
            throw new Error("A theme must be registered before use")
        }
    }
    return useInspr(primitivesThemeContext)
}
