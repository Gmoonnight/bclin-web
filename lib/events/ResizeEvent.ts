import BaseEvent from "./common/BaseEvent";

export default interface ResizeEvent extends BaseEvent{
    w : number
    h : number
}