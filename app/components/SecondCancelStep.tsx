import { FC } from "react"
import { useFormContext } from 'react-hook-form';
import { outfit } from "../home-page"
import { CustomButton } from "./buttons/CustomButton"
import { CustomInput } from "./inputs/CustomInput"
import { StepTitle, YourReservations } from "./"


interface Props {
    onNextClick: () => void,
    onPrevClick: () => void,
    onHandleSubmit: (data: any) => void
}

export const SecondCancelStep: FC<Props> = ({ onNextClick, onPrevClick, onHandleSubmit }) => {
    const { watch } = useFormContext()


    return (
        <section className='max-w-[855px] mx-auto min-h-[533px]'>
            <div className=''>
                <div className="">
                    <StepTitle>
                        Your reservationsi
                    </StepTitle>
                    <div className="grid justify-items-center">
                        <YourReservations />
                    </div>
                    <div className="flex flex-column items-center mt-[118px]">
                        <CustomButton
                            onClick={onNextClick}
                            width="w-[356px]"
                        /* disabled={name?.length && lastName?.length && email?.length ? false : true} */
                        >
                            CANCEL
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section >
    )
}