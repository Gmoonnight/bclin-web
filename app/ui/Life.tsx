import { memo } from "react";
import useCreator from "../lib/hooks/useCreator";

function Life() {
    // const view = useWallfacer().getThinking().getView()

    return (
        <div 
            className = "bg-black w-20 h-20 left-10 relative" 
            style = {{
                // transform: `translate(${view!.x}px, ${view!.y}px)`,
            }}
            >
        </div>
    )
}

export default memo(Life)