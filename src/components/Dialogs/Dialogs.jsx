import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import AddMessage from "./Message/AddMessage";
import AddMessageContainer from "./Message/AddMessageContainer";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    let dialogs = state.dialogs;
    let messages = state.messages;
    let messagesOut = state.messagesOut;

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>);
    let messagesElements = messages.map(message => <Message message={message.message}/>);
    let messagesOutElements = messagesOut.map(message => <Message message={message.messageOut}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                <div>
                    {messagesElements}
                    <AddMessageContainer store={props.store}/>
                </div>
                <div>
                    {messagesOutElements}
                    <AddMessage/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;