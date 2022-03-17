import React from 'react';
import { reduxForm } from "redux-form";
import InputField from "components/InputField/InputField";
import Button from 'components/Button/Button';
import { resetPasswordAction } from "services/password/password.action";
import Styled from "containers/ResetPassword/styled/StyledResetPassword";

const ResetPasswordForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} >

            <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
            />
            <InputField
                name="passwordConfirmation"
                placeholder="Confirm password"
                label="Confirm password"
                type="password"
            />
            <Styled.Buttons>
                <Button boxshadow uiType='login' htmlType="submit" >Save</Button>
            </Styled.Buttons>
        </form>
    );
};

export default reduxForm({
    form: "resetPassword",
    onSubmit: (values, dispatch, { code }) => dispatch(resetPasswordAction({ ...values, code }))
})(ResetPasswordForm);