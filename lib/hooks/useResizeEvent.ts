import { RefObject, useEffect } from "react";
import EventTypeEnum from "../events/common/EventTypeEnum";
import ResizeEvent from "../events/ResizeEvent";
import Creator from "../Creator";

/**
 * Wallfacer collects all events and publish to the world.
 */


/**
 * @see ResizeEvent
 * 
 * @returns 
 */
export default function useResizeEvent<T extends HTMLElement>(ref : RefObject<T>, c : Creator) : void {
    const cT = c.cTR.current

    useEffect(() => {
        new ResizeObserver(() => {
            cT.publish({
                from: c,
                type : EventTypeEnum.ResizeEvent,
                w : ref.current!.getBoundingClientRect().width,
                h : ref.current!.getBoundingClientRect().height,
            })
        }).observe(ref.current!)
    }, [])
}