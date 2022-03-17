import React, {useEffect, useState} from "react";
import {change, reduxForm, untouch} from "redux-form";
import { compose } from "redux";
import {connect, useDispatch} from "react-redux";
import {createStructuredSelector} from "reselect";
import debounce from 'lodash/debounce';
import {Select as AntSelect} from "antd";
import moment from 'moment';

import { specialitiesSelector } from "services/specialities/specialities.selector";
import { doctorsSelector } from "services/doctors/doctors.selector";
import SelectField from "components/SelectField/SelectField";
import {searchDoctorAction, clearDoctorsAction} from "services/doctors/doctors.action";
import DatePickerField from "components/DatePickerField/DatePickerField";
import TimePickerField from "components/TimePickerField/TimePickerField";
import SwitchField from "components/SwitchField/SwitchField";
import Button from "components/Button/Button";
import {addDoctorAvailabilitiesAction} from "services/doctorAvailabilities/doctorAvailabilities.action";
import Styled from '../styled/StyledAppoitmentsModal'
import {requiredFieldsValidate} from "utils/validation";
import {disablePastDate} from "utils/index";
import {getFilersSelector} from "services/filters/filters.selector";

const { Option } = AntSelect;

const AvailabilityForm = ({ handleSubmit, doctors, searchDoctor, specialities, setPopupStatus, filter = {} }) => {

    const dispatch = useDispatch();

    const [ searchingPhrase, setSearchingPhrase ] = useState('');
    const [ selectedSpeciality, setSpeciality ] = useState('');
    const [ repeat , setRepeat ] = useState(false);

    useEffect(() => {
        searchDoctor({
            ...( searchingPhrase && {_q: searchingPhrase }),
            ...(selectedSpeciality &&
                {  speciality : selectedSpeciality })
        })
    }, [searchingPhrase,  selectedSpeciality]);

    useEffect(() => {
        dispatch(change('availabilityForm', 'doctor', ''));
        dispatch(untouch('availabilityForm', 'doctor'));
    }, [selectedSpeciality]);

    useEffect(() => {
        return () => {
            dispatch(clearDoctorsAction())
        };
    }, []);

    const debouncedHandleChange = debounce(
        (v) => setSearchingPhrase(v), 500
    );

    const handleSearch = (v) => {
        debouncedHandleChange(v);
    };

    return (
        <Styled.AvailabilityBlock>
            <form onSubmit={handleSubmit} >
                <Styled.Row>
                <Styled.ColLeft>
                    <SelectField
                        filterOption={(input, option) => {
                            return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                        }}
                        showSearch
                        name='speciality'
                        label='Speciality'
                        placeholder='Speciality'
                        style={{ width: '100%' }}
                        onSelect={setSpeciality}
                    >
                        { specialities.map(speciality => (
                            <Option
                                key={speciality.id}
                                value={speciality.id}
                                children={speciality.name}
                            />
                        ))}
                    </SelectField>

                    <DatePickerField
                        name='date'
                        label='Date'
                        placeholder='Date'
                        disabledDate={disablePastDate}
                    />

                    <Styled.Row>
                        <Styled.SwitchBlock>
                            <Styled.LabelSwitch>
                                Repeat weekly ?
                            </Styled.LabelSwitch>
                            <SwitchField  name="repeat" defaultChecked={repeat} />
                        </Styled.SwitchBlock>
                    </Styled.Row>
                </Styled.ColLeft>

                <Styled.ColRight>
                    <SelectField
                        name='doctor'
                        label='Doctor'
                        placeholder='Doctor'
                        style={{ width: '100%' }}
                        showSearch
                        onSearch={handleSearch}
                        notFoundContent={null}
                        filterOption={false}
                    >
                        { doctors.map(doctor => (
                            <Option key={doctor.id} value={doctor.id} children={doctor.fullName} />
                        ))}
                    </SelectField>

                    <Styled.Row>
                        <Styled.Col50>
                            <TimePickerField
                                getPopupContainer={trigger => trigger.parentNode}
                                name='from'
                                label='From'
                                placeholder='From'
                            />

                        </Styled.Col50>

                        <Styled.Col50>
                            <TimePickerField
                                getPopupContainer={trigger => trigger.parentNode}
                                name='to'
                                label='To'
                                placeholder='To'
                            />
                        </Styled.Col50>

                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Col100>
                            <DatePickerField
                                getPopupContainer={trigger => trigger.parentNode}
                                name='repeatUntil'
                                label='Until'
                                placeholder='Until'
                                defaultValue={null}
                                onChange={v => setRepeat(!!v)}
                            />
                        </Styled.Col100>
                    </Styled.Row>
                </Styled.ColRight>
            </Styled.Row>

                <Styled.ButtonsCol>
                    <Button width='220px' htmlType="submit" >Save</Button>
                    <Button uiType='close' onClick={setPopupStatus.bind(null, null)} >Close</Button>
                </Styled.ButtonsCol>
            </form>
        </Styled.AvailabilityBlock>
    )
};

export default compose(
    connect(
      createStructuredSelector({
          specialities: specialitiesSelector,
          doctors: doctorsSelector,
      }),
        {
            searchDoctor: searchDoctorAction,
        }
    ),
    reduxForm({
        enableReinitialize: true,
        form: 'availabilityForm',
        validate: value => requiredFieldsValidate(value, ['doctor', 'speciality', 'date']),
        onSubmit: (value, dispatch) => {

            const { date, repeatUntil, repeat, ...res } = value;
            dispatch(addDoctorAvailabilitiesAction({
                date: moment(date, "DD MMMM YYYY").format("YYYY-MM-DD"),
                ...((repeat === "true" || repeat === true || !!repeatUntil) && { repeatUntil: moment(repeatUntil, "DD MMMM YYYY").format("YYYY-MM-DD") }),
                repeat: repeat === "true" || repeat === true || !!repeatUntil,
                ...res
            }))
        }
    })
)(AvailabilityForm)