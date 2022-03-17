import React from 'react';
import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import ForgotPasswordForm from './ForgotPassword.Form';

const ForgotPasswordModal = () => {
    return (
            <ModalWrapper
                size="small"
                title="Forgot password"
                modalId={MODALS_IDS.FORGOT_PASSWORD}
                component={ForgotPasswordForm}
            />
    );
};

export default ForgotPasswordModal;