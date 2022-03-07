import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Icon } from "./icon"

jest.mock(
    "next/image",
    () =>
        function Image({ src, alt }: { src: string; alt: string }) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={"/fake.svg"} alt={alt} />
        }
)

jest.fn(function getIcon(name: string) {
    return <svg>{name}</svg>
})

describe("Icon", () => {
    it("should match snapshot", () => {
        const icon = create(<Icon name="inspr" />)
        expect(icon.toJSON()).toMatchSnapshot()
    })

    it("renders a small icon", () => {
        const icon = create(<Icon name="inspr" size="sm" kind="line" />)
        const props = icon.root.findByProps({
            name: "inspr",
        }).props
        expect(props).toHaveProperty("size", "sm")
    })
})
