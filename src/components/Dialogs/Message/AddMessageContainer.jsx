import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {updateNewPostTextActionCreator} from "../../../Redux/profileReducer";


// const AddMessageContainer = () => {
// // debugger
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().dialogsPage;
//                     const newMessage = store.getState().dialogsPage.newMessageText;
//                     const addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//                     const onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }
//                     return <AddMessage
//                         updateNewMessageTextActionCreator={onMessageChange}
//                         sendMessage={addMessage}
//                         dialogsPage={state}
//                         newMessage={newMessage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    // debugger
    return {
        newMessage: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage
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