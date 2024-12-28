import { memo, useRef } from "react"
import useResizeEvent from "../../../lib/hooks/useResizeEvent"
import useWheelEvent from "../../../lib/hooks/useWheelEvent"
import useCreator from "../../../lib/hooks/useCreator"

function Canvas() {
    console.log("FlatFoil rendered!")

    const c = useCreator()

    // Add event listeners for handling events.
    const ref = useRef<HTMLDivElement>(null)

    useResizeEvent<HTMLDivElement>(ref, c)
    useWheelEvent<HTMLDivElement>(ref, c)

    const view = c.cS.view

    return (
        <div className = "w-full h-full bg-red-100 relative overflow-hidden" ref = {ref}>
            {
                !view ? <p>Loading...</p> :
                <div 
                    className = "bg-black w-20 h-20 left-10 relative" 
                    style = {{
                        transform: `translate(${view.x}px, ${view.y}px)`,
                    }}
                />
            }
        </div>
    )
}

export default memo(Canvas)