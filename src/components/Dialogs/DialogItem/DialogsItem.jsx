import s from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;
    let image = props.src;
    return (
        <div className={s.dialogs__item}>
            <img src={image} alt="asd"/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;