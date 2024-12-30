import Creator from "@/lib/cg/Creator";
import { RefObject, useEffect } from "react";
import EventTypeEnum from "./enums/EventTypeEnum";

export default function useResizeEvent<T extends HTMLElement>(ref : RefObject<T>, creator : Creator) : void {
    useEffect(() => {
        new ResizeObserver(() => {
            creator.publish({
                from: creator,
                type : EventTypeEnum.ResizeEvent,
                w : ref.current!.getBoundingClientRect().width,
                h : ref.current!.getBoundingClientRect().height,
            })
        }).observe(ref.current!)
    }, [])
}