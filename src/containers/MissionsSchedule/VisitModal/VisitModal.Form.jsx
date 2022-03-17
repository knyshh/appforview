import React, {useEffect, useState} from 'react';
import {change, reduxForm, untouch} from 'redux-form';
import { compose } from "redux";
import {connect, useDispatch} from 'react-redux';
import { createStructuredSelector } from "reselect";
import debounce from 'lodash/debounce';
import { Select } from 'antd';
import { withRouter, Link } from "react-router-dom";
import moment from "moment";

import { searchPatientsAction } from 'services/patients/patients.action';
import SelectField from "components/SelectField/SelectField";
import TimePickerField from "components/TimePickerField/TimePickerField";
import TextAreaField from "components/TextAreaField/TextAreaField";
import { patientsSelector } from "services/patients/patients.selector";
import Button from "components/Button/Button";
import {addMissionVisitAction, updateMissionVisitAction} from "services/missions/missions.actions";
import { disabledHours } from '../DailyCalendar/DailyCalendar.utils';
import {urlLocations} from "routes/urlLocations";
import Styled from 'containers/MissionsSchedule/styled/StyledVisitModal'

const { Option } = Select;


const VisitModalForm = ({ handleSubmit, searchPatients, patients, visit, dailyStartTime, dailyEndTime }) => {
    const dispatch = useDispatch();

    const [ searchingPhrase, setSearchingPhrase ] = useState('');

    const [ fromDate, setFromDate ] = useState(null);

    useEffect(() => {
        if(!!fromDate){
            const toDate = moment(fromDate).add(15, 'minutes');
            dispatch(change('VisitModalForm', 'to', toDate));
            dispatch(untouch('VisitModalForm', 'to'));
        }
    }, [fromDate]);

    useEffect(() => {
        searchingPhrase.length >= 2 && searchPatients({ _q: searchingPhrase });
    }, [searchingPhrase]);

    const debouncedHandleChange = debounce(
        (v) => setSearchingPhrase(v), 500
    );

    const handleSearch = (v) => {
        debouncedHandleChange(v);
    };

    return (
        <form onSubmit={handleSubmit} >
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
                            disabledHours={() => disabledHours(dailyStartTime, dailyEndTime)}
                            name="from"
                            label="From"
                            placeholder="From"
                            getPopupContainer={trigger => trigger.parentNode}
                            onChange={setFromDate}
                        />
                    </Styled.Col50>
                    <Styled.Col50>
                        <TimePickerField
                            disabledHours={() => disabledHours(dailyStartTime, dailyEndTime)}
                            name="to"
                            label="To"
                            placeholder="To"
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                    </Styled.Col50>
                </Styled.Row>

                <Styled.Row>
                    <Styled.Col100>
                        <TextAreaField
                            name="servantSummery"
                            label="Assistant summery"
                            placeholder="Assistant summery"
                        />
                    </Styled.Col100>
                </Styled.Row>

                <Styled.ButtonCol>
                    <Button htmlType="submit" >
                        {visit?.id ? "Update visit": "Add visit" }
                    </Button>

                    {visit?.id && <Styled.VisitBtn
                        component={Button}
                        to={`${urlLocations.visit}/${visit?.id}`}
                    >
                        View visit
                    </Styled.VisitBtn> }
                </Styled.ButtonCol>
        </form>
    );
};

export default compose(
    connect(
        createStructuredSelector({ patients: patientsSelector }),
        { searchPatients: searchPatientsAction }
    ),
    withRouter,
    reduxForm({
        enableReinitialize: true,
        destroyOnUnmount: true,
        form: "VisitModalForm",
        onSubmit: ({ to, from, ...value }, dispatch, { patient, visit, date, doctor, match: { params: { id: missionId } } }) => {
             visit?.id ?
                dispatch(updateMissionVisitAction({
                        doctor,
                        ...value,
                        ...(patient && {patient : patient?.id}),
                        missionId,
                        to: moment(`${date}T${to}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                        from: moment(`${date}T${from}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                    })) :
                dispatch(addMissionVisitAction({
                    doctor,
                    missionId,
                    to: moment(`${date}T${to}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                    from: moment(`${date}T${from}`, "YYYY-MM-DD HH:mm:ss", "UTC" ).format(),
                    ...value
                    })
            )
        },
    })
)(VisitModalForm);