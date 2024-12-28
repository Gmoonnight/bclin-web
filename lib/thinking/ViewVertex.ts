import { produce } from "immer";
import { Event } from "../events/common/Event";
import EventTypeEnum from "../events/common/EventTypeEnum";
import ResizeEvent from "../events/ResizeEvent";
import AbstractVertex from "./common/AbstractVertex";
import Edge from "./common/Edge";
import VertexTypeEnum from "./common/VertexTypeEnum";
import WheelEvent from "../events/WheelEvent";

export default class ViewVertex extends AbstractVertex {
    constructor(
        enter: Edge | null,
        out: Edge | null,
    ) {
        super(
            enter,
            out,
            VertexTypeEnum.View,
            true,
            new Map(),
        )

        this.handles.set(EventTypeEnum.ResizeEvent, (e : Event) => this.handleResizeEvent(e))
        this.handles.set(EventTypeEnum.WheelEvent, (e : Event) => this.handleWheelEvent(e))
    }

    public handleResizeEvent(e : Event) : void {
        const event = e as ResizeEvent
        const {cSR, cSRUpdate} = event.from
        const cS = cSR.current

        cSRUpdate(produce(cS, draft => {
            if(!draft.view) {
                draft.view = {
                    x : 0,
                    y : 0,
                    w : event.w,
                    h : event.h,
                }
                return draft
            }

            draft.view.w = event.w
            draft.view.h = event.h
        }))

        console.log("view: " + JSON.stringify(cS.view))
        return
    }

    public handleWheelEvent(e : Event) : void {
        const event = e as WheelEvent
        const {cSR, cSRUpdate} = event.from
        const cS = cSR.current

        cSRUpdate(produce(cS, draft => {
            draft.view!.x -= event.deltaX
            draft.view!.y -= event.deltaY
        }))

        console.log("view: " + JSON.stringify(cS.view))
        return
    }
}