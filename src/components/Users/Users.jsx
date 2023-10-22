import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => {
                return (
                    <User user={u} followingInProgress={props.followingInProgress}
                          key={u.id} unFollow={props.unFollow} follow={props.follow}/>
                );
            })
        }
    </div>
}

export default Users;
