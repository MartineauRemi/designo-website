import * as Yup from 'yup'

export const contactFormValidation = Yup.object({
    name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phone: Yup.string()
        .required('Required'),
    message: Yup.string()
        .max(250, 'Must be 250 characters or less')
        .required('Required')
})