import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Andrey</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/3'>Andrey</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/4'>Andrey</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/5'>Andrey</NavLink>
                </div>
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__message}>Hi</div>
                <div className={s.dialogs__message}>How are you?</div>
                <div className={s.dialogs__message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;