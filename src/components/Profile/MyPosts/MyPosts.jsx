import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.post}>
                    <Post message='Hi, how are you?' like='4'/>
                    <Post message={`It's my first post`} like='1'/>
                    <Post message='La la la?' like='2'/>
                    <Post message='Bla bla bla?' like='3'/>
                </div>
            </div>
    )
}

export default MyPosts;