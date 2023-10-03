import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;
    return (
        <div className={s.dialogs__item}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    let message = props.message;
    return (
        <div className={s.dialogs__message}>{message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Onfire'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Kosmodrom'},
        {id: 5, name: 'Duyshiy'},
        {id: 5, name: 'Severniy'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'John'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yooo'},
        {id: 5, message: 'Yoooooo'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;