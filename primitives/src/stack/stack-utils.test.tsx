import "@primal/theme"
import { getItemLayout } from "./stack-utils"

describe("Stack helper funcs", () => {
    it("runs getItemLayout w/ undefined param", () => {
        const result = getItemLayout()
        expect(result).toMatchObject({
            grow: 1,
            display: "display: inherit;",
            width: "100%",
            basis: "0",
        })
    })

    it("runs getItemLayout w/ true param", () => {
        const result = getItemLayout(true)
        expect(result).toMatchObject({
            grow: 1,
            display: "display: inherit;",
            width: "100%",
            basis: "0",
        })
    })

    it("runs getItemLayout w/ > 24 integer param", () => {
        const result = getItemLayout(25)
        expect(result).toMatchObject({
            grow: 0,
            display: "display: inherit;",
            width: "100%",
            basis: "100%",
        })
    })

    it("runs getItemLayout w/ < 0 integer param", () => {
        const result = getItemLayout(-1)
        expect(result).toMatchObject({
            grow: 0,
            display: "display: inherit;",
            width: "0",
            basis: "0",
        })
    })

    it("runs getItemLayout w/ = 0 integer param", () => {
        const result = getItemLayout(0)
        expect(result).toMatchObject({
            grow: 0,
            display: "display: none;",
            width: "0%",
            basis: "0%",
        })
    })

    it("runs getItemLayout w/ 0 < x < 24 integer param", () => {
        const result = getItemLayout(12)
        expect(result).toMatchObject({
            grow: 0,
            display: "display: inherit;",
            width: "50%",
            basis: "50%",
        })
    })
})
