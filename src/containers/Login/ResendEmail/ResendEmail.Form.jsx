import React from 'react';
import { reduxForm } from "redux-form";

import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import Styled from './styled';
import {resendEmailAction} from "services/resendEmail/resendEmail.action";
import {requiredFieldsValidate} from "utils/validation";


const ResendEmailForm = ({ handleSubmit, setPopupStatus }) => {
    return (
        <form onSubmit={handleSubmit} >
            <Styled.Description>
                <p>This email account is not verified. You need to verify your email address before start using the portal.</p>
                <p>We have sent you a verification email after you have registered, please check your inbox and click "Verify My Email" button.</p>
                <p>If you cannot find that email, please check the Junk folder.</p>
                <p>You can resend the verification email by writing your email below.</p>
            </Styled.Description>
            <InputField name="email" label="email" placeholder="email" />
            <Styled.ButtonRow>
                <Button htmlType="submit" >Resend</Button>
                <Button onClick={setPopupStatus.bind(null, null)} uiType="close" >Close</Button>
            </Styled.ButtonRow>
        </form>
    );
};

export default reduxForm({
    form: "resendEmail",
    onSubmit: (value, dispatch) => dispatch(resendEmailAction(value)),
    initialValues: { email: "" },
    validate: v => requiredFieldsValidate(v, ['email'])
})(ResendEmailForm);