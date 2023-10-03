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

    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Onfire'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Kosmodrom'},
        {id: 5, name: 'Duyshiy'},
        {id: 5, name: 'Duyshiy'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'John'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yooo'},
        {id: 5, message: 'Yoooooo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogItem name='Andrey' id='1'/>
                <DialogItem name='Onfire' id='2'/>
                <DialogItem name='John' id='3'/>
                <DialogItem name='Kosmodrom' id='4'/>
                <DialogItem name='Duyshiy' id='5'/>
            </div>
            <div className={s.dialogs__messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
                <Message message='Yoo'/>
                <Message message='Yooo'/>
            </div>
        </div>
    )
}

export default Dialogs;