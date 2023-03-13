import Link from "next/link"
import { setStepNumber } from "../../store/features/uiSlice"
import { useAppDispatch } from "../../store/hooks"
import { audiowide } from "../home-page"


export const Menu = () => {
    const dispatch = useAppDispatch()
    return (
        <ul className={`flex items-center bg-sky-400 md:mr-5 lg:mr-11 ${audiowide.className}`}>
            <li className="mr-6 no-underline" onClick={() => {
           
            }}>
                <Link href="/" className="no-underline text-white text-sm font-medium">Book a lesson</Link>
            </li>
            <li className="mr-6">
                <Link href="#" className="no-underline text-white hover:text-white text-sm font-medium">About me</Link>
            </li>
            <li className="mr-6">
                <Link href="#" className="text-white hover:text-white text-sm font-medium">Blog</Link>
            </li>
            <li className="mr-6">
                <Link href="/cancel-booking" className="text-white hover:text-white text-sm font-medium" onClick={() => {
            
                }}>Cancel a booking</Link>
            </li>
            <li>
                <Link href="#" className="text-white hover:text-white text-sm font-medium">FAQs</Link>
            </li>
        </ul>
    )
}