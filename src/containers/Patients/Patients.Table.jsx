import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Table from "components/Table/Table";
import PATIENTS_COLUMNS from './Patients.Columns'
import { patientsSelector } from "services/patients/patients.selector";
import {COLUMN_ORDER} from "constants/common";
import {getPatientsAction} from "services/patients/patients.action";
import {history, urlLocations} from "routes/urlLocations";
import StyledTable from './styled/StyledTable.js'
import {getFilersSelector} from "services/filters/filters.selector";

const PatientsTable = ({ patients, getPatients, filters }) => {
    return (
        <StyledTable>
            <Table
                dataSource={patients}
                pagination={false}
                onRow={(record) => ({
                    onClick: () => history.push(`${urlLocations.patient}/${record.id}`)
                })}
                columns={PATIENTS_COLUMNS()}
                onChange={(_ , e , { field, order }) => {
                    COLUMN_ORDER[order] && getPatients({ _sort: `${field}:${COLUMN_ORDER[order]}`, ...filters })
                }}
            />
        </StyledTable>
    )
};

export default connect(
    createStructuredSelector({
        patients: patientsSelector,
        filters: state => getFilersSelector(state, 'patients')

    }),
    {
        getPatients: getPatientsAction
    }
)(PatientsTable)