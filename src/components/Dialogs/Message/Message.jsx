import s from '../Dialogs.module.scss'

const Message = (props) => {
    let message = props.message;
    let messageOut = props.messageOut;
    return (
        <div className={s.dialogs__message}>
            <div>{message}</div>
            <div>{messageOut}</div>
        </div>
    )
}

export default Message;