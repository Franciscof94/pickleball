import * as Yup from "yup";



export const BookingSchema = Yup.object({
    dateAndTime: Yup.string().required(''),
    name: Yup.string().required('The name is required'),
    lastName: Yup.string().required('the last name is required'),
    email: Yup.string().email().required('the email is required')
})