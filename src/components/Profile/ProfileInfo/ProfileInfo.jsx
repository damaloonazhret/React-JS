import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd" alt="img"/>
            </div>
            <div className={s.description__block}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;