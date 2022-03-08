import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Stack } from "../stack/stack"
import { Spacer } from "./spacer"

export default {
    title: "Tokens/Spacer",
    component: Spacer,
} as ComponentMeta<typeof Spacer>

const VTemplate: ComponentStory<typeof Spacer> = (args) => (
    <Stack direction="column">
        Content1
        <Spacer {...args}></Spacer>
        Content2
    </Stack>
)

export const Vertical = VTemplate.bind({})
Vertical.args = {
    size: "xl",
}

const HTemplate: ComponentStory<typeof Spacer> = (args) => (
    <Stack direction="row">
        Content1
        <Spacer {...args}></Spacer>
        Content2
    </Stack>
)

export const Horizontal = HTemplate.bind({})
Horizontal.args = {
    size: "xl",
}
