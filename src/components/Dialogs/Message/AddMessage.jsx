import React from "react";

const AddMessage = (props) => {
debugger
    const newMessageElement = React.createRef();

    const addMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(text);
    }

    return (
        <div>
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