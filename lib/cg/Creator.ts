import { Event } from "./events/Event";
import Graph from "./graph/Graph";
import StateManagerInterface from "./StateManagerInterface";
import Scene from "./states/Scene";

export default class Creator {
    constructor(
        private sm : StateManagerInterface,
        private graph : Graph,
    ) {}
    
    public publish(e : Event) {
        this.graph.publish(e)
    }

    public getScene() {
        return this.sm.getScene()
    }

    public updateScene(scene : Scene) {
        this.sm.updateScene(scene)
    }
}