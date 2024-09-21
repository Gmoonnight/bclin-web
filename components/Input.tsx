'use client'

import { ChangeEvent } from "react";

interface InputProps {
    /**
     * The type of input, such as text, password and so on.
     */
    type : string,
    /**
     * The name of properties for submiting form.
     */
    name : string,
    /**
     * The tips of input.
     */
    placeholder? : string,
    /** 
     * You can add event listener by it.
    */
    onChange? : (e : ChangeEvent) => void,
    /**
     * Optinal CSS classes.
     */
    className? : string,
}

export default function Input(
    {
        type,
        name,
        placeholder = "",
        onChange = () => {},
        className = "",
    } : InputProps) {
    return (
        <input
            type = {type}
            name = {name}
            placeholder = {placeholder}
            onChange={onChange}
            className = {
                `outline-0 ${className}`
            }
        />
    )
}