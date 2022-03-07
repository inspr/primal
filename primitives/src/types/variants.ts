import { Variants } from "../theme"
import { 
    AnySize,
    Weight,
    FontStyleOptions,
    FontVariantOptions,
    Unit
} from "./"

type ColorProps = "textColor" | "backgroundColor" | "borderColor"

export type TextVariant = {
    [key: string]: {
        [key in "fontSize" | "lineHeight"]?: Unit
    } & {
        fontStyle?: FontStyleOptions
        fontVariant?: FontVariantOptions
        fontWeight?: Weight
        fontFamily?: string
    }
}

export type ButtonVariant = {
    [key: string]: {
        [key in ColorProps]: `${string}.${Weight}` | string
    } & {
        shadow?: AnySize
        iconColor?: `invert(${string})` | string
        hover?: { [key in ColorProps]?: `${string}.${Weight}` | string } & {
            opacity?: {
                color: `${string}.${Weight}` | string
                value: number
            }
            shadow?: AnySize
            iconColor?: `invert(${string})` | string
        }
    }
}

export type CheckboxVariant = {
    [key: string]: {
        [key in "backgroundColor" | "borderColor"]?:
            | `${string}.${Weight}`
            | string
    } & {
        checked?: {
            [key in "backgroundColor" | "borderColor" | "checkColor"]?:
                | `${string}.${Weight}`
                | string
        }
    }
}

export type RadioVariant = {
    [key: string]: {
        [key in "backgroundColor" | "borderColor"]?:
            | `${string}.${Weight}`
            | string
    }
}

export type SwitchVariant = {
    [key: string]: {
        onColor?: `${string}.${Weight}` | string
        offColor?: `${string}.${Weight}` | string
        ballColor?: `${string}.${Weight}` | string
    }
}

export type TextTypes = keyof Variants["text"]
export type ButtonTypes = keyof Variants["button"]
export type CheckboxTypes = keyof Variants["checkbox"]
export type RadioTypes = keyof Variants["radio"]
export type SwitchTypes = keyof Variants["switch"]

// TODO: make variants optional
export type VariantOptions = {
    button: ButtonVariant
    checkbox: CheckboxVariant
    radio: RadioVariant
    switch: SwitchVariant
    text: TextVariant
}
