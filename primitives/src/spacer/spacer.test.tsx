import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Spacer } from "./spacer"

describe("Image", () => {
    it("should match snapshot", () => {
        const spacer = create(<Spacer />)
        expect(spacer.toJSON()).toMatchSnapshot()
    })

    it("renders a small Spacer", () => {
        const spacer = create(<Spacer size="sm" />)
        const type = spacer.root.findByType("div").props
        expect(spacer.root.findByProps({ size: "sm" }).props.size).toBe("sm")
        expect(type).toHaveProperty("className")
    })
})
