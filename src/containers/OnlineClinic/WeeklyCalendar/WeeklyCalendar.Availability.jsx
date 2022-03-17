import React from 'react';
import moment from "moment";
import Styled from "./styled/styled";

const Availability = ({ availability, onAvailabilityClick, onVisitClick, onDoctorNameClick }) => {
    const fromMinutesFromDayStart = moment.duration(moment(availability.from).diff(moment(availability.from).startOf('day'))).asMinutes();
    const toMinutesFromDayStart = moment.duration(moment(availability.to).diff(moment(availability.to).startOf('day'))).asMinutes();
    const minutesFromDayStartToStart = moment(availability.from).format("HH") * 60;
    const minutesFromDayStartToEnd = 1440 - toMinutesFromDayStart;
    return (
        <Styled.DoctorRange
            top={fromMinutesFromDayStart}
            bottom={minutesFromDayStartToEnd}
            onClick={(e) => {
                e.stopPropagation();
                onAvailabilityClick(availability)
            }}
        >
            <Styled.DoctorRangeName
                onClick={(e) => {
                    e.stopPropagation();
                    onDoctorNameClick(availability)
                }}
            >
                {availability?.doctor?.fullName}
            </Styled.DoctorRangeName>
            { availability.visits.map(visit => {
                const visitEnd = parseInt(moment(visit.to ).format("HH")) * 60 + parseInt(moment(visit.to).format("mm"));
                const visitStart = parseInt(moment(visit.from ).format("HH")) * 60 + parseInt(moment(visit.from).format("mm"));

                return (
                    <Styled.Visit
                        onClick={(e) => {
                            e.stopPropagation();
                            onVisitClick(availability, visit)
                        }}
                        color={'#3879bb'}
                        top={visitStart- minutesFromDayStartToStart  }
                        bottom={1440 - (visitEnd + minutesFromDayStartToEnd)  }
                        key={visit.id}
                    >
                        <Styled.PatientName>{ visit?.patient?.fullName }</Styled.PatientName>
                    </Styled.Visit>
                )
            }) }
        </Styled.DoctorRange>
    )
};

export default Availability;