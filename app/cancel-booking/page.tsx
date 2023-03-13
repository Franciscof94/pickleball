'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { selectUi, setStepNumber } from '../../store/features/uiSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { BookingSchema } from '../../validations';
import { StepCancelContainer } from '../components'


const CancelABooking = () => {
    const { stepNumber, nextStep } = useAppSelector(selectUi)
    const dispatch = useAppDispatch()

    const methods = useForm({
        resolver: yupResolver(BookingSchema),
        mode: "all",
    });

    useEffect(() => {
        dispatch(setStepNumber(0))
    }, [])


    const onSubmit = (data: any) => {
        console.log("eSTA ES la data", data)
        try {
            nextStep
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <FormProvider {...methods}>
            <form className={`${stepNumber === 2 ? "bg-blue" : "bg-dirty-white"}`} onSubmit={methods.handleSubmit(onSubmit)}>
                <section >
                    <div className="text-3xl font-bold underline text-red-500">
                        <StepCancelContainer onHandleSubmit={onSubmit} />
                    </div>
                </section>
            </form>
        </FormProvider>
    )
}

export default CancelABooking