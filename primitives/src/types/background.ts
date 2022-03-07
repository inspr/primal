//References:
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-size

import { LinearGradient, PX, Unit } from "./"

export type BackgroundImage = LinearGradient

export type BackgroundRepeat = "repeat-x" | "repeat-y" | "repeat"

export type BackgroundSize = "contain" | "cover" | Unit | `${PX} ${PX}`
