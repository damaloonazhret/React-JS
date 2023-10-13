import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogsItem";
import React from "react";
import AddMessageContainer from "./Message/AddMessageContainer";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    let dialogs = state.dialogs;
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} src={dialog.src}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                <div>
                    <AddMessageContainer/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;