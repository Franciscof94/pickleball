import { FC } from "react"
import { audiowide } from "../home-page"
import { StepNumber } from "./StepNumber"

interface Props {
    children: React.ReactNode
}

export const StepTitle: FC<Props> = ({ children }) => {

    return (
        <div className="text-[24px] flex justify-center md:pt-7 ml-[-15px] lg:pt-7 pb-[30px]">
            <div className="flex justify-center md:justify-start lg:justify-start md: max-w-[715px] lg:max-w-[880px] w-full">
                <div className=" flex items-center">
                    <StepNumber>
                        <span className=" text-white">1</span>
                    </StepNumber>
                    <div>
                        <span className={`text-blue-text ${audiowide.className}`}>
                            {children}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}