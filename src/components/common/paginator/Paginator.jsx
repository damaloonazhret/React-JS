import s from "./Paginator.module.scss";
import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.pages}>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectPage}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;