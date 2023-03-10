import { FC } from "react"
import { outfit } from "../../home-page"


interface Props {
    children: React.ReactNode,
    width: string,
    onClick?: () => void
}

export const CustomButton: FC<Props> = ({ children, width, onClick }) => {
    return <button onClick={onClick} className={`bg-green rounded-full text-white text-[20px] font-bold h-7 ${width} ${outfit.className}`}>{children}</button>
}