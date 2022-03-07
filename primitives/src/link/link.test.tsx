import "@primal/theme"
import { create } from "react-test-renderer"
import { Link } from "./link"

describe("Link", () => {
    it("should match standard link snapshot", () => {
        const link = create(<Link href="/">Link test</Link>)
        expect(link.toJSON()).toMatchSnapshot()
    })

    it("renders a standard external link", () => {
        const link = create(<Link href="https://www.test.com">Link test</Link>)
        const linkProps = link.root.findByProps({ is: "a" }).props

        expect(linkProps).toHaveProperty("href", "https://www.test.com")
        expect(linkProps).toHaveProperty("children", "Link test")
    })

    it("renders a custom link", () => {
        const link = create(
            <Link href="/blog" size="lg" color="brown.100">
                Link test
            </Link>
        )

        const linkProps = link.root.findByProps({ size: "lg" }).props

        expect(linkProps).toHaveProperty("href", "/blog")
        expect(linkProps).toHaveProperty("color", "brown.100")
        expect(linkProps).toHaveProperty("children", "Link test")
    })
})
