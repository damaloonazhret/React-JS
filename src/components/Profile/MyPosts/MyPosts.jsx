import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.post__add}>
            <div>
                <Field component={Textarea} name={'newPostText'} validate={[maxLength10]} placeholder={'Post message'}/>
                {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
            </div>
            {/*<button onClick={onAddPost}>Add post</button>*/}
            <button>Add post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo((props) => {
    console.log('Render')
    const messages = props.messages;

    const postsElements = messages.map(post => <Post message={post.message} like={post.like}/>)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;