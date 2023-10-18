import s from './FormsControls.module.scss'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => { // деструктуризация rest оператор
    const {input,meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => { // деструктуризация rest оператор
    const {input,meta, child, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}