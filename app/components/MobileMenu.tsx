import Link from "next/link"
import { FC } from "react"
import { audiowide } from "../home-page"


interface Props {
    isOpenMenu: boolean
}

export const MobileMenu: FC<Props> = ({ isOpenMenu }) => {
    return (
        <ul
            className={`block lg:hidden 
                    md:hidden items-center 
                    transition-all ease-in-out 
                    duration-500 z-50 rounded-t-[30px] 
                    shadow-[0_-4px_8px_1px_rgba(0,0,0,0.25)] 
                    h-menu pt-9 pl-3 mr-4 w-full bg-white 
                    mr-11 fixed left-0 
                    ${isOpenMenu ? "bottom-[-16px] translate-[-16px]" : "bottom-hideMenu -translate-full"} 
                    ${audiowide.className}`}
        >
            <li className="py-1">
                <Link href="#" className="text-blue text-sm text-base ">Book a lesson</Link>
            </li>
            <li className="py-1">
                <Link href="#" className="text-blue text-sm text-base">About me</Link>
            </li>
            <li className="py-1">
                <Link href="#" className="text-blue text-sm text-base">Blog</Link>
            </li>
            <li className="py-1">
                <Link href="#" className="text-blue text-sm text-base">Cancel a booking</Link>
            </li>
            <li className="py-1">
                <Link href="#" className="text-blue text-sm text-base">FAQs</Link>
            </li>
        </ul>
    )
}