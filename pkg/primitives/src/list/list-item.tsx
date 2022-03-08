import { FunctionComponent } from "react"
import { Text } from "../text/text"
import { TextProps } from "../types"
import { BaseProps } from "../utils"
import { ViewKinds } from "../view/view"

const ListItem: FunctionComponent<BaseProps<ViewKinds> & TextProps> = ({
    children,
    size = "md",
}) => {
    return (
        <Text is="li" size={size}>
            {children}
        </Text>
    )
}

ListItem.displayName = "List.Item"

export { ListItem }
