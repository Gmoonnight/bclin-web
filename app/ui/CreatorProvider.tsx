import { createContext, useRef } from 'react'
import Creator from '../lib/Creator'
import useRefState from '../lib/hooks/useRefState'
import CS from '../lib/states/CS'
import CT from '../lib/thinking/common/CT'
import ViewVertex from '../lib/thinking/ViewVertex'

export const CreatorContext = createContext<Creator | null>(null)


export function CreatorProvider({children} : {children : React.ReactNode}) {
    const iCS : CS = {
        view : null,
    }

    const iCT : CT = new CT(
        [
            new ViewVertex(null, null)
        ],
        new Map()
    ).buildIndex()


    const [cS, cSR, cSRUpdate] = useRefState<CS>(iCS)
    const cTR = useRef<CT>(iCT)

    const creator : Creator = {cS, cSR, cSRUpdate, cTR}

    return (
        <CreatorContext.Provider value = {creator}>
            {children}
        </CreatorContext.Provider>
    )
}