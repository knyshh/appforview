import React from 'react';
import { Table } from 'antd';

import DoctorMissionDetailsColumns from './DoctorMissionDetails.Columns';
import {compose} from "redux";
import {connect} from "react-redux";
import {registerDoctorAction} from "services/missions/missions.actions";
import withPermissions from "hoc/withPermissions";
import StyledMissionTable from "containers/Missions/Modals/styled/StyledMissionModalTable";

const DoctorMissionDetailsTable = ({ items, user, missionId, registerDoctor }) => {
    return (
        <StyledMissionTable.Table>
            <Table
                dataSource={items}
                columns={DoctorMissionDetailsColumns({ user, registerDoctor, missionId })}
                pagination={false}
            />
        </StyledMissionTable.Table>
    );
};

export default compose(
    connect(
        null,
        { registerDoctor: registerDoctorAction }
    ),
    withPermissions
)(DoctorMissionDetailsTable) ;