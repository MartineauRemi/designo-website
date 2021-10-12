import React from 'react'
import { useField } from 'formik'
import errorIcon from "../../../assets/contact/desktop/icon-error.svg"

export const TextInput = ({ label, ...props }) => {
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



export const TextAreaInput = ({ label, ...props }) => {

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
