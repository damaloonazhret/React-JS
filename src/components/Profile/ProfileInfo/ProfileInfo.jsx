import s from './ProfileInfo.module.scss'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd" alt="img"/>
            </div>
            <div className={s.description__block}>
                <img src={props.profile.photos.large} alt=""/>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;