import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Text } from ".."
import { Card } from "./card"

export default {
    title: "Atoms/Card",
    component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>

export const Basic = Template.bind({})
Basic.args = {
    shadow: "xl",
    children: <Text textVariant="title">Empower your teams decisions making.</Text>,
}
