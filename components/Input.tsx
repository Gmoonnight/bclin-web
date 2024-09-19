import { ChangeEvent } from "react";

export default function Input(
    {
        type,
        name,
        placeholder = "",
        onChange = () => {},
        className = "",
    } : {
        type : string,
        name : string,
        placeholder? : string,
        onChange? : (e : ChangeEvent) => void,
        className? : string,
    }
) {
    return (
        <input
            type = {type}
            name = {name}
            placeholder = {placeholder}
            onChange={onChange}
            className = {
                `${className}`
            }
        />
    )
}