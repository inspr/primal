import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Image } from "./image"

describe("Image", () => {
    it("should match snapshot", () => {
        const image = create(
            <Image src="/fake.png" alt="test" width={50} height={50} />
        )
        expect(image.toJSON()).toMatchSnapshot()
    })

    it("renders an image without size", () => {
        const image = create(<Image src="/fake.png" alt="test" layout="fill" />)
        const props = image.root.findByProps({
            alt: "test",
        }).props
        const type = image.root.findByType("img").props

        expect(props).toHaveProperty("src", "/fake.png")
        expect(props).toHaveProperty("layout", "fill")
        expect(type.width).toBe(undefined)
        expect(type.height).toBe(undefined)
    })

    it("renders an image with size", () => {
        const image = create(
            <Image src="/fake.png" alt="test" width={50} height={50} />
        )
        const props = image.root.findByProps({
            alt: "test",
        }).props
        expect(props).toHaveProperty("width", 50)
        expect(props).toHaveProperty("height", 50)
    })
})
