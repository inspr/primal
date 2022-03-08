import "@primal/theme"
import { create } from "react-test-renderer"
import { Grid } from "./grid"

describe("Grid", () => {
    it("should match snapshot", () => {
        const grid = create(<Grid />)
        expect(grid.toJSON()).toMatchSnapshot()
    })

    it("renders a custom Grid", () => {
        const grid = create(
            <Grid
                is="section"
                layout={{
                    gap: "10px",
                    padding: {
                        top: "xxxs",
                        right: "xxs",
                        bottom: "xl",
                        left: "xxl",
                    },
                    margin: {
                        top: "xxxs",
                        right: "xxs",
                        bottom: "xl",
                        left: "xxl",
                    },
                    width: "xl",
                    maxWidth: "xxxs",
                    minWidth: "xs",
                }}>
                Some Grid
            </Grid>
        )
        const props = grid.root.findByProps({ is: "section" }).props
        expect(props).toHaveProperty("is", "section")
        expect(props).toHaveProperty("layout", {
            gap: "10px",
            padding: {
                top: "xxxs",
                right: "xxs",
                bottom: "xl",
                left: "xxl",
            },
            margin: {
                top: "xxxs",
                right: "xxs",
                bottom: "xl",
                left: "xxl",
            },
            width: "xl",
            maxWidth: "xxxs",
            minWidth: "xs",
        })
        expect(props).toHaveProperty("children", "Some Grid")
    })
})
