import React, { FunctionComponent } from "react"
import { Text, Stack, View } from ".."
import { Link } from "../link/link"
import { ColorSwatch, ColorKind, InternalHRef } from "../types"
import { BaseProps } from "../utils"
import { ViewKinds } from "../view/view"
import { renderDateBar, nameAndLinkArrayGenerator } from "./breadcrumb-utils"
interface BreadcrumbProps {
    url: InternalHRef
    color?: ColorKind | ColorSwatch
    home?: string
}

const Breadcrumbs: FunctionComponent<BaseProps<ViewKinds> & BreadcrumbProps> =
    ({ url, color = "gray.600", home = "" }) => {
        const nameAndLinkArray = nameAndLinkArrayGenerator(url, home)
        return (
            <Stack is="nav">
                {nameAndLinkArray.map(([name, linkUrl], index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link href={linkUrl} color={color}>
                                <Text
                                    size="xs"
                                    weight="semibold"
                                    color={color}
                                    lineHeight="xs"
                                    uppercase
                                    hover={{
                                        textDecoration: "underline",
                                    }}>
                                    {name.replace("-", " ")}
                                </Text>
                            </Link>
                            {renderDateBar(index, nameAndLinkArray.length) && (
                                <Stack.Item>
                                    <Text
                                        size="xs"
                                        weight="semibold"
                                        color={color}>
                                        <View
                                            layout={{
                                                padding: {
                                                    right: "xxs",
                                                    left: "xxs",
                                                },
                                            }}>
                                            /
                                        </View>
                                    </Text>
                                </Stack.Item>
                            )}
                        </React.Fragment>
                    )
                })}
            </Stack>
        )
    }

Breadcrumbs.displayName = "Breadcrumbs"

export { Breadcrumbs }
