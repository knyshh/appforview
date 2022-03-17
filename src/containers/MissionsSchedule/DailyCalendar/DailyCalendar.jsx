import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { doctorAvailabilitiesSelector } from 'services/doctorAvailabilities/doctorAvailabilities.selector';
import Styled from './styled/styled'
import { getDailyHours, groupDoctorsVisits } from "./DailyCalendar.utils";
import Availability from './DailyCalendar.Availability';


const DailyCalendar = ({ visits , dailyStartTime, dailyEndTime, items, currentDate }) => {
    const dailyHours = getDailyHours();
    const groupedVisits = groupDoctorsVisits(visits);
    return (
        <Styled.Calendar>
            <Styled.DailyContentWrap>
                <Styled.DailyContentWrapOverflow>
                    <Styled.DailyTimeColumn>
                        {
                            dailyHours.map(hour => (
                                <Styled.DailyTimeCell
                                    key={hour}
                                >
                                    {hour}
                                </Styled.DailyTimeCell>
                            ))
                        }
                    </Styled.DailyTimeColumn>
                    <Styled.DailyContent>
                            <Styled.DailyColumn >
                                <Styled.AvailabilityWrapper>
                                    {
                                        items?.map(item => (
                                            <Availability
                                                doctor={item?.doctor}
                                                visits={groupedVisits[item?.doctor?.id] || []}
                                                dailyStartTime={dailyStartTime}
                                                dailyEndTime={dailyEndTime}
                                                currentDate={currentDate}
                                                key={item.id}
                                                itemId={item.id}
                                            />
                                        ))
                                    }
                                </Styled.AvailabilityWrapper>
                                { dailyHours.map((hour) => (
                                    <Styled.DailyCell key={hour} />
                                )) }
                            </Styled.DailyColumn>

                    </Styled.DailyContent>
                </Styled.DailyContentWrapOverflow>
            </Styled.DailyContentWrap>
        </Styled.Calendar>
    )
};

export default connect(
    createStructuredSelector({
        doctorAvailabilities: doctorAvailabilitiesSelector
    })
)(DailyCalendar);