import React from 'react';
import StyledTimePicker from "components/TimePicker/styled/StyledTimePicker";
import moment from "moment";


const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

const disabledSeconds = () => range(0, 60);

const TimePicker = ({ ...props}) => {
    return (
    <StyledTimePicker
        defaultValue={props?.defaultValue || moment('12:00:00', 'HH:mm:ss')}
        format={"HH:mm:ss"}
        minuteStep={15}
        disabledSeconds={disabledSeconds}
        {...props}
    />
)};

export default TimePicker;