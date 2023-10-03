import s from '../Dialogs.module.scss'

const Message = (props) => {
    let message = props.message;
    return (
        <div className={s.dialogs__message}>{message}</div>
    )
}

export default Message;