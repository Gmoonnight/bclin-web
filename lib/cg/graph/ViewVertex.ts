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
        
        creator.sceneRef.current = produce(creator.sceneRef.current!, draft => {
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

        })
        
        console.log("event: " + JSON.stringify(event) + ", scene: " + JSON.stringify(creator.sceneRef.current))
    }

    public handleWheelEvent(e : Event) : void {
        const event = e as WheelEvent

        const creator = event.from

        creator.sceneRef.current = produce(creator.sceneRef.current!, draft => {
            draft.camera!.x -= event.deltaX
            draft.camera!.y -= event.deltaY
        })

        creator.setCameraState(creator.sceneRef.current.camera)

        creator.websocketRef.current!.send(JSON.stringify(creator.sceneRef.current.camera))

        console.log("event: " + JSON.stringify(event) + ", scene: " + JSON.stringify(creator.sceneRef.current))
        return
    }
}