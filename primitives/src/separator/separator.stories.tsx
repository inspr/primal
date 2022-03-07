import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { View } from "../view/view"
import { Separator } from "./separator"

export default {
    title: "Tokens/Separator",
    component: Separator,
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = (args) => (
    <View layout={{ width: "200px" }}>
        <Separator {...args} />
    </View>
)

export const Line = Template.bind({})
Line.args = {}

export const Dashed = Template.bind({})
Dashed.args = {
    kind: "dashed",
}
