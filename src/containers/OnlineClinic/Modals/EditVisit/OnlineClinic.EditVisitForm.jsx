import React, {useEffect, useState} from 'react';
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import debounce from 'lodash/debounce';
import { Select } from 'antd'
import moment from "moment";

import { patientsSelector } from "services/patients/patients.selector";
import { searchPatientsAction } from "services/patients/patients.action";
import TimePickerField from "components/TimePickerField/TimePickerField";
import { formatVisitDate } from 'services/visit/visit.utils';
import SelectField from "components/SelectField/SelectField";
import Button from 'components/Button/Button'
import { setModalStatusAction } from "services/modals/modals.action";
import {
    editDoctorAvailabilitiesVisitAction,
    removeDoctorAvailabilitiesVisitAction
} from "services/doctorAvailabilities/doctorAvailabilities.action";
import Styled from '../styled/StyledAppoitmentsModal'
import {Link} from "react-router-dom";
import {urlLocations} from "routes/urlLocations";

const { Option } = Select;

const EditVisitForm = ({
    visit,
    availability,
    handleSubmit,
    patients,
    searchPatients,
    setModalStatus,
    removeDoctorAvailabilitiesVisit
}) => {
    const [ searchingPhrase, setSearchingPhrase ] = useState('');

    useEffect(() => {
        searchingPhrase.length >= 2 && searchPatients({ _q: searchingPhrase })
    }, [searchingPhrase]);

    const debouncedHandleChange = debounce(
        (v) => setSearchingPhrase(v), 500
    );

    const handleSearch = (v) => {
        debouncedHandleChange(v);
    };

    return (
        <Styled.AddVisitBlock>
            <form onSubmit={handleSubmit}>
                <Styled.Row>
                    <Styled.AppoitmentRow>
                            <Styled.AppoitmentCol>
                                Speciality: <span>{availability.speciality.name}</span>
                            </Styled.AppoitmentCol>
                            <Styled.AppoitmentCol>
                                Doctor: <span>{availability.doctor.fullName}</span>
                            </Styled.AppoitmentCol>
                            <Styled.AppoitmentCol>
                                Date: <span>{formatVisitDate(availability.from)}</span>
                            </Styled.AppoitmentCol>
                        </Styled.AppoitmentRow>
                </Styled.Row>
                <Styled.Row>
                    <Styled.Col100>
                        <SelectField
                            getPopupContainer={trigger => trigger.parentNode}
                            name='patient'
                            label='Patient'
                            placeholder='Patient'
                            style={{ width: '100%' }}
                            showSearch
                            onSearch={handleSearch}
                            notFoundContent={null}
                            filterOption={false}
                        >
                            { patients.map(patient => (
                                <Option key={patient.id} value={patient.id} children={patient.fullName} />
                            ))}
                        </SelectField>
                    </Styled.Col100>
                </Styled.Row>

                <Styled.Row>
                    <Styled.Col50>
                        <TimePickerField
                            getPopupContainer={trigger => trigger.parentNode}
                            name="from"
                            label="From"
                            placeholder="From"
                        />
                    </Styled.Col50>
                    <Styled.Col50>
                        <TimePickerField
                            name="to"
                            label="To"
                            placeholder="To"
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                    </Styled.Col50>
                </Styled.Row>

                <Styled.ButtonsCol aligment='between'>
                    <div>
                        <Button width='220px' htmlType="submit" >Save Changes</Button>
                        <Link
                            to={`${urlLocations.visit}/${visit.id}`}
                            component={Button}
                            uiType='close'
                        >
                            View visit
                        </Link>
                    </div>

                    <Button
                        uiType='cancel'
                        onClick={removeDoctorAvailabilitiesVisit.bind(null, visit.id)}
                    >
                        Cancel Appointment
                    </Button>

                </Styled.ButtonsCol>
            </form>
        </Styled.AddVisitBlock>
    )
};

export default compose(
    connect(
        createStructuredSelector(
            {
                patients: patientsSelector
            }
        ),
        {
            searchPatients: searchPatientsAction,
            setModalStatus: setModalStatusAction,
            removeDoctorAvailabilitiesVisit: removeDoctorAvailabilitiesVisitAction
        }
    ),
    reduxForm({
        form: 'editVisit',
        onSubmit: ({ from, to, patient, servantSummery }, dispatch, { visit, availability }) => dispatch(editDoctorAvailabilitiesVisitAction({
            to: `${moment(visit.to).format('DD-MM-YYYY')}T${to}`,
            from: `${moment(visit.from).format('DD-MM-YYYY')}T${from}`,
            doctor: visit.id,
            id: visit.id,
            patient: visit.patient,
        })),
        enableReinitialize: true,
        destroyOnUnmount: true,
        initialValues: {
            date: moment(Date.now()).format('DD-MM-YYYY'),
            to: moment(Date.now()).format('HH:mm'),
            from: moment(Date.now()).format('HH:mm'),
        },
    })
)(EditVisitForm);