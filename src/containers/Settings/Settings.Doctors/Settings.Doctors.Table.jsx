import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { doctorsSelector } from "services/doctors/doctors.selector";
import Table from 'components/Table/Table';
import DOCTORS_COLUMNS from './Settings.Doctors.Columns'
import {getDoctorsAction, verifyDoctorAction} from "../../../services/doctors/doctors.action";
import {COLUMN_ORDER} from "../../../constants/common";
import StyledTable from '../styled/StyledTable'
import {urlLocations, history} from "../../../routes/urlLocations";
import {getFilersSelector} from "services/filters/filters.selector";

const DoctorsTable = ({ doctors, verifyDoctor, getDoctors, filters }) => {
    return (
        <StyledTable>
            <Table
                dataSource={doctors}
                pagination={false}
                columns={DOCTORS_COLUMNS({ verifyDoctor })}
                onRow={(record) => ({
                    onClick: () => history.push(`${urlLocations.doctor}/${record.id}`)
                })}
                onChange={(_ , e , { field, order }) => {
                    COLUMN_ORDER[order] && getDoctors({...filters , _sort: `${field}:${COLUMN_ORDER[order]}`  })
                }}
            />
        </StyledTable>
    )
};

export default connect(
    createStructuredSelector({
        doctors: doctorsSelector,
        filters: state => getFilersSelector(state, 'doctors')
    }),
    {
        verifyDoctor: verifyDoctorAction,
        getDoctors: getDoctorsAction
    }
)(DoctorsTable)