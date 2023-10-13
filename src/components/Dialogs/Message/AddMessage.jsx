import React from "react";
import Message from "./Message";
import {Navigate} from "react-router-dom";

const AddMessage = (props) => {
    const newMessageElement = React.createRef();
    // debugger
    let messages = props.dialogsPage.messages;
    let messagesElements = messages.map(message => <Message message={message.message} key={message.id}/>);
    const addMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(text);
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div>
            {messagesElements}
            <textarea
                onChange={onMessageChange}
                ref={newMessageElement}
                value={props.newMessage}
                cols="20"
                rows="3">
            </textarea>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default AddMessage;