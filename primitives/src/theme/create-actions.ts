import { AnySize, Swatch, VariantOptions, Weight } from "../types"
import { Spec, Token } from "./index"

//TODO check types that are "string | number" e.g "presetValueAux"

export const createActions = (theme: Spec) => ({
    color(colorValue: string | `${string}.${Weight}`) {
        if (!colorValue || colorValue === "transparent") return colorValue

        const { swatch, kind, gradient } = theme.token.color

        if (Object.keys(gradient).includes(colorValue)) {
            return gradient[colorValue]
        }

        let colorValueAux = colorValue

        if (Object.keys(kind).includes(colorValue)) {
            colorValueAux = kind[colorValue]
        }
        const [color, weight] = colorValueAux.split(".") as [
            keyof typeof swatch,
            Weight
        ]
        const selectedColor: { [weight in Weight]?: Swatch } = swatch[color]
        // TODO: fix typing so this validation isn't necessary (ex: brown.50 seems to be valid)
        const validColor = selectedColor && selectedColor[weight]
        return validColor ? selectedColor[weight]! : "transparent"
    },
    fontWeight(weightValue: string) {
        const { weight } = theme.token.font
        let weightOptions = weightValue as keyof typeof weight
        return weight[weightOptions]
    },
    fontFamily(familyValue: string) {
        const { family } = theme.token.font
        let familyOptions = familyValue as keyof typeof family
        return family[familyOptions]
    },
    fontSize(sizeValue: AnySize) {
        const { size } = theme.token.font
        let sizeOptions = sizeValue as keyof typeof size
        return size[sizeOptions]
    },
    letterSpace(spaceValue: AnySize) {
        const { letterSpace } = theme.token.font
        // const letterSpace = theme.token.font["letterSpace"]
        let spaceOptions = spaceValue as keyof typeof letterSpace
        return letterSpace[spaceOptions]
    },
    lineHeight(heightValue: AnySize) {
        const { lineHeight } = theme.token.font
        let heightOptions = heightValue as keyof typeof lineHeight
        return lineHeight[heightOptions]
    },
    size(sizeValue: AnySize) {
        const { size } = theme.token
        const sizeOptions = sizeValue as keyof typeof size
        return size[sizeOptions]
    },
    shadow(shadowValue: AnySize) {
        const { shadow } = theme.token
        const shadowOptions = shadowValue as keyof typeof shadow
        return shadow[shadowOptions]
    },
    breakpoints() {
        return theme.token.breakpoint as Token["breakpoint"]
    },
    variants(component: keyof VariantOptions, variant: string) {
        const { variants } = theme
        const selected = variants[component]
        const type = variant as keyof typeof selected

        return variants[component][type]
    },
})

export type ActionType = ReturnType<typeof createActions>
