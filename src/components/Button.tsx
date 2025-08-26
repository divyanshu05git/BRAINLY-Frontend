import type { ReactElement } from "react"

export interface ButtonProps{
    variant :"primary" | "secondary"
    size:"sm" | "md" | "lg"
    text:string
    startIcon?:ReactElement
    endIcon?:ReactElement
    onClick?:()=> void
}

//it is for every button
const defaultStyles="rounded-md flex items-center font-light"

const variantStyles={
    "primary":"bg-[#5046e4] text-white",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7]"
}

const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button =({variant ,text ,startIcon, onClick , size}:ButtonProps) =>{
    return <button onClick={onClick} className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles}`}>{startIcon?<div className="pr-2">{startIcon}</div>:<></>} {text} <div className="pl-2"></div>
    </button>
}

