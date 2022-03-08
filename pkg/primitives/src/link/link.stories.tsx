import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Link } from "./link"

export default {
    title: "Atoms/Link",
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
    <Link {...args}>Link example</Link>
)

export const Basic = Template.bind({})
Basic.args = {
    href: "/blog",
}
