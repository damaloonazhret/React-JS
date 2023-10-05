const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialStateD = {
    messages: [
        {id: 1, message: 'Hia', like: 18},
        {id: 2, message: 'How are you?', like: 11},
        {id: 3, message: 'John', like: 12},
        {id: 4, message: 'Yo', like: 13},
        {id: 5, message: 'Yooo', like: 14},
        {id: 5, message: 'Yoooooo', like: 12},
    ],
    newPostText: 'Hello World',
}

const profileReducer = (state = initialStateD, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 6,
                message: state.newPostText,
                like: 3,
            };
            state.messages.push(newPost);
            state.newPostText = '';
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;