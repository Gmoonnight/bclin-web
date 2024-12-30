import Creator from '@/lib/cg/Creator'
import EventTypeEnum from '@/lib/cg/enums/EventTypeEnum'
import VertexTypeEnum from '@/lib/cg/enums/VertexTypeEnum'
import Graph from '@/lib/cg/graph/Graph'
import VertexInterface from '@/lib/cg/graph/VertexInterface'
import { createContext } from 'react'
import ViewVertex from '../../../lib/cg/graph/ViewVertex'
import Scene from '../../../lib/cg/states/Scene'
import ReactStateManager from '../../../lib/react/ReactStateManager'
import useRefState from '../../../lib/react/hooks/useRefState'

export const CreatorContext = createContext<Creator | null>(null)

export function CreatorProvider({children} : {children : React.ReactNode}) {
    const scene : Scene = {
        camera : {
            x : 0,
            y : 0,
            z : 0,
        },
        canvas : null,
        viewport : null,
        topoSortMap : new Map([
            [EventTypeEnum.ResizeEvent, new Map([
                [1, [VertexTypeEnum.View]]
            ])],
            [EventTypeEnum.WheelEvent, new Map([
                [1, [VertexTypeEnum.View]]
            ])]
        ])
    }
    const [state, ref, update] = useRefState<Scene>(scene)
    const sm = new ReactStateManager(state, ref, update)

    const vertexMap = new Map<VertexTypeEnum, VertexInterface>(
        [
            new ViewVertex()
        ].map(vertex => [vertex.getType(), vertex])
    )

    const graph = new Graph(vertexMap, scene.topoSortMap)

    const creator = new Creator(sm, graph)

    return (
        <CreatorContext.Provider value = {creator}>
            {children}
        </CreatorContext.Provider>
    )
}