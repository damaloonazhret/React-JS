import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts messages={props.state.messages}*/}
            {/*         newPostText={props.state.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;