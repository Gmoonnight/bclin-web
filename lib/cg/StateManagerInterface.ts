import Scene from "./states/Scene";

/**
 * Author: Delin Zhao
 * 
 * This is a unified state interface used for managing the states in computer graphics.
 * It can have different implementations, such as React, which helps improve scalability.
 * 
 */
export default interface StateManagerInterface {
    getScene() : Scene
    updateScene(scene : Scene) : void
}