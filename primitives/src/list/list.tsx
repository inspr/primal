import { css, SerializedStyles } from "@emotion/react"
import { FunctionComponent } from "react"
import { Stack } from "../stack/stack"
import { BaseProps } from "../utils"
import { ViewKinds } from "../view/view"
import { ListItem } from "./list-item"

interface ListProps {
    type?: "ol" | "ul"
    injectedCSS?: SerializedStyles
}

const generateListCSS = (injectedCSS?: SerializedStyles) => {
    return css`
        list-style-type: disc;
        ${injectedCSS ? injectedCSS : ""}
    `
}

const List: FunctionComponent<BaseProps<ViewKinds> & ListProps> & {
    Item: typeof ListItem
} = ({ children, type = "ul", injectedCSS }) => {
    return (
        <Stack
            is={type}
            direction="column"
            layout={{ padding: { left: "md" } }}
            injectedCSS={
                type == "ul" ? generateListCSS(injectedCSS) : injectedCSS
            }>
            {children}
        </Stack>
    )
}

List.displayName = "List"
List.Item = ListItem

export { List }
