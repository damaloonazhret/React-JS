import React from "react";
import {addMessageActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage))
        },
    }
}

const AuthRedirectComponent = withAuthRedirect(AddMessage)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(AuthRedirectComponent)
