import React from 'react';
import moment from "moment";

import ModalWrapper from "../../../../hoc/withModal";
import { MODALS_IDS } from "../../../../constants/common";
import EditVisitForm from './OnlineClinic.EditVisitForm';

const EditVisitModal = ({ visit , availability }) => {

    return (
        <ModalWrapper
            title="Edit Appointment"
            size="large"
            modalId={MODALS_IDS.EDIT_VISIT_MODAL}
            component={EditVisitForm}
            visit={visit}
            availability={availability}
            initialValues={{
                from : moment(visit?.from).format('HH-mm-ss'),
                to: moment(visit?.to).format('HH-mm-ss'),
                patient: visit?.patient?.fullName
            }}
        />
    )
};

export default EditVisitModal;