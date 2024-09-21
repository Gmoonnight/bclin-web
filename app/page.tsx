import Background from "@/components/Background";
import Login from "./Login";

export default function Page() {
    return (
        <Background className = {`
            grid grid-cols-1 grid-rows-1 place-items-center
            relative
            w-full h-full
            bg-home-default md:bg-home-md lg:bg-home-lg
        `.trim()}>
            <Login />
        </Background>
        
    )
}