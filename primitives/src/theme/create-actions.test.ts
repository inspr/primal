import { createActions } from "./create-actions"
import { ButtonVariant, TextVariant } from "../types"
import { Spec } from "./index"

const mockTheme: Spec = {
    token: {
        color: {
            swatch: {
                brown: {
                    100: "#f8f3f1",
                    200: "#e4d0c9",
                    300: "#cfada0",
                },
            },
            kind: {
                lumen: "brown.100",
                umbra: "brown.200",
            },
            gradient: {
                cta: "linear-gradient(90deg, #fc5d32 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%)",
            },
        },
        font: {
            family: {
                inter: '"Inter", sans-serif',
            },
            weight: {
                regular: "400",
                medium: "500",
            },
            letterSpace: {
                sm: "-0.02rem",
                md: "0.01rem",
                lg: "0.04rem",
            },
            lineHeight: {
                sm: "24px",
                md: "28px",
                lg: "36px",
            },
            size: {
                sm: "16px",
                md: "18px",
                lg: "28px",
            },
        },
        shadow: {
            sm: "0px 2px 4px rgba(17, 17, 17, 0.05), 0px 2px 4px rgba(17, 17, 17, 0.05)",
            md: "0px 4px 6px rgba(17, 17, 17, 0.04), 0px 6px 12px 2px rgba(17, 17, 17, 0.05)",
            lg: "0px 16px 32px 2px rgba(17, 17, 17, 0.08), 0px 32px 48px rgba(17, 17, 17, 0.08)",
        },
        size: {
            sm: "16px",
            md: "24px",
            lg: "32px",
        },
        breakpoint: {
            xs: { min: "0px", max: "600px" },
            sm: { min: "600px", max: "900px" },
            md: { min: "900px", max: "1280px" },
            lg: { min: "1280px", max: "1920px" },
            xl: { min: "1920px", max: "10000px" },
        },
    },
    variants: {
        text: {
            default: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: '"Inter", sans-serif'
            },
        },
        button: {
            primary: {
                textColor: "gray.50",
                backgroundColor: "gray.900",
                borderColor: "gray.900",
                hover: {
                    textColor: "gray.900",
                    backgroundColor: "gray.50",
                    borderColor: "gray.900",
                },
            },
        },
        checkbox: {},
        radio: {},
        switch: {}
    },
}

const actions = createActions(mockTheme)

describe("createActions", () => {
    it("tests color getter", () => {
        const value = actions.color("brown.300")
        const valueKind = actions.color("umbra")
        const transparentValue = actions.color("transparent")

        expect(value).toBe("#cfada0")
        expect(valueKind).toBe("#e4d0c9")
        expect(transparentValue).toBe("transparent")
    })

    it("tests fontWeight getter", () => {
        const value = actions.fontWeight("regular")

        expect(value).toBe("400")
    })

    it("tests fontFamily getter", () => {
        const value = actions.fontFamily("inter")

        expect(value).toBe('"Inter", sans-serif')
    })

    it("tests fontSize getter", () => {
        const value = actions.fontSize("sm")

        expect(value).toBe("16px")
    })

    it("tests letterSpace getter", () => {
        const value = actions.letterSpace("md")

        expect(value).toBe("0.01rem")
    })

    it("tests lineHeight getter", () => {
        const value = actions.lineHeight("lg")

        expect(value).toBe("36px")
    })

    it("test size getter", () => {
        const sizeStatic = actions.size("md")
        expect(sizeStatic).toBe("24px")
    })

    it("test shadow getter", () => {
        const shadow = actions.shadow("sm")
        expect(shadow).toBe(
            "0px 2px 4px rgba(17, 17, 17, 0.05), 0px 2px 4px rgba(17, 17, 17, 0.05)"
        )
    })
    it("tests breakpoints getter", () => {
        const breakpoint = actions.breakpoints()

        expect(breakpoint).toHaveProperty("xs")
        expect(breakpoint.xs).toHaveProperty("min", "0px")
        expect(breakpoint.xs).toHaveProperty("max", "600px")
        expect(breakpoint).toHaveProperty("sm")
        expect(breakpoint.sm).toHaveProperty("min", "600px")
        expect(breakpoint.sm).toHaveProperty("max", "900px")
        expect(breakpoint).toHaveProperty("md")
        expect(breakpoint.md).toHaveProperty("min", "900px")
        expect(breakpoint.md).toHaveProperty("max", "1280px")
        expect(breakpoint).toHaveProperty("lg")
        expect(breakpoint.lg).toHaveProperty("min", "1280px")
        expect(breakpoint.lg).toHaveProperty("max", "1920px")
        expect(breakpoint).toHaveProperty("xl")
        expect(breakpoint.xl).toHaveProperty("min", "1920px")
        expect(breakpoint.xl).toHaveProperty("max", "10000px")
    })

    it("tests variants button getter", () => {
        const variants = actions.variants("button", "primary") as ButtonVariant["primary"]
        expect(variants).toHaveProperty("textColor", "gray.50")
        expect(variants).toHaveProperty("backgroundColor", "gray.900")
        expect(variants).toHaveProperty("borderColor", "gray.900")
        expect(variants).toHaveProperty("hover")
        expect(variants.hover).toHaveProperty("textColor", "gray.900")
        expect(variants.hover).toHaveProperty("backgroundColor", "gray.50")
        expect(variants.hover).toHaveProperty("borderColor", "gray.900")
    })

    it("tests variants text getter", () => {
        const variants = actions.variants("text", "default") as TextVariant["default"]
        expect(variants).toHaveProperty("fontStyle", "normal")
        expect(variants).toHaveProperty("fontVariant", "normal")
        expect(variants).toHaveProperty("fontWeight", "400")
        expect(variants).toHaveProperty("fontSize", "16px")
        expect(variants).toHaveProperty("lineHeight", "24px")
        expect(variants).toHaveProperty("fontFamily", '"Inter", sans-serif')
    })
})
