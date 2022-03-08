import "@primal/theme"
import { create } from "react-test-renderer"
import { View } from "./view"

describe("View", () => {
    it("should match snapshot", () => {
        const view = create(<View />)
        expect(view.toJSON()).toMatchSnapshot()
    })

    it("renders a custom View", () => {
        const view = create(
            <View
                is="section"
                layout={{
                    top: "50px",
                    right: "50px",
                    bottom: "50px",
                    left: "50px",
                    overflow: "hidden",
                    display: "flex",
                    padding: {
                        top: "xxxs",
                        right: "xxs",
                        bottom: "xl",
                        left: "xxl",
                    },
                    margin: {
                        top: "xxxs",
                        right: "xxs",
                        bottom: "xl",
                        left: "xxl",
                    },
                    zIndex: 1,
                    position: "absolute",
                    width: "sm",
                    maxWidth: "xxxs",
                    minWidth: "xs",
                    height: "md",
                    maxHeight: "xxxs",
                    minHeight: "xl",
                    gap: "5px",
                }}
                styles={{
                    shadow: "xl",
                    backgroundColor: "danger",
                    backgroundImage:
                        "linear-gradient(180deg, #EDEEF1 18.05%, rgba(255, 255, 255, 0) 100%)",
                    backgroundPosition: "top",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "contain",
                    borderColor: "gray.200",
                    borderRadius: "5px",
                    borderWidth: "5px",
                    borderStyle: "dashed",
                    opacity: 1,
                    cursor: "pointer",
                    transition: "width 2s",
                }}
                md={{
                    styles: {
                        borderStyle: "solid",
                    },
                    layout: {
                        width: "fit-content",
                    },
                }}
                __unsafeClassName="someClassName">
                Some View
            </View>
        )
        const props = view.root.findByProps({ is: "section" }).props

        // Verify objects
        expect(props).toHaveProperty("children", "Some View")
        expect(props).toHaveProperty("__unsafeClassName", "someClassName")
        expect(props).toHaveProperty("layout")
        expect(props).toHaveProperty("styles")
        expect(props).toHaveProperty("md")

        // Verify layout props
        expect(props.layout).toHaveProperty("display", "flex")
        expect(props.layout).toHaveProperty("padding", {
            top: "xxxs",
            right: "xxs",
            bottom: "xl",
            left: "xxl",
        })
        expect(props.layout).toHaveProperty("margin", {
            top: "xxxs",
            right: "xxs",
            bottom: "xl",
            left: "xxl",
        })
        expect(props.layout).toHaveProperty("zIndex", 1)
        expect(props.layout).toHaveProperty("position", "absolute")
        expect(props.layout).toHaveProperty("width", "sm")
        expect(props.layout).toHaveProperty("maxWidth", "xxxs")
        expect(props.layout).toHaveProperty("minWidth", "xs")
        expect(props.layout).toHaveProperty("height", "md")
        expect(props.layout).toHaveProperty("maxHeight", "xxxs")
        expect(props.layout).toHaveProperty("minHeight", "xl")
        expect(props.layout).toHaveProperty("gap", "5px")
        expect(props.layout).toHaveProperty("top", "50px")
        expect(props.layout).toHaveProperty("right", "50px")
        expect(props.layout).toHaveProperty("bottom", "50px")
        expect(props.layout).toHaveProperty("left", "50px")
        expect(props.layout).toHaveProperty("overflow", "hidden")
        // Verify style props
        expect(props.styles).toHaveProperty("shadow", "xl")
        expect(props.styles).toHaveProperty("backgroundColor", "danger")
        expect(props.styles).toHaveProperty(
            "backgroundImage",
            "linear-gradient(180deg, #EDEEF1 18.05%, rgba(255, 255, 255, 0) 100%)"
        )
        expect(props.styles).toHaveProperty("backgroundPosition", "top")
        expect(props.styles).toHaveProperty("backgroundRepeat", "repeat-x")
        expect(props.styles).toHaveProperty("backgroundSize", "contain")
        expect(props.styles).toHaveProperty("borderColor", "gray.200")
        expect(props.styles).toHaveProperty("borderRadius", "5px")
        expect(props.styles).toHaveProperty("borderWidth", "5px")
        expect(props.styles).toHaveProperty("borderStyle", "dashed")
        expect(props.styles).toHaveProperty("opacity", 1)
        expect(props.styles).toHaveProperty("cursor", "pointer")
        expect(props.styles).toHaveProperty("transition", "width 2s")

        // Verify media query (md) props
        expect(props.md).toHaveProperty("layout")
        expect(props.md).toHaveProperty("styles")
        expect(props.md.layout).toHaveProperty("width", "fit-content")
        expect(props.md.styles).toHaveProperty("borderStyle", "solid")
    })
})
