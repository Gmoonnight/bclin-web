import Creator from "../Creator";
import EventTypeEnum from "../enums/EventTypeEnum";

export default interface BaseEvent {
    from : Creator
    /**
     * Event type
     */
    type : EventTypeEnum
    
}