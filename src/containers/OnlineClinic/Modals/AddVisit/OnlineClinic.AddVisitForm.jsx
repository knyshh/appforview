import React, {useEffect, useState} from 'react';
import { reduxForm, change, untouch } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from "reselect";
import debounce from 'lodash/debounce';
import { Select } from 'antd'
import moment from "moment";

import { patientsSelector } from "services/patients/patients.selector";
import { searchPatientsAction } from "services/patients/patients.action";
import TimePickerField from "components/TimePickerField/TimePickerField";
import { formatVisitDate } from 'services/visit/visit.utils';
import SelectField from "components/SelectField/SelectField";
import TextAreaField from "components/TextAreaField/TextAreaField";
import Button from 'components/Button/Button'
import { setModalStatusAction } from "services/modals/modals.action";
import {addDoctorAvailabilitiesVisitAction} from "services/doctorAvailabilities/doctorAvailabilities.action";
import Styled from '../styled/StyledAppoitmentsModal'
import {requiredFieldsValidate} from "utils/validation";
import {disabledHours} from "../../WeeklyCalendar/WeeklyCalendar.utils";

const { Option } = Select;

const AddVisitForm = ({ availability, handleSubmit, patients, searchPatients, setModalStatus }) => {
    const [ searchingPhrase, setSearchingPhrase ] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        searchingPhrase.length >= 2 && searchPatients({ _q: searchingPhrase })
    }, [searchingPhrase]);

    const debouncedHandleChange = debounce(
        (v) => setSearchingPhrase(v), 500
    );

    const onFromDateChange = (from) => {
        const newDate = moment(from).add(15, 'minutes').format('HH:mm');
        dispatch(change("addVisit", "to", newDate));
        dispatch(untouch("addVisit", "to"));
    };


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
                                    <Option
                                        key={patient.id}
                                        value={patient.id}
                                        children={patient.fullName}
                                    />
                                ))}
                            </SelectField>
                        </Styled.Col100>
                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Col50>
                            <TimePickerField
                                name="from"
                                label="From"
                                placeholder="From"
                                onSelect={onFromDateChange}
                                disabledHours={() => disabledHours(availability.from, availability.to)}
                            />
                        </Styled.Col50>

                        <Styled.Col50>
                            <TimePickerField
                                name="to"
                                label="To"
                                placeholder="To"
                                disabledHours={() => disabledHours(availability.from, availability.to)}
                            />
                        </Styled.Col50>
                    </Styled.Row>
                    <Styled.Row>
                        <Styled.Col100>
                            <TextAreaField
                                label="Assistant Comments"
                                placeholder="Assistant Comments"
                                name="servantSummery"
                            />
                        </Styled.Col100>
                    </Styled.Row>

                    <Styled.ButtonsCol>
                        <Button width='220px' htmlType="submit" >Book Now</Button>
                        <Button
                            uiType='close'
                            onClick={setModalStatus.bind(null, null)}
                            htmlType="submit"
                        >
                            Close
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
            setModalStatus: setModalStatusAction
        }
    ),
    reduxForm({
        form: 'addVisit',
        validate: value => requiredFieldsValidate(value, ['patient', 'servantSummery']),
        onSubmit: ({ from, to, patient, servantSummery }, dispatch, { availability }) => {
            dispatch(addDoctorAvailabilitiesVisitAction({
                to: moment(`${moment(availability.to).format('YYYY-MM-DD')}T${to}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                from: moment(`${moment(availability.from).format('YYYY-MM-DD')}T${from}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                doctor: availability.doctor.id,
                id: availability.id,
                patient,
                servantSummery,
            }))
        },
        enableReinitialize: true,
        destroyOnUnmount: true,
    })
)(AddVisitForm);