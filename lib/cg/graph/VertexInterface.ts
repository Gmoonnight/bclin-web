import VertexTypeEnum from "../enums/VertexTypeEnum";
import { Event } from "../events/Event";

export default interface VertexInterface {
    getType() : VertexTypeEnum
    handleEvent(e : Event) : Promise<any>
}