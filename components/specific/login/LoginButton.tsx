'use client'

interface Props {
    usernameChecked : boolean
    passwordChecked : boolean
}

export default function LoginButton(
    {
        usernameChecked,
        passwordChecked,
    } : Props
) {
    const checked = usernameChecked && passwordChecked

    return (
        <div className = {`
            flex flex-row items-center justify-center 
            relative
            w-full h-[12%]
        `.trim()}>
            <button 
                disabled = {checked ? false : true}
                className = {`
                    w-[20%] h-full
                    ${checked ? 'bg-pink-400 cursor-pointer' : 'bg-pink-300 cursor-default'}
                    rounded-md
                `.trim()}
            >登 录</button>
        </div>
    )
}