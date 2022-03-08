import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Checkbox } from "./checkbox"

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <Checkbox.Group value={[]} direction="column">
            <Checkbox variant="primary" value="txt1">
                A
            </Checkbox>
            <Checkbox variant="secondary" value="txt2">
                B
            </Checkbox>
            <Checkbox variant="success" value="txt3">
                C
            </Checkbox>
            <Checkbox variant="error" value="txt4">
                D
            </Checkbox>
        </Checkbox.Group>
    )
}

export const CheckboxGroup = Template.bind({})
CheckboxGroup.args = {}
