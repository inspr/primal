import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Avatar } from "./avatar"

describe("Avatar", () => {
    it("renders standard avatar", () => {
        const avatar = create(<Avatar src="/fake.png" alt="fake" />)
        const rendered = avatar.root.findByProps({
            alt: "fake",
        }).props
        const props = avatar.root.findByProps({
            width: "24px",
        }).props

        expect(rendered).toHaveProperty("src", "/fake.png")
        expect(props).toHaveProperty("height", "24px")
        expect(props).toHaveProperty("className", "border")
    })

    it("renders large avatar", () => {
        const avatar = create(<Avatar src="/fake.png" alt="fake" size="xl" />)
        const props = avatar.root.findByProps({
            alt: "fake",
        }).props
        expect(props).toHaveProperty("size", "xl")
    })

    it("should match snapshot", () => {
        const avatar = create(<Avatar src="/fake.png" alt="fake" size="sm" />)
        expect(avatar.toJSON()).toMatchSnapshot()
    })
})
