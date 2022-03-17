import React from 'react';
import {MODALS_IDS} from "constants/common";
import moment from "moment";
import ModalWrapper from "hoc/withModal";

import Form from './DoctorAvailabilityEdit.Form';

const DoctorAvailabilityEditModal = ({ availability }) => {
    return (
        <ModalWrapper
            size='small'
            title='Edit doctor availability'
            modalId={MODALS_IDS.DOCTOR_AVAILABILITY_EDIT}
            component={Form}
            availability={availability}
            initialValues={{
                to: moment(availability?.to).format('HH:mm'),
                from: moment(availability?.from).format('HH:mm'),
            }}
        />
    );
};

export default DoctorAvailabilityEditModal;