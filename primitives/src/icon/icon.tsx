import React, { FunctionComponent } from "react"
import { Image } from "../image/image"
import { useTheme } from "../theme"
import { iconNames } from "../token"
import { AllSizes } from "../types"
import { BaseProps, camelToKebab } from "../utils"
import { ViewKinds } from "../view/view"

export type IconKind = "solid" | "line"

interface IconProps {
    kind?: IconKind
    name: iconNames
    size?: AllSizes
    __unsafeClassName?: string
}

const getIcon = (name: string) => {
    return require(`@primal/icons/src/${name}.svg`)
}

const Icon: FunctionComponent<BaseProps<ViewKinds> & IconProps> = ({
    name,
    size = "md",
    kind = "solid",
    __unsafeClassName,
    ...props
}) => {
    const iconSize = useTheme().actions.size(size)

    const source = getIcon(`${camelToKebab(name)}-${kind}-base`)

    return (
        <Image
            src={source}
            alt={name}
            width={iconSize}
            height={iconSize}
            {...props}
            className={__unsafeClassName}
        />
    )
}

Icon.displayName = "Icon"

export { Icon }
