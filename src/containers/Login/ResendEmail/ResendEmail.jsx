import React from 'react';
import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import Form from './ResendEmail.Form';

const ResendEmail = () => {
    return (
        <ModalWrapper
            title="Email verification needed"
            modalId={MODALS_IDS.RESEND_EMAIL}
            component={Form}
            size="small"
        />
    );
};

export default ResendEmail;