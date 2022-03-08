import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Checkbox } from "./checkbox"
import { hasInvalidValue } from "./checkbox-group"
import { CheckboxIcon } from "./checkbox-icon"

describe("Checkbox", () => {
    it("Checkbox should match snapshot", () => {
        const checkbox = create(<Checkbox />)
        expect(checkbox.toJSON()).toMatchSnapshot()
    })

    it("Checkbox Group should match snapshot", () => {
        const checkbox = create(
            <Checkbox.Group value={["test"]}>
                <Checkbox value="test" />
            </Checkbox.Group>
        )
        expect(checkbox.toJSON()).toMatchSnapshot()
    })

    it("Checkbox Icon should match snapshot", () => {
        const checkbox = create(<CheckboxIcon />)
        const disabledCheckbox = create(<CheckboxIcon disabled />)
        const customCheckbox = create(
            <CheckboxIcon
                size="sm"
                borderColor="red"
                backgroundColor="red"
                checkColor="blue"
                checkedBorderColor="blue"
                checkedBackgroundColor="blue"
            />
        )
        const customCheckedCheckbox = create(
            <CheckboxIcon
                size="sm"
                checked
                borderColor="red"
                backgroundColor="red"
                checkColor="blue"
                checkedBorderColor="blue"
                checkedBackgroundColor="blue"
            />
        )

        expect(checkbox.toJSON()).toMatchSnapshot()
        expect(disabledCheckbox.toJSON()).toMatchSnapshot()
        expect(customCheckbox.toJSON()).toMatchSnapshot()
        expect(customCheckedCheckbox.toJSON()).toMatchSnapshot()
    })

    it("renders custom Checkbox", () => {
        const mockCallBack = jest.fn()
        const checkbox = create(
            <Checkbox
                size="sm"
                variant="secondary"
                onChange={mockCallBack}
                isActive
                color="umbra"
                disabled>
                Test
            </Checkbox>
        )
        const type = checkbox.root.findByType("label").props
        const input = type.children[1].props
        const text = type.children[2].props
        input.onChange()

        expect(type).toHaveProperty("className")
        expect(input).toHaveProperty("type", "checkbox")
        expect(input).toHaveProperty("disabled", true)
        expect(input).toHaveProperty("checked", true)
        expect(mockCallBack.mock.calls.length).toEqual(1)
        expect(text).toHaveProperty("size", "xxxs")
        expect(text).toHaveProperty("color", "umbra")
        expect(text).toHaveProperty("children", "Test")
    })

    it("renders custom Checkbox Group", () => {
        const mockCallBack = jest.fn()
        const checkbox = create(
            <Checkbox.Group
                disabled
                value={["Test"]}
                onChange={mockCallBack}
                layout={{ width: "lg" }}
                styles={{ shadow: "sm" }}
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
                direction={"column"}
                wrap={"nowrap"}>
                <Checkbox value="Test" />
                <Checkbox value="Test2" />
            </Checkbox.Group>
        )
        const props = checkbox.root.findByProps({ disabled: true }).props
        props.onChange()

        expect(mockCallBack.mock.calls.length).toEqual(1)
        expect(props).toHaveProperty("value", ["Test"])
        expect(props).toHaveProperty("layout", { width: "lg" })
        expect(props).toHaveProperty("styles", { shadow: "sm" })
        expect(props).toHaveProperty("justify", "center")
        expect(props).toHaveProperty("alignItems", "center")
        expect(props).toHaveProperty("alignContent", "center")
        expect(props).toHaveProperty("direction", "column")
        expect(props).toHaveProperty("wrap", "nowrap")
        expect(props.children.length).toBe(2)
    })

    // TODO: refactor this test once issue https://github.com/vercel/next.js/issues/33005 is resolved
    it("renders invalid Checkbox Group", () => {
        const checkbox1 = create(
            <Checkbox.Group value={[""]}>
                <Checkbox value="Test" />
                <Checkbox value="Test" />
            </Checkbox.Group>
        ).getInstance()
        const checkbox2 = create(
            <Checkbox.Group value={[""]}>
                <Checkbox value="Test" />
                <Checkbox />
            </Checkbox.Group>
        ).getInstance()

        expect(hasInvalidValue(checkbox1)).toBe(true)
        expect(hasInvalidValue(checkbox2)).toBe(true)
    })
})
