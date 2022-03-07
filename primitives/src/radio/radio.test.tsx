import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Radio } from "./radio"
import { hasInvalidValue } from "./radio-group"

describe("Radio", () => {
    it("Radio should match snapshot", () => {
        const radio = create(<Radio value="fake" size="sm" />)
        expect(radio.toJSON()).toMatchSnapshot()
    })

    it("Radio Group should match snapshot", () => {
        const radio = create(
            <Radio.Group value={"test"}>
                <Radio value="test" />
            </Radio.Group>
        )
        expect(radio.toJSON()).toMatchSnapshot()
    })

    it("renders custom Radio", () => {
        const mockCallBack = jest.fn()
        const radio = create(
            <Radio
                size="lg"
                variant="success"
                onClick={mockCallBack}
                isActive
                disabled>
                Test
            </Radio>
        )
        const type = radio.root.findByType("label").props
        const props = radio.root.findByProps({ size: "lg" }).props
        const input = type.children[0].props
        const span = type.children[1].props
        input.onClick()
        console.log(span)

        expect(type).toHaveProperty("className")
        expect(span).toHaveProperty("className", "point active")
        expect(props).toHaveProperty("variant", "success")
        expect(props).toHaveProperty("isActive", true)
        expect(props).toHaveProperty("disabled", true)
        expect(props).toHaveProperty("children", "Test")
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })

    it("renders custom Radio Group", () => {
        const mockCallBack = jest.fn()
        const radio = create(
            <Radio.Group
                disabled
                value={"Test"}
                onChange={mockCallBack}
                layout={{ width: "lg" }}
                styles={{ shadow: "sm" }}
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
                direction={"column"}
                wrap={"nowrap"}>
                <Radio value="Test" size="md" />
                <Radio value="Test2" />
            </Radio.Group>
        )
        const props = radio.root.findByProps({ disabled: true }).props
        props.onChange()
        console.log(props)

        expect(props).toHaveProperty("value", "Test")
        expect(props).toHaveProperty("layout", { width: "lg" })
        expect(props).toHaveProperty("styles", { shadow: "sm" })
        expect(props).toHaveProperty("justify", "center")
        expect(props).toHaveProperty("alignItems", "center")
        expect(props).toHaveProperty("alignContent", "center")
        expect(props).toHaveProperty("direction", "column")
        expect(props).toHaveProperty("wrap", "nowrap")
        expect(props.children.length).toBe(2)
    })
    it("renders invalid Radio Group", () => {
        const radio1 = create(
            <Radio.Group value={""}>
                <Radio value="Test" />
                <Radio value="Test" />
            </Radio.Group>
        ).getInstance()
        const radio2 = create(
            <Radio.Group value={""}>
                <Radio value="Test" />
                <Radio />
            </Radio.Group>
        ).getInstance()

        expect(hasInvalidValue(radio1)).toBe(true)
        expect(hasInvalidValue(radio2)).toBe(true)
    })
})
