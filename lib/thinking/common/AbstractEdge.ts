import Edge from "./Edge";
import Vertex from "./Vertex";

export default abstract class AbstractEdge implements Edge {
    constructor(
        protected enter: Vertex,
        protected out: Vertex,
    ) {}
    
}