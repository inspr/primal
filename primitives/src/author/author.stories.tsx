import { ComponentMeta, ComponentStory } from "@storybook/react"
import polenta from "../../../../public/polenta.png"
import { Author } from "./author"

export default {
    title: "Atoms/Author",
    component: Author,
    argTypes: {
        kind: {
            control: {
                type: "select",
            },
        },
    },
} as ComponentMeta<typeof Author>

const Template: ComponentStory<typeof Author> = (args) => <Author {...args} />

const imageData = {
    src: polenta,
    alt: "omiohviralata",
}

export const Small = Template.bind({})

Small.args = {
    size: "sm",
    name: {
        firstName: `Matheus Bonavite dos Reis Cardoso `,
        lastName: "Malagueta 🌶`",
    },
    userId: "omiohviralata",
    image: imageData,
}

export const Medium = Template.bind({})

Medium.args = {
    size: "md",
    name: {
        firstName: `Polenta`,
        lastName: "Malagueta 🌶`",
    },
    userId: "omiohviralata",
    image: imageData,
}

export const Large = Template.bind({})

Large.args = {
    size: "lg",
    name: {
        firstName: `Polenta`,
        lastName: "Malagueta 🌶`",
    },
    userId: "omiohviralata",
    image: imageData,
}
