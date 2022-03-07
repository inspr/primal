import { createUUID } from "./uuid"

describe("UUID", () => {
    test("should return a random token", () => {
        const token1 = createUUID()
        const token2 = createUUID()
        expect(token1).toBeDefined()
        expect(token2).toBeDefined()
        expect(token1.token !== token2.token).toBeTruthy()
    })

    test("should return a random token with window set", () => {
        const crypto = require("crypto")
        // mocks getRandomValues function
        Object.defineProperty(global.self, "crypto", {
            value: {
                getRandomValues: (arr: number[]) =>
                    crypto.randomBytes(arr.length),
            },
        })
        const token = createUUID()
        expect(token).toBeDefined()
    })
})
