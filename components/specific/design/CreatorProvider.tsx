import EventTypeEnum from '@/lib/cg/enums/EventTypeEnum'
import VertexTypeEnum from '@/lib/cg/enums/VertexTypeEnum'
import Graph from '@/lib/cg/graph/Graph'
import VertexInterface from '@/lib/cg/graph/VertexInterface'
import Camera from '@/lib/cg/states/Camera'
import useWebSocket from '@/lib/react/hooks/useWebSocket'
import { createContext, Dispatch, MutableRefObject, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import ViewVertex from '../../../lib/cg/graph/ViewVertex'
import Scene from '../../../lib/cg/states/Scene'
import useRefState from '@/lib/react/hooks/useRefState'

export interface Creator {
    isReady : boolean,
    setIsReady : Dispatch<SetStateAction<boolean>>,
    wsState : number,
    wsRef : MutableRefObject<number>,
    wsUpdate : Dispatch<SetStateAction<number>>,
    cameraState : Camera | null,
    setCameraState : Dispatch<SetStateAction<Camera | null>>,
    sceneRef : MutableRefObject<Scene | null>,
    dispatcherRef : MutableRefObject<Graph | null>,
    websocketRef : MutableRefObject<WebSocket | null>,
}

export const CreatorContext = createContext<Creator | null>(null)

export function CreatorProvider({children} : {children : React.ReactNode}) {

    console.log("Rendering ProviderComponent")

    // The states.
    const [isReady, setIsReady] = useState(false)
    const [wsState, wsRef, wsUpdate] = useRefState<number>(WebSocket.CLOSED)
    const [cameraState, setCameraState] = useState<Camera | null>(null)

    // The datas.
    const sceneRef = useRef<Scene | null>(null)

    // The event dispatcher.
    const dispatcherRef = useRef<Graph | null>(null)

    // The websocket.
    const websocketRef = useRef<WebSocket | null>(null)

    const creator = useMemo(() => ({
        isReady,
        setIsReady,
        wsState,
        wsRef,
        wsUpdate,
        cameraState,
        setCameraState,
        sceneRef,
        dispatcherRef,
        websocketRef,
    }), [isReady, cameraState])

    console.log(JSON.stringify({isReady, wsState, cameraState}))

    // Side effect.
    useWebSocket(wsState, wsRef, wsUpdate, websocketRef)

    useEffect(() => {
        sceneSideEffect(sceneRef)
        dispatcherSideEffect(dispatcherRef)

        setCameraState(sceneRef.current!.camera)
        setIsReady(true)
    }, [])

    return (
        <CreatorContext.Provider value = {creator}>
            {
                isReady ? children : <p>Loading</p>
            }
        </CreatorContext.Provider>
    )
}

const sceneSideEffect = (sceneRef : MutableRefObject<Scene | null>) => {
    sceneRef.current = {
        camera : {
            x : 0,
            y : 0,
            z : 0,
        },
        canvas : null,
        viewport : null,
    }
}

const dispatcherSideEffect = (dispatcherRef : MutableRefObject<Graph | null>) => {
    const vertexMap = new Map<VertexTypeEnum, VertexInterface>(
        [
            new ViewVertex()
        ].map(vertex => [vertex.getType(), vertex])
    )

    const topoSortMap = new Map([
        [EventTypeEnum.ResizeEvent, new Map([
            [1, [VertexTypeEnum.View]]
        ])],
        [EventTypeEnum.WheelEvent, new Map([
            [1, [VertexTypeEnum.View]]
        ])]
    ])

    const graph = new Graph(vertexMap, topoSortMap)

    dispatcherRef.current = graph
}