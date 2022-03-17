import React from 'react';
import moment from "moment";
import { quarterMonths } from '../../constants/calendar';
import CalendarMonth from "./Calendar.Month";
import Styled from './styled/styled'

const currentDate = moment();
const quarter =  moment(currentDate).quarter();

const Calendar = () => {
    return (
        <>
            <Styled.Calendar>
                {  quarterMonths[quarter]?.map( month => (
                    <CalendarMonth currentDate={currentDate} month={month} />
                ))}
            </Styled.Calendar>
        </>
    )
};

export default Calendar;