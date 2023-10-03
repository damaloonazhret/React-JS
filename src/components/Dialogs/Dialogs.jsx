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