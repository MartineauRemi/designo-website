import React from 'react'
import { Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { WhiteBtn } from "../../components/Buttons"
import errorIcon from "../../assets/contact/desktop/icon-error.svg"


const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)

    const [field, meta] = useField(props);
    return (
      <>
        <div className="input-container">
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error
                ? (
                    <div className="error">
                        <img src={errorIcon} alt="" width="20px" height="20px"/>
                        {meta.error}
                    </div>)
                : null}
        </div>
      </>
    )
  }

  const TextAreaInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
      <>
        <div className="input-container">
            <textarea className="textarea-input" {...field} {...props} />
            {meta.touched && meta.error
                ? (
                    <div className="error">
                        <img src={errorIcon} alt="" width="20px" height="20px"/>
                        {meta.error}
                    </div>)
                : null}
        </div>
      </>
    )
  }

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
    
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: ""
            }}
            validationSchema={Yup.object({
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
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
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
