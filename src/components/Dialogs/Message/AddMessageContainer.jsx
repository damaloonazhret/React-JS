import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
    // debugger
    return {
        newMessage: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage,
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

const AuthRedirectComponent = withAuthRedirect(AddMessage)

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default AddMessageContainer;