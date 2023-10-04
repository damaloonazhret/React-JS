import Friend from "./Friend/Friend";
import s from '../Friends.module.scss'

const FriendsNavbar = (props) => {
    const state = props.state;
    return (
        <div className={s.friends__container}>
            <div>Friends</div>
            <div className={s.friends}>
                <Friend state={state[0]}/>
                <Friend state={state[1]}/>
                <Friend state={state[2]}/>
            </div>
        </div>
    )
}

export default FriendsNavbar;