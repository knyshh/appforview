import React, { useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";
import { compose } from "redux";

import * as utils from './Missions.utils';
import { missionsSelector } from 'services/missions/missions.selector'
import DateNavigator from './Missions.DateNavigator';
import Calendars from './Missions.Calendars';
import Tools from './Missions.Tools';
import AddNewMissionModal
    from "./Modals/AddNewMisson/Missions.AddNewMission.Modal";
import { setModalStatusAction } from "services/modals/modals.action";
import {MODALS_IDS, USER_ROLES} from "constants/common";
import AdminMissionDetails
    from "./Modals/AdminMissionDetails/Missions.AdminMissionDetails.Modal";
import {getMissionBySelectedId} from "./Missions.utils";
import withPermissions from 'hoc/withPermissions';
import DoctorMissionDetailsModal from './Modals/DoctorMissionDetails/DoctorMissionDetails.Modal';
import withUserAccess from "hoc/withUserAccess";

const Missions = ({ missions, setModalStatus, isAdmin }) => {
    const [ date, setDate ] = useState(Date.now());
    const [ mission, setMission ] = useState(null);

    const onMissionClick = (m) => {
        setMission(m);
        setModalStatus(
            isAdmin ?
                MODALS_IDS.ADMIN_MISSION_DETAILS :
                MODALS_IDS.DOCTOR_MISSION_DETAILS
        )
    };

    const handleQuarterChange = (action) => {
        const newDate = moment(date)[action](1,'Q').toDate();
        setDate(newDate);
    };

    return (
        <div>
            <Tools date={date} onChange={setDate} />
            <DateNavigator date={date} onChange={handleQuarterChange} />
            <Calendars onMissionClick={onMissionClick}  date={date} missions={utils.prepareEvents(missions)}  />
            <AddNewMissionModal/>
            <AdminMissionDetails mission={getMissionBySelectedId(missions, mission?.id)} />
            <DoctorMissionDetailsModal mission={getMissionBySelectedId(missions, mission?.id)} />
        </div>
    );
};


export default compose(
    withPermissions,
    withUserAccess(
        [
            USER_ROLES.SERVANT,
            USER_ROLES.ADMIN,
            USER_ROLES.DOCTOR]
    ),
    connect(
        createStructuredSelector({
            missions: missionsSelector
        }),
        { setModalStatus: setModalStatusAction }
    ),
)(Missions);