import React from 'react';
import { Link } from "react-router-dom";

import { formatDoctorMissionDate } from '../../Missions.utils';
import DoctorMissionDetailsTable from './DoctorMissionDetails.Table';
import Button from "components/Button/Button";
import {urlLocations} from "routes/urlLocations";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal'

const DoctorMissionDetailsContent = ({ mission: { startDate, endDate, items, id } = {}, mission }) => {
    return (
        <Styled.DoctorMissionDetails>
            <Styled.FilterRow>
                <Styled.ColLeft>Form : <Styled.DateLine>{formatDoctorMissionDate(startDate)}</Styled.DateLine></Styled.ColLeft>
                <Styled.ColRight>To : <Styled.DateLine>{formatDoctorMissionDate(endDate)}</Styled.DateLine></Styled.ColRight>
            </Styled.FilterRow>

            <DoctorMissionDetailsTable items={items} missionId={id} />

            <Styled.RowRight>
                <Button uiType="view">
                    <Link  to={`${urlLocations.missionsSchedule}/${id}`} >View Schedule</Link>
                </Button>
            </Styled.RowRight>

        </Styled.DoctorMissionDetails>
    );
};

export default DoctorMissionDetailsContent;