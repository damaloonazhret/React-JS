import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', like: 18},
        {id: 2, message: `It's my first post`, like: 11},
        {id: 3, message: 'La la la?', like: 12},
        {id: 4, message: 'Bla bla bla?', like: 13},
        {id: 5, message: 'Yooouuu', like: 14},
        {id: 5, message: 'Yoooooouuuuu', like: 12},
    ]

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