import s from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://klike.net/uploads/posts/2022-12/1670484104_3-33.jpg" alt="img"/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.profile__post}>
                    <div className={s.profile__post__item}>
                        post 1
                    </div>
                    <div className={s.profile__post__item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;