import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Breadcrumbs } from "./breadcrumb"

export default {
    title: "Atoms/Breadcrumbs",
    component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Breadcrumbs {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    url: "/this/is/a/breadcrumb",
}
