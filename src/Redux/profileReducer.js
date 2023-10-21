import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE-NEW-POST-TEXT';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialStateD = {
    messages: [
        {id: 1, message: 'Hia', like: 18},
        {id: 2, message: 'How are you?', like: 11},
        {id: 3, message: 'John', like: 12},
        {id: 4, message: 'Yo', like: 13},
        {id: 5, message: 'Yooo', like: 14},
        {id: 5, message: 'Yoooooo', like: 12},
    ],
    // newPostText: 'Hello World',
    profile: null,
    status: '',
}

const profileReducer = (state = initialStateD, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                // newPostText: '',
                messages: [...state.messages,
                    {id: 6, message: action.newPostText, like: 3,}
                ]
            }
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText,
        //     }
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state, messages: state.messages.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;