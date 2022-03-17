import React from 'react';

import { useSelector } from "react-redux";

import {MODALS_IDS} from "constants/common";
import ModalWrapper from "hoc/withModal";
import AvailabilityForm from './OnlineClinic.AvailabilityForm'
import moment from "moment";
import {getFilersSelector} from "services/filters/filters.selector";

const AvailabilityModal = () => {
    const filter = useSelector(state => getFilersSelector(state, 'availability'));

    const mDate =  filter?.from_gte ? moment(filter?.from_gte) : moment(Date.now());
    const defaultDate = mDate.startOf('week');

    return (
        <ModalWrapper
            size='large'
            title='Add Doctor Availability'
            modalId={MODALS_IDS.ADD_AVAILABILITY_MODAL}
            component={AvailabilityForm}
            initialValues={{
                repeat: false,
                repeatUntil: null,
                to: null,
                from: null,
                doctor: null,
                speciality: null,
                date: defaultDate

            }}
        />
    )
};

export default AvailabilityModal;