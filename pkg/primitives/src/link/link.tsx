import { SerializedStyles } from "@emotion/react"
import NextLink from "next/link"
import React, { FunctionComponent } from "react"
import { Text, TextKinds } from "../text/text"
import { referrerKinds, relKinds } from "../token"
import { HRef, TextProps } from "../types"
import { BaseProps } from "../utils"

interface LinkProps {
    href: HRef
    referrerPolicy?: referrerKinds
    rel?: relKinds
    injectedCSS?: SerializedStyles
}

const Link: FunctionComponent<BaseProps<TextKinds> & LinkProps & TextProps> = ({
    href,
    color = "blue.500",
    fitContent,
    hover,
    children,
    injectedCSS,
    ...props
}) => {
    if (href.startsWith("/")) {
        return (
            <NextLink href={href} passHref>
                <Text
                    is="a"
                    color={color}
                    fitContent={fitContent}
                    hover={hover}
                    injectedCSS={injectedCSS}
                    {...props}>
                    {children}
                </Text>
            </NextLink>
        )
    }

    return (
        <Text
            is="a"
            href={href}
            color={color}
            fitContent={fitContent}
            hover={hover}
            injectedCSS={injectedCSS}
            {...props}>
            {children}
        </Text>
    )
}

Link.displayName = "Link"

export { Link }
