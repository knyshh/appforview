import React from 'react';

import ModalWrapper from "hoc/withModal";
import {MODALS_IDS} from "constants/common";
import UpdatePasswordForm from "components/UpdatePassword/UpdatePassword.Form";

const UpdatePasswordModal = () => {
    return (
        <ModalWrapper
            size="small"
            title="Update password"
            modalId={MODALS_IDS.UPDATE_PASSWORD}
            component={UpdatePasswordForm}
        />
    );
};

export default UpdatePasswordModal;