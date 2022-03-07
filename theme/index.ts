import { Unpack } from "@primal/state"
import Theme from "./src/theme"

// Apply the theme definitions to the global scope
// We need this definition to primal recognize the custom props
declare module "@primal/primitives" {
    /**
     * @type Inspr
     * @extends Spec
     * `@primal/theme` is currently applied as theme the app.
     *
     * The theme is designed and managed by inspr team and it's based on inspr design language
     * @link https://inspr.design/theme
     */

    type Theme = Unpack<typeof Theme>["__theme"]
    interface PrimitivesTheme extends Theme {}
}

export default Theme
