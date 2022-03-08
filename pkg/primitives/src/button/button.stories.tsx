import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "./button"

export default {
    title: "Atoms/Button",
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: "Button",
    variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Button",
    variant: "secondary",
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: "Button",
    disabled: true,
    variant: "disabled",
}

export const Success = Template.bind({})
Success.args = {
    label: "Button",
    variant: "success",
}

export const Error = Template.bind({})
Error.args = {
    label: "Button",
    variant: "error",
}

export const CTA = Template.bind({})
CTA.args = {
    label: "Button",
    variant: "cta",
}
