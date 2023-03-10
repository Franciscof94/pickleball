'use client'
import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { Start } from '../assets';
import { audiowide } from '../home-page';

export const StartImage = () => {
    const dispatch = useAppDispatch()


    const [fadeProp, setFadeProp] = useState({
        fade: "fade-in",
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === "fade-in") {
                setFadeProp({
                    fade: "fade-out",
                });
                setTimeout(() => {
                    /* dispatch(setShowImage(false)) */
                }, 600);
            }
        }, 4000);
        return () => clearInterval(timeout);
    }, [fadeProp]);

    return (

        <div
            style={{
                backgroundImage: `url(${Start.default.src})`,
                opacity: fadeProp.fade === "fade-in" ? "" : "0",
                transition: fadeProp.fade === "fade-in" ? "opacity 2s ease" : "opacity 2s ease"
            }}
            data-testid="fader"
            className={` ${fadeProp.fade} bg-no-repeat bg-cover absolute w-full h-full h-[500px] `}
        >
            <div className={`${audiowide.className} text-center mt-12 text-white`}>Welcome to</div>
        </div>




    )
}