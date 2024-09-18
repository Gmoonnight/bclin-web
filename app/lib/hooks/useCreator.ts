import { CreatorContext } from "@/app/ui/CreatorProvider"
import { useContext } from "react"

export default function useCreator() {
    const creator = useContext(CreatorContext)

    if(!creator) throw new Error("Creator has gone!")

    return creator
}