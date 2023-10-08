const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE-NEW-POST-TEXT';

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
    profile: null,
}

const profileReducer = (state = initialStateD, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                messages: [...state.messages,
                    {id: 6, message: state.newPostText, like: 3,}
                ]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;