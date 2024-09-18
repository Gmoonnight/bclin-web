import BaseEvent from "./common/BaseEvent";

export default interface WheelEvent extends BaseEvent {
    /**
     * The horizontal scroll amount.
     */
    deltaX : number

    /**
     * The vertical scroll amount
     */
    deltaY: number

    /**
     * Wether the Ctrl key has been pressed.
     */
    ctrlKey : boolean
}