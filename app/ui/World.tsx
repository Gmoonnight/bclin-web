

import FlatFoil from "./FlatFoil"

/**
 * This is a magical world.
 */
export default function World() {
    console.log("World rendered!")

    return(
        <div className = "w-full h-full">
            <FlatFoil/>
        </div>
    )
}