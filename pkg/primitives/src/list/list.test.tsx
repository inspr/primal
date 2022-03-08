import "@primal/theme"
import { create } from "react-test-renderer"
import { List } from "./list"
import { ListItem } from "./list-item"

describe("Link", () => {
    it("should match standard list snapshot", () => {
        const list = create(
            <List>
                <ListItem>item 1</ListItem>
                <ListItem>item 2</ListItem>
            </List>
        )
        expect(list.toJSON()).toMatchSnapshot()
    })

    it("renders a ul list", () => {
        const list = create(
            <List>
                <ListItem>item 1</ListItem>
                <ListItem>item 2</ListItem>
            </List>
        )
        expect(list.toTree()?.props).toHaveProperty("children")
        expect(list.toTree()?.props.children).toHaveLength(2)
    })

    it("renders a custom ol list", () => {
        const list = create(
            <List type="ol">
                <ListItem>item 1</ListItem>
                <ListItem size="lg">item 2</ListItem>
                <List>
                    <ListItem>item 3</ListItem>
                    <ListItem>item 4</ListItem>
                </List>
            </List>
        )
        const listProps = list.root.findByProps({ size: "lg" }).props
        expect(list.toTree()?.props.children).toHaveLength(3)
        expect(list.toTree()?.props).toHaveProperty("type", "ol")
        expect(listProps).toHaveProperty("children", "item 2")
    })
})
