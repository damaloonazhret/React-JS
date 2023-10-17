import React from "react";
import Message from "./Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
            <div><button>Send</button></div>
            {/*<textarea*/}
            {/*    onChange={onMessageChange}*/}
            {/*    ref={newMessageElement}*/}
            {/*    value={props.newMessage}*/}
            {/*    cols="20"*/}
            {/*    rows="3">*/}
            {/*</textarea>*/}
            {/*<div>*/}
            {/*    <button>Add message</button>*/}
            {/*</div>*/}
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(addMessageForm)

const AddMessage = (props) => {
    const newMessageElement = React.createRef();
    // debugger
    let messages = props.dialogsPage.messages;
    let messagesElements = messages.map(message => <Message message={message.message} key={message.id}/>);
    // const addMessage = () => {
    //     props.sendMessage();
    // }

    // const onMessageChange = () => {
    //     const text = newMessageElement.current.value;
    //     props.updateNewMessageTextActionCreator(text);
    // }

    const addNewMessage = (values) => {
        // debugger
        props.sendMessage(values.newMessage);
        // alert(values.newMessageBody)
    }

    return (
        <div>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            {/*<div>*/}
            {/*    <textarea*/}
            {/*        onChange={onMessageChange}*/}
            {/*        ref={newMessageElement}*/}
            {/*        value={props.newMessage}*/}
            {/*        cols="20"*/}
            {/*        rows="3">*/}
            {/*</textarea>*/}
            {/*    <div>*/}
            {/*        <button onClick={addMessage}>Add message</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default AddMessage;