import { FC, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import useWindowDimensions from '../../hooks/useResize';
import { selectUi, setStepNumber } from "../../store/features/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FirstStep, SecondStep, ThirdStep } from './';
import { FormProvider } from "react-hook-form";



export const StepContainer = () => {
    const ref = useRef<any>(null);
    const { stepNumber } = useAppSelector(selectUi)
    const dispatch = useAppDispatch()
    const { width } = useWindowDimensions()

    const handleSelect = (selectedIndex: number) => {
        dispatch(setStepNumber(selectedIndex))
    };

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };


    return (

        <form className={`${stepNumber === 2 ? "bg-blue" : ""}`}>
            <AnimatePresence>
                <Carousel
                    ref={ref}
                    interval={null}
                    touch={false}
                    onSelect={handleSelect}
                    indicators={width!! >= 768 ? true : false}
                >
                    <Carousel.Item>
                        <motion.div
                            key={stepNumber}
                            initial={{ y: 1, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -1, opacity: 0 }}
                            transition={{ duration: 2.5 }}
                        >
                            <FirstStep onNextClick={onNextClick} />
                        </motion.div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.div
                            key={stepNumber}
                            initial={{ y: 1, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -1, opacity: 0 }}
                            transition={{ duration: 2.5 }}
                        >
                            <SecondStep onNextClick={onNextClick} onPrevClick={onPrevClick} />
                        </motion.div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.div
                            key={stepNumber}
                            initial={{ y: 1, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -1, opacity: 0 }}
                            transition={{ duration: 2.5 }}
                        >
                            <ThirdStep onPrevClick={onPrevClick} />
                        </motion.div>
                    </Carousel.Item>
                </Carousel>
            </AnimatePresence>
        </form>

    )
}