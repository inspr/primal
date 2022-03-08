import { HRef } from "../types"
import {
    renderDateBar,
    filterFromHomeAndBeyond,
    nameAndLinkArrayGenerator,
} from "./breadcrumb-utils"

describe("Breadcrumbs helper funcs", () => {
    it("runs scenarios to (not) render date bar", () => {
        const example = ["supah", "big", "url"]
        example.forEach((_, index) => {
            const result = renderDateBar(index, example.length)
            expect(result).toBe(index !== 2 ? true : false)
        })
    })

    it("showing how to filter only from home and beyond before alias", () => {
        const entriesExample: [string, HRef][] = [
            ["supah", "/supah"],
            ["home", "/supah/big"],
            ["url", "/supah/big/url"],
        ]
        const result = filterFromHomeAndBeyond(entriesExample)
        expect(result).toStrictEqual([
            ["home", "/supah/big"],
            ["url", "/supah/big/url"],
        ])
    })

    it("make sure home alias work", () => {
        const exampleUrl = "/supah/big/url"
        const exampleHome = "big"
        const result = nameAndLinkArrayGenerator(exampleUrl, exampleHome)
        expect(result).toStrictEqual([
            ["home", "/supah/big"],
            ["url", "/supah/big/url"],
        ])
    })
})
