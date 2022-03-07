import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Button } from "./button"

describe("Button", () => {
    it("should match snapshot", () => {
        const button = create(<Button label="Add" />)
        expect(button.toJSON()).toMatchSnapshot()
    })

    it("renders primary Button", () => {
        const button = create(
            <Button
                iconLeft="arrowRight"
                label="Add"
                variant="primary"
                iconKind="solid"
            />
        )
        const props = button.root.findByProps({
            label: "Add",
        }).props
        const type = button.root.findByType("button").props
        expect(props).toHaveProperty("variant", "primary")
        expect(props).toHaveProperty("iconLeft", "arrowRight")
        expect(props).toHaveProperty("iconKind", "solid")
    })

    it("renders secondary Button", () => {
        const button = create(
            <Button
                iconLeft="arrowRight"
                label="Add"
                variant="secondary"
                iconKind="line"
            />
        )
        const props = button.root.findByProps({
            label: "Add",
        }).props
        const type = button.root.findByType("button").props
        expect(props).toHaveProperty("variant", "secondary")
        expect(props).toHaveProperty("iconLeft", "arrowRight")
        expect(props).toHaveProperty("iconKind", "line")
    })

    it("renders secondary disabled Button", () => {
        const button = create(
            <Button
                iconLeft="arrowRight"
                label="Add"
                variant="secondary"
                disabled
            />
        )
        const props = button.root.findByProps({
            label: "Add",
        }).props
        expect(props.disabled).toBeTruthy()
        expect(props).toHaveProperty("variant", "secondary")
    })

    it("renders cta Button", () => {
        const button = create(
            <Button iconLeft="arrowRight" label="Add" variant="cta" />
        )
        const props = button.root.findByProps({
            label: "Add",
        }).props
        expect(props).toHaveProperty("variant", "cta")
    })

    it("renders large Button with children w/out label", () => {
        const button = create(
            <Button iconLeft="arrowRight" size="lg" label="add" variant="error">
                Cancel
            </Button>
        )
        const props = button.root.findByProps({
            label: "add",
        }).props
        const rendered = button.root.findByProps({
            children: "add",
        }).props
        expect(props).toHaveProperty("size", "lg")
        expect(props).toHaveProperty("children", "Cancel")
        expect(props).toHaveProperty("variant", "error")

        expect(rendered).not.toBe("Cancel")
    })

    it("simulates Button onClick prop", () => {
        const mockCallBack = jest.fn()
        const button = create(
            <Button iconRight="arrowRight" label="Add" onClick={mockCallBack} />
        )

        button.root.findByType("button").props.onClick()

        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})
