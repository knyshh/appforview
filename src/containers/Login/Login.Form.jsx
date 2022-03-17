import React from "react";
import { reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { compose } from "redux";

import { loginAction } from "services/login/login.action";
import InputField from 'components/InputField/InputField';
import Button from 'components/Button/Button';
import LoginFormCol from './styled/StyledLoginForm.js';
import StyledForgot from "./styled/StyledForgot.js";
import ForgotPassword from 'components/ForgotPassword/ForgotPassword';
import { setModalStatusAction } from "services/modals/modals.action";
import {MODALS_IDS} from "constants/common";

const LoginForm = ({ handleSubmit, setModalStatus }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField
                    bordered
                    name="identifier"
                    label="User Name *"
                    placeholder="Enter User Name"
                />
                <InputField
                    bordered
                    name="password"
                    label="Password *"
                    type="password"
                    placeholder="Enter Password"
                />
                <LoginFormCol>
                    <div>
                        <Button boxshadow uiType='login' size="small" htmlType="submit" >Login</Button>
                    </div>

                    <div>
                        <StyledForgot onClick={setModalStatus.bind(null, MODALS_IDS.FORGOT_PASSWORD)} >
                            Forgot Password ?
                        </StyledForgot>
                    </div>
                </LoginFormCol>
            </form>
            <ForgotPassword/>
        </>
    )
};

export default compose(
    connect(null, { setModalStatus: setModalStatusAction }),
    reduxForm({
        form: "loginForm",
        onSubmit: (value, dispatch) => dispatch(loginAction({...value}))
    })
)(LoginForm)