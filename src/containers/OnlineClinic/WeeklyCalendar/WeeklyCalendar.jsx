import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { doctorAvailabilitiesSelector } from 'services/doctorAvailabilities/doctorAvailabilities.selector';
import Styled from './styled/styled'
import { daysOfWeek } from "constants/weeklyCalendar";
import { getDailyHours } from "./WeeklyCalendar.utils";
import {prepareDoctorsAvailabilities} from "containers/OnlineClinic/OnlineClinic.utils";
import Availability from "./WeeklyCalendar.Availability";


const WeeklyCalendar = ({ doctorAvailabilities = [], onAvailabilityClick, onDoctorNameClick, onVisitClick, filters }) => {
    const dailyHours = getDailyHours();
    const sortedAvailabilities = prepareDoctorsAvailabilities(doctorAvailabilities);
    return (
        <Styled.Calendar>
            <Styled.DaysOfWeekRow>
                { daysOfWeek.map((day, index) => (
                    <Styled.DaysOfWeekCol key={day.key} >
                        { day.title }
                        <Styled.DayDate>{
                            moment(filters.from_gte, 'YYYY-MM-DD')
                                .add(index, 'day')
                                .format("DD MMM")
                        }
                        </Styled.DayDate>
                    </Styled.DaysOfWeekCol>
                )) }
            </Styled.DaysOfWeekRow>

            <Styled.DailyContentWrap>
                <Styled.DailyContentWrapOverflow>
                    <Styled.DailyTimeColumn>
                        {
                            dailyHours.map(hour => (
                                <Styled.DailyTimeCell key={hour} >{hour}</Styled.DailyTimeCell>
                            ))
                        }
                    </Styled.DailyTimeColumn>

                    <Styled.DailyContent>
                        { daysOfWeek.map(day => (
                            <Styled.DailyColumn key={day.title} >
                                <Styled.AvailabilityWrapper>
                                    { sortedAvailabilities?.[day.key]?.map(availability => (
                                        <Availability
                                            onAvailabilityClick={onAvailabilityClick}
                                            onDoctorNameClick={onDoctorNameClick}
                                            key={availability.id}
                                            availability={availability}
                                            onVisitClick={onVisitClick}
                                        />
                                    )
                                )}
                                </Styled.AvailabilityWrapper>
                                { dailyHours.map((hour) => (
                                    <Styled.DailyCell key={hour} />
                                )) }
                            </Styled.DailyColumn>
                        ))}
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
)(WeeklyCalendar);