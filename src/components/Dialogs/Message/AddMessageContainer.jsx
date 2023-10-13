import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    // debugger
    return {
        newMessage: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextActionCreator: (text) => {
            const action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;