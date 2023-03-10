'use client'
import { Audiowide, Outfit } from '@next/font/google'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from 'react-hook-form'
import { Banner, StepContainer } from './components'
import { ShiftSchema } from '../validations';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectUi } from '../store/features/uiSlice';

export const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']
})

export const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
})


export default function Page() {
  const { stepNumber } = useAppSelector(selectUi)
  const methods = useForm({
    resolver: yupResolver(ShiftSchema),
    mode: "all",
  });

  const onSubmit = (data: any) => {

  }

  useEffect(() => {
    document.body.style.backgroundColor = stepNumber === 2 ? "#005C68" : "#F8F8F8"
  }, [stepNumber])

  return (
    <FormProvider {...methods}>
      <section >
        <div className="text-3xl font-bold underline text-red-500">
          <Banner />
          <StepContainer />
        </div>
      </section>
    </FormProvider>
  )
}