import React from 'react';

import * as utils from './Missions.utils';
import Calendar from './Missions.Calendar';
import Styled from 'containers/Missions/styled/StyledCalendars'
import StyledContainer from "components/styled/StyledContainer";
import moment from "moment";



const MissionsCalendars = ({ missions, date, onMissionClick }) => {
    return (
        <StyledContainer>
            <Styled.List>
                { !!date && utils.getQuarterMonths(date).map(monthDate => (
                    <Calendar onMissionClick={onMissionClick} key={moment(monthDate).toDate()} missions={missions} date={monthDate} />
                )) }
            </Styled.List>
        </StyledContainer>
    );
};

export default MissionsCalendars;