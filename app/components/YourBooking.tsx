import { FC } from "react"
import { outfit } from "../home-page"

interface Props {
    children: React.ReactNode,
    text: string
}

export const YourBooking: FC<Props> = ({ children, text }) => {
    return (
        <div className={`text-xl text-white text-center ${outfit.className}`}>
            <p className="px-[46px] lg:px-0 md:px-0 mb-1">{text}</p>
            <span className="font-bold">{children}</span>
        </div>
    )
}