import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Separator } from "./separator"

describe("Separator ", () => {
    it("should match snapshot", () => {
        const separator = create(<Separator />)
        expect(separator.toJSON()).toMatchSnapshot()
    })

    it("renders a dashed Separator", () => {
        const separator = create(<Separator kind="dashed" color="orange.400" />)
        expect(separator.toTree()?.props).toHaveProperty("kind", "dashed")
        expect(separator.toTree()?.props).toHaveProperty("color", "orange.400")
    })

    it("renders a line Separator", () => {
        const separator = create(<Separator kind="line" color="orange.400" />)
        expect(separator.toTree()?.props).toHaveProperty("kind", "line")
        expect(separator.toTree()?.props).toHaveProperty("color", "orange.400")
    })
})
