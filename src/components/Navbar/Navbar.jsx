import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import FriendsNavbar from "../Friends/FriendsNavbar/FriendsNavbar";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.nav__item}`}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.notActive }>Profile</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.notActive }>Messages</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.notActive }>News</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.notActive }>Music</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.notActive }>Settings</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.notActive }>Users</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to='/friends' className = { navData => navData.isActive ? s.active : s.notActive }>
                    <FriendsNavbar state={props.state.bestFriends}/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;