import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Select as AntSelect } from 'antd';
import {createStructuredSelector} from "reselect";
import debounce from "lodash/debounce";
import isEqual from 'lodash/isEqual'

import Select from 'components/Select/Select'
import Input from 'components/Input/Input';
import { specialitiesSelector } from "services/specialities/specialities.selector";
import { getDoctorsAction } from "services/doctors/doctors.action";
import Styled from 'containers/Settings/styled/StyledFilter'
import {getFilersSelector} from "services/filters/filters.selector";
import SelectField from "components/SelectField/SelectField";

const { Option } = AntSelect;

const DoctorsFilters = ({ specialities, getDoctors, filters }) => {

    const [ searchParams, setSearchParams ] = useState({ _q: "", speciality: "", _sort: "" });
    useEffect(() => {
        getDoctors(searchParams)
    }, [searchParams]);

    useEffect(() => {
        !!filters && !isEqual(filters, searchParams) &&
        setSearchParams(filters);
    }, []);

    const debouncedHandleChange = debounce(
        (event) => setSearchParams( {...searchParams, _q: event.target.value}), 700
    );

    const handleChange = event => {
        event.persist();
        debouncedHandleChange(event);
    };

    return (
        <Styled.Wrapper>
            <Styled.SearchCol>
                <Input
                    onChange={handleChange}
                    placeholder="Search by name, mobile, address"
                    defaultValue={filters?._q}
                />
            </Styled.SearchCol>

            <Styled.SelectCol>
                <Select
                    allowClear
                    // value={searchParams?.speciality || ""}
                    placeholder="Search by speciality"
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    onChange={
                        (value = "") => setSearchParams({...searchParams, speciality: value})
                    }
                >{
                    specialities.map(speciality => (
                        <Option key={speciality.id} value={speciality.id} >
                            { speciality.name }
                        </Option>
                    ))
                }</Select>
            </Styled.SelectCol>

        </Styled.Wrapper>
    )
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector,
        filters: state => getFilersSelector(state, 'doctors')
    }),
    {
        getDoctors: getDoctorsAction,
    }
)(DoctorsFilters)