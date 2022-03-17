import React from 'react';
import moment from 'moment';

import DailyCalendar from './DailyCalendar/DailyCalendar';
import Styled from 'containers/MissionsSchedule/styled/StyledMissionSchedule'

const MissionScheduleContent = ({ visits, activeTab, dailyStartTime, dailyEndTime, items }) => {
    return (
        <Styled.Content>

            <Styled.ContentHeader>
                <Styled.ContentTitle>
                    <Styled.CenterTitle>{ moment(activeTab).format('dddd') }</Styled.CenterTitle>
                    <Styled.DateTitle>{ activeTab }</Styled.DateTitle>
                </Styled.ContentTitle>

            </Styled.ContentHeader>

                <DailyCalendar
                    dailyStartTime={dailyStartTime}
                    dailyEndTime={dailyEndTime}
                    visits={visits}
                    items={items}
                    currentDate={moment(activeTab, "DD MMM").format("YYYY-MM-DD")}
                />

        </Styled.Content>
    );
};

export default MissionScheduleContent;