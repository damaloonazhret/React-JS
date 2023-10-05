import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    // debugger
    const state = props.store.getState();
    console.log(state)

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        // const text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(text));
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        messages={state.profilePage.messages}
        newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;