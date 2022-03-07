import { FunctionComponent } from "react"
import { act, create, ReactTestInstance } from "react-test-renderer"
import { createState } from "../state/state"
import { useInspr } from "./use-inspr"

describe("useInspr", () => {
    const TestView: FunctionComponent<{ active: boolean }> = () => <></>

    it("should update the state of a component with hooks", () => {
        const toogle = createState(false)

        const SampleView: FunctionComponent = () => {
            const isActive = useInspr(toogle)!
            return <TestView active={isActive}></TestView>
        }

        let sampleView = create(<SampleView />)

        let children: ReactTestInstance = sampleView!.root
            .children[0] as ReactTestInstance
        expect(children.props.active).toBe(false)

        act(() => {
            toogle.publish(true)
        })

        expect(children.props.active).toBe(true)
    })
})
