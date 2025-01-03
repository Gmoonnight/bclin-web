import EventTypeEnum from "@/lib/cg/enums/EventTypeEnum"
import { memo, RefObject, useContext, useEffect, useRef } from "react"
import { Creator, CreatorContext } from "./CreatorProvider"

function Canvas() {
    const creator = useContext(CreatorContext)!
    const {cameraState} = creator
    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const resizeObserver = addResizeEventListener(canvasRef, creator)
        addWheelEventListener(canvasRef, creator)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])
    
    return (
        <div className = "w-full h-full bg-red-100 relative overflow-hidden" ref = {canvasRef}>
            <div 
                className = "bg-black w-20 h-20 left-10 relative" 
                style = {{
                    transform: `translate(${cameraState!.x}px, ${cameraState!.y}px)`,
                }}
            />
        </div>
    )
}

export default memo<Creator>(Canvas, (prev, next) => {
    return prev.cameraState === next.cameraState
})

const addResizeEventListener = (canvasRef : RefObject<HTMLDivElement>, creator : Creator) : ResizeObserver => {
    const dispatcher = creator.dispatcherRef.current!

    if(!dispatcher) {
        console.log("Dispatcher is not exist")
    }

    const resizeObserver = new ResizeObserver(() => {
        dispatcher.dispatch({
            from: creator,
            type : EventTypeEnum.ResizeEvent,
            w : canvasRef.current!.getBoundingClientRect().width,
            h : canvasRef.current!.getBoundingClientRect().height,
        })
    })

    resizeObserver.observe(canvasRef.current!)

    return resizeObserver
}

const addWheelEventListener = (canvasRef : RefObject<HTMLDivElement>, creator : Creator) => {
    const dispatcher = creator.dispatcherRef.current!

    canvasRef.current!.addEventListener('wheel', (e : WheelEvent) => {
        dispatcher.dispatch({
            from: creator,
            type: EventTypeEnum.WheelEvent,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            ctrlKey: e.ctrlKey,
        })
    })
}