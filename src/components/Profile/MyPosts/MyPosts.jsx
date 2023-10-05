import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    // debugger
    const messages = props.messages;

    const postsElements = messages.map(post => <Post message={post.message} like={post.like}/>)

    const newPostElement = React.createRef();
    const onAddPost = () => {
        // props.dispatch(addPostActionCreator());
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(text));
        props.updateNewPostText(text);
    }
    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <div className={s.post__add}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={ onAddPost }>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;