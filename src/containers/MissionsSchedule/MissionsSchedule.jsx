import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";

import { missionScheduleSelector } from 'services/missions/missions.selector';
import { prepareVisits, getMissionTitle, prepareMissionDates } from 'services/missions/missions.utils';
import Tabs from './MissionSchedule.Tabs';
import Content from './MissionSchedule.Content';
import StyledContainer from "components/styled/StyledContainer";
import Styled from 'containers/MissionsSchedule/styled/StyledMissionSchedule';

const MissionsSchedule = () => {
    const mission = useSelector(missionScheduleSelector);
    const preparedVisits = prepareVisits(mission.visits);
    const missionDays = prepareMissionDates(mission) || [];

    const [ activeTab, onTabClick ] = useState(null);

    useEffect(() => {
        const firstActive = missionDays[0];
        onTabClick(firstActive);
    }, [mission]);

    return (
       <Styled.Page>
           <StyledContainer>

               <Styled.Header>
                   <Styled.Title>
                       { getMissionTitle(mission) }
                   </Styled.Title>

                   <Tabs
                       tabs={missionDays}
                       activeTab={activeTab }
                       onTabClick={onTabClick}
                   />
               </Styled.Header>
                <Content
                    activeTab={ activeTab }
                    visits={preparedVisits[activeTab]}
                    dailyStartTime={mission?.dailyStartTime || "9:00:00"}
                    dailyEndTime={mission?.dailyEndTime || "18:00:00"}
                    items={mission.items}
                />
           </StyledContainer>
       </Styled.Page>
    )
};

export default MissionsSchedule;

