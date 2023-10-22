import s from './FormsControls.module.scss'
import {Field} from "redux-form";
import React from "react";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = error && touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => { // деструктуризация rest оператор
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => { // деструктуризация rest оператор
    const {meta, child, ...restProps} = props
    return <FormControl {...props}>
        <input {...restProps} />
    </FormControl>
}

export const createField = (placeholder, name, validators, components, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={components}
               validate={validators}
               {...props}
        /> {text}
    </div>
)
