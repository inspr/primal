import "@primal/theme"
import { create } from "react-test-renderer"
import { Text } from "./text"

describe("Text", () => {
    it("renders a custom Text", () => {
        const view = create(
            <Text
                is="p"
                textVariant="caption"
                textAlign="center"
                whiteSpace="pre-line"
                weight="bold"
                family="opensauce"
                size="xl"
                letterSpace="sm"
                lineHeight="xxl"
                uppercase
                italic
                color="blue.400">
                Some Text
            </Text>
        )
        const props = view.root.findByProps({ is: "p" }).props
        expect(props).toHaveProperty("children", "Some Text")
        expect(props).toHaveProperty("textVariant", "caption")
        expect(props).toHaveProperty("textAlign", "center")
        expect(props).toHaveProperty("whiteSpace", "pre-line")
        expect(props).toHaveProperty("weight", "bold")
        expect(props).toHaveProperty("family", "opensauce")
        expect(props).toHaveProperty("size", "xl")
        expect(props).toHaveProperty("letterSpace", "sm")
        expect(props).toHaveProperty("lineHeight", "xxl")
        expect(props).toHaveProperty("uppercase", true)
        expect(props).toHaveProperty("italic", true)
        expect(props).toHaveProperty("color", "blue.400")
    })

    it("should match snapshot", () => {
        const text = create(<Text>Some Text</Text>)
        expect(text.toJSON()).toMatchSnapshot()
    })
})
