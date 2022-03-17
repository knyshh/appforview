import React from 'react';
import {reduxForm} from "redux-form";

import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import { updatePasswordAction } from "services/password/password.action";

const UpdatePasswordForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} >
            <InputField
                name="currentPassword"
                placeholder="Current password"
                label="Current password"
                type="password"
            />
            <InputField
                name="newPassword"
                placeholder="New password"
                label="New password"
                type="password"
            />
            <InputField
                name="confirmNewPassword"
                placeholder="Confirm new password"
                label="Confirm new password"
                type="password"
            />
            <Button htmlType="submit" >
                Update password
            </Button>
        </form>
    );
};

export default reduxForm({
    form: "passwordUpdate",
    destroyOnUnmount: true,
    onSubmit: (value, dispatch) => {
        dispatch(updatePasswordAction(value))
    }
})(UpdatePasswordForm);