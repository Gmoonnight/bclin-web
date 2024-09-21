'use client'

import CheckIcon from "@/components/icons/CheckIcon";
import Input from "@/components/Input";

export default function Login() {
    return (
        <form className = {`
            flex flex-col items-center justify-center gap-[10%]
            relative
            w-[384px] h-[384px]
            md:w-[33%] md:h-[60%] md:min-w-[384px] md:min-h-[384px]
            border border-white rounded-md
        `.trim()}>
            <div className = {`
                flex flex-row justify-center items-center
                relative
                w-full h-[12%]
            `.trim()}>
                <Input type="text" name="username" placeholder="请输入用户名" className = "flex-grow flex-shrink h-full ml-[10%] mr-[10%] pl-[3%] pr-[9%] rounded-md hover:border-white-300 hover:border"/>
                <CheckIcon className = "flex-grow-0 flex-shrink-0 absolute w-[5%] right-[12%] stroke-gray-400" />
            </div>
            <div className = {`
                flex flex-row justify-center items-center
                relative
                w-full h-[12%]
            `.trim()}>
                <Input type="password" name="password" placeholder="请输入密码" className = "flex-grow flex-shrink h-full ml-[10%] mr-[10%] pl-[3%] pr-[9%] rounded-md hover:border-white-300 hover:border"/>
                <CheckIcon className = "flex-grow-0 flex-shrink-0 absolute w-[5%] right-[12%] stroke-gray-400" />
            </div>
            <div className = {`
                flex flex-row justify-center items-center
                relative
                w-full h-[12%]
            `.trim()}>
                <button disabled = {true} className = "w-[20%] h-full bg-pink-400 rounded-md">登 录</button>
            </div>
        </form>
    )
}