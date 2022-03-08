import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Icon } from "./icon"

// TODO: add "Labels" template https://5ccbc373887ca40020446347-ihnlmpbzos.chromatic.com/?path=/story/icon--labels

export default {
    title: "Atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>

const TemplateBasic: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Basic = TemplateBasic.bind({})
Basic.args = {
    name: "arrowDown",
    size: "md",
}

export const Small = TemplateBasic.bind({})
Small.args = {
    name: "arrowDown",
    size: "sm",
}

export const Large = TemplateBasic.bind({})
Large.args = {
    name: "arrowDown",
    size: "lg",
}
