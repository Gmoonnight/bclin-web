import { Event } from "../../events/common/Event";
import VertexTypeEnum from "./VertexTypeEnum";

export default interface Vertex {

    /**
     * Get vertex's type.
     */
    getType() : VertexTypeEnum

    /**
     * This vertex handling different events.
     * 
     * @param e 
     */
    reduce(e : Event) : any

    /**
     * Wether this vertex can reduce sepecific event.
     * @param e 
     */
    canReduce(e : Event) : boolean
}