import NextImage, { ImageProps } from "next/image"
import React, { FunctionComponent } from "react"
import { BaseProps } from "../utils"
import { ViewKinds } from "../view/view"

const Image: FunctionComponent<BaseProps<ViewKinds> & ImageProps> = ({
    width,
    height,
    ...props
}) => {
    return <NextImage width={width} height={height} {...props} />
}

Image.displayName = "Image"

export { Image }
