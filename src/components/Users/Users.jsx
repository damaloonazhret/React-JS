import React from "react";
import s from "./Users.module.scss";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectPage}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.userPhoto}
                                         alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f2059e91-379b-4bab-82a6-ba98c8e84db1"
                                            }
                                        })
                                            .then(r => {
                                                if (r.data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f2059e91-379b-4bab-82a6-ba98c8e84db1"
                                            }
                                        })
                                            .then(r => {
                                                if (r.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
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
}

export default Users;
