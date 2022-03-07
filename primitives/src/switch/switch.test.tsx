import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Switch } from "./switch"

describe("Switch", () => {
    it("should match snapshot", () => {
        const switchComponent = create(<Switch isActive />)
        expect(switchComponent.toJSON()).toMatchSnapshot()
    })

    it("mocks a click on a primary switch", () => {
        let switchState = false
        const mockCallBack = jest.fn(() => {
            switchState = !switchState
            return switchState
        })
        const switchComponent = create(
            <Switch
                isActive={false}
                variant="primary"
                onChange={mockCallBack}
            />
        )
        const input = switchComponent.root.findByProps({
            type: "checkbox",
        })
        input.props.onChange()
        expect(mockCallBack.mock.results[0].value).toBe(true)
    })

    it("mocks a click on a primary switch initially true", () => {
        let switchState = true
        const mockCallBack = jest.fn(() => {
            switchState = !switchState
            return switchState
        })
        const switchComponent = create(
            <Switch isActive={true} variant="primary" onChange={mockCallBack} />
        )
        const input = switchComponent.root.findByProps({
            type: "checkbox",
        })
        input.props.onChange()
        expect(mockCallBack.mock.results[0].value).toBe(false)
    })
})
