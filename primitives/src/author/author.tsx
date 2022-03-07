import { FunctionComponent } from "react"
import { Avatar, Grid, Text, View } from "../"
import { computeMeshAndMaxLength, formatDisplayName } from "./author-utils"

interface AuthorProps {
    size?: "sm" | "md" | "lg"
    name: {
        firstName: string
        lastName?: string
    }
    userId?: string
    image: {
        src: string | StaticImageData
        alt: string
    }
    onClick?: () => void
}

const Author: FunctionComponent<AuthorProps> = ({
    name,
    image,
    userId,
    size = "md",
    onClick,
}) => {
    const [gridMesh, maxLength] = computeMeshAndMaxLength(
        name?.firstName,
        name?.lastName,
        userId
    )

    const avatarMap: { [k in typeof size]: "md" | "lg" | "xl" } = {
        sm: "md",
        md: "lg",
        lg: "xl",
    }

    return (
        <Grid
            onEvents={{
                onClick: onClick || undefined,
            }}
            layout={{
                width: "fit-content",
                height: "fit-content",
                padding: {
                    top: "xs",
                    right: "sm",
                    bottom: "xs",
                    left: "xs",
                },
                gap: "8px",
            }}
            styles={{
                borderRadius: "36px",
                backgroundColor: "lumen",
                cursor: onClick ? "pointer" : undefined,
                shadow: "sm",
            }}>
            <Grid.Item
                xs={{
                    row: [1, 2],
                    column: [1, 2],
                }}>
                <Avatar
                    src={image.src}
                    alt={image.alt}
                    size={`${avatarMap[size]}`}
                />
            </Grid.Item>
            <Grid.Item
                xs={{
                    row: [1, 2],
                    column: [2, gridMesh],
                }}>
                <Text
                    weight="semibold"
                    lineHeight={size == "md" ? "xxxs" : "xxs"}
                    size={size == "lg" ? "md" : "sm"}>
                    <View layout={{ padding: { top: "xxs" } }}>
                        {formatDisplayName(
                            name.firstName,
                            maxLength,
                            name.lastName
                        )}
                    </View>
                </Text>
                {size !== "sm" && userId && (
                    <Text
                        is="span"
                        color="umbra"
                        whiteSpace="pre-line"
                        lineHeight={size == "lg" ? "xs" : "xxs"}
                        size={size == "lg" ? "xs" : "xxs"}>
                        {`\n@${userId}`}
                    </Text>
                )}
            </Grid.Item>
        </Grid>
    )
}

Author.displayName = "Author"

export { Author }
