import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Select as AntSelect } from 'antd';
import {createStructuredSelector} from "reselect";
import debounce from "lodash/debounce";

import Select from 'components/Select/Select'
import Input from 'components/Input/Input';
import {destinationsSelector} from "services/destinations/destinations.selector";
import { getPatientsAction } from "services/patients/patients.action";
import StyledSearchIcon from "../Settings/styled/StyledSearchIcon";
import Styled from "../Settings/styled/StyledFilter";
import { getUserInfoSelector } from "services/user/user.selector";

const { Option } = AntSelect;

const GENDER = ["male", "female"];

const DoctorsFilters = ({  getPatients, destinations, user }) => {
    console.log(user);

    const [ searchParams, setSearchParams ] = useState({ _q: "", destination: "", gender: "" });
    useEffect(() => {
        getPatients(searchParams)
    }, [searchParams]);

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
                    prefix={<StyledSearchIcon />}
                    placeholder="Search by name, mobile, address"
                    onChange={handleChange}  />
            </Styled.SearchCol>
            <Styled.SelectCol>
                <Select
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    allowClear
                    placeholder="Search by destination"
                    disabled={user.userType === "servant"}
                    value={user?.servantProfile?.destination}
                    onChange={
                        (value = "") => setSearchParams({...searchParams, destination: value})
                    }
                >{
                    destinations.map(speciality => (
                        <Option key={speciality.id} value={speciality.id} >
                            { speciality.name }
                        </Option>
                    ))
                }</Select>
            </Styled.SelectCol>

            <Styled.GenderCol>
                <Select
                    style={{ textTransform: 'capitalize' }}
                    placeholder="Gender"
                    allowClear
                    onChange={
                        (value = "") => setSearchParams({...searchParams, gender: value})
                    }
                >{
                    GENDER.map(gender => (
                        <Option
                            style={{ textTransform: 'capitalize' }}
                            key={gender}
                            value={gender}
                            children={gender}
                        />
                    ))
                }</Select>
            </Styled.GenderCol>
        </Styled.Wrapper>
    )
};

export default connect(
    createStructuredSelector({
        destinations: destinationsSelector,
        user: getUserInfoSelector
    }),
    {
        getPatients: getPatientsAction,
    }
)(DoctorsFilters)