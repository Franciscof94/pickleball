import { FC } from "react"
import { outfit } from "../home-page"

interface Props {
    children: React.ReactNode,
    padding: string
}

export const YouChose:FC<Props> = ({ children, padding }) => {
    console.log(padding)
    return (
        <div className={`text-aqua text-2xl ${padding}  ${outfit.className}`}>
            You chose <span className="font-semibold">{children}</span>
        </div>
    )
}