import Creator from "../../Creator";
import EventTypeEnum from "./EventTypeEnum";

export default interface BaseEvent {
    /**
     * From where.
     */
    from : Creator,

    /**
     * Event type.
     */
    type : EventTypeEnum,
    
}