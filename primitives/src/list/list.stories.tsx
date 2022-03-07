import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { List } from "./list"

export default {
    title: "Atoms/List",
    component: List,
} as ComponentMeta<typeof List>

const TemplateUL: ComponentStory<typeof List> = (args) => (
    <List {...args}></List>
)
const TemplateOL: ComponentStory<typeof List> = (args) => (
    <List type="ol" {...args}></List>
)

export const UnorderedList = TemplateUL.bind({})
UnorderedList.args = {
    children: [
        { ...(<List.Item>test1</List.Item>) },
        { ...(<List.Item>test2</List.Item>) },
        {
            ...(
                <List>
                    <List.Item>test3</List.Item>
                    <List.Item>test4</List.Item>
                </List>
            ),
        },
    ],
}

export const OrderedList = TemplateOL.bind({})
OrderedList.args = {
    children: [
        { ...(<List.Item>test1</List.Item>) },
        { ...(<List.Item>test2</List.Item>) },
    ],
}
