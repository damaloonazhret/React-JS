import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapsStateToProps, {logout})(HeaderContainer);