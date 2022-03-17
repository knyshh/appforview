import React from 'react';
import moment from 'moment';
import uniq from 'lodash/uniq';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Styled from 'containers/Missions/styled/StyledCalendars'
import * as utils from './Missions.utils'


const MissionsCalendar = ({ date, missions = [], onMissionClick }) => {
    const localizer = momentLocalizer(moment);

    return (
        <Styled.Item>
            <Styled.Calendar>
                <Calendar
                    localizer={localizer}
                    events={missions || []}
                    date={moment(date).toDate()}
                    toolbar={false}
                    titleAccessor={event => (
                        <Styled.CalendarMission
                            onClick={onMissionClick.bind(null, event)}
                            color={event.destination?.color}
                            >

                            <Styled.FullMarker
                                isFull={utils.isMissionFull(event?.items)}
                            />
                            <Styled.CalendarTxt color={event.destination?.color}>{ event.destination?.name }{ " " }
                            ({ utils.formatMissionTime(event) }){" "}
                            {uniq(event?.items?.map(item => item?.speciality?.name)).join(" - ")}
                            </Styled.CalendarTxt>
                        </Styled.CalendarMission>
                    )}
                />
            </Styled.Calendar>
        </Styled.Item>
    );
};

export default MissionsCalendar;