import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    // debugger
    // const state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (text) => {
                        const action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        messages={state.profilePage.messages}
                        newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;