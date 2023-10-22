import React from "react";
import Message from "./Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessage'} validate={[maxLength100]} placeholder={'Enter your message'}/>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(addMessageForm)

const AddMessage = (props) => {
    let messages = props.dialogsPage.messages;
    let messagesElements = messages.map(message => <Message message={message.message} key={message.id}/>);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessage);
    }

    return (
        <div>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default AddMessage;