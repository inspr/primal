import { createTheme } from "@primal/primitives"

const theme = createTheme({
    token: {
        color: {
            swatch: {
                brown: {
                    100: "#f8f3f1",
                    200: "#e4d0c9",
                    300: "#cfada0",
                    400: "#bb8977",
                    500: "#a36852",
                    600: "#7a4e3e",
                    700: "#513429",
                    800: "#36231b",
                    900: "#1b120e",
                },
                yellow: {
                    100: "#fff8eb",
                    200: "#ffe4ad",
                    300: "#ffcf70",
                    400: "#ffba33",
                    500: "#f5a300",
                    600: "#b87a00",
                    700: "#7a5200",
                    800: "#523600",
                    900: "#241800",
                },
                orange: {
                    100: "#fff1eb",
                    200: "#ffc9ad",
                    300: "#ffa070",
                    400: "#ff7733",
                    500: "#f55200",
                    600: "#b83d00",
                    700: "#7a2900",
                    800: "#521b00",
                    900: "#290d00",
                },
                purple: {
                    100: "#f5ebff",
                    200: "#d6adff",
                    300: "#b870ff",
                    400: "#9933ff",
                    500: "#7a00f5",
                    600: "#5c00b8",
                    700: "#3d007a",
                    800: "#290052",
                    900: "#140029",
                },
                red: {
                    100: "#ffebee",
                    200: "#ffadbb",
                    300: "#ff7088",
                    400: "#ff3355",
                    500: "#e50026",
                    600: "#b8001f",
                    700: "#7a0014",
                    800: "#52000e",
                    900: "#290007",
                },
                pink: {
                    100: "#feecf8",
                    200: "#fab2e2",
                    300: "#f679cd",
                    400: "#f231b2",
                    500: "#e60f9e",
                    600: "#ad0b77",
                    700: "#73074f",
                    800: "#4d0535",
                    900: "#26021a",
                },
                blue: {
                    100: "#ecf2fe",
                    200: "#b2cafb",
                    300: "#78a2f7",
                    400: "#3e7bf4",
                    500: "#0d56e7",
                    600: "#0a41ae",
                    700: "#072b74",
                    800: "#041d4d",
                    900: "#020f27",
                },
                green: {
                    100: "#effaf1",
                    200: "#c1ecc6",
                    300: "#92dd9b",
                    400: "#63cf70",
                    500: "#3abb49",
                    600: "#2b8c36",
                    700: "#1d5e24",
                    800: "#133e18",
                    900: "#0a1f0c",
                },
                gray: {
                    50: "#fefefe",
                    100: "#f5f5f5",
                    200: "#d6d6d6",
                    300: "#b8b8b8",
                    400: "#999999",
                    500: "#7a7a7a",
                    600: "#5c5c5c",
                    700: "#3d3d3d",
                    800: "#292929",
                    900: "#111111",
                },
            },
            kind: {
                lumen: "gray.50",
                umbra: "gray.900",
                creativity: "yellow.400",
                danger: "red.500",
                privacy: "purple.400",
                trust: "blue.500",
            },
            gradient: {
                cta: "linear-gradient(90deg, #fc5d32 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%)",
            },
        },
        font: {
            family: {
                inter: '"Inter", sans-serif',
                opensauce: '"Open Sauce One", sans-serif',
            },
            weight: {
                regular: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
            },
            letterSpace: {
                sm: "-0.02rem",
                md: "0.01rem",
                lg: "0.04rem",
            },
            lineHeight: {
                xxxs: "12px",
                xxs: "16px",
                xs: "20px",
                sm: "24px",
                md: "28px",
                lg: "36px",
                xl: "44px",
                xxl: "64px",
                xxxl: "80px",
            },
            size: {
                xxxs: "10px",
                xxs: "12px",
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "28px",
                xl: "36px",
                xxl: "48px",
                xxxl: "64px",
            },
        },
        shadow: {
            xs: "0px 2px 4px rgba(17, 17, 17, 0.04), 0px 1px 2px rgba(17, 17, 17, 0.04)",
            sm: "0px 2px 4px rgba(17, 17, 17, 0.05), 0px 2px 4px rgba(17, 17, 17, 0.05)",
            md: "0px 4px 6px rgba(17, 17, 17, 0.04), 0px 6px 12px 2px rgba(17, 17, 17, 0.05)",
            lg: "0px 16px 32px 2px rgba(17, 17, 17, 0.08), 0px 32px 48px rgba(17, 17, 17, 0.08)",
            xl: "0px 48px 64px 2px rgba(17, 17, 17, 0.1), 0px 64px 80px rgba(17, 17, 17, 0.1)",
        },
        size: {
            xxxs: "2px",
            xxs: "4px",
            xs: "8px",
            sm: "16px",
            md: "24px",
            lg: "32px",
            xl: "48px",
            xxl: "64px",
            xxxl: "96px",
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
                fontFamily: '"Inter", sans-serif',
            },
            caption: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                fontFamily: '"Inter", sans-serif',
            },
            display: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "44px",
                fontFamily: '"Open Sauce One", sans-serif',
            },
            overline: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "16px",
                fontFamily: '"Inter", sans-serif',
            },
            subtitle: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "16px",
                fontFamily: '"Inter", sans-serif',
            },
            title: {
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "36px",
                fontFamily: '"Open Sauce One", sans-serif',
            },
        },
        button: {
            primary: {
                textColor: "gray.50",
                backgroundColor: "gray.900",
                borderColor: "gray.900",
                iconColor: "invert(1)",
                hover: {
                    textColor: "gray.900",
                    backgroundColor: "gray.50",
                    iconColor: "invert(0)",
                },
            },
            secondary: {
                textColor: "gray.900",
                backgroundColor: "gray.50",
                borderColor: "gray.900",
                hover: {
                    textColor: "gray.50",
                    backgroundColor: "gray.900",
                    iconColor: "invert(1)",
                },
            },
            success: {
                textColor: "gray.50",
                backgroundColor: "blue.500",
                borderColor: "blue.500",
                iconColor: "invert(1)",
                hover: {
                    textColor: "blue.500",
                    backgroundColor: "gray.50",
                    iconColor:
                        "invert(17%) sepia(100%) saturate(4267%) hue-rotate(221deg) brightness(97%) contrast(90%)",
                },
            },
            error: {
                textColor: "gray.50",
                backgroundColor: "red.500",
                borderColor: "red.500",
                iconColor: "invert(1)",
                hover: {
                    textColor: "red.500",
                    backgroundColor: "gray.50",
                    iconColor:
                        "invert(24%) sepia(50%) saturate(6429%) hue-rotate(338deg) brightness(81%) contrast(128%)",
                },
            },
            disabled: {
                textColor: "gray.600",
                backgroundColor: "gray.400",
                borderColor: "gray.400",
                iconColor:
                    "invert(38%) sepia(1%) saturate(0%) hue-rotate(42deg) brightness(90%) contrast(88%)",
            },
            cta: {
                textColor: "lumen",
                backgroundColor: "cta",
                borderColor: "transparent",
                shadow: "md",
                iconColor: "invert(1)",
                hover: {
                    shadow: "lg",
                    opacity: {
                        value: 0.35,
                        color: "umbra",
                    },
                },
            },
        },
        switch: {
            primary: {
                onColor: "umbra",
                offColor: "gray.200",
                ballColor: "gray.50",
            },
            secondary: {
                onColor: "gray.500",
                offColor: "gray.200",
                ballColor: "gray.50",
            },
            success: {
                onColor: "blue.500",
                offColor: "gray.200",
                ballColor: "gray.50",
            },
            error: {
                onColor: "danger",
                offColor: "gray.200",
                ballColor: "gray.50",
            },
        },
        checkbox: {
            primary: {
                backgroundColor: "gray.900",
                borderColor: "gray.900",
                checked: {
                    backgroundColor: "lumen",
                    checkColor: "umbra",
                },
            },
            secondary: {
                backgroundColor: "lumen",
                borderColor: "umbra",
                checked: {
                    backgroundColor: "umbra",
                    checkColor: "lumen",
                },
            },
            success: {
                backgroundColor: "blue.500",
                borderColor: "blue.500",
                checked: {
                    backgroundColor: "lumen",
                    checkColor: "blue.500",
                },
            },
            error: {
                backgroundColor: "red.500",
                borderColor: "red.500",
                checked: {
                    backgroundColor: "lumen",
                    checkColor: "red.500",
                },
            },
        },
        radio: {
            primary: {
                textColor: "umbra",
                backgroundColor: "gray.900",
                borderColor: "gray.900",
            },
            success: {
                textColor: "umbra",
                backgroundColor: "blue.500",
                borderColor: "blue.500",
            },
            error: {
                textColor: "umbra",
                backgroundColor: "red.500",
                borderColor: "red.500",
            },
            disabled: {
                textColor: "gray.600",
                backgroundColor: "gray.600",
                borderColor: "gray.600",
            },
        },
    },
})

export default theme