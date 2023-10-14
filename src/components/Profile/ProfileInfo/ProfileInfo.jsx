import s from './ProfileInfo.module.scss'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const profile = props.profile;
    const youTube = profile.contacts.youtube;
    const github = profile.contacts.github;
    const mainLink = profile.contacts.mainLink;
    const twitter = profile.contacts.twitter;
    const vk = profile.contacts.vk;
    const website = profile.contacts.website;

    return (
        <div>
            <div>
                <img src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd" alt="img"/>
            </div>
            <div className={s.description__block}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatus status={'Hello my friends'}/>
                <h1>My name is {profile.fullName}</h1>
                <div><span>About me: </span> {profile.aboutMe}</div>
                <div><span>Website: </span> {website ? website : 'Сайтик отсутствует'}</div>
                <div><span>Vk: </span> {vk ? vk : 'У меня нет контактика'}</div>
                <div><span>Twitter: </span> {twitter ? twitter : 'Твиттер отсутствует'}</div>
                <div><span>Youtube: </span> {youTube ? youTube : 'Нету у меня ютуба!'}</div>
                <div><span>Github: </span> {github ? github : 'Нет гита к сожалению'}</div>
                <div><span>MainLink: </span> {mainLink ? mainLink : 'Главной странички то у меня и нет как раз'}</div>
                <div>Вы спросите, ищу ли я работу? ответ: конечно
                    же {profile.lookingForAJob ? 'да!' : 'увы нет))'}</div>
                {profile.lookingForAJob ? (
                    <div>{profile.lookingForAJobDescription}</div>
                ) : null}
            </div>
        </div>
    )
}

export default ProfileInfo;