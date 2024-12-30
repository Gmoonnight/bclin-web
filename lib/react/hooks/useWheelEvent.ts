import Creator from "@/lib/cg/Creator";
import { RefObject, useEffect } from "react";
import EventTypeEnum from "../../cg/enums/EventTypeEnum";

export default function useWheelEvent<T extends HTMLElement>(ref : RefObject<T>, creator : Creator) : void {
    useEffect(() => {
        ref.current!.addEventListener('wheel', (e : WheelEvent) => {
            creator.publish({
                from: creator,
                type: EventTypeEnum.WheelEvent,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                ctrlKey: e.ctrlKey,
            })
        })
    }, [])
}