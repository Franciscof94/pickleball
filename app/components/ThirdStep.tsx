import Image from "next/image"
import { FC } from "react"
import { Tick } from "../assets"
import { CustomButton } from "./buttons/CustomButton"
import { TextConfirmation } from "./TextConfirmation"
import { TitleFinish } from "./TitleFinish"
import { YourBooking } from "./YourBooking"

interface Props {
    onPrevClick: () => void
}

export const ThirdStep: FC<Props> = ({ onPrevClick }) => {
    return (
        <div className="max-w-[855px] mx-auto min-h-[533px] bg-blue">
            <div className="grid justify-items-center mt-9">
                <TitleFinish>Awesome! your spot is reserved. </TitleFinish>
                <div className="mt-8 mb-6">
                    <Image src={Tick} width={105} alt="tick" />
                </div>
                <YourBooking text="Thanks! I´m looking forward to meet you on the court on">
                    Tuesday, Oct 4 at 10:00 hs.
                </YourBooking>
                <div className="mt-5 mb-8">
                    <TextConfirmation>
                    I sent a confirmation email with your booking detail <span className="font-bold">janesloan@hotmail.com</span>
                    </TextConfirmation>
                </div>
                <CustomButton width="w-[356px]">BACK TO BOOKING</CustomButton>
            </div>
        </div>
    )
}