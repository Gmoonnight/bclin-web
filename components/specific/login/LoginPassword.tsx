'use client'

import CheckCircle from "@/components/common/icons/check-circle.svg"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface Props {
    passwordChecked : boolean
    setPasswordChecked : Dispatch<SetStateAction<boolean>>
}

export default function LoginPassword(
    {
        passwordChecked,
        setPasswordChecked,
    } : Props
) {
    const handlePasswordChange = (e : ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        const regex = /^(?=.*[A-Z])[A-Za-z0-9]{6,12}$/

        const checked = regex.test(password)

        setPasswordChecked(checked)
    }

    return (
        <div className = {`
            flex flex-row items-center justify-center 
            relative
            w-full h-[12%]
        `.trim()}>
            <input 
                name = "usename" 
                type = "password" 
                placeholder="请输入密码"
                onChange = {handlePasswordChange}
                className = {`
                    flex-grow flex-shrink
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
                ${passwordChecked ? 'stroke-green-500' : 'stroke-gray-400'}
            `.trim()} />
            
        </div>
        
    )
}