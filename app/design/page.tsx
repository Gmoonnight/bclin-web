'use client'

import { CreatorProvider } from "../ui/CreatorProvider"
import World from "../ui/World"

export default function Page() {

    return (
        <div className = "w-screen h-screen">
            <CreatorProvider>
                <World />
            </CreatorProvider> 
        </div>
    )
}