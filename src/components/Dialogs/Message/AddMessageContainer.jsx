import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";


const AddMessageContainer = (props) => {
    const state = props.store.getState().dialogsPage;
    const newMessage = props.store.getState().dialogsPage.newMessageText;

// debugger
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <AddMessage
            updateNewMessageTextActionCreator={onMessageChange}
            sendMessage={addMessage}
            dialogsPage={state}
            newMessage={newMessage}/>
    )
}

export default AddMessageContainer;