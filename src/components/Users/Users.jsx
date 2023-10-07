import s from './Users.module.scss'
import axios from "axios";
import userPhoto from '../../assets/img/user.png'
import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                     alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                                <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                            </div>
                        );
                    })
                }
            </div>
        );

    }
}

export default Users;
