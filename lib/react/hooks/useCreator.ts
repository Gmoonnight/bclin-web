import { CreatorContext } from "@/components/specific/design/CreatorProvider"
import { useContext } from "react"

export default function useCreator() {
    const creator = useContext(CreatorContext)

    if(!creator) throw new Error("Creator has gone!")

    return creator
}