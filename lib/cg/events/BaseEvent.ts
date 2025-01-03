
import { Creator } from "@/components/specific/design/CreatorProvider";
import EventTypeEnum from "../enums/EventTypeEnum";

export default interface BaseEvent {
    from : Creator
    /**
     * Event type
     */
    type : EventTypeEnum
    
}