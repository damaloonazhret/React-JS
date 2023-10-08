import s from "../../Users/Users.module.scss";
import preloader from "../../../assets/loading/loading.svg";
import React from "react";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'transparent'}}>
            <img className={s.preloader} src={preloader}/>
        </div>
    )

}

export default Preloader;