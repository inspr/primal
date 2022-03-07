import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"
import { Switch } from "./switch"

export default {
    title: "Atoms/Switch",
    component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
    const [st, setSt] = useState(false)
    return (
        <Switch
            isActive={st}
            onChange={setSt}
            variant={args.variant}
            size={args.size}
        />
    )
}
export const PrimarySwitch = Template.bind({})
PrimarySwitch.args = {
    variant: "primary",
}

export const SecondarySwitch = Template.bind({})
SecondarySwitch.args = {
    variant: "secondary",
}

export const SuccessSwitch = Template.bind({})
SuccessSwitch.args = {
    variant: "success",
}

export const ErrorSwitch = Template.bind({})
ErrorSwitch.args = {
    variant: "error",
}
