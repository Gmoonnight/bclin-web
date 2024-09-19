export default function CheckIcon(
    {
        width = 24,
        height = 24,
        color = "#00712D"
    } : {
        width : number,
        height : number,
        color : string,
    }
) {

    return (
        <div className = "inline-flex items-center justify-center">
            <svg
                xmlns = "http://www.w3.org/2000/svg"
                width = {width}
                height = {height}
                viewBox = "0 0 24 24"
                fill = "none"
                stroke = {color}
                stroke-width = "1.3"
                stroke-linecap = "round"
                stroke-linejoin = "round"
            >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
    )
}