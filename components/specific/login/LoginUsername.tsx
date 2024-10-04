'use client'

import CheckCircle from "@/components/common/icons/check-circle.svg"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface Props {
    usernameChecked : boolean
    setUsernameChecked : Dispatch<SetStateAction<boolean>>
}

export default function LoginUsername(
    {
        usernameChecked,
        setUsernameChecked,
    } : Props
) {
    const handleUsernameChange = (e : ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value
        const regex = /^[A-Za-z0-9_]{4,12}$/

        const checked = regex.test(username)

        setUsernameChecked(checked)
    }

    return (
        <div className = {`
            flex flex-row items-center justify-center 
            relative
            w-full h-[12%]
        `.trim()}>
            <input 
                name = "usename" 
                type = "text" 
                placeholder = "请输入用户名"
                onChange = {handleUsernameChange}
                className = {`
                    flex-grow flex-shrink
                    relative
                    h-full
                    ml-[10%] mr-[10%]
                    pl-[3%] pr-[9%]
                    outline-none
                    rounded-md hover:border hover:border-white-300
                `.trim()}
            />
            <CheckCircle className = {`
                flex-grow-0 flex-shrink-0 
                absolute 
                w-[4%] 
                right-[12%] 
                ${usernameChecked ? 'stroke-green-500' : 'stroke-gray-400'} 
            `.trim()} />
        </div>
        
    )
}