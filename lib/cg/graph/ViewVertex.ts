import { produce } from "immer";
import EventTypeEnum from "../enums/EventTypeEnum";
import VertexTypeEnum from "../enums/VertexTypeEnum";
import { Event } from "../events/Event";
import ResizeEvent from "../events/ResizeEvent";
import WheelEvent from "../events/WheelEvent";
import AbstractVertex from "./AbstractVertex";

export default class ViewVertex extends AbstractVertex {
    constructor() {
        super(
            VertexTypeEnum.View,
            new Map(),
        )

        this.handles.set(EventTypeEnum.ResizeEvent, (e : Event) => this.handleResizeEvent(e))
        this.handles.set(EventTypeEnum.WheelEvent, (e : Event) => this.handleWheelEvent(e))
    }

    public handleResizeEvent(e : Event) : void {
        const event = e as ResizeEvent
        const creator = event.from

        creator.updateScene(produce(creator.getScene(), draft => {
            if(!draft.canvas || !draft.viewport) {
                draft.canvas = {
                    w : event.w,
                    h : event.h,
                }

                draft.viewport = {
                    w : event.w * 2,
                    h : event.h * 2,
                    d : event.h * 2,
                }

                return
            }

            draft.canvas.w = event.w
            draft.canvas.h = event.h
            draft.viewport.w = event.w * 2
            draft.viewport.h = event.h * 2

            return
        }))

        console.log("canvas: " + JSON.stringify(creator.getScene().canvas) + ", viewport: " + JSON.stringify(creator.getScene().viewport))
        return
    }

    public handleWheelEvent(e : Event) : void {
        const event = e as WheelEvent

        const creator = event.from

        creator.updateScene(produce(creator.getScene(), draft => {
            draft.camera!.x -= event.deltaX
            draft.camera!.y -= event.deltaY
        }))

        console.log("camera: " + JSON.stringify(creator.getScene().camera))
        return
    }
}