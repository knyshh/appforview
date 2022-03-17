import React, {useEffect, useState} from 'react';
import { Table } from "antd";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import debounce from 'lodash/debounce';

import { searchDoctorAction } from "services/doctors/doctors.action";
import { doctorsSelector } from "services/doctors/doctors.selector";
import DOCTORS_COLUMNS from './Missions.AdminMissionDetail.Doctors.Coloumns';
import {specialitiesSelector} from "services/specialities/specialities.selector";
import { notifyDoctorsAction } from "services/missions/missions.actions";
import StyledMissionTable from "containers/Missions/Modals/styled/StyledMissionModalTable";

const AdminMissionDetailsDoctors = ({
    mission: { items = [] } = {},
    searchDoctor,
    doctors,
    onDoctorSelect,
    specialities,
    notifyDoctors,
    onItemRemove,
    onDoctorRemove
}) => {
    const [ searching, setSearchingPhrase ] = useState({ searchingPhrase: "", speciality: "" });

    useEffect(() => {
        searching.searchingPhrase?.length >= 2 &&
        searchDoctor({
            _q: searching.searchingPhrase,
            speciality: searching.speciality
        });
    }, [searching.searchingPhrase]);

    const debouncedHandleChange = debounce(
        (v, s) => setSearchingPhrase({ searchingPhrase: v, speciality: s }), 500
    );

    const handleSearch = (v, s) => {
        debouncedHandleChange(v, s);
    };
    return (
        <div>
            <StyledMissionTable.Table>
                <Table
                    pagination={false}
                    dataSource={items}
                    columns={
                        DOCTORS_COLUMNS({
                            onItemRemove,
                            doctors,
                            handleSearch,
                            setSearchingPhrase,
                            searching,
                            onDoctorSelect,
                            specialities,
                            notifyDoctors,
                            onDoctorRemove
                        })
                    }
                />
            </StyledMissionTable.Table>
        </div>
    );
};

export default connect(
    createStructuredSelector({
        doctors: doctorsSelector,
        specialities: specialitiesSelector
    }),
    { searchDoctor: searchDoctorAction, notifyDoctors: notifyDoctorsAction }
)(AdminMissionDetailsDoctors);