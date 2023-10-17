import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.post__add}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
                {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
            </div>
            {/*<button onClick={onAddPost}>Add post</button>*/}
            <button>Add post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {
    // debugger
    const messages = props.messages;

    const postsElements = messages.map(post => <Post message={post.message} like={post.like}/>)

    const newPostElement = React.createRef();
    const onAddPost = (values) => {
        // props.dispatch(addPostActionCreator());
        props.addPost(values.newPostText);
    }

    // const onPostChange = () => {
    //     const text = newPostElement.current.value;
    //     // props.dispatch(updateNewPostTextActionCreator(text));
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;