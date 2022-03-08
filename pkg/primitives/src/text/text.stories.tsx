import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Text } from "./text"

export default {
    title: "Typography/Text",
    component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args}>This is an example</Text>
)

export const Display = Template.bind({})
Display.args = {
    textVariant: "display",
}

export const Title = Template.bind({})
Title.args = {
    textVariant: "title",
}

export const Subtitle = Template.bind({})
Subtitle.args = {
    textVariant: "subtitle",
}

export const Default = Template.bind({})
Default.args = {
    textVariant: "default",
}

export const Caption = Template.bind({})
Caption.args = {
    textVariant: "caption",
}

export const Overline = Template.bind({})
Overline.args = {
    textVariant: "overline",
    uppercase: true,
}
