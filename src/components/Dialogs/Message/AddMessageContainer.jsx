import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";
import StoreContext from "../../../StoreContext";


const AddMessageContainer = () => {
// debugger
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;
                    const newMessage = store.getState().dialogsPage.newMessageText;
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                    return <AddMessage
                        updateNewMessageTextActionCreator={onMessageChange}
                        sendMessage={addMessage}
                        dialogsPage={state}
                        newMessage={newMessage}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default AddMessageContainer;