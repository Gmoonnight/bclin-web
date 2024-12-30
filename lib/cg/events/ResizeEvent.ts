import BaseEvent from "./BaseEvent";

export default interface ResizeEvent extends BaseEvent {
    w : number
    h : number
}