import { RefObject, useEffect } from "react";
import EventTypeEnum from "../events/common/EventTypeEnum";
import useCreator from "./useCreator";
import Creator from "../Creator";

export default function useWheelEvent<T extends HTMLElement>(ref : RefObject<T>, c : Creator) : void {
    const cT = c.cTR.current

    useEffect(() => {
        ref.current!.addEventListener('wheel', (e : WheelEvent) => {
            cT.publish({
                from: c,
                type: EventTypeEnum.WheelEvent,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                ctrlKey: e.ctrlKey,
            })
        })
    }, [])
}