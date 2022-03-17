import React from 'react';

import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import AddVisitForm from "./OnlineClinic.AddVisitForm";
import moment from "moment";

const AddVisitModal = ({ availability }) => {
    return (
        <ModalWrapper
            size='large'
            title='Book New Appointment'
            modalId={MODALS_IDS.ADD_VISIT_MODAL}
            component={AddVisitForm}
            availability={availability}
            initialValues={{
                date: moment(Date.now()).format('DD-MM-YYYY'),
                to: moment(availability?.from).add(15, 'minutes').format('HH:mm'),
                from: moment(availability?.from).format('HH:mm'),
                patient: null,
                servantSummery: null
            }}
        />
    )
};

export default AddVisitModal;