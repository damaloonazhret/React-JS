import s from './Post.module.scss'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2023-01/1673594987_3-24.jpg" alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;