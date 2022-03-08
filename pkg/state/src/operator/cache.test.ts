import { createState } from "../state/state"
import { cache } from "./cache"

describe("cache", () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it("should store on localStorage when given an initial value and storage is empty", () => {
        cache(createState<boolean>(false), "test-value-0")
        expect(JSON.parse(localStorage.getItem("test-value-0")!)).toBe(false)
    })

    it("should update localStorage on publish", () => {
        const toogle = cache(createState<boolean>(false), "test-value-1")
        expect(JSON.parse(localStorage.getItem("test-value-1")!)).toBe(false)
        toogle.publish(true)
        expect(JSON.parse(localStorage.getItem("test-value-1")!)).toBe(true)
    })

    it("should load initial value from localStorage", () => {
        localStorage.setItem("test-value-2", "true")
        const toogle = cache(createState<boolean>(), "test-value-2")
        expect(toogle.unwrap()).toBe(true)
    })

    it("should prioritize initial value from localStorage", () => {
        localStorage.setItem("test-value-3", "true")
        const toogle = cache(createState<boolean>(false), "test-value-3")
        expect(toogle.unwrap()).toBe(true)
    })

    it("should prioritize initial value from localStorage", () => {
        const toogle = cache(createState<boolean>(), "test-value-4")
        expect(toogle.unwrap()).toBe(undefined)
    })
})
