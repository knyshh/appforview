import React from 'react';
import {reduxForm} from "redux-form";

import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import {forgotPasswordAction} from "services/password/password.action";
import Styled from './styled/StyledForgotPassword'

const ForgotPasswordForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} >

            <Styled.ForgotForm>
                    <InputField
                        name="email"
                        placeholder="Email"
                        label="Email"
                        type="email"
                    />
                <Styled.Buttons>
                        <Button width='150px' htmlType="submit" >Send</Button>
                        <Button uiType='close' htmlType="submit" >Close</Button>
                </Styled.Buttons>
            </Styled.ForgotForm>


        </form>
    );
};

export default reduxForm({
    form: "forgotPassword",
    destroyOnUnmount: true,
    onSubmit: (value, dispatch) => {
        dispatch(forgotPasswordAction(value))
    }
})(ForgotPasswordForm);