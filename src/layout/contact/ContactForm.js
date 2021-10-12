import React from 'react'
import { Formik, Form} from 'formik'
import styled from 'styled-components'
import { WhiteBtn } from "../../components/Buttons"
import { contactFormValidation } from '../../validations/ContactForm'
import { TextInput, TextAreaInput } from '../../components/shared/forms/Inputs'

const StyledForm = styled(Form)`
    color: var(--white);
    display: grid;
    row-gap: 2rem;
    width: 100%;

    input, textarea{
        border: none;
        outline: none;
        border-bottom: 1px solid var(--white);
        padding: 0.75rem;
        background-color: transparent;
        color: var(--white);
        width: 100%;
        resize: none;

        &:focus{
            border-bottom: 2px solid var(--white);
        }

        &::placeholder{
            color: var(--white);
            opacity: 0.5;
        }
    }

    button{
        place-self: center;
    }

    .input-container{
        position: relative;
    }

    .error{
        position: absolute;
        left: 0.75rem;
        bottom : -1.75rem;
        letter-spacing: 2.5px;
        font-size: 12px;
        line-height: 1.5rem;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img{
            margin-right: 0.5rem;
        }
    }

    @media screen and (min-width: 768px){
        button{
            align-self: center;
            justify-self: flex-end;
        }
    }


    @media screen and (min-width: 1440px){
        max-width: 23.75rem;
    }
`

export default function ContactForm() {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactFormValidation}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                    alert('Message sent successfully. Thank you !')
                    setSubmitting(false)
                    resetForm({values: ''})
                }, 400)
            }}>
                <StyledForm>
                    <TextInput 
                        name='name'
                        type='text'
                        placeholder='Name' />
                    <TextInput
                        name='email'
                        type='email'
                        placeholder='Email Address' />
                    <TextInput
                        name='phone'
                        type='text'
                        placeholder='Phone' />
                    <TextAreaInput
                        name='message'
                        className='form-textarea'
                        rows='8'
                        placeholder='Your message' />
                    <WhiteBtn type='submit'>submit</WhiteBtn>
                </StyledForm>
        </Formik>
    )
}
