import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import AddMessage from "./Message/AddMessage";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs;
    let messages = props.state.posts;

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>);
    let messagesElements = messages.map(message => <Message message={message.message}
                                                            messageOut={message.messageOut}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
                <AddMessage/>
            </div>
        </div>
    )
}

export default Dialogs;