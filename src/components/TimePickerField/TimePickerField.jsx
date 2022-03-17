import React, { useState, useEffect } from 'react';
import { Field } from "redux-form";
import { connect } from "react-redux";
import moment from 'moment';

import ControlWrapper from "components/ControlWrapper/ControlWrapper";
import TimePicker from "components/TimePicker/TimePicker";
import StyledTimePicker from "components/TimePicker/styled/StyledTimePicker";

const CustomTimePicker = ({
  input: { value, name, ...restInput },
  setTouched,
  disabledDate,
  customTouched,
  label,
  placeholder,
  ...meta
}) => {
    return <ControlWrapper
        label={label}
        name={name}
        customTouched={customTouched}
    >
        <TimePicker
            getPopupContainer={trigger => trigger.parentNode}
            { ...restInput }
            {...meta}
            onFocus={setTouched.bind(null, true)}
            placeholder={placeholder}
            inputReadOnly
            format={"HH:mm:ss"}
            selected={value ? moment(value, "HH:mm:ss") : moment('12:00:00', "HH:mm:ss")}
            value={value ? moment(value, "HH:mm:ss") : moment('12:00:00', "HH:mm:ss")}
        />

    </ControlWrapper>
};

const TimePickerField = ({
    name,
    errors,
    placeholder,
    label,
    disabledDate,
    ...res
}) => {
    const [ customTouched, setTouched ] = useState(false);
    useEffect(() => {
        setTouched(false)
    }, [errors]);
    return (
        <Field
            component={CustomTimePicker}
            name={name}
            placeholder={placeholder}
            label={label}
            disabledDate={disabledDate}
            customTouched={customTouched}
            setTouched={setTouched}
            {...res}
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(TimePickerField);