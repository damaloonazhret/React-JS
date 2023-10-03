import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = props.postData;

    let postsElements = postData.map(post => <Post message={post.message} likes={post.like}/>)

    return (
        <div className={s.post__block}>
            <h3>My posts</h3>
            <div className={s.post__add}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;