import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarFriendsReducer from "./navbarFriendsReducer";
import usersReduces from "./UsersReduces";
import authReducer from "./authReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarFriends: navbarFriendsReducer,
    usersPage: usersReduces,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;