import React from 'react';
import { reduxForm } from "redux-form";
import moment from "moment";

import TimePickerField from "components/TimePickerField/TimePickerField";
import Button from "components/Button/Button";
import Styled from './styled'
import {editDoctorAvailability} from "services/doctorAvailabilities/doctorAvailabilities.action";

const DoctorAvailabilityEditForm = ({ handleSubmit, availability, setPopupStatus }) => {
    return (
        <form onSubmit={handleSubmit} >
            <Styled.InfoRow>
                <span>Speciality: <b>{availability.speciality.name}</b></span>
                <span>Doctor: <b>Dr.{availability.doctor.fullName}</b></span>
                <span>Date: <b>{moment(availability.from).format('DD MMMM YYYY')}</b></span>
            </Styled.InfoRow>
            <Styled.TimeRow>
                <TimePickerField name="from" label="From" />
                <TimePickerField name="to" label="To"/>
            </Styled.TimeRow>
            <Styled.ButtonRow>
                <Button htmlType="submit" >Save changes</Button>
                <Button uiType="close" onClick={setPopupStatus.bind(null, null)} >Cancel</Button>
            </Styled.ButtonRow>

        </form>
    );
};

export default reduxForm({
    form: 'doctorAvailabilityEditPopup',
    enableReinitialize: true,
    onSubmit: ({ from, to }, dispatch, { availability }) => {
            const date = moment(availability.from).format("YYYY-MM-DD");
            dispatch(editDoctorAvailability({
                to: moment(`${date}T${to}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                from: moment(`${date}T${from}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                id: availability.id
            }))
    },
    destroyOnUnmount: true,
})(DoctorAvailabilityEditForm);