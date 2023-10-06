import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import AddMessage from "./Message/AddMessage";
import AddMessageContainer from "./Message/AddMessageContainer";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    let dialogs = state.dialogs;

    // let messagesOut = state.messagesOut;

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} src={dialog.src}/>);

    // let messagesOutElements = messagesOut.map(message => <Message message={message.messageOut}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                <div>
                    {/*<AddMessageContainer store={props.store}/>*/}
                    <AddMessageContainer/>
                </div>
                {/*<div>*/}
                {/*    {messagesOutElements}*/}
                {/*    <AddMessage/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Dialogs;