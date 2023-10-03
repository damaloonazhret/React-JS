import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd" alt="img"/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;