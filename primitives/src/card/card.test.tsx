import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Text } from ".."
import { Card } from "./card"

describe("Card", () => {
    it("should match snapshot", () => {
        const card = create(
            <Card>
                <Text>
                    Design, connect, and deploy your applications quickly.
                </Text>
            </Card>
        )
        expect(card.toJSON()).toMatchSnapshot()
    })

    it("renders styled card", () => {
        const card = create(
            <Card
                is="section"
                shadow="xl"
                backgroundColor="danger"
                borderColor="brown.500"
                borderStyle="dashed"
                borderRadius="50%"
                borderWidth="20px"
                padding="sm">
                <Text color="gray.900" size="xxs">
                    Empower your teams decisions making.
                </Text>
            </Card>
        )
        const props = card.root.findByProps({ is: "section" }).props
        expect(props).toHaveProperty("borderColor", "brown.500")
        expect(props).toHaveProperty("borderStyle", "dashed")
        expect(props).toHaveProperty("borderWidth", "20px")
        expect(props).toHaveProperty("backgroundColor", "danger")
        expect(props).toHaveProperty("borderRadius", "50%")
        expect(props).toHaveProperty("padding", "sm")
        expect(props).toHaveProperty("children")
    })
})
