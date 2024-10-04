import Login from "@/components/specific/login/Login";

export default function Page() {
    return (
        <div className = "relative w-full h-full bg-home-default bg-cover bg-center">
            <div className = "grid grid-cols-1 grid-rows-1 place-items-center relative  w-full h-full">
                <Login />
            </div>
        </div>
        
    )
}