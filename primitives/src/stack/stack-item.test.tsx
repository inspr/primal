import "@primal/theme"
import { create } from "react-test-renderer"
import { View } from "../view/view"
import { StackItem } from "./stack-item"

describe("StackItem", () => {
    it("should match snapshot", () => {
        const stack = create(<StackItem />)
        expect(stack.toJSON()).toMatchSnapshot()
    })

    it("renders a custom StackItem", () => {
        const stack = create(
            <StackItem sm={18} md={14} lg={10}>
                <View>Some StackItem</View>
            </StackItem>
        )
        const props = stack.root.findByProps({ md: 14 }).props

        expect(props).toHaveProperty("sm", 18)
        expect(props).toHaveProperty("md", 14)
        expect(props).toHaveProperty("lg", 10)
        expect(props).toHaveProperty("children")
        expect(props.children).toHaveProperty("props")
        expect(props.children.props).toHaveProperty(
            "children",
            "Some StackItem"
        )
    })
})
