import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2023-01/1673594987_3-24.jpg" alt=""/>
            {props.message}
            <div>
                <span>like count {props.like}</span>
            </div>
        </div>
    )
}

export default Post;