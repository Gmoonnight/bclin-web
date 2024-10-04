'use client'

import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginPassword from "./LoginPassword";
import LoginUsername from "./LoginUsername";

export default function Login() {
    const [usernameChecked, setUsernameChecked] = useState(false)
    const [passwordChecked, setPasswordChecked] = useState(false)

    return (
        <form className = {`
            relative
            w-[384px] h-[384px] 
            md:w-[33%] md:aspect-square md:min-w-[384px]
            border border-white rounded-md
            bg-white bg-opacity-20
        `.trim()}>
            <div className = {`
                flex flex-col items-center justify-center gap-[10%] 
                relative
                w-full h-full     
            `.trim()}>
                <LoginUsername usernameChecked = {usernameChecked} setUsernameChecked = {setUsernameChecked} />
                <LoginPassword passwordChecked = {passwordChecked} setPasswordChecked = {setPasswordChecked} />
                <LoginButton usernameChecked = {usernameChecked} passwordChecked = {passwordChecked} />
            </div>
        </form>
    )
}