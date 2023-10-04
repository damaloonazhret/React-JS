import s from './Friend.module.scss'

const Friend = (props) => {
    const state = props.state;
    return (
        <div className={s.friend}>
            <img src={state.src} alt="a"/>
            <span>{state.name}</span>
        </div>
    )
}

export default Friend;