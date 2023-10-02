import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.nav__item} ${s.active}`}>
                <a href='google.com'>Profile</a>
            </div>
            <div className={s.nav__item}>
                <a href='google.com'>Messages</a>
            </div>
            <div className={s.nav__item}>
                <a href='google.com'>News</a>
            </div>
            <div className={s.nav__item}>
                <a href='google.com'>Music</a>
            </div>
            <div className={s.nav__item}>
                <a href='google.com'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;