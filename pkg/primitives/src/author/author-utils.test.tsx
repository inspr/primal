import { computeMeshAndMaxLength, formatDisplayName } from "./author-utils"

describe("Author helper funcs", () => {
    it("Format name based on how long it is...", () => {
        const firstName = "Matheus"
        const lastName = "Cardoso"
        const result = formatDisplayName(
            firstName,
            firstName.length + lastName.length,
            lastName
        )
        expect(result).toBe("Matheus Cardoso")
    })

    it("Calculating how expensive the mesh is...", () => {
        const firstName = "Matheus"
        const lastName = "Cardoso"
        const userId = "matheusbonavite"

        const result = computeMeshAndMaxLength(firstName, lastName, userId)
        expect(result[0]).toBe(4)
        expect(result[1]).toBe(15)
    })
})
