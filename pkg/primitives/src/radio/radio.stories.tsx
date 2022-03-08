import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Radio } from "./radio"

export default {
    title: "Atoms/Radio",
    component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => {
    return (
        <Radio.Group value={""} direction="column">
            <Radio variant="primary" value="txt1">
                A
            </Radio>
            <Radio variant="success" value="txt3">
                B
            </Radio>
            <Radio variant="error" value="txt4">
                C
            </Radio>
        </Radio.Group>
    )
}

export const RadioGroup = Template.bind({})
RadioGroup.args = {}
