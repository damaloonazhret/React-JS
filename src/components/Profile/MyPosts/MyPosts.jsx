import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    // debugger
    const messages = props.messages;

    const postsElements = messages.map(post => <Post message={post.message} like={post.like}/>)

    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <div className={s.post__add}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={ addPost }>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;