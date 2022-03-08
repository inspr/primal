import "@primal/theme"
import { create } from "react-test-renderer"
import { Stack } from "./stack"

describe("Stack", () => {
    it("should match snapshot", () => {
        const stack = create(<Stack />)
        expect(stack.toJSON()).toMatchSnapshot()
    })

    it("renders a custom Stack", () => {
        const stack = create(
            <Stack
                is="section"
                layout={{
                    display: "none",
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
                    width: "sm",
                    maxWidth: "xxxs",
                    minWidth: "xs",
                    height: "md",
                    maxHeight: "xxxs",
                    minHeight: "xl",
                    gap: "5px",
                }}
                justify="flex-start"
                alignItems="stretch"
                alignContent="space-between"
                direction="column-reverse"
                wrap="nowrap">
                Some Stack
            </Stack>
        )
        const { layout, ...props } = stack.root.findByProps({
            is: "section",
        }).props

        expect(layout).toHaveProperty("display", "none")
        expect(layout).toHaveProperty("padding", {
            top: "xxxs",
            right: "xxs",
            bottom: "xl",
            left: "xxl",
        })
        expect(layout).toHaveProperty("margin", {
            top: "xxxs",
            right: "xxs",
            bottom: "xl",
            left: "xxl",
        })
        expect(layout).toHaveProperty("width", "sm")
        expect(layout).toHaveProperty("maxWidth", "xxxs")
        expect(layout).toHaveProperty("minWidth", "xs")
        expect(layout).toHaveProperty("height", "md")
        expect(layout).toHaveProperty("maxHeight", "xxxs")
        expect(layout).toHaveProperty("minHeight", "xl")
        expect(layout).toHaveProperty("gap", "5px")

        expect(props).toHaveProperty("children", "Some Stack")
        expect(props).toHaveProperty("justify", "flex-start")
        expect(props).toHaveProperty("alignItems", "stretch")
        expect(props).toHaveProperty("alignContent", "space-between")
        expect(props).toHaveProperty("direction", "column-reverse")
        expect(props).toHaveProperty("wrap", "nowrap")
    })
})
