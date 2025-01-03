import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";

export default function useWebSocket(
    wsState : number,
    wsRef : MutableRefObject<number>,
    wsUpdate : Dispatch<SetStateAction<number>>,
    websocketRef : MutableRefObject<WebSocket | null>,
) : MutableRefObject<WebSocket | null> {

    useEffect(() => {
        console.log("useEffect: component mounted1.")
        return () => {
            cleanup(wsRef, wsUpdate, websocketRef)
            console.log("useEffect: component will unmount.")
        }
    }, [])

    useEffect(() => {
        console.log("useEffect: component mounted2.")
        if(wsRef.current != WebSocket.CLOSED) return

        const websocket = new WebSocket("ws://localhost:8081/test?uid=123")
        wsUpdate(WebSocket.CONNECTING)
        console.log("websocket[connect]: connecting")

        // Asynchronous callback functions
        websocket.onopen = () => {
            wsUpdate(WebSocket.OPEN)
            console.log("websocket[connect]: open")
        }

        websocket.onclose = () => {
            wsUpdate(WebSocket.CLOSED)
            console.log("websocket[connect]: close")
        }

        websocket.onerror = (error) => {
            console.log("websocket[connect]: error: " + JSON.stringify(error))
        }

        websocketRef.current = websocket
    }, [wsState])

    return websocketRef
}

const cleanup = async (
    wsRef : MutableRefObject<number>,
    wsUpdate : Dispatch<SetStateAction<number>>,
    websocketRef : MutableRefObject<WebSocket | null>,
) => {
    await closeWebsocket(wsRef, wsUpdate, websocketRef)
}

const closeWebsocket = async (
    wsRef : MutableRefObject<number>,
    wsUpdate : Dispatch<SetStateAction<number>>,
    websocketRef : MutableRefObject<WebSocket | null>,
) => {
    const websocket = websocketRef.current

    if(!websocket) return Promise.resolve()

    if(websocket.readyState === websocket.CONNECTING) {
        return new Promise<void>((resolve) => {
            websocket.onopen = () => {
                console.log("websocket[close]: open")
                wsUpdate(WebSocket.OPEN)
                websocket.close()
            }
            websocket.onclose = () => {
                console.log("websocket[close]: close")
                wsUpdate(WebSocket.CLOSED)
                websocketRef.current = null
                resolve()
            }
        })
    }

    if(websocket.readyState === websocket.OPEN) {
        websocket.close()

        return new Promise<void>((resolve) => {
            websocket.onclose = () => {
                console.log("websocket[close]: close")
                wsUpdate(WebSocket.CLOSED)
                websocketRef.current = null
                resolve()
            }
        })
    }

    if(websocket.readyState === websocket.CLOSING) {
        return new Promise<void>((resolve) => {
            websocket.onclose = () => {
                console.log("websocket[close]: close")
                wsUpdate(WebSocket.CLOSED)
                websocketRef.current = null
                resolve()
            }
        })
    }

    if(websocket.readyState === websocket.CLOSED) {
        console.log("websocket[close]: close")
        wsUpdate(WebSocket.CLOSED)
        websocketRef.current = null
        return Promise.resolve()
    }

    wsUpdate(WebSocket.CLOSED)
    websocketRef.current = null
    return Promise.resolve()
}