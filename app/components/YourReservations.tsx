import { FaCalendarAlt } from 'react-icons/fa'

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
    }
]


export const YourReservations = () => {
    return (
        <div>
            <div>
                {Array.map((shift: any) => (
                    <div key={shift.id}>
                        <div>
                            <FaCalendarAlt />
                        </div>
                        <span>
                            {shift.shift}
                        </span>
                        <div>
                            <input type="radio" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}