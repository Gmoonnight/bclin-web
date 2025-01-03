import Camera from "./Camera";
import Canvas from "./Canvas";
import Viewport from "./Viewport";

export default interface Scene {
    camera : Camera
    canvas : Canvas | null
    viewport : Viewport | null
}