
interface BackgroundProps {
    /**
     * Required.
     * You can use it to provide or overrite CSS properties.
     * ex : bg-home-default md:bg-home-md lg:bg-home-lg
     */
    className : string,
    /**
     * Optinal.
     */
    children? : React.ReactNode,
}

export default function Background({
    className,
    children,
} : BackgroundProps) {
    return (
        <div
            className = {`w-full h-full bg-cover bg-center ${className}`}
        >
            {children}
        </div>
    )
}