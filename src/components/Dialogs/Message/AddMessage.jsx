import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/state";


const AddMessage = (props) => {
// debugger
    const newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div>
            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} cols="20"
                      rows="3"></textarea>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default AddMessage;