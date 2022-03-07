import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import polenta from "../../../../public/polenta.png"
import { Avatar } from "./avatar"

export default {
    title: "Atoms/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>

const TemplateAvatar: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args}></Avatar>
)

export const Tiny = TemplateAvatar.bind({})
Tiny.args = {
    src: polenta,
    size: "xs",
    alt: "The best viralata",
}

export const Small = TemplateAvatar.bind({})
Small.args = {
    src: polenta,
    size: "sm",
    alt: "The best viralata",
}

export const Medium = TemplateAvatar.bind({})
Medium.args = {
    src: polenta,
    size: "md",
    alt: "The best viralata",
}

export const Large = TemplateAvatar.bind({})
Large.args = {
    src: polenta,
    size: "lg",
    alt: "The best viralata",
}

export const Huge = TemplateAvatar.bind({})
Huge.args = {
    src: polenta,
    size: "xl",
    alt: "The best viralata",
}
