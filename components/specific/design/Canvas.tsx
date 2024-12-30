import { memo, useRef } from "react"
import useResizeEvent from "../../../lib/cg/useResizeEvent"
import useWheelEvent from "../../../lib/react/hooks/useWheelEvent"
import useCreator from "../../../lib/react/hooks/useCreator"

function Canvas() {
    console.log("FlatFoil rendered!")

    const creator = useCreator()

    // Add event listeners for handling events.
    const ref = useRef<HTMLDivElement>(null)

    useResizeEvent<HTMLDivElement>(ref, creator)
    useWheelEvent<HTMLDivElement>(ref, creator)

    const scene = creator.getScene()
    const camera = scene.camera
    const canvas = scene.canvas
    
    return (
        <div className = "w-full h-full bg-red-100 relative overflow-hidden" ref = {ref}>
            {
                !canvas ? <p>Loading...</p> :
                <div 
                    className = "bg-black w-20 h-20 left-10 relative" 
                    style = {{
                        transform: `translate(${camera.x}px, ${camera.y}px)`,
                    }}
                />
            }
        </div>
    )
}

export default memo(Canvas)