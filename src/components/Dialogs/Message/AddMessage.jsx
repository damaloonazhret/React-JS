import React from "react";

const AddMessage = (props) => {
// debugger
    const newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
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