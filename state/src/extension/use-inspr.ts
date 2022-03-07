import { useEffect, useState } from "react"
import { Maybe, State } from "../types"

const useInspr = <T>(ref: State<T>): Maybe<T> => {
    const initialState = ref.unwrap()
    const [value, dispatch] = useState(initialState)

    useEffect(() => {
        const unsubscribe = ref.subscribe((data) => {
            dispatch(data)
        })
        return () => {
            unsubscribe()
        }
    }, [initialState, ref])

    return value
}

export { useInspr }
