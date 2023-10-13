import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.authMe()
            .then(data => {
                let {id, login, email} = data
                this.props.setAuthUserData(id, email,login)
            })
    }

    render () {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect (mapsStateToProps, {setAuthUserData})(HeaderContainer);