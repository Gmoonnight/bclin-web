import { Dispatch, MutableRefObject, SetStateAction, useCallback, useRef, useState } from "react";

export default function useRefState<T>(initialValue : T) : [state : T, ref : MutableRefObject<T>, update : Dispatch<SetStateAction<T>>] {
    const ref = useRef<T>(initialValue)
    const [state, setState] = useState(initialValue)

    const update = useCallback((value : SetStateAction<T>) => {
        ref.current = typeof value === 'function' ? (value as (prevState : T) => T)(ref.current) : value
        setState(ref.current)
    }, [])

    return [state, ref, update]
}