const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 6,
                message: state.newPostText,
                like: 3,
            };
            state.messages.push(newPost);
            state.newPostText = '';
            // this._callSubscriber(this._state);
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break
        default:
            return state;
    }

}

export default profileReducer;