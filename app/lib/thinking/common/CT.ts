import { Event } from "../../events/common/Event"
import Vertex from "./Vertex"
import VertexTypeEnum from "./VertexTypeEnum"

export default class CT {
    constructor(
        /**
         * Storage vertexes.
         */
        private vertexArray : Vertex[],
    
        /**
         * Index.
         */
        private vertexMap : Map<VertexTypeEnum, Vertex>,
    ) {}

    /**
     * Build graph.
     * 
     * @param vertexArray 
     */
    public buildIndex() : CT {
        // Init index.
        this.vertexArray.forEach((vertex) => {
            this.vertexMap.set(vertex.getType(), vertex)
        })

        return this
    }

    public publish(e : Event) : void {
        this.vertexArray
            .filter(vertex => vertex.canReduce(e))
            .forEach(vertex => vertex.reduce(e))
    }
}