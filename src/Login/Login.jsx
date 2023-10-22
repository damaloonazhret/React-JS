import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../components/FormsControls/FormsControls";
import {maxLengthCreator} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/authReducer";
import {Navigate} from "react-router-dom";
import s from '../components/FormsControls/FormsControls.module.scss'

const maxLength10 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [maxLength10], Input)}
            {createField('Password', 'password', [maxLength10], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);