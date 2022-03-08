import "@primal/theme"
import { create } from "react-test-renderer"
import { View } from "../view/view"
import { GridItem } from "./grid-item"

describe("Grid Item", () => {
    it("should match snapshot", () => {
        const gridItem = create(<GridItem />)
        expect(gridItem.toJSON()).toMatchSnapshot()
    })

    it("renders a custom GridItem", () => {
        const gridItem = create(
            <GridItem
                ignore
                justify="center"
                xs={{
                    row: [1, 6],
                    column: [1, 24],
                }}
                sm={{
                    row: [1, 12],
                    column: [1, 12],
                }}
                md={{
                    row: [1, 12],
                    column: [1, 12],
                }}
                lg={{
                    row: [1, 12],
                    column: [1, 12],
                }}
                xl={{
                    row: [1, 12],
                    column: [1, 12],
                }}>
                <View>Some Grid.Item</View>
            </GridItem>
        )
        const props = gridItem.root.findByProps({
            ignore: true,
        }).props
        expect(props).toHaveProperty("xs", { row: [1, 6], column: [1, 24] })
        expect(props).toHaveProperty("sm", { row: [1, 12], column: [1, 12] })
        expect(props).toHaveProperty("md", { row: [1, 12], column: [1, 12] })
        expect(props).toHaveProperty("lg", { row: [1, 12], column: [1, 12] })
        expect(props).toHaveProperty("xl", { row: [1, 12], column: [1, 12] })
        expect(props).toHaveProperty("justify", "center")
        expect(props).toHaveProperty("children")
        expect(props.children).toHaveProperty("props")
        expect(props.children.props).toHaveProperty(
            "children",
            "Some Grid.Item"
        )
    })
})
