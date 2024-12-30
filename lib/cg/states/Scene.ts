import VertexTypeEnum from "@/lib/cg/enums/VertexTypeEnum";
import EventTypeEnum from "../enums/EventTypeEnum";
import Camera from "./Camera";
import Canvas from "./Canvas";
import Viewport from "./Viewport";

export default interface Scene {
    camera : Camera
    canvas : Canvas | null
    viewport : Viewport | null

    topoSortMap : Map<EventTypeEnum, Map<number, VertexTypeEnum[]>>
}