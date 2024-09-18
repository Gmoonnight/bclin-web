import { Event } from "../../events/common/Event";
import EventTypeEnum from "../../events/common/EventTypeEnum";
import Edge from "./Edge";
import Vertex from "./Vertex";
import VertexTypeEnum from "./VertexTypeEnum";

export default class AbstractVertex implements Vertex {
    constructor(
        // ---------------------------------------------------> Base Info(Orthogonal List)
        /**
         * The endpoint of this edge is this vertex.
         */
        protected enter: Edge | null,
        /**
         * The starting point of this edge is this vertex.
         */
        protected out: Edge | null,

        // ---------------------------------------------------> Details
        /**
         * The vertex type.
         */
        protected type: VertexTypeEnum,
        /**
         * Can this vertex handle events?
         */
        protected bling: boolean,
        /**
         * How does this vertex handle events?
         */
        protected handles: Map<EventTypeEnum, (e: Event) => void>,
    ) {}
    
    public reduce(e: Event): any {
        if(!this.bling) return

        const handle = this.handles.get(e.type)
        if(!handle) return 

        return handle(e)
    }

    public canReduce(e: Event): boolean {
        return this.bling && this.handles.has(e.type)
    }

    public getType() {
        return this.type
    }
}