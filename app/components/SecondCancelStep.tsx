import { FC } from "react"
import { useFormContext } from 'react-hook-form';
import { CustomButton } from "./buttons/CustomButton"
import { StepTitle, YourReservations } from "./"


interface Props {
    onNextClick: () => void,
    onPrevClick: () => void,
    onHandleSubmit: (data: any) => void
}

export const SecondCancelStep: FC<Props> = ({ onNextClick, onPrevClick, onHandleSubmit }) => {
    const { watch } = useFormContext()
    const shiftCancel = watch('shiftCancel')


    return (
        <section className='max-w-[855px] mx-auto min-h-[533px]'>
            <div className=''>
                <div className="">
                    <StepTitle>
                        Your reservations
                    </StepTitle>
                    <div className="grid justify-items-center pt-6">
                        <YourReservations />
                    </div>
                    <div className="flex flex-column items-center mt-[242px]">
                        <CustomButton
                            onClick={onNextClick}
                            width="w-[356px]"
                            disabled={shiftCancel ? false : true}
                        >
                            CANCEL
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section >
    )
}