import s from './Dialogs.module.scss'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialogs__item}>
                    Andrey
                </div>
                <div className={s.dialogs__item}>
                    Andrey
                </div>
                <div className={s.dialogs__item}>
                    Andrey
                </div>
                <div className={s.dialogs__item}>
                    Andrey
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