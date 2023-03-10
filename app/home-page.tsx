'use client'
import { Audiowide, Outfit } from '@next/font/google'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from 'react-hook-form'
import { Banner, StepContainer } from './components'
import { BookingSchema } from '../validations';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectUi, setStepNumber } from '../store/features/uiSlice';
import { useEffect } from 'react';


export const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']
})

export const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
})


export default function Page() {
  const dispatch = useAppDispatch()
  const { stepNumber, nextStep } = useAppSelector(selectUi)
  const methods = useForm({
    resolver: yupResolver(BookingSchema),
    mode: "all",
  });



  const onSubmit = (data: any) => {
    console.log("eSTA ES la data", data)
    try {
      nextStep
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(setStepNumber(0))
  }, [])

  return (
    <FormProvider {...methods}>
      <form className={`${stepNumber === 2 ? "bg-blue" : "bg-dirty-white"}`} onSubmit={methods.handleSubmit(onSubmit)}>
        <section >
          <div className="text-3xl font-bold underline text-red-500">
            <Banner />
            <StepContainer onHandleSubmit={onSubmit} />
          </div>
        </section>
      </form>
    </FormProvider>
  )
}