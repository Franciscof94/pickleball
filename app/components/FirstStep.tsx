import { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { StepTitle } from './StepTitle';
import { YouChose } from './YouChose';
import { CustomButton } from './buttons/CustomButton';
import { TextInformation } from './TextInformation';
import useWindowDimensions from '../../hooks/useResize';


interface Props {
    onNextClick: () => void
}

export const FirstStep: FC<Props> = ({ onNextClick }) => {
    const { width } = useWindowDimensions()
    const [startDate, setStartDate] = useState<any>()

    const { control, watch } = useFormContext()
    const dateAndTime = watch('dateAndTime')

    const filterPassedTime = (time: any) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <section className='max-w-[855px] mx-auto min-h-[533px]'>
            <StepTitle>
                {width!! > 768 ? "Select a day and time" : "Book a day and time"}
            </StepTitle>
            <TextInformation />
            <div className='relative'>

                <div className='flex justify-center'>
                    <Controller
                        control={control}
                        name="dateAndTime"
                        render={({ field }) => (
                            <DatePicker
                                selected={startDate}
                                onChange={(value) => {
                                    /* handleChangeShift(value); */
                                    setStartDate(value)
                                    field.onChange(value)
                                }}
                                inline
                                showTimeSelect
                                filterTime={filterPassedTime}
                                /* includeTimes={times} */
                                minDate={moment().toDate()}
                                /* excludeTimes={getExcludeTimesForDate(startDate)} */
                                placeholderText="Select a weekday"
                            />
                        )}
                    />
                </div>
                <div className='mt-4 md:absolute lg:absolute lg:h-18 md:h-18  grid justify-items-center  right-[60px] md:right-[37px] lg:bottom-[-15px] md:bottom-[-15px]' >
                    <div className='hidden lg:block md:block'>
                        <YouChose padding="pb-4">
                            Tuesday, Oct 4 at 10:00 hs
                        </YouChose>
                    </div>
                    <CustomButton width='w-[356px]' onClick={onNextClick} disabled={dateAndTime ? false : true}>
                        NEXT
                    </CustomButton>
                </div>
            </div>
        </section>

    )
}
