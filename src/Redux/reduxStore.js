import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarFriendsReducer from "./navbarFriendsReducer";
import usersReduces from "./UsersReduces";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarFriends: navbarFriendsReducer,
    usersPage: usersReduces,
});

let store = createStore(reducers);

window.store = store;

export default store;