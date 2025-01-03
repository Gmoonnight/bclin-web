import VertexInterface from "@/lib/cg/graph/VertexInterface";
import EventTypeEnum from "../enums/EventTypeEnum";
import { Event } from "../events/Event";
import VertexTypeEnum from "../enums/VertexTypeEnum";

/**
 * Author: Delin Zhao
 * 
 * Each event corresponds to a topological sequence which is benificial for handling 
 * asynchronous operations in the frontend.
 */
export default class Graph {
    private map : Map<EventTypeEnum, Map<number, VertexInterface[]>> = new Map()

    constructor(
        vertexMap : Map<VertexTypeEnum, VertexInterface>,
        topoSortMap : Map<EventTypeEnum, Map<number, VertexTypeEnum[]>>,
    ) {

        // Just merge two maps into one map.
        topoSortMap.forEach((eventMap, eventType) => {
            const newEventMap : Map<number, VertexInterface[]> = new Map()

            // VertexTypeEnum[] -> VertexInterface[]
            // vertexTypeArray -> vertexArray
            eventMap.forEach((vertexTypeArray, level) => {
                const vertexArray : VertexInterface[] = vertexTypeArray.map(type => vertexMap.get(type)!)
                newEventMap.set(level, vertexArray)
            })

            this.map.set(eventType, newEventMap)
        })
    }

    public async dispatch(event : Event) {
        const eventMap = this.map.get(event.type)

        if(!eventMap) return

        for (const vertexArray of eventMap.values()) {
            // Asynchronous processing.
            await Promise.all(vertexArray.map(async (vertex) => {
                // todo: You can add a retry mechanism here.
                try {
                    await vertex.handleEvent(event)
                }
                catch(error) {
                    console.error(`event: ${event}，vertexType: ${vertex.getType()}, error: ${error}`)
                }
            }))
        }

    }
}