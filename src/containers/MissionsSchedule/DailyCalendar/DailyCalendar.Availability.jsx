import React, {useState} from 'react';
import moment from "moment";
import { connect } from 'react-redux';

import Styled from "./styled/styled";
import VisitModal from '../VisitModal/VisitModal';
import { setModalStatusAction } from "services/modals/modals.action";
import { MODALS_IDS } from "constants/common";

const Availability = ({ dailyStartTime, dailyEndTime, visits, setModalStatus, doctor, currentDate, itemId }) => {
    const [ initialVisit, setInitialVisit ] = useState(null);
    const minutesFromDayStartToStart = moment(dailyStartTime, "HH:mm:ss").format("HH") * 60;
    const minutesFromDayStartToEnd = 1440 - moment(dailyEndTime, "HH:mm:ss").format("HH") * 60;

    return (
        <>
            { !!doctor?.id && <>
            <Styled.DoctorRange
                top={minutesFromDayStartToStart}
                bottom={minutesFromDayStartToEnd}
                onClick={() => {
                    setModalStatus(`${MODALS_IDS.MISSION_SCHEDULE_VISIT}_${itemId}`)
                    setInitialVisit(null);
                }}
            >
                <Styled.DoctorRangeName>
                    {doctor?.fullName}
                </Styled.DoctorRangeName>
                { visits.map(visit => {
                    const visitStart = parseInt(moment(visit.from).format("HH")) * 60 + parseInt(moment(visit.from).format("mm"));
                    const visitEnd = parseInt(moment(visit.to).format("HH")) * 60 + parseInt(moment(visit.to).format("mm"));
                    return (
                        <Styled.Visit
                            top={visitStart - minutesFromDayStartToStart  }
                            bottom={1440 - (visitEnd + minutesFromDayStartToEnd)  }
                            key={visit.id}
                            onClick={(event) => {
                                event.stopPropagation();
                                setModalStatus(`${MODALS_IDS.MISSION_SCHEDULE_VISIT}_${itemId}`)
                                setInitialVisit(visit);
                            }}

                        >
                            <span>{ visit?.patient?.fullName }</span>
                        </Styled.Visit>
                    )
                }) }
            </Styled.DoctorRange>
            <VisitModal
                doctor={doctor?.id}
                date={currentDate}
                modalId={`${MODALS_IDS.MISSION_SCHEDULE_VISIT}_${itemId}`}
                visit={initialVisit}
                dailyStartTime={dailyStartTime}
                dailyEndTime={dailyEndTime}

            />
        </>}
            </>
    )
};

export default connect(null,
    { setModalStatus: setModalStatusAction })
(Availability);