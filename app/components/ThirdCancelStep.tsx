import { FC } from "react"
import Image from "next/image"
import { TitleFinish, YourBooking, TextConfirmation, CustomButton } from "./"
import { Tick } from "../assets"

interface Props {
    onPrevClick: () => void
}

export const ThirdCancelStep: FC<Props> = ({ onPrevClick }) => {
    return (
        <div className="max-w-[855px] mx-auto min-h-[533px] bg-blue">
            <div className="grid justify-items-center pt-9">
                <TitleFinish>Your spot is canceled.</TitleFinish>
                <div className="pt-8 pb-6">
                    <Image src={Tick} width={105} alt="tick" />
                </div>
                <YourBooking text="Thanks! I´m looking forward to meet you on the court on" lastText="has been canceled.">
                   <span></span> Tuesday, Oct 4 at 10:00 hs.<span></span>
                </YourBooking>
                <div className="pt-5 pb-8">
                    <TextConfirmation>
                        I sent a confirmation email to  <span className="font-bold">janesloan@hotmail.com</span>
                    </TextConfirmation>
                </div>
                <CustomButton width="w-[356px]">BACK TO BOOKING</CustomButton>
            </div>
        </div>
    )
}