import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts messages={props.state.messages}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;