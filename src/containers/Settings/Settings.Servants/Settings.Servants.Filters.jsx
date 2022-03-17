import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Select as AntSelect } from 'antd';
import {createStructuredSelector} from "reselect";
import debounce from "lodash/debounce";

import Select from 'components/Select/Select'
import Input from 'components/Input/Input';
import { destinationsSelector } from "services/destinations/destinations.selector";
import { getServantsAction } from "services/servants/servants.action";
import Styled from '../styled/StyledFilter'
import StyledSearchIcon from '../styled/StyledSearchIcon'
import SelectField from "components/SelectField/SelectField";

const { Option } = AntSelect;

const ServantsFilters = ({ destinations, getServants }) => {

    const [ searchParams, setSearchParams ] = useState({ _q: "", speciality: "" });
    useEffect(() => {
        getServants(searchParams)
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
                    placeholder="Search by destination"
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    allowClear
                    onChange={ (value = "") => {
                        setSearchParams({...searchParams, destination: value})
                    }
                    }
                >{
                    destinations.map(destination => (
                        <Option key={destination.id} value={destination.id} >
                            { destination.name }
                        </Option>
                    ))
                }</Select>
            </Styled.SelectCol>
        </Styled.Wrapper>
    )
};

export default connect(
    createStructuredSelector({
        destinations: destinationsSelector
    }),
    {
        getServants: getServantsAction
    }
)(ServantsFilters)