import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    return headerAPI.authMe()
        .then(r => {
            if (r.data.resultCode === 0) {
                let {id, login, email} = r.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.loginMe(email, password, rememberMe)
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = r.data.messages.length > 0 ? r.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
}

export const logout = () => (dispatch) => {
    headerAPI.logout()
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;