import "@primal/theme"
import React from "react"
import { create } from "react-test-renderer"
import { Author } from "./author"

describe("Author", () => {
    it("expect to match snapshot", () => {
        const author = create(
            <Author
                size="sm"
                name={{
                    firstName: "Polenta",
                    lastName: "Malagueta 🌶`",
                }}
                image={{
                    src: "/fake.png",
                    alt: "omiohviralata",
                }}
                onClick={() => {
                    console.log("oi")
                }}
            />
        )
        expect(author.toJSON()).toMatchSnapshot()
    })

    it("renders small author", () => {
        const author = create(
            <Author
                size="sm"
                name={{
                    firstName: "Polenta",
                    lastName: "Malagueta 🌶`",
                }}
                image={{
                    src: "/fake.png",
                    alt: "omiohviralata",
                }}
            />
        )
        const props = author.root.findByProps({
            size: "sm",
        }).props

        const { name, image } = props
        expect(name).toHaveProperty("firstName", "Polenta")
        expect(name).toHaveProperty("lastName", "Malagueta 🌶`")
        expect(image).toHaveProperty("src", "/fake.png")
        expect(image).toHaveProperty("alt", "omiohviralata")
    })

    it("simulates author onClick prop", () => {
        const mockCallBack = jest.fn()
        const avatar = create(
            <Author
                size="sm"
                name={{
                    firstName: `Polenta`,
                    lastName: "Malagueta 🌶`",
                }}
                image={{
                    src: "/fake.png",
                    alt: "omiohviralata",
                }}
                onClick={mockCallBack}
            />
        )
        const props = avatar.root.findByProps({
            size: "sm",
        }).props
        props.onClick()
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})
