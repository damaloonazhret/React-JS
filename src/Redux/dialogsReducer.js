const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
        debugger
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            // this._callSubscriber(this._state);
            break
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break
        // this._callSubscriber(this._state);
        default:
            return state;
    }
}

export default dialogsReducer;