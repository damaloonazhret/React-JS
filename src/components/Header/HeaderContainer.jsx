import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(r => {
                if (r.data.resultCode === 0) {
                    let {id, login, email} = r.data.data
                    this.props.setAuthUserData(id, email,login)
                }
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