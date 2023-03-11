import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'
import { outfit } from '../home-page'
import { useFormContext } from 'react-hook-form';

const Array = [
    {
        id: 1,
        shift: "Tuesday, Oct 4 at 10:00 hs"
    },
    {
        id: 2,
        shift: "Friday, Oct 7 at 14:00 hs"
    },
    {
        id: 3,
        shift: "Tuesday, Oct 18 at 10:00 hs"
    },
    {
        id: 4,
        shift: "Tuesday, Oct 4 at 10:00 hs"
    },
    {
        id: 5,
        shift: "Friday, Oct 7 at 14:00 hs"
    },
    {
        id: 6,
        shift: "Tuesday, Oct 18 at 10:00 hs"
    }
]


export const YourReservations = () => {
    const { register } = useFormContext()
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleRadioSelect = (event: any, index: number) => {
        setSelectedItem(index);
      }
      
    return (
        <div className='w-full flex justify-center'>
            <div className="max-w-[360px] max-h-[220px] overflow-y-scroll w-full" style={{ display: "grid", gap: "1rem" }}>
                {Array.map((shift: any, index: number) => (
                    <div key={shift.id} className={`flex items-center justify-between ${index === selectedItem ? 'shadow-[1px_3px_4px_rgba(0,0,0,0.25)] bg-white rounded-[20px]' : 'bg-dirty-white'
                        } p-2`}
                        >
                        <div className='bg-aqua-opacity h-8 w-8 flex items-center justify-center rounded-full'>
                            <FaCalendarAlt size={22} color="#00ccd9" />
                        </div>
                        <div className='flex items-center max-w-[212px] w-full'>
                            <span className={`text-base text-blue-text font-extrabold ${outfit.className}`}>
                                {shift.shift}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <input onClick={() => setSelectedItem(index)} {...register('shiftCancel')} onChange={(event) => handleRadioSelect(event, index)} checked={index === selectedItem} type="radio" className="accent-aqua h-3 w-3" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

