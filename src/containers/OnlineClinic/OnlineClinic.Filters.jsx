import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Select as AntSelect } from 'antd';
import debounce from 'lodash/debounce';
import moment from 'moment';
import { LeftOutlined,  RightOutlined} from '@ant-design/icons'

import Select from 'components/Select/Select';
import { specialitiesSelector } from "services/specialities/specialities.selector";
import {searchDoctorAction} from "services/doctors/doctors.action";
import {doctorsSelector} from "services/doctors/doctors.selector";
import DatePicker from "components/DatePicker/DatePicker";
import {prepareFilterDate} from "./OnlineClinic.utils";
import Styled from './styled/StyledOnlineClinic.js'

const { Option } = AntSelect;

const OnlineClinicFilters = ({
    specialities ,
    doctors  = [],
    searchDoctor,
    setFilters,
    filters
}) => {
    const [ searchingPhrase, setSearchingPhrase ] = useState("");
    const [ currentDate, setCurrentDate ] = useState(Date.now());

    useEffect(() => {
        searchDoctor({
            _q: searchingPhrase || null,
            ...(filters?.speciality && { speciality: filters.speciality })
        });
    }, [searchingPhrase, filters?.speciality]);

    const debouncedHandleChange = debounce(
        (v) => setSearchingPhrase(v), 500
    );

    const handleSearch = (v) => {
        debouncedHandleChange(v);
    };

    const onDateNavigate = (action) => {
        let date;
        if(action === 'next') {
            date = moment(currentDate).add(1, 'week');
        } else {
           date = moment(currentDate).subtract(1, 'week');
        }
        setCurrentDate(date.valueOf());

        setFilters({ filters: {
                ...filters,
                ...(date && prepareFilterDate(date) ),
            } , name: "availability"
        });
    };

    const handleChange = (v) => {
        setFilters({ filters: {
            ...(!filters?.from_gte && prepareFilterDate() ),
                ...filters, ...v
            } , name: "availability"
        });
    };

    return (
        <>
            <Styled.Col33>
                <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    onSelect={v => {
                        handleChange({ speciality: v, doctor: null });
                        setSearchingPhrase("");

                    }}
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    style={{ width: '100%' }}
                    placeholder='Select Speciality'
                >
                    { specialities.map(speciality => (
                        <Option key={speciality.id} value={speciality.id} children={speciality.name} />
                    ))}
                </Select>
            </Styled.Col33>

            <Styled.Col33>
                <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    style={{ width: '100%' }}
                    showSearch
                    placeholder='Select Doctor'
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    onSearch={handleSearch}
                    onSelect={v => handleChange({ doctor: v })}
                    onChange={v => {
                       !v && handleChange({ doctor: null })
                    }}
                    notFoundContent={null}
                    allowClear
                    value={filters?.doctor}
                >
                    { doctors.map(doctor => (
                        <Option key={doctor.id} value={doctor.id} children={doctor.fullName} />
                    ))}
                </Select>
            </Styled.Col33>

            <Styled.Col33>
                <Styled.DatePickerNav>
                <LeftOutlined  style={{ cursor: 'pointer' }} onClick={onDateNavigate.bind(null, 'prev')} />
                <DatePicker
                    style={{ width: '100%' }}
                    picker="week"
                    value={moment(currentDate)}
                    allowClear={false}
                    placeholder='Select Date'
                    defaultValue={moment(Date.now())}
                    onChange={v => {
                        setCurrentDate(v);
                        handleChange(prepareFilterDate(v));
                    }}
                />
                    <RightOutlined  style={{ cursor: 'pointer' }} onClick={onDateNavigate.bind(null, 'next')} />
                </Styled.DatePickerNav>
            </Styled.Col33>
        </>
    )
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector,
        doctors: doctorsSelector
    }),
    {
        searchDoctor: searchDoctorAction,
    }
)(OnlineClinicFilters);