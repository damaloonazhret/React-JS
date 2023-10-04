import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postData = props.postData;

    const postsElements = postData.map(post => <Post message={post.message} like={post.like}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        debugger
        const text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <div className={s.post__add}>
                <div>
                    <textarea ref={newPostElement}></textarea>
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