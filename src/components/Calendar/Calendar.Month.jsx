import React from 'react';

import Styled from './styled/styled';
import { daysOfWeek } from '../../constants/calendar';
import moment from "moment";


const CalendarMonth = ({ month, currentDate }) => {

    const daysInMonth = moment().month(month).daysInMonth();
    const startOfMonthDay = moment(currentDate).month(month).startOf('month').format('E');
    const endOfMonthDay  = moment(currentDate).month(month).endOf('month').format('E');

    const monthData = [];

    for(let i = 0; i < daysInMonth; i++){
        monthData.push({ day: i + 1 })
    }

    for (let i = 1; i < parseInt(startOfMonthDay); i++){
        monthData.unshift({})
    }

    for (let i = 0; i < 7 - parseInt(endOfMonthDay); i++){
        monthData.push({})
    }


    return <Styled.CalendarMonth>
            <Styled.DaysRow>
                { daysOfWeek.map(dow => <Styled.DaysCol>{ dow }</Styled.DaysCol>) }
            </Styled.DaysRow>
        <Styled.DateRow>
            {  monthData.map(d => <Styled.DateCol dayOfMonth={!!d?.day} >{ d?.day }</Styled.DateCol>) }
        </Styled.DateRow>
    </Styled.CalendarMonth>
};
export default CalendarMonth;