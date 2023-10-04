import React from "react";

export const newMessageElement = React.createRef();

export const addMessage = () => {
    const message = newMessageElement.current.value;
    console.log(message)
}

const AddMessage = () => {
    return (
        <div>
            <textarea ref={newMessageElement} cols="20" rows="3"></textarea>
            <div>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    )
}

export default AddMessage;