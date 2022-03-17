import React, {useEffect, useState} from 'react';
import { Select as AntSelect  } from 'antd';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { specialitiesSelector } from "services/specialities/specialities.selector";
import { destinationsSelector } from "services/destinations/destinations.selector";
import Select from "components/Select/Select";
import { getMissionsAction } from 'services/missions/missions.actions';
import Styled from 'containers/Missions/styled/StyledMissionFilters.js'
import SelectField from "components/SelectField/SelectField";
const  { Option } = AntSelect;

const MissionsFilters = ({ destinations,  specialities, getMissions }) => {
    const [ searchParams, setSearchParams ] = useState({  destination: "", speciality: "" });

    useEffect(() => {
        getMissions(searchParams)
    }, [searchParams]);

    return (
        <Styled.BlockFilters>
            <Styled.ColFilters>
                <Select
                    allowClear
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    placeholder="Choose destination"
                    onChange={
                        (value = "") => setSearchParams({...searchParams, destination: value})
                    }
                >{
                    destinations.map(destination => (
                        <Option key={destination.id} value={destination.id} >
                            { destination.name }
                        </Option>
                    ))
                }</Select>
            </Styled.ColFilters>

            <Styled.ColFilters>
                <Select
                    filterOption={(input, option) => {
                        return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                    }}
                    showSearch
                    allowClear
                    placeholder="Choose speciality"
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
            </Styled.ColFilters>
        </Styled.BlockFilters>
    );
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector,
        destinations: destinationsSelector,
    }),
    { getMissions: getMissionsAction }
)(MissionsFilters);