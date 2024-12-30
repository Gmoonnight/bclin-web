import EventTypeEnum from "../enums/EventTypeEnum";
import VertexTypeEnum from "../enums/VertexTypeEnum";
import { Event } from "../events/Event";
import VertexInterface from "./VertexInterface";

export default class AbstractVertex implements VertexInterface {
    constructor(
        protected type: VertexTypeEnum,
        protected handles: Map<EventTypeEnum, (e: Event) => void>,
    ) {}

    public getType() {
        return this.type
    }
    
    public handleEvent(e: Event): any {
        const handle = this.handles.get(e.type)
        if(!handle) return 

        return handle(e)
    }
}