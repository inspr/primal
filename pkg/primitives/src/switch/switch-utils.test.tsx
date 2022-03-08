import "@primal/theme"
import { switchSizeApply, innerBallSizeApply } from "./switch-utils"

describe("Switch helper funcs", () => {
    it("runs the helper functions w/ size small (sm)", () => {
        const expectedSizeResult =
            "width: 30px;height: 18px;padding-top: 2px;padding-right: 2px;padding-bottom: 2px;padding-left: 2px;"
        const innerBallSizeResult = "width: 14px;height: 14px;"

        const resultSize = switchSizeApply("sm")
        expect(resultSize).toBe(expectedSizeResult)

        const innerBallSize = innerBallSizeApply("sm")
        expect(innerBallSize).toBe(innerBallSizeResult)
    })

    it("runs the helper functions w/ size medium (md)", () => {
        const expectedSizeResult =
            "width: 38px;height: 22px;padding-top: 3px;padding-right: 3px;padding-bottom: 3px;padding-left: 3px;"
        const innerBallSizeResult = "width: 16px;height: 16px;"

        const resultSize = switchSizeApply("md")
        expect(resultSize).toBe(expectedSizeResult)

        const innerBallSize = innerBallSizeApply("md")
        expect(innerBallSize).toBe(innerBallSizeResult)
    })

    it("runs the helper functions w/ size large (lg)", () => {
        const expectedSizeResult =
            "width: 46px;height: 30px;padding-top: 5px;padding-right: 5px;padding-bottom: 5px;padding-left: 5px;"
        const innerBallSizeResult = "width: 20px;height: 20px;"

        const resultSize = switchSizeApply("lg")
        expect(resultSize).toBe(expectedSizeResult)

        const innerBallSize = innerBallSizeApply("lg")
        expect(innerBallSize).toBe(innerBallSizeResult)
    })
})
