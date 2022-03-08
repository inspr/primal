import "@primal/theme"
import { create } from "react-test-renderer"
import { Breadcrumbs } from "./breadcrumb"

describe("Breadcrumbs", () => {
    it("should match snapshot", () => {
        const breadcrumbs = create(<Breadcrumbs url="/" />)
        expect(breadcrumbs.toJSON()).toMatchSnapshot()
    })

    it("renders a custom Breadcrumbs", () => {
        const breadcrumbs = create(
            <Breadcrumbs url="/test/big/url" home="big" color="gray.900" />
        )
        const props = breadcrumbs.root.findByProps({
            is: "nav",
        }).props

        const [firstLink, firstStackItem, secondLink] = [
            props.children[0].props.children[0],
            props.children[0].props.children[1],
            props.children[1].props.children[0],
        ]
        const text = firstStackItem.props.children
        const view = text.props.children
        expect(firstLink.type).toHaveProperty("displayName", "Link")
        expect(firstLink.props).toHaveProperty("href", "/test/big")
        expect(firstLink.props).toHaveProperty("color", "gray.900")

        expect(firstStackItem.type).toHaveProperty("displayName", "Stack.Item")
        expect(text.props).toHaveProperty("size", "xs")
        expect(text.props).toHaveProperty("weight", "semibold")
        expect(text.props).toHaveProperty("color", "gray.900")

        expect(view.props).toHaveProperty("children", "/")
        expect(view.props.layout.padding).toHaveProperty("left", "xxs")
        expect(view.props.layout.padding).toHaveProperty("right", "xxs")

        expect(secondLink.type).toHaveProperty("displayName", "Link")
        expect(secondLink.props).toHaveProperty("href", "/test/big/url")
        expect(secondLink.props).toHaveProperty("color", "gray.900")
    })
})
