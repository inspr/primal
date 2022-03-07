import React, { FunctionComponent } from "react"
import { Image, ViewKinds } from "../"
import { useTheme } from "../theme"
import { AllSizes } from "../types"
import { BaseProps } from "../utils"
import avatarStyles from "./avatar.module.css"

type AvatarProps = BaseProps<ViewKinds> & {
    children?: never
    src: string | StaticImageData
    alt: string
    size?: AllSizes
}

const Avatar: FunctionComponent<AvatarProps> = ({ src, alt, size = "md" }) => {
    const avatarSize = useTheme().actions.size(size)

    return (
        <Image
            src={src}
            alt={alt}
            width={avatarSize}
            height={avatarSize}
            className={avatarStyles.border}
        />
    )
}

Avatar.displayName = "Avatar"

export { Avatar }
