import { Dispatch, MutableRefObject, SetStateAction } from "react";
import StateManagerInterface from "../cg/StateManagerInterface";
import Scene from "../cg/states/Scene";

export default class ReactStateManager implements StateManagerInterface {
    constructor(
        private state : Scene,
        private ref : MutableRefObject<Scene>,
        private update : Dispatch<SetStateAction<Scene>>,
    ) {}

    public getScene(): Scene {
        return this.ref.current
    }

    public updateScene(scene : Scene) {
        this.update(scene)
    }
}