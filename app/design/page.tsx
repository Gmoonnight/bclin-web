'use client'

import Canvas from "@/components/specific/design/Canvas"
import { CreatorProvider } from "../../components/specific/design/CreatorProvider"

export default function Page() {

    return (
        <div className = "w-full h-full">
            <CreatorProvider>
                <Canvas/>
            </CreatorProvider> 
        </div>
    )
}